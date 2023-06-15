import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import { API_URL } from '../../utils/url'
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function Referals() {

  const {
    name,
    affiliate_link,
    invitedBy
  } = useSelector((state) => state.auth.userInfo);

  const [players, setPlayers] = useState([]);
  const getPlayers = async () => {
    await axios.post(`${API_URL}/user/getPlayers`, {
      name: name
    }).then(res => {
      setPlayers(res.data.data)
    }).catch(error => { throw error; })
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
                  <span className=''>Affiliate Link: {affiliate_link}</span>
                  <br />
                  <span className=''>Invited By: {invitedBy}</span>

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
                      {players ?
                        (players.map((ele, i) =>
                          <tr key={i}>
                            <th scope="row">{ele.name}</th>
                            <td>$100.00</td>
                            <td>30%</td>
                            <td>$30</td>
                            <td>2023.02.13</td>
                          </tr>
                        )) :
                        <tr>
                          <td style={{textAlign: "center"}} colSpan={5}>No players found</td>
                        </tr>
                      }
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
