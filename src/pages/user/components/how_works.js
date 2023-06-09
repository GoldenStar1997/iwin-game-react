import React from 'react'
import { Link } from 'react-router-dom'

export default function How_works() {
  return (
    <section id="how-works-section" className="border-area">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-header">
                <h2 className="title">How It Works</h2>
                <p>It's easier than you think. Follow 4 simple easy steps</p>
              </div>
            </div>
          </div>
          <div className="row mp-top">
            <div className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center">
              <div className="single-item">
                <div className="icon-area">
                  <span>1</span>
                  <img src="./assets/images/how-icon-1.png" alt="not found" />
                </div>
                <div className="text-area">
                  <h5>Signup</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center obj-rel">
              <div className="single-item">
                <div className="icon-area">
                  <span>2</span>
                  <img src="./assets/images/how-icon-2.png" alt="not found" />
                </div>
                <div className="text-area">
                  <h5>Deposit</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center obj-alt">
              <div className="single-item">
                <div className="icon-area">
                  <span>3</span>
                  <img src="./assets/images/how-icon-3.png" alt="not found" />
                </div>
                <div className="text-area">
                  <h5>Compete</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center obj-rel">
              <div className="single-item">
                <div className="icon-area">
                  <span>4</span>
                  <img src="./assets/images/how-icon-4.png" alt="not found" />
                </div>
                <div className="text-area">
                  <h5>Get Paid</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <Link to="/register" className="cmn-btn">Join Now!</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
