import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import login from '../../utils/ajax';
import $ from 'jquery';

const LoginPage = () => {
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

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
    () => {
      if (user) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            setProfile(res.data);
          })
          .catch((err) => console.log(err));
      }
    },
    [user]
  );

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
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
              <div className='row' style={{ width: "100%" }}>
                {profile ? (
                  <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <button onClick={logOut}>Log out</button>
                  </div>
                ) : (
                  <button onClick={() => login()}>Sign in with Google 🚀 </button>
                )}
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