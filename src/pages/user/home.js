import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from './components/navbar'
import Banner from './components/banner'
import Howworks from './components/how_works'
import Winners from './components/winners'
import Fearture from './components/fearture'
import Testimonials from './components/testimonials'
import CallTo from './components/call_to'
import Footer from './components/footer'

export default function Home() {

  return (
    <>
      <Link to="" className="scrollToTop">
        <i className="fas fa-angle-double-up"></i>
      </Link>
      <Navbar />
      <Banner />
      <Howworks />
      <Winners />
      <Fearture />
      <Testimonials />
      <CallTo />
      <Footer />
    </>
  )
}
