import React from 'react'
import { Link } from 'react-router-dom'

export default function Winners() {
  return (
    <section id="players-week-section">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-7 mb-30">
              <div className="section-header text-center">
                <h2 className="title">Players of the Week</h2>
                <p>We take a look at the best player of the week awarded
                  on Monday for the previous Monday to Sunday</p>
              </div>
            </div>
          </div>
          <div className="row mp-none">
            <div className="col-lg-4 col-md-6">
              <div className="single-item text-center">
                <div className="img-area">
                  <div className="img-wrapper">
                    <img src="./assets/images/players/player-1.png" alt="not found" />
                  </div>
                </div>
                <Link to="/profile">
                  <h5>Barton Griggs</h5>
                </Link>
                <p className="date">
                  <span className="text-sm earn">1970 XP Earned</span>
                  <span className="text-sm">04/05 - 04/12</span>
                </p>
                <p className="text-sm credit">
                  <span className="text-sm">
                    <img src="./assets/images/icons/credit-icon.png" alt="not found" /> +20 credits
                  </span>
                </p>
                <Link to="/profile" className="cmn-btn">View Profile</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-item mid-area text-center">
                <div className="top-level">
                  <img src="./assets/images/icons/star.png" alt="not found" />
                </div>
                <div className="img-area">
                  <div className="img-wrapper">
                    <img src="./assets/images/players/player-2.png" alt="not found" />
                  </div>
                </div>
                <Link to="/profile/username">
                  <h5>Mervin Trask</h5>
                </Link>
                <p className="date">
                  <span className="text-sm earn">1970 XP Earned</span>
                  <span className="text-sm">04/05 - 04/12</span>
                </p>
                <p className="text-sm credit">
                  <span className="text-sm">
                    <img src="./assets/images/icons/credit-icon.png" alt="not found" /> +20 credits
                  </span>
                </p>
                <Link to="/profile/username" className="cmn-btn">View Profile</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-item text-center">
                <div className="img-area">
                  <div className="img-wrapper">
                    <img src="./assets/images/players/player-3.png" alt="not found" />
                  </div>
                </div>
                <Link to="/profile/username">
                  <h5>Adria Poulin</h5>
                </Link>
                <p className="date">
                  <span className="text-sm earn">1970 XP Earned</span>
                  <span className="text-sm">04/05 - 04/12</span>
                </p>
                <p className="text-sm credit">
                  <span className="text-sm">
                    <img src="./assets/images/icons/credit-icon.png" alt="not found" /> +20 credits
                  </span>
                </p>
                <Link to="/profile/username" className="cmn-btn">View Profile</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
