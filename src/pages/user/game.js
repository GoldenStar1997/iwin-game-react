import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Game() {
  const { id } = useParams();
  const gameURL = useSelector((state)=> state.game.games)[id].url;

  return (
    <div className='gameContainer'>
      <iframe className='gameframer'
        title='gamer'
        src={gameURL}
      />
    </div>
  );
}
