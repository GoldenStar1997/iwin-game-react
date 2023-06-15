import React from 'react'
import PaginatedItems from './pagination'
import SearchOpt from './search_opt'

export default function Tournaments({ games }) {
  return (
    <section id="tournaments-section" className="pt-120 tournaments">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <SearchOpt />
          <PaginatedItems games={games} />
        </div>
      </div>
    </section>
  )
}
