import React from 'react'

export default function chatbtn() {
  return (
    <div className="chat-btn">
      <a
        className="btn rounded-pill btn-chat-btn btn-dark"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBackdrop"
        aria-controls="offcanvasBackdrop"
      >
        <i className='menu-icon tf-icons bx bx-support'></i> Chat <span class="badge">4</span>
      </a>
    </div>
  )
}
