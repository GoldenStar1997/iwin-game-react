import React, { useEffect, useState } from "react"
import Navbar from "./components/navbar"
import Tournaments from './components/tournaments'
import Footer from "./components/footer"
import axios from 'axios'

import './assets/style.scss'

export default function Tour() {
  const [games, setGameList] = useState([]);

  const getGameList = async function () {
    const response = await axios.post("http://localhost:4000/user/games");
    const { success, data } = response.data;

    if (success) setGameList(data);
  };
  
  useEffect(() => {
    getGameList();
  }, []);

  

  return (
    <div className="home">
      <Navbar />
      <Tournaments games={ games }/>
      <Footer />
    </div>
  );
}