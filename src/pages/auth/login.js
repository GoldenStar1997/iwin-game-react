import axios from 'axios';
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../reducers/authSlice'

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const users = useSelector((state) => state.auth.users);

  // login
  const onSubmit = async (data) => {
    // await axios.post("http://localhost:4000/auth/login", data)
    //   .then(res => {
    //     if (res.data.accessToken){
    //       navigate('/home')
    //     } else {
    //       alert(res.data.error)
    //     }
    //   })
    //   .catch(error => { throw error; })

    if (users[0].name === data.name) {
      if (users[0].password === data.password) {
        dispatch(login())
        navigate('/')
      } else {
        alert('Incorrect password')
      }
    } else {
      alert("Not found")
    }
  };

  // google login
  const gLogin = useGoogleLogin({
    // onSuccess: async (user) => {
    //   await axios.post("http://localhost:4000/auth/google-login", {
    //     access_token: user.access_token
    //   })
    //     .then(res => {
    //       if (res.data.success) navigate('/home');
    //       else {
    //         if (window.confirm(res.data.error + "! Register?"))
    //           navigate('/register')
    //       }
    //     })
    //     .catch(error => { throw error; })
    // },
    // onError: (error) => console.log('ReqControl Failed:', error)

    onSuccess: function () {
      dispatch(login())
      navigate('/')
    }
  });

  return (
    <section id="login-reg">
      <div className="overlay pb-120">
        <div className="container">
          <div className="top-area">
            <div className="row d-flex align-items-center">
              <div className="col-sm-5 col">
                <Link className="back-home" to="/">
                  <img src="./assets/images/left-icon.png" alt="" />
                </Link>
              </div>
              <div className="col-sm-5 col">
                <Link to="#">
                  <img src="./assets/images/logo.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row pt-120 d-flex justify-content-center">
            <div className="col-lg-6">
              <div className="login-reg-main text-center">
                <h4>Welcome To iWinGames</h4>
                <div className="form-area">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" placeholder="User Name" {...register("name", { required: true })} />
                      {errors.name && <span> *User Name* is mandatory </span>}
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" placeholder="Password"  {...register("password", { required: true })} />
                      {errors.password && <span> *Password* is mandatory </span>}
                    </div>
                    <div className="form-group recover">
                      <p>Forgot your password? <Link to="#">Recover Password</Link></p>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="cmn-btn">Sign In</button>
                    </div>
                  </form>
                  <div className="or">
                    <p>OR</p>
                  </div>
                  <div className="sign-in">
                    <p>Sign in with your</p>
                  </div>
                  <div className="reg-with">
                    <div className="social-area d-flex justify-content-center">
                      <Link to=""><img src="./assets/images/social-icon-1.png" alt="" /></Link>
                      <Link className="twitch" ><img src="./assets/images/social-icon-2.png" alt="" /></Link>
                      <Link className="google" onClick={gLogin} ><img src="./assets/images/social-icon-3.png" alt="" /></Link>
                    </div>
                  </div>
                  <div className="account">
                    <p>Don't have an account? <Link to="/register">Sign Up Here</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;
