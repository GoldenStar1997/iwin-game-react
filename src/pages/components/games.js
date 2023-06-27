import React from 'react';

function Games({ games }) {
  
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
            title="<i class='bx bx-dollar bx-xs'></i> <span>Tooltip on left</span>"
          >
            <div className="card bg-dark border-0 text-white">
              <img className="card-img" src={"./assets/img/games/" + item.image} alt="Card image" height={150} />
              <div className="card-body">
                <p className="card-text">
                  {item.name}
                </p>
              </div>
            </div>
          </div >
        ))
      }
    </>
  );
}


export default Games;