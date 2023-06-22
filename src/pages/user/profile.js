import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/navbar'

export default function Profile() {

  return (
    <>
      <Navbar />
      <section id="banner-section" className="inner-banner profile">
        <div className="container">
          <div className="heading-area">
            <div className="row justify-content-between">
              <div className="col-md-6">
                <div className="profile-area d-flex align-items-center">
                  <div className="photo">
                    <img src="/assets/images/logos/profile-logo.png" alt="not found" />
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
                    <img src="/assets/images/icons/user-icon.png" alt="not found" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="all-trophies" className="pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-trophies d-flex align-items-center">
                <div className="left d-flex align-items-center justify-content-center">
                  <img src="/assets/images/icons/trophies-icon-1.png" alt="not found" />
                </div>
                <div className="right">
                  <p className="text-sm">Elite Trophies</p>
                  <h4>0</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-trophies d-flex align-items-center">
                <div className="left d-flex align-items-center justify-content-center">
                  <img src="/assets/images/icons/trophies-icon-2.png" alt="not found" />
                </div>
                <div className="right">
                  <p className="text-sm">gold-trophy</p>
                  <h4>6</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-trophies d-flex align-items-center">
                <div className="left d-flex align-items-center justify-content-center">
                  <img src="/assets/images/icons/trophies-icon-3.png" alt="not found" />
                </div>
                <div className="right">
                  <p className="text-sm">silver trophy</p>
                  <h4>2</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-trophies d-flex align-items-center">
                <div className="left d-flex align-items-center justify-content-center">
                  <img src="/assets/images/icons/trophies-icon-4.png" alt="not found" />
                </div>
                <div className="right">
                  <p className="text-sm">Bronze Trophies</p>
                  <h4>5</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="statistics-area">
            <div className="row">
              <div className="col-lg-9">
                <div className="total-area">
                  <div className="head-area d-flex justify-content-between">
                    <div className="left">
                      <h5>Game Statistics</h5>
                      <p className="text-sm">Player's game specific statistics</p>
                    </div>
                    <div className="right">
                      <p className="text-sm">Last Update: <span>3 days ago</span></p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="single-item text-center">
                        <img src="/assets/images/icons/statistics-icon-1.png" alt="not found" />
                        <p>Tournaments Entered</p>
                        <h4>10</h4>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="single-item text-center">
                        <img src="/assets/images/icons/statistics-icon-2.png" alt="not found" />
                        <p>Kills Per Game (Average)</p>
                        <h4>20</h4>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="single-item text-center">
                        <img src="/assets/images/icons/statistics-icon-3.png" alt="not found" />
                        <p>Games Played League of Legends</p>
                        <h4>5</h4>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="single-item text-center">
                        <img src="/assets/images/icons/statistics-icon-4.png" alt="not found" />
                        <p>Earnings (Per tournament)</p>
                        <h4>0</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="sidebar-area">
                  <div className="title-area">
                    <h5>My Statistics</h5>
                    <p className="text-sm">My Current progress</p>
                  </div>
                  <ul>
                    <li>
                      <span><img src="/assets/images/icons/statistics-icon-1.png" alt="not found" />Avg. Finish Rank</span>
                      <span>313</span>
                    </li>
                    <li>
                      <span><img src="/assets/images/icons/statistics-icon-2.png" alt="not found" />Total Games Played</span>
                      <span>1193</span>
                    </li>
                    <li>
                      <span><img src="/assets/images/icons/statistics-icon-3.png" alt="not found" />Tournaments Played</span>
                      <span>24</span>
                    </li>
                    <li>
                      <span><img src="/assets/images/icons/statistics-icon-4.png" alt="not found" />Times Paid</span>
                      <span>10</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
