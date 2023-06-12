import react from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Game() {
  const { gameId } = useParams();
  const gameURL = useSelector((state)=> state.game.games)[gameId].url;

  return (
    <div className='gameContainer'>
      <iframe className='gameframer'
        src={gameURL}
      />
    </div>
  );
}
