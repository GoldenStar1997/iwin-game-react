import React from 'react'
import PaginatedItems from './pagination'

export default function tournaments({ games }) {
  return (
    <section id="tournaments-section" className="pt-120 tournaments">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-header">
                <h2 className="title">Browse Tournaments</h2>
                <p>Find the perfect tournaments for you. Head to head matches
                  where you pick the game, rules and prize.</p>
              </div>
            </div>
          </div>
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
          <PaginatedItems itemsPerPage={5} games={games} />
        </div>
      </div>
    </section>
  )
}
