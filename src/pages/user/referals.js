import React, { useEffect, useState } from 'react'
import { API_URL } from '../../utils/url'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Navbar from './components/navbar'

export default function Referals() {
  const {
    name, aff_link, affiliate, super_aff, sub_aff
  } = useSelector((state) => state.auth.userInfo);

  const spent = 1000;

  const share = affiliate === "" ? 30 : super_aff === "" ? 25 : sub_aff === "" ? 22 : 0;

  const [players, setPlayers] = useState([]);

  const getPlayers = async () => {
    await axios.post(`${API_URL}/user/getPlayers`, {
      name: name
    })
      .then(res => {
        setPlayers(res.data.data)
      }).
      catch(error => { throw error; })
  }

  const getShare = (player) => {
    const shared = player.affiliate === name ? 30 : player.super_aff === name ? 5 : player.sub_aff === name ? 3 : 0;
    if (shared == 30) {
      return share;
    } else {
      return shared;
    }
  }

  useEffect(() => {
    getPlayers();
  }, [])

  return (
    <>
      <Navbar />
      <section id="tournaments-content">
        <div className="prizes pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="table-responsive">
                  <p style={{ color: "white" }}>Affiliate Link: {aff_link}</p>
                  {/* {
                    affiliate ? (
                      <p style={{ color: "white" }}>Your Affiliate: {affiliate}</p>
                    ) : null
                  }
                  {
                    super_aff ? (
                      <p style={{ color: "white" }}>Your Super_aff: {super_aff}</p>
                    ) : null
                  }
                  {
                    sub_aff ? (
                      <p style={{ color: "white" }}>Your sub_aff: {sub_aff}</p>
                    ) : null
                  } */}
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
                      {players ? (
                        players.map((player, i) => (
                          <tr key={i}>
                            <th scope="row">{player.name}</th>
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
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}