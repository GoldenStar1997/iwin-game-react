import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';


function PaginatedItems({ games }) {
  console.log(games)

  const gamesfor = useSelector((state)=>state.game.games)
  const itemsPerPage = 5;

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = gamesfor.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(gamesfor.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % gamesfor.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {
        currentItems &&
        currentItems.map((item, i) => (
          <div className="single-item" key={i}>
            <div className="row">
              <div className="col-lg-3 col-md-3 d-flex align-items-center">
                <img className="top-img" src={"./assets/images/games/" + item.img} alt="no-found" />
              </div>
              <div className="col-lg-6 col-md-9 d-flex align-items-center">
                <div className="mid-area">
                  <h4>{item.name}</h4>
                  <div className="title-bottom d-flex">
                    <div className="time-area bg">
                      <img src="./assets/images/waitng-icon.png" alt="no-found" />
                      <span>Starts in</span>
                      <span className="time">10d 2H 18M</span>
                    </div>
                    <div className="date-area bg">
                      <span className="date">Apr 21, 5:00 AM EDT</span>
                    </div>
                  </div>
                  <div className="single-box d-flex">
                    <div className="box-item">
                      <span className="head">ENTRY/PLAYER</span>
                      <span className="sub">10 Credits</span>
                    </div>
                    <div className="box-item">
                      <span className="head">Team Size</span>
                      <span className="sub">2 VS 2</span>
                    </div>
                    <div className="box-item">
                      <span className="head">Max Teams</span>
                      <span className="sub">64</span>
                    </div>
                    <div className="box-item">
                      <span className="head">Enrolled</span>
                      <span className="sub">11</span>
                    </div>
                    <div className="box-item">
                      <span className="head">skill Level</span>
                      <span className="sub">All</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 d-flex align-items-center">
                <div className="prize-area text-center">
                  <div className="contain-area">
                    <span className="prize"><img src="./assets/images/price-coin.png" alt="no-found" />prize</span>
                    <h4 className="dollar">$1000</h4>
                    <Link to={"/games/"+ i} className="cmn-btn">Practice</Link>
                    <p>Top 3 Players Win a Cash Prize</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        containerClassName="pager-group"
        
      />
    </>
  );
}


export default PaginatedItems;