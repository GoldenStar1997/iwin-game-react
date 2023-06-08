import React from 'react'

export default function Testimonials() {
  return (
    <section id="testimonials-section">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-header text-center">
                <h2 className="title">Our Gamers Review</h2>
                <p>Thousands of Happy Gamers All Around the World</p>
              </div>
            </div>
          </div>
          <div className="row mp-none">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-item text-center">
                <p>I play Tournament every day, it's a great way to relax and win cash too!</p>
                <div className="bottom-area d-flex justify-content-between">
                  <div className="left-area d-flex">
                    <div className="img">
                      <div className="img-area">
                        <img src="./assets/images/testimonials-user-1.png" alt="not found" />
                      </div>
                    </div>
                    <div className="title-area">
                      <h6>Brice Tong</h6>
                      <span>Texas, USA</span>
                    </div>
                  </div>
                  <div className="amount">
                    <h6>$306</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-item text-center">
                <p>When I hang out with my friends, we play Tournament, its so much fun</p>
                <div className="bottom-area d-flex justify-content-between">
                  <div className="left-area d-flex">
                    <div className="img">
                      <div className="img-area">
                        <img src="./assets/images/testimonials-user-1.png" alt="not found" />
                      </div>
                    </div>
                    <div className="title-area">
                      <h6>Alva Adair</h6>
                      <span>Frankfurt, Germany</span>
                    </div>
                  </div>
                  <div className="amount">
                    <h6>$496</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-item text-center">
                <p>I joined for the community but ended up winning cash, amazing.</p>
                <div className="bottom-area d-flex justify-content-between">
                  <div className="left-area d-flex">
                    <div className="img">
                      <div className="img-area">
                        <img src="./assets/images/testimonials-user-1.png" alt="not found" />
                      </div>
                    </div>
                    <div className="title-area">
                      <h6>Ray Sutton</h6>
                      <span>Ontario, Canada</span>
                    </div>
                  </div>
                  <div className="amount">
                    <h6>$306</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
