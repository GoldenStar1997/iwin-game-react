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
        <i className='menu-icon tf-icons bx bx-support'></i> Chat <span className="badge">4</span>
      </Link>
    </div>
  )
}
