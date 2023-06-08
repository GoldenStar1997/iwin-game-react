import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumb() {
  return (
    <>
      <div className="ani-img">
        <img className="img-1" src="./assets/images/banner-circle-1.png" alt="icon" />
        <img className="img-2" src="./assets/images/banner-circle-2.png" alt="icon" />
        <img className="img-3" src="./assets/images/banner-circle-2.png" alt="icon" />
      </div>
      <div className="banner-content d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="main-content">
                <h1>Tournaments</h1>
                <div className="breadcrumb-area">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb d-flex justify-content-center">
                      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Tournaments</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
