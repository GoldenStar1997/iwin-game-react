import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Main from "./components/games";
import './assets/home.scss';

export default function Home() {
  useEffect(()=>{
    getGameList()
  },[])
  const [games, setGameList] = useState([]);

  const getGameList = async function () {
    await axios.get("http://localhost:4000/user/games")
      .then(res => {
        if( res ){
          setGameList(res.data)
        }
      })
      .catch(error => console.log(error))

  }
  return (
    <div className="home">
      <Navbar />
      <Main games={games} />
    </div>
  )
}