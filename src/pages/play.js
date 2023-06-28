import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from './components/navbar';
import Ads from './components/ads';

export default function Game() {

  const games = useSelector((state) => state.game.gameList);
  const { id } = useParams();
  const url = games.filter(ele => Number(ele.id) === Number(id))[0].url;

  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row">
            <div className="col-md-9">
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
            <div className="col-md-3">
              <video id="" autoPlay>
                <source src="../assets/ads/mov_bbb.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <Ads />
        </div>
      </div>
    </>
  );
}


