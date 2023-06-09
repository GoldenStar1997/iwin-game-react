import React, { useEffect } from 'react'

export default function SearchOpt() {

  useEffect(() => {
    const $ = window.$;
    $('select').niceSelect();
  })
  
  return (
    <div className="row mb-40 mp-none">
      <div className="col-lg-3 col-md-3">
        <div className="single-input">
          <span>Status</span>
          <select>
            <option>Status</option>
            <option value="1">Upcoming 1</option>
            <option value="2">Upcoming 2</option>
            <option value="3">Upcoming 3</option>
            <option value="5">Upcoming 5</option>
          </select>
        </div>
      </div>
      <div className="col-lg-3 col-md-3">
        <div className="single-input">
          <span>Search</span>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="col-lg-3 col-md-3">
        <div className="single-input">
          <span>Team Size</span>
          <select>
            <option>Select Team Size</option>
            <option value="1">Size 1</option>
            <option value="2">Size 2</option>
            <option value="3">Size 3</option>
            <option value="4">Size 4</option>
          </select>
        </div>
      </div>
      <div className="col-lg-3 col-md-3">
        <div className="single-input">
          <span>Entry Fee</span>
          <select>
            <option>Select Entry Fee</option>
            <option value="1">50</option>
            <option value="2">60</option>
            <option value="3">70</option>
            <option value="4">80</option>
          </select>
        </div>
      </div>
    </div>
  )
}
