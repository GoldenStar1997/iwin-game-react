import React from 'react'
import { Link } from 'react-router-dom'
import PaginatedItems from './pagination'
import Video from './video'
export default function Games() {
  return (
    <div className='container'>
      {/* game category */}
      <div className="row text-center game-category">
        <div className="me-auto m-2">
          <Link to="" className='btn'>Slots</Link>
          <Link to="" className='btn'>Action Games</Link>
          <Link to="" className='btn'>Card Games</Link>
          <Link to="" className='btn'>Puzzle Games</Link>
          <Link to="" className='btn'>Acade Games</Link>
        </div>
      </div>
      {/* game container */}
      <div className="row">
        <div className="col-md-12 col-lg-9">
          <div className="container pagination">
            <div className="row me-auto">
              <PaginatedItems itemsPerPage={8}/>
            </div>
          </div>
        </div>
        {/* game introduction video */}
        <Video />
      </div>
    </div>
  )
}