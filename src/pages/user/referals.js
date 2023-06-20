import React, { useEffect, useState } from 'react'
import { API_URL } from '../../utils/url'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Navbar from './components/navbar'

export default function Referals() {
  const {
    name, aff_link, affiliate, sup_aff, sub_aff
  } = useSelector((state) => state.auth.userInfo);

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPlayers = async () => {
    setLoading(true);
    await axios.post(`${API_URL}/user/getPlayers`, {
      name: name
    }).then(res => {
      setPlayers(res.data.results)
    }).catch(error => { throw error; })
    setLoading(false);
  }

  useEffect(() => {
    getPlayers();
  }, [])

  const
    spent = 1000,
    share = affiliate === "" ? 30 : sup_aff === "" ? 25 : sub_aff === "" ? 22 : 0,
    level = affiliate === "" ? 1 : sup_aff === "" ? 2 : sub_aff === "" ? 3 : 0,
    pNum = players.filter(ele => ele.affiliate === name).length,
    supPNum = players.filter(ele => ele.sup_aff === name).length,
    subPNum = players.filter(ele => ele.sub_aff === name).length,

    getShare = (p) => {
      const shared = p.affiliate === name ? share : p.sup_aff === name ? 5 : p.sub_aff === name ? 3 : 0;
      return shared;
    },

    copyLink = () => {
      navigator.clipboard.writeText(aff_link).then(() => {
        alert("Copied to clipboard");
      });
    };

  return (
    <>
      <Navbar />

      <section id='tournaments-section' className='container pt-120 wow fadeInUp'>
        <div className="single-item">
          <div className="row">
            <div className="col-lg-3 col-md-3 d-flex align-items-center">
              <img className="top-img" src="./assets/images/game-img-4.png" alt="not found" />
            </div>
            <div className="col-lg-9 col-md-12 d-flex align-items-center">
              <div className="mid-area">
                <h4>
                  {name} &nbsp;
                  <span className='head'>
                    {affiliate !== "" ? "( You Invited By " + affiliate + " )" : null}
                  </span>
                </h4>
                <div className="title-bottom d-flex">
                  <div className="time-area bg">
                    <span>Affiliate Link: &nbsp;</span>
                    <span className="time">{aff_link}</span>
                  </div>
                  <div className="bg">
                    <span className="icon-copy" onClick={() => copyLink()}>
                      <img src='./assets/images/icons/copy.png' alt='not found' />
                    </span>
                  </div>
                </div>
                <div className="single-box d-flex">
                  <div className="box-item">
                    <span className="head">Affiliate Level</span>&nbsp;
                    <span className="">{level}</span>
                  </div>
                  <div className="box-item">
                    <span className="head">Your Players</span>&nbsp;
                    <span className="first">{pNum}</span>
                  </div>
                  <div className="box-item">
                    <span className="head">Your Super Players</span>&nbsp;
                    <span className="second">{supPNum}</span>
                  </div>
                  <div className="box-item">
                    <span className="head">Your Sub Players</span>&nbsp;
                    <span className="third">{subPNum}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tournaments-content" className='wow fadeInUp'>
        <div className="container prizes pb-120">
          <div className="row">
            <div className="col-lg-12">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Player</th>
                      <th scope="col">Expenditure</th>
                      <th scope="col">Share</th>
                      <th scope="col">Income</th>
                      <th scope="col">Join date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td style={{ textAlign: "center" }} colSpan={5}>Loading...</td>
                      </tr>
                    ) : (
                      players.length > 0 ? (
                        players.map((player, i) => (
                          <tr className={player.sub_aff === name ? "second" : player.sup_aff === name ? "third" : "first"} key={i}>
                            <td scope="row">{player.name}</td>
                            <td>{spent}</td>
                            <td>{getShare(player)}%</td>
                            <td>${(spent * getShare(player)) / 100}</td>
                            <td>2023.02.13</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td style={{ textAlign: "center" }} colSpan={5}>No players found</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}