import React, { useEffect } from 'react'

import axios from 'axios'
import { API_URL } from "../utils/url"

import Navbar from './components/navbar'
import Games from './components/games'
import Chatbtn from './components/chatbtn'
import Chatbox from './components/chat'
import Ads from './components/ads'

import { useDispatch } from 'react-redux'
import { setGameList } from '../reducers/gameSlice'


export default function Home({ tour }) {
  const dispatach = useDispatch()

  const getGameList = async function () {
    const response = await axios.post(`${API_URL}/user/games`);
    const { success, data } = response.data;

    if (success) {
      dispatach(setGameList(data));
    }
  };

  useEffect(() => {
    getGameList();
  }, []);

  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row mb-3">
            <h5 className="pb-1 mb-4">{tour ? "TOURNAMENT" : "PRACTICE"}</h5>
            <div className="col-md-9">
              <div className="row" id='game-container'>
                <Games />
              </div>
            </div>
            <div className="col-md-3 p-3 pt-0">
              <div className='text-center'>
                <video id="" autoPlay>
                  <source
                    src="../assets/ads/mov_bbb.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              {
                tour ?
                  <button type="button" class="btn btn-danger w-100 mb-3">START TOURNAMENT</button>
                  :
                  <button type="button" class="btn btn-primary w-100 mb-3">PRACTICE</button>
              }
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="card-body bg-transparent">
                    <h5 class="card-title">New Prize</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a natural lead-in to additiona
                    </p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Ads />
        </div>
      </div >
      <Chatbtn />
      <Chatbox />
    </>
  )
}