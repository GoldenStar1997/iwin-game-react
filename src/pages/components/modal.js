import React from 'react'

export default function Modal() {
  return (

    <div className="modal fade" id="inviteModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel1">Invite Modal</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col mb-3">
                <label htmlFor="nameBasic" className="form-label">Email</label>
                <input type="email" id="nameBasic" className="form-control" placeholder="Enter Email" />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-primary">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
