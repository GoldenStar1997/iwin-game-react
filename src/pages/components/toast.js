import React from 'react'
import { useSelector } from 'react-redux'

export default function Toast() {
  const {
    context
  } = useSelector((state) => state.alert.info);

  return (
    <div
      className="bs-toast toast toast-placement-ex m-2 fade bg-primary top-0 end-0 hide"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <i className="bx bx-bell me-2"></i>
        <div className="me-auto fw-semibold">Notification</div>
        <small>Just Now</small>
        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div className="toast-body">
        {context}
      </div>
    </div>
  )
}
