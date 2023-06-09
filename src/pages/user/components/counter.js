import React from 'react'

export default function Counter() {

  const $ = window.$;
  $('.counter').counterUp();
  
  return (
    <section id="counter-section">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row mp-none">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-item text-center">
                <div className="img-area">
                  <img src="./assets/images/counter-icon-1.png" alt="not found" />
                </div>
                <h3><span className="counter">84</span>K</h3>
                <p>Matches Played</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-item text-center">
                <div className="img-area">
                  <img src="./assets/images/counter-icon-2.png" alt="not found" />
                </div>
                <h3>$<span className="counter">96</span>m</h3>
                <p>Winnings Paid</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-item text-center">
                <div className="img-area">
                  <img src="./assets/images/counter-icon-3.png" alt="not found" />
                </div>
                <h3><span className="counter">180</span></h3>
                <p>Active Ladders</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-item text-center">
                <div className="img-area">
                  <img src="./assets/images/counter-icon-4.png" alt="not found" />
                </div>
                <h3><span className="counter">168</span>b</h3>
                <p>XP Earned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
