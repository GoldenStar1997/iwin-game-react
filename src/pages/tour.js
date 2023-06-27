import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { API_URL } from "../utils/url"

import Navbar from './components/navbar'
import Games from './components/games'
import Chatbox from './components/chat'
import Ads from './components/ads'


export default function Home() {
  const [games, setGameList] = useState([]);

  const getGameList = async function () {
    const response = await axios.post(`${API_URL}/user/games`);
    const { success, data } = response.data;

    if (success) setGameList(data);
  };

  useEffect(() => {
    getGameList();
  }, []);

  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row">
            <h5 className="pb-1 mb-4">TOURNAMENT</h5>
            <div className="col-md-9">
              <div className="row mb-5" id='game-container'>
                <Games games={games} />
              </div>
            </div>
            <div className="col-md-3">
              <video id="" autoPlay>
                <source src="./assets/ads/mov_bbb.mp4" type="video/mp4" />
              </video>

              <button
                className="btn rounded-pill btn-dark w-100"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasBackdrop"
                aria-controls="offcanvasBackdrop"
              >
                <i className='menu-icon tf-icons bx bx-support'></i>
                Open Chatbox
              </button>
            </div>
          </div>
          <Ads />
        </div>
      </div>
      <Chatbox />
    </>
  )
}