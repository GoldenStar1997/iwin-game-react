import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Link } from 'react-router-dom'

export default function checkout() {
  return (
    <>
      <Navbar />
      <section id="checkout" className="pt-120 pb-120">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="head-area top">
                  <h4>Billing Info</h4>
                  <p>Please enter your billing info</p>
                </div>
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="fname">First Name</label>
                      <input type="text" className="form-control" id="fname" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="lname">Last Name</label>
                      <input type="text" className="form-control" id="lname" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" className="form-control" id="email" placeholder="Email Address" />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="number" className="form-control" id="phone" placeholder="Phone Number" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="address">Address</label>
                      <input type="text" className="form-control" id="address" placeholder="Address" />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="town">Town / City</label>
                      <input type="text" className="form-control" id="town" placeholder="Town Or City" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="state">State / Country</label>
                      <input type="text" className="form-control" id="state" placeholder="Choose a state or Country" />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="zip">ZIP/Postal code</label>
                      <input type="number" className="form-control" id="zip" placeholder="Postal code or ZIP" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group checkbox col-md-6">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customControlInline" />
                        <label className="custom-control-label" htmlFor="customControlInline">Ship to a different address?</label>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="payment-container billing">
                  <div className="head-area">
                    <h4>Billing method</h4>
                    <p>Please enter your payment method</p>
                  </div>
                  <div className="billing-method">
                    <div className="single-area">
                      <div className="form-check">
                        <div className="radio-area">
                          <input type="radio" id="one" name="optradio" className="form-check-input"  />
                          <span className="checkmark fedex"></span>
                        </div>
                        <label htmlFor="one" className="d-flex justify-content-between align-items-center">
                          <span className="head">FedEx</span>
                          <span className="mid">
                            <span className="currency">+32 USD</span>
                            <span>Additional price</span>
                          </span>
                          <img src="./assets/images/fedex.png" alt="Not found" />
                        </label>
                      </div>
                    </div>
                    <div className="single-area">
                      <div className="form-check">
                        <div className="radio-area">
                          <input type="radio" id="two" name="optradio" className="form-check-input" />
                          <span className="checkmark"></span>
                        </div>
                        <label htmlFor="two" className="d-flex justify-content-between align-items-center">
                          <span className="head">DHL</span>
                          <span className="mid">
                            <span className="currency">+15 USD</span>
                            <span>Additional price</span>
                          </span>
                          <img src="./assets/images/dhl.png" alt="Not found" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="payment-container">
                  <div className="head-area">
                    <h4>Payment method</h4>
                    <p>Please enter your payment method</p>
                  </div>
                  <div className="billing-method method">
                    <div className="single-area credititem">
                      <div className="form-check">
                        <div className="radio-area credit">
                          <input type="radio" id="credit" name="paymentmethod" className="form-check-input"  />
                          <span className="checkmark"></span>
                        </div>
                        <label htmlFor="credit" className="d-flex justify-content-between align-items-center">
                          <span className="head">Credit Card</span>
                          <span className="right-item d-flex">
                            <img src="./assets/images/visa.png" alt="Not found" />
                            <img src="./assets/images/mastercard.png" alt="Not found" />
                          </span>
                        </label>
                      </div>
                      <form className="creditcard">
                        <div className="form-row">
                          <div className="form-group col-md-12">
                            <label htmlFor="cardnumber">Card Number</label>
                            <input type="number" className="form-control" id="cardnumber" placeholder="Card Number" />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-4">
                            <label htmlFor="cardholder">Card Holder</label>
                            <input type="number" className="form-control" id="cardholder" placeholder="Card Holder" />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="date">Expiration date</label>
                            <input type="date" className="form-control" id="date" />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="cvc">CVC</label>
                            <input type="number" className="form-control" id="cvc" placeholder="CVC" />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="single-area">
                      <div className="form-check">
                        <div className="radio-area">
                          <input type="radio" id="paypal" name="paymentmethod" className="form-check-input" />
                          <span className="checkmark"></span>
                        </div>
                        <label htmlFor="paypal" className="d-flex justify-content-between align-items-center">
                          <span className="head">Paypal</span>
                          <img src="./assets/images/paypal.png" alt="Not found" />
                        </label>
                      </div>
                    </div>
                    <div className="single-area">
                      <div className="form-check">
                        <div className="radio-area">
                          <input type="radio" id="bitcoin" name="paymentmethod" className="form-check-input" />
                          <span className="checkmark"></span>
                        </div>
                        <label htmlFor="bitcoin" className="d-flex justify-content-between align-items-center">
                          <span className="head">Bitcoin</span>
                          <img src="./assets/images/bitcoin.png" alt="Not found" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group checkbox col-md-10">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="agreewith" />
                        <label className="custom-control-label" htmlFor="agreewith">I agree with our terms and conditions and privacy policy.</label>
                      </div>
                    </div>
                    <Link to="#" className="cmn-btn">Complete Order</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="right-sidebar">
                  <div className="top-area">
                    <h5>Order Summary</h5>
                    <p>Price can change depending on shipping
                      method and taxes of your state.</p>
                  </div>
                  <div className="bottom-side text-center">
                    <ul className="bottom-area">
                      <li>
                        <span>Subtotal</span>
                        <span>€49.90</span>
                      </li>
                      <li>
                        <span className="text-sm">Delivery (Standard)</span>
                        <span className="text-sm">€1.80</span>
                      </li>
                      <li>
                        <span className="text-sm">Taxes & Fees</span>
                        <span className="text-sm">€7.30</span>
                      </li>
                    </ul>
                    <ul>
                      <li className="d-flex align-items-center">
                        <span>Total Order</span>
                        <h4>€59.00</h4>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
