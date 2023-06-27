import React from 'react'

export default function chat() {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="mt-3">
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasBackdrop"
            aria-labelledby="offcanvasBackdropLabel"
          >
            <div className="offcanvas-header">
              <h5 id="offcanvasBackdropLabel" className="offcanvas-title">Chatbox</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <p className="text-center">some infos for chat...</p>
              <button type="button" className="btn btn-primary mb-2 d-grid w-100">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
