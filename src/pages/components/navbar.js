import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';


export default function Navbar() {

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

  const {
    sub_aff, status
  } = useSelector((state) => state.auth.userInfo);

  return (
    <>
      <nav
        className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <a className="nav-item nav-link px-0 me-xl-4" href="#">
            <i className="bx bx-menu bx-sm"></i>
          </a>
        </div>

        <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
          <div className="navbar-nav align-items-center">
            <div className="nav-item d-flex align-items-center">
              <i className="bx bx-search fs-4 lh-0"></i>
              <input
                type="text"
                className="form-control border-0 shadow-none"
                placeholder="Search..."
                aria-label="Search..."
              />
            </div>
          </div>
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            <li className="nav-item lh-1 me-3">
              <a className="nav-item nav-link active" href="/home">Home</a>
            </li>

            <li className="nav-item lh-1 me-3">
              <a className="nav-item nav-link active" href="/tour">Tournaments</a>
            </li>

            {sub_aff === "" ? (
              <li className="nav-item lh-1 me-3">
                <a className="nav-item nav-link active" href="/referals">Referals</a>
              </li>
            ) : null}

            <li className="nav-item lh-1 me-3">
              <a className="nav-item nav-link active" href="/dashboard">Dashboard</a>
            </li>

            {status !== 3 ? (
              <li className="nav-item lh-1 me-3">
                <a className="nav-item nav-link active" href="/contact">Contact</a>
              </li>
            ) : null}

            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <a className="nav-link dropdown-toggle hide-arrow" href="" data-bs-toggle="dropdown">
                <div className="avatar avatar-online">
                  <img src="./assets/img/avatars/1.png" alt="not found" className="w-px-40 h-auto rounded-circle" />
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar avatar-online">
                          <img src="./assets/img/avatars/1.png" alt="not found" className="w-px-40 h-auto rounded-circle" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <span className="fw-semibold d-block">John Doe</span>
                        {
                          status === 3 ?
                            <small className="text-muted">Admin</small>
                            :
                            <small className="text-muted">User</small>
                        }
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <div className="dropdown-divider"></div>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-cog me-2"></i>
                    <span className="align-middle">Settings</span>
                  </a>
                </li>

                {
                  status === 3 ?
                    <li>
                      <a href="/admin" className="dropdown-item">
                        <i className="bx bx-user me-2"></i>
                        <span className="align-middle">Admin Page</span>
                      </a>
                    </li>
                    :
                    <li>
                      <a className="dropdown-item" href="/profile">
                        <i className="bx bx-user me-2"></i>
                        <span className="align-middle">My Profile</span>
                      </a>
                    </li>
                }

                <li>
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    <i className="bx bx-power-off me-2"></i>
                    <span className="align-middle">Log Out</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}