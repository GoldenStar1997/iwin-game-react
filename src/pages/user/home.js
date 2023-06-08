import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from './components/navbar'
import Banner from './components/home-banner'
import How_works from './components/how_works'
import Counter from './components/counter'
import Winners from './components/winners'
import Fearture from './components/fearture'
import Call_action from './components/call_action'
import Testimonials from './components/testimonials'
import Profile from './components/profile'
import Footer from './components/footer'

export default function home() {
  return (
    <div>
      <Link to="" className="scrollToTop">
        <i className="fas fa-angle-double-up"></i>
      </Link>
      <Navbar />
      <Banner />
      <How_works />
      <Counter />
      <Winners />
      <Fearture />
      <Call_action />
      <Testimonials />
      <Profile />
      <Footer />
    </div>
  )
}
