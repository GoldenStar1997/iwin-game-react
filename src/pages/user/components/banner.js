import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <section id="banner-section" className="inner-banner">
      <div className="ani-img">
        <img className="img-1" src="./assets/images/banner-circle-1.png" alt="icon" />
        <img className="img-2" src="./assets/images/banner-circle-2.png" alt="icon" />
        <img className="img-3" src="./assets/images/banner-circle-2.png" alt="icon" />
      </div>
      <div className="banner-content d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="main-content">
                <h1>Tournaments</h1>
                <div className="breadcrumb-area">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb d-flex justify-content-center">
                      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Tournaments</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="testimonials-carousel d-flex align-items-center">
          <div className="bottom-item">
            <div className="row">
              <div className="col-lg-5">
                <div className="left-item">
                  <p className="text-sm">Registration Opened</p>
                  <h4>Leader Cup #7</h4>
                  <div className="draw-counter d-flex">
                    <div className="time-parameter left">
                      <h5>26</h5>
                      <span>SEP</span>
                    </div>
                    <div className="head">
                      <div className="date-area d-flex justify-content-center" data-countdown="2022/06/20">
                      </div>
                      <div className="time-parameter">
                        <span>DAY</span>
                        <span>HRS</span>
                        <span>MIN</span>
                        <span>SEC</span>
                      </div>
                    </div>
                  </div>
                  <div className="btn-area">
                    <Link to="registration.html" className="cmn-btn">Join now!</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="right-area">
                  <img className="img-char" src="./assets/images/character.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-item">
            <div className="row">
              <div className="col-lg-5">
                <div className="left-item">
                  <p className="text-sm">Registration Opened</p>
                  <h4>Leader Cup #7</h4>
                  <div className="draw-counter d-flex">
                    <div className="time-parameter left">
                      <h5>26</h5>
                      <span>SEP</span>
                    </div>
                    <div className="head">
                      <div className="date-area d-flex justify-content-center" data-countdown="2022/06/20">
                      </div>
                      <div className="time-parameter">
                        <span>DAY</span>
                        <span>HRS</span>
                        <span>MIN</span>
                        <span>SEC</span>
                      </div>
                    </div>
                  </div>
                  <div className="btn-area">
                    <Link to="#" className="cmn-btn">Join now!</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="right-area">
                  <img className="img-char" src="./assets/images/character.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-item">
            <div className="row">
              <div className="col-lg-5">
                <div className="left-item">
                  <p className="text-sm">Registration Opened</p>
                  <h4>Leader Cup #7</h4>
                  <div className="draw-counter d-flex">
                    <div className="time-parameter left">
                      <h5>26</h5>
                      <span>SEP</span>
                    </div>
                    <div className="head">
                      <div className="date-area d-flex justify-content-center" data-countdown="2022/06/20">
                      </div>
                      <div className="time-parameter">
                        <span>DAY</span>
                        <span>HRS</span>
                        <span>MIN</span>
                        <span>SEC</span>
                      </div>
                    </div>
                  </div>
                  <div className="btn-area">
                    <Link to="#" className="cmn-btn">Join now!</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="right-area">
                  <img className="img-char" src="./assets/images/character.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-item">
            <div className="row">
              <div className="col-lg-5">
                <div className="left-item">
                  <p className="text-sm">Registration Opened</p>
                  <h4>Leader Cup #7</h4>
                  <div className="draw-counter d-flex">
                    <div className="time-parameter left">
                      <h5>26</h5>
                      <span>SEP</span>
                    </div>
                    <div className="head">
                      <div className="date-area d-flex justify-content-center" data-countdown="2022/06/20">
                      </div>
                      <div className="time-parameter">
                        <span>DAY</span>
                        <span>HRS</span>
                        <span>MIN</span>
                        <span>SEC</span>
                      </div>
                    </div>
                  </div>
                  <div className="btn-area">
                    <Link to="#" className="cmn-btn">Join now!</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="right-area">
                  <img className="img-char" src="./assets/images/character.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
