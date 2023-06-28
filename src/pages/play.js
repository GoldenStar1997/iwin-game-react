import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from './components/navbar';

export default function Game() {

  const games = useSelector((state) => state.game.gameList);
  const { name } = useParams();
  const url = games.filter(ele => ele.name === name)[0].url;


  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <iframe
            className='gameframer'
            title='gamer'
            frameBorder={0}
            scrolling='no'
            height="700"
            width="1000"
            src={url}
          />
        </div>
      </div>
    </>
  );
}


