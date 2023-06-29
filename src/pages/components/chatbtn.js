import React from 'react'
import { Link } from 'react-router-dom'

export default function chatbtn() {
  return (
    <div className="chat-btn">
      <Link
        className="btn rounded-pill btn-chat-btn btn-dark"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBackdrop"
        aria-controls="offcanvasBackdrop"
      >
        <span className="badge rounded-pill bg-danger">4</span>
        &nbsp;&nbsp;
        <i className='tf-icons bx bx-message-square'></i>
      </Link>
    </div>
  )
}
