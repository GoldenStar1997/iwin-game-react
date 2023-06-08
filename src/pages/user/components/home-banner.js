import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <section id="banner-section">
      <div className="banner-content d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="main-content">
                <div className="top-area justify-content-center text-center">
                  <h3>Play Unlimited</h3>
                  <h1>Tournaments</h1>
                  <p>Compete in Free and Paid entry Tournaments. Transform your
                    games to real money eSports</p>
                  <div className="btn-play d-flex justify-content-center align-items-center">
                    <Link to="registration.html" className="cmn-btn">Get Started</Link>
                    <Link to="https://www.youtube.com/watch?v=MJ0zpsWQ_XM" className="mfp-iframe popupvideo">
                      <img src="./assets/images/play-icon.png" alt="play" />
                    </Link>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <div className="row justify-content-center">
                      <div className="col-lg-6">
                        <div className="bottom-area text-center">
                          <img src="./assets/images/versus.png" alt="banner-vs" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ani-illu">
            <img className="left-1 wow fadeInUp" src="./assets/images/left-banner.png" alt="not found" />
            <img className="right-2 wow fadeInUp" src="./assets/images/right-banner.png" alt="not found" />
          </div>
        </div>
      </div>
    </section>
  )
}
