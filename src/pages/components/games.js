import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Games() {
  const games = useSelector((state) => state.game.gameList);

  return (
    <>
      {
        games &&
        games.map((item, i) => (
          <div
            className="col-md-3 col-xl-3 pb-1 mb-4"
            key={i}
            data-bs-toggle="tooltip"
            data-bs-offset="0,4"
            data-bs-placement="left"
            data-bs-html="true"
            title="<i className='bx bx-dollar bx-xs'></i> <span>Tooltip on left</span>"
          >
            <Link to={'/games/' + item.name} className="card bg-dark border-0 text-white">
              <img className="card-img" src={"./assets/img/games/" + item.image} alt="Card" height={150} />
              <div className="card-body">
                <p className="card-text">
                  {item.name}
                </p>
              </div>
            </Link>
          </div >
        ))
      }
    </>
  );
}


export default Games;