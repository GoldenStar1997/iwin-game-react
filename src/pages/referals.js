import React, { useEffect, useState } from 'react'
import { API_URL } from '../utils/url'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Navbar from './components/navbar'
import Modal from './components/modal'
import Toast from './components/toast'
import { setInfo } from '../reducers/alertSlice'

export default function Referals() {

  const
    dispatch = useDispatch(),
    {
      name,
      aff_link,
      affiliate,
      sup_aff,
      sub_aff
    } = useSelector((state) => state.auth.userInfo),

    [players, setPlayers] = useState([]),
    [affShare, setAffShare] = useState({}),
    [loading, setLoading] = useState(true);

  useEffect(() => {
    const
      getPlayers = async () => {
        setLoading(true);

        await axios
          .post(`${API_URL}/user/getPlayers`, {
            name: name
          })
          .then(res => {
            setPlayers(res.data.results)
          })
          .catch(error => { throw error; })

        setLoading(false);
      },

      getAffShare = async function () {
        const response = await axios
          .post(`${API_URL}/user/getAffShare`);

        const { success, data } = response.data;
        if (success) setAffShare(data[0]);
      };

    getPlayers();
    getAffShare();

  }, [])

  const
    spent = 1000,
    share =
      affiliate === "" ? affShare.aff_shr
        : sup_aff === "" ? affShare.sup_shr
        : sub_aff === "" ? affShare.sub_shr
        : 0,

    level =
      affiliate === "" ? 1
        : sup_aff === "" ? 2
        : sub_aff === "" ? 3
        : 0,

    pNum = players.filter(ele => ele.affiliate === name).length,
    supPNum = players.filter(ele => ele.sup_aff === name).length,
    subPNum = players.filter(ele => ele.sub_aff === name).length,

    getShare = (p) => {
      const shared =
        p.affiliate === name ? share
        : p.sup_aff === name ? affShare.aff_shr - affShare.sup_shr
        : p.sub_aff === name ? affShare.sup_shr - affShare.sub_shr
        : 0;

      return shared;
    },

    copyLink = () => {
      navigator.clipboard
        .writeText(aff_link)
        .then(() => {
          dispatch(setInfo({
            cls: "bg-info",
            time: "Just Now",
            title: "Notification",
            info: "Copied to Clipboard!",
            show: true
          }))
        });
    };

  return (
    <>

      <Navbar />
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className='row mb-4'>
            <div className='col-md-4 mb-md-0 mb-4'>
              <div className="card mb-4">
                <h5 className="card-header">Your Infos</h5>
                <div className="card-body">
                  <div className="d-flex align-items-start align-items-sm-center gap-4">
                    <img
                      src="../assets/img/avatars/1.png"
                      alt="user-avatar"
                      className="d-block rounded"
                      height="100"
                      width="100"
                    />
                    <div className="nowrap">
                      <button className="btn btn-primary me-2 mb-4 nowrap" onClick={() => copyLink()}>
                        {aff_link}
                      </button>
                      <p className="text-muted mb-0 nowrap">Click button to copy link.</p>
                    </div>
                  </div>
                </div>

                <hr className="my-0" />

                <div className="card-body">
                  <ul className="p-0 m-0">
                    <li className="d-flex mb-4 pb-1">
                      <div className="avatar flex-shrink-0 me-3">
                        <img src="../assets/img/icons/unicons/chart.png" alt="User" className="rounded" />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <h6 className="mb-0">Your Affiliate Level</h6>
                        </div>
                        <div className="user-progress d-flex align-items-center gap-1">
                          <h6 className="mb-0">{level} </h6>
                          <span className="text-muted">({share + "%"})</span>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex mb-4 pb-1">
                      <div className="avatar flex-shrink-0 me-3">
                        <img src="../assets/img/icons/unicons/wallet.png" alt="User" className="rounded" />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <h6 className="mb-0">Your Affiliate</h6>
                        </div>
                        <div className="user-progress d-flex align-items-center gap-1">
                          <h6 className="mb-0">{affiliate ? affiliate : "None"}</h6>
                          <span className="text-muted"></span>
                        </div>
                      </div>
                    </li>

                    <li className="d-flex mb-4 pb-1">
                      <div className="avatar flex-shrink-0 me-3">
                        <img src="../assets/img/icons/unicons/cc-success.png" alt="User" className="rounded" />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <h6 className="mb-0">Your Players</h6>
                        </div>
                        <div className="user-progress d-flex align-items-center gap-1">
                          <h6 className="mb-0">{pNum}</h6>
                          <span className="text-muted"></span>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex mb-4 pb-1">
                      <div className="avatar flex-shrink-0 me-3">
                        <img src="../assets/img/icons/unicons/cc-primary.png" alt="User" className="rounded" />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <h6 className="mb-0">Your Super Players</h6>
                        </div>
                        <div className="user-progress d-flex align-items-center gap-1">
                          <h6 className="mb-0">{supPNum}</h6>
                          <span className="text-muted"></span>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex">
                      <div className="avatar flex-shrink-0 me-3">
                        <img src="../assets/img/icons/unicons/cc-warning.png" alt="User" className="rounded" />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <h6 className="mb-0">Your Sub Players</h6>
                        </div>
                        <div className="user-progress d-flex align-items-center gap-1">
                          <h6 className="mb-0">{subPNum}</h6>
                          <span className="text-muted"></span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-8 mb-md-0 mb-4'>
              <div className="card">
                <div className="card-header">
                  <div style={{ float: "right" }}>
                    <button type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#inviteModal"
                    >
                      Invite People
                    </button>
                  </div>
                  <h5>Total Players: {players.length}</h5>
                </div>
                <div className="table-responsive text-nowrap">
                  <table className="table">
                    <thead className="table-dark">
                      <tr>
                        <th>Player</th>
                        <th>Share</th>
                        <th>Expenditure</th>
                        <th>Ad Views</th>
                        <th>Income</th>
                        <th>Affiliates</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {
                        loading ? (
                          <tr>
                            <td style={{ textAlign: "center" }} colSpan={5}>Loading...</td>
                          </tr>
                        ) : (
                          players.length > 0 ? (
                            players.map((player, i) => (
                              <tr key={i}>
                                <td>

                                  <strong>{player.name}</strong>
                                </td>
                                <td>{getShare(player)}%</td>
                                <td>${spent}</td>
                                <td>{player.clickCounts} * <span className='small'>$0.01</span></td>
                                <td>${(spent * getShare(player)) / 100 + player.clickCounts * 0.01 * getShare(player) / 100}</td>
                                <td>
                                  <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                    {
                                      player.sub_aff ?
                                        <li
                                          data-bs-toggle="tooltip"
                                          data-popup="tooltip-custom"
                                          data-bs-placement="top"
                                          className="avatar avatar-xs pull-up"
                                          title={player.sub_aff === name ? "You" : player.sub_aff}
                                        >
                                          <img src="../assets/img/avatars/1.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        : null
                                    }
                                    {
                                      player.sup_aff ?
                                        <li
                                          data-bs-toggle="tooltip"
                                          data-popup="tooltip-custom"
                                          data-bs-placement="top"
                                          className="avatar avatar-xs pull-up"
                                          title={player.sup_aff === name ? "You" : player.sup_aff}
                                        >
                                          <img src="../assets/img/avatars/2.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        : null
                                    }
                                    {
                                      player.affiliate ?
                                        <li
                                          data-bs-toggle="tooltip"
                                          data-popup="tooltip-custom"
                                          data-bs-placement="top"
                                          className="avatar avatar-xs pull-up"
                                          title={player.affiliate === name ? "You" : player.affiliate}
                                        >
                                          <img src="../assets/img/avatars/3.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        : null
                                    }
                                  </ul>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td style={{ textAlign: "center" }} colSpan={6}>No User found</td>
                            </tr>
                          )
                        )
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal />
      <Toast />
    </>
  )
}