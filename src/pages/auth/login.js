import React from 'react';
import { Link } from 'react-router-dom';
import {
  LoginSocialGoogle,
  LoginSocialFacebook,
} from 'reactjs-social-login';

import {
  GoogleLoginButton,
  FacebookLoginButton,
} from 'react-social-login-buttons';
import login from '../../utils/ajax';
import $ from 'jquery';

const LoginPage = () => {
  // const REDIRECT_URI = window.location.href;
  const handleLogin = async () => {
    if (
      $('#log-username').val() &&
      $('#log-pass').val() 
    ) {
      login('/login', {
        id: $('#log-username').val(),
        pwd: $('#log-pass').val(),
      });
    } else {
      console.log('Please fill in all required fields');
    }
  };

  return (
    <>
      <div className="limiter">
        <div className="container-login100" style={{ backgroundImage: "url('images/bg-01.jpg')" }}>
          <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
            <form className="login100-form validate-form flex-sb flex-w">
              <span className="login100-form-title p-b-53">
                Sign In
              </span>

              <div className='row' style={{width:"100%"}}>
                <LoginSocialGoogle
                  isOnlyGetToken
                  client_id={process.env.GOOGLE_CLIENT_ID}
                  onResolve={({ provider, data }) => {
                    console.log(provider, data)
                  }}
                  onReject={(err) => {
                    console.log(err)
                  }}
                >
                  <GoogleLoginButton />
                </LoginSocialGoogle>

                {/* <LoginSocialFacebook
                  isOnlyGetToken
                  appId={process.env.FACEBOOK_CREDENTIAL}
                  onResolve={({ provider, data }) => {
                    console.log(provider, data)
                  }}
                  onReject={(err) => {
                    console.log(err)
                  }}
                >
                  <FacebookLoginButton />
                </LoginSocialFacebook>  */}
              </div>

              <div className="p-t-31 p-b-9">
                <span className="txt1">
                  Username
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Username is required">
                <input className="input100" type="text" id="log-username" />
                <span className="focus-input100"></span>
              </div>

              <div className="p-t-13 p-b-9">
                <span className="txt1">
                  Password
                </span>

                <Link to="#" className="txt2 bo1 m-l-5">
                  Forgot?
                </Link>
              </div>
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input className="input100" type="password" id="log-pass" />
                <span className="focus-input100"></span>
              </div>

              <div className="container-login100-form-btn m-t-17">
                <button className="login100-form-btn" onClick={handleLogin}>
                  Sign In
                </button>
              </div>

              <div className="w-full text-center p-t-55">
                <span className="txt2">
                  Not a member?
                </span>
                &nbsp;
                <Link to="/Login" className="txt2 bo1">
                  Sign up now
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;