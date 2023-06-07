import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';


function PaginatedItems({ itemsPerPage, games }) {

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = games.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(games.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % games.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {
        currentItems &&
        currentItems.map((item, i) => (
          <div className="col-sm-3" key={i}>
            <div className="card" style={{ marginBottom: "10px" }}>
              <img src={"./assets/images/games/" + item.image } className="card-img-top" alt="..." />
              <div className="card-body">
                <Link to={"/games/practice/"+ item.alias } className="card-title">{ item.name }</Link>
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
      />
    </>
  );
}


export default PaginatedItems;