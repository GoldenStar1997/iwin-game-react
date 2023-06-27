import React from 'react'
import Nav from '../components/navbar'

export default function Admin() {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-dark">
          <div className="app-brand demo">
            <a href="/" className="app-brand-link">
              <span className="app-brand-logo demo">
                {/* LOGO IMAGE */}
              </span>
              <span className="app-brand-text demo menu-text fw-bolder ms-2">iWinGaming</span>
            </a>

            <a href="" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
              <i className="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
          </div>

          <div className="menu-inner-shadow"></div>

          <ul className="menu-inner py-1">
            <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Users</span>
            </li>
            <li className="menu-item">
              <a href="" className="menu-link">
                <i className="menu-icon tf-icons bx bx-collection"></i>
                <div data-i18n="Basic">Cards</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="" className="menu-link">
                <i className="menu-icon tf-icons bx bx-collection"></i>
                <div data-i18n="Basic">Cards</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="" className="menu-link">
                <i className="menu-icon tf-icons bx bx-collection"></i>
                <div data-i18n="Basic">Cards</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="" className="menu-link">
                <i className="menu-icon tf-icons bx bx-collection"></i>
                <div data-i18n="Basic">Cards</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="" className="menu-link">
                <i className="menu-icon tf-icons bx bx-collection"></i>
                <div data-i18n="Basic">Cards</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="" className="menu-link">
                <i className="menu-icon tf-icons bx bx-collection"></i>
                <div data-i18n="Basic">Cards</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="" className="menu-link">
                <i className="menu-icon tf-icons bx bx-collection"></i>
                <div data-i18n="Basic">Cards</div>
              </a>
            </li>

            <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Settings</span>
            </li>

            <li className="menu-item">
              <a href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-box"></i>
                <div data-i18n="User interface">Reports</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="" className="menu-link">
                    <div data-i18n="Accordion">Accordion</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="" className="menu-link">
                    <div data-i18n="Alerts">Alerts</div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-box"></i>
                <div data-i18n="User interface">Configuration</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="" className="menu-link">
                    <div data-i18n="Accordion">Accordion</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="" className="menu-link">
                    <div data-i18n="Alerts">Alerts</div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </aside>

        <div className="layout-page">
          <Nav />
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              sdfs

              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>

        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
    </div>
  )
}
