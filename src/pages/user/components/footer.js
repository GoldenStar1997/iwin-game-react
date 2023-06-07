import React from 'react'
import { Link } from 'react-router-dom'

export default function Ads() {
  return (
    <footer id="footer-section">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-top">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-8">
                    <div className="top-area text-center">
                      <h3>Subscribe to Our Newsletter</h3>
                      <p>Receive news, stay updated and special offers</p>
                    </div>
                    <form action="#">
                      <div className="subscribe d-flex">
                        <input type="email" placeholder="Your Email Address" />
                        <button className="cmn-btn">Subscribe</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-mid pt-120">
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-8 col-md-8 d-flex justify-content-md-between justify-content-center align-items-center cus-grid">
              <div className="logo-section">
                <Link className="site-logo site-title" to="/">
                  <img src="./assets/images/logo.png" alt="site-logo" />
                </Link>
              </div>
              <ul className="menu-side d-flex align-items-center">
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end">
              <div className="right-area">
                <ul className="d-flex">
                  <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="main-content">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg-12 col-md-6">
                <div className="left-area text-center">
                  <p>Copyright © 2021. All Rights Reserved By
                    <Link to="#">BEGAM</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
