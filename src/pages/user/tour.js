import React, { useEffect, useState } from "react"
import Navbar from "./components/navbar"
import Games from './components/games'
import SearchOpt from './components/search_opt'
import axios from 'axios'
import { API_URL } from "../../utils/url"
import Ads from "./components/ads"
import './assets/style.scss'

export default function Tour() {
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
    <div className="home">
      <Navbar />
      <section id="tournaments-section" className="pt-120 pb-120 tournaments">
        <div className="overlay pt-120 pb-120">
          <div className="container wow fadeInUp">
            <SearchOpt />
            <Games games={games} />
          </div>
        </div>
      </section>
      <Ads />
    </div>
  );
}