import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">iWin</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="mynavbar">
          <ul className="navbar-nav me-end">
            <li className="nav-item btn">
              <Link className="nav-link active" to="#">Submit a Game</Link>
            </li>
            <li className="nav-item btn">
              <Link className="nav-link" to="#">Games</Link>
            </li>
            <li className="nav-item btn">
              <Link className="nav-link" to="#">Tournaments</Link>
            </li>
            <li className="nav-item btn">
              <Link className="nav-link" to="#">About</Link>
            </li>
            <li className="nav-item btn">
              <Link className="nav-link" to="#">Contact</Link>
            </li>
            <li className="nav-item btn">
              <Link className="nav-link" to="#">Logout</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="text" placeholder="Search" />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
