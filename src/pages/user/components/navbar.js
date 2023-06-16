import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { useSelector } from 'react-redux';


export default function Navbar () {

  useEffect(() => {
    const $ = window.$;
    const fixed_top = $("#header-section");

    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        fixed_top.addClass("animated fadeInDown header-fixed");
      } else {
        fixed_top.removeClass("animated fadeInDown header-fixed");
      }
    });
  }, [])

  const { sub_aff } = useSelector((state) => state.auth.userInfo);

  return (
    <header id="header-section">
      <div className="overlay">
        <div className="container">
          <div className="row d-flex header-area">
            <div className="logo-section flex-grow-1 d-flex align-items-center">
              <Link className="site-logo site-title" to="/home">
                <img src={logo} alt="site-logo" />
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
                  <li><Link to="/tour">Tournaments</Link></li>
                  <li className="menu_has_children">
                    <Link to="#0">Dashboard</Link>
                    <ul className="sub-menu">
                      <li><Link to="/checkout">Check Out</Link></li>
                      <li><Link to="/profile">Profile</Link></li>
                      { sub_aff == "" ? (
                        <li><Link to="/referals">Referals</Link></li>
                      ) : null}
                    </ul>
                  </li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}