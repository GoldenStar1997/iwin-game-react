import React from 'react'
import PaginatedItems from './pagination'
import SearchOpt from './search_opt'

export default function Tournaments({ games }) {
  

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
          <SearchOpt />
          <PaginatedItems games={games} />
        </div>
      </div>
    </section>
  )
}
