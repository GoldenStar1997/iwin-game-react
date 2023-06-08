import React from 'react'

export default function Profile() {
  return (
    <section id="call-action" className="pb-120">
      <div className="overlay">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="left-area">
                <h2 className="title">Build Your Esports Profile</h2>
                <p>Showcase your achievements, match history and win rate while you build your reputation on Begam.</p>
                <a href="registration.html" className="cmn-btn-second">Sign Up Free</a>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="right-area">
                <img src="./assets/images/profile-info.png" alt="not found" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
