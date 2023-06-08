import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from './components/navbar'
import Banner from './components/home-banner'
import Howworks from './components/how_works'
import Counter from './components/counter'
import Winners from './components/winners'
import Fearture from './components/fearture'
import CallAction from './components/call_action'
import Testimonials from './components/testimonials'
import CallTo from './components/call_to'
import Footer from './components/footer'

export default function home() {
  return (
    <div>
      <Link to="" className="scrollToTop">
        <i className="fas fa-angle-double-up"></i>
      </Link>
      <Navbar />
      <Banner />
      <Howworks />
      <Counter />
      <Winners />
      <Fearture />
      <CallAction />
      <Testimonials />
      <CallTo />
      <Footer />
    </div>
  )
}
