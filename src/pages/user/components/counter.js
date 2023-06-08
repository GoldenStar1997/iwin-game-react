import React from 'react'

export default function Counter() {
  return (
    <section id="counter-section">
      <div class="overlay pt-120 pb-120">
        <div class="container">
          <div class="row mp-none">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-item text-center">
                <div class="img-area">
                  <img src="./assets/images/counter-icon-1.png" alt="not found" />
                </div>
                <h3><span class="counter">84</span>K</h3>
                <p>Matches Played</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-item text-center">
                <div class="img-area">
                  <img src="./assets/images/counter-icon-2.png" alt="not found" />
                </div>
                <h3>$<span class="counter">96</span>m</h3>
                <p>Winnings Paid</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-item text-center">
                <div class="img-area">
                  <img src="./assets/images/counter-icon-3.png" alt="not found" />
                </div>
                <h3><span class="counter">180</span></h3>
                <p>Active Ladders</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-item text-center">
                <div class="img-area">
                  <img src="./assets/images/counter-icon-4.png" alt="not found" />
                </div>
                <h3><span class="counter">168</span>b</h3>
                <p>XP Earned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
