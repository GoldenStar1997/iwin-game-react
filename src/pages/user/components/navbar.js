import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header id="header-section">
      <div className="overlay">
        <div className="container">
          <div className="row d-flex header-area">
            <div className="logo-section flex-grow-1 d-flex align-items-center">
              <Link className="site-logo site-title" to="/">
                <img src="./assets/images/logo.png" alt="site-logo" />
              </Link>
            </div>
            <button className="navbar-toggler ml-auto collapsed" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>
            <nav className="navbar navbar-expand-lg p-0">
              <div className="navbar-collapse collapse" id="navbarSupportedContent">
                <ul className="navbar-nav main-menu ml-auto">
                  <li><Link to="/">Home</Link></li>
                  <li className="menu_has_children"><Link to="#0" className="active">Tournaments</Link>
                    <ul className="sub-menu">
                      <li><Link to="tournaments.html">Tournaments</Link></li>
                      <li><Link to="tournaments-single.html">Tournaments Single</Link></li>
                    </ul>
                  </li>
                  <li className="menu_has_children"><Link to="#0">Pages</Link>
                    <ul className="sub-menu">
                      <li><Link to="about-us.html">About Us</Link></li>
                      <li><Link to="shop.html">Shop</Link></li>
                      <li><Link to="shop-details.html">Shop Details</Link></li>
                      <li><Link to="profile.html">Profile</Link></li>
                      <li><Link to="cart.html">Cart</Link></li>
                      <li><Link to="check-out.html">Check Out</Link></li>
                      <li><Link to="features.html">Features</Link></li>
                      <li><Link to="error.html">Error</Link></li>
                    </ul>
                  </li>
                  <li><Link to="contact.html">Contact</Link></li>
                </ul>
              </div>
            </nav>
            <div className="right-area header-action d-flex align-items-center">
              <div className="search-icon">
                <Link to="#"><img src="./assets/images/search_btn.png" alt="icon" /></Link>
              </div>
              <div className="lang d-flex align-items-center">
                <select>
                  <option value="1">EN</option>
                  <option value="2">BN</option>
                  <option value="3">ES</option>
                  <option value="4">NL</option>
                </select>
              </div>
              <Link to="/" className="login-btn">Login</Link>
              <Link to="/register" className="cmn-btn">Join Now!</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
