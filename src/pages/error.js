import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/authSlice'

export default function Error() {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <section id="error-section">
      <div className="overlay pb-120 pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="main-content pt-120 pb-120 text-center">
                <h3>Whoops..</h3>
                <h5>page not found</h5>
                <Link to="/home" className="cmn-btn">Go Back!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <button onClick={() => isLoggedIn ? dispatch(logout()) : dispatch(login())}>
        {isLoggedIn ? 'Logout' : 'Login'} 
      </button>
    </section>
  )
}
