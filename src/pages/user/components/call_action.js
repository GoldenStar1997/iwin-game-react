import React from 'react'
import { Link } from 'react-router-dom'

export default function Call_action() {
  return (
    <section id="call-to-action">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="main-content">
            <div className="row d-sm-flex justify-content-sm-end">
              <div className="col-lg-4 col-md-1">
                <img className="left" src="./assets/images/call-to-action-left.png" alt="not found"/>
              </div>
              <div className="col-lg-4 col-md-5 col-sm-5 d-flex align-items-center">
                <div className="section-item">
                  <h4>Invite Friends and Win Rewards.Join BEGAM Games today</h4>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center justify-content-sm-end align-items-center">
                <div className="btn-area d-flex justify-content-center justify-content-sm-end align-items-center">
                  <Link to="" className="cmn-btn">Join Now</Link>
                </div>
                <img src="./assets/images/call-to-action-right.png" alt="not found"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
