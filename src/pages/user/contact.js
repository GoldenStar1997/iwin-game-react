import React from 'react'

export default function contact() {
  return (
    <section id="contact-section" className="pt-120 pb-120">
      <div className="overlay">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-header text-center">
                <h5>CONTACT US</h5>
                <h2 className="title">Get in touch today!</h2>
                <p>We're here to support your dreams. We're here to help</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <form action="#" method="post">
                <h5>Leave your message</h5>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Enter your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Message</label>
                  <textarea rows="6" placeholder="Enter your message"></textarea>
                </div>
                <button className="cmn-btn" type="submit">Submit Now</button>
              </form>
            </div>
            <div className="col-md-4">
              <div className="right-sidebar">
                <h6 className="head-area">More Information</h6>
                <div className="single-area d-flex align-items-center">
                  <div className="img-area">
                    <img src="./assets/images/icons/email-icon.png" alt="not found" />
                  </div>
                  <div className="right-area">
                    <h6>Email</h6>
                    <p className="text-sm">begam@gmail.com</p>
                  </div>
                </div>
                <div className="single-area d-flex align-items-center">
                  <div className="img-area">
                    <img src="./assets/images/icons/phone-icon.png" alt="not found" />
                  </div>
                  <div className="right-area">
                    <h6>Phone</h6>
                    <p className="text-sm">(123) 456 - 7890</p>
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
