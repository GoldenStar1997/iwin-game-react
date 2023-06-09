import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './components/navbar'
import Breadcrumb from './components/breadcrumb'
import Trophies from './components/trophies'
import Footer from './components/footer'

export default function Profile() {
  
  return (
    <>
      <Navbar />
      <section id="banner-section" className="inner-banner profile">
        <Breadcrumb />

        <div className="container">
          <div className="heading-area">
            <div className="row justify-content-between">
              <div className="col-md-6">
                <div className="profile-area d-flex align-items-center">
                  <div className="photo">
                    <img src="/assets/images/profile-logo.png" alt="not found" />
                  </div>
                  <div className="name-area">
                    <h4>Carter Stanton</h4>
                    <span>536K followers</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center justify-content-md-end">
                <div className="right d-flex align-items-center">
                  <Link to="" className="cmn-btn">Update</Link>
                  <div className="user-logo d-flex align-items-center justify-content-center">
                    <img src="/assets/images/user-icon.png" alt="not found" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Trophies />
      <Footer />
    </>
  )
}
