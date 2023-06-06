import React from 'react'

export default function video() {
  return (
    <div className="col-md-12 col-lg-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card bg-dark text-white">
              <video src="https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4" className="card-img-top"
                muted autoPlay loop></video>

              <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <button className="btn btn-lg btn-danger">Practice</button>
                <button className="btn btn-lg btn-primary">Tournament</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
