import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


export default function Navbar() {

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
          <Link className="nav-item nav-link px-0 me-xl-4" to="#">
            <i className="bx bx-menu bx-sm"></i>
          </Link>
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
              <Link className="nav-item nav-link active" to="/home">Home</Link>
            </li>

            <li className="nav-item lh-1 me-3">
              <Link className="nav-item nav-link active" to="/tour">Tournaments</Link>
            </li>

            {sub_aff === "" ? (
              <li className="nav-item lh-1 me-3">
                <Link className="nav-item nav-link active" to="/referals">Referals</Link>
              </li>
            ) : null}

            <li className="nav-item lh-1 me-3">
              <Link className="nav-item nav-link active" to="/dashboard">Dashboard</Link>
            </li>

            {status !== 3 ? (
              <li className="nav-item lh-1 me-3">
                <Link className="nav-item nav-link active" to="/contact">Contact</Link>
              </li>
            ) : null}

            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <Link className="nav-link dropdown-toggle hide-arrow" to="" data-bs-toggle="dropdown">
                <div className="avatar avatar-online">
                  <img src="../assets/img/avatars/1.png" alt="not found" className="w-px-40 h-auto rounded-circle" />
                </div>
              </Link>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="#">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar avatar-online">
                          <img src="../assets/img/avatars/1.png" alt="not found" className="w-px-40 h-auto rounded-circle" />
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
                  </Link>
                </li>

                <li>
                  <div className="dropdown-divider"></div>
                </li>

                <li>
                  <Link className="dropdown-item" to="#">
                    <i className="bx bx-cog me-2"></i>
                    <span className="align-middle">Settings</span>
                  </Link>
                </li>

                {
                  status === 3 ?
                    <li>
                      <Link to="/admin" className="dropdown-item">
                        <i className="bx bx-user me-2"></i>
                        <span className="align-middle">Admin Page</span>
                      </Link>
                    </li>
                    :
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        <i className="bx bx-user me-2"></i>
                        <span className="align-middle">My Profile</span>
                      </Link>
                    </li>
                }

                <li>
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="bx bx-power-off me-2"></i>
                    <span className="align-middle">Log Out</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}