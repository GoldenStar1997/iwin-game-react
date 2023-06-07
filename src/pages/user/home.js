import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Banner from './components/banner'
import Main from "./components/games";
import Footer from "./components/footer";
import axios from 'axios'

import './assets/home.scss';

export default function Home() {
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
      <Banner />
      <Main games={ games } />
      <Footer />
    </div>
  );
}