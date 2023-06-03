import React from 'react';
import { Link } from 'react-router-dom';
import register from '../../utils/ajax';
import $ from 'jquery';

const RegisterPage = () => {
  const handleRegister = async () => {
    if (
      $('#reg-userid').val() &&
      $('#reg-username').val() &&
      $('#reg-pass').val() &&
      $('#reg-email').val()
    ) {
      register('/register', {
        id: $('#reg-userid').val(),
        name: $('#reg-username').val(),
        pwd: $('#reg-pass').val(),
        email: $('#reg-email').val(),
      });
    } else {
      console.log('Please fill in all required fields');
    }
  };

  return (
    <div className="limiter">
      <div className="container-login100" style={{ backgroundImage: "url('images/bg-01.jpg')" }}>
        <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
          <form className="login100-form validate-form flex-sb flex-w">

            <span className="login100-form-title p-b-53">
              Sign Up
            </span>

            <div className="p-t-31 p-b-9">
              <span className="txt1">
                Users identity
              </span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Username is required">
              <input className="input100" type="text" id="reg-userid" required />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">
                User name
              </span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Username is required">
              <input className="input100" type="text" id="reg-username" required />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">
                Password
              </span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Username is required">
              <input className="input100" type="password" id="reg-pass" required />
              <span className="focus-input100"></span>
            </div>


            <div className="p-t-13 p-b-9">
              <span className="txt1">
                Email address
              </span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Password is required">
              <input className="input100" type="email" id="reg-email" required />
              <span className="focus-input100"></span>
            </div>

            <div className="container-login100-form-btn m-t-17">
              <button className="login100-form-btn" onClick={handleRegister}>
                Register
              </button>
            </div>

            <div className="w-full text-center p-t-55">
              <Link to="/login" className="txt2 bo1">
                Sign in now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
