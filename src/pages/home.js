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
          <div className="row">
            <h5 className="pb-1 mb-4">{tour ? "TOURNAMENT" : "PRACTICE"}</h5>
            <div className="col-md-9">
              <div className="row mb-5" id='game-container'>
                <Games />
              </div>
            </div>
            <div className="col-md-3">
              <video id="" autoPlay>
                <source src="./assets/ads/mov_bbb.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <Ads />
        </div>
      </div>
      <Chatbtn />
      <Chatbox />
    </>
  )
}