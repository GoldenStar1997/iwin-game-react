import axios from 'axios';
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';
import { API_URL } from '../../utils/url';
import { useDispatch } from 'react-redux';
import { login } from '../../reducers/authSlice';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await axios.post(`${API_URL}/auth/login`, data)
      .then(res => {
        if (res.data.accessToken) {
          localStorage.setItem('token', res.data.accessToken)

          dispatch(login(res.data.user))
          navigate('/home')
        } else {
          alert(res.data.error)
        }
      })
      .catch(error => { throw error; })
  };

  const gLogin = useGoogleLogin({
    onSuccess: async (user) => {
      await axios.post(`${API_URL}/auth/google-login`, {
        access_token: user.access_token
      })
        .then(res => {
          if (res.data.success) navigate('/home');
          else {
            if (window.confirm(res.data.error + "! Register?"))
              navigate('/register')
          }
        })
        .catch(error => { throw error; })
    },
    onError: (error) => console.log('ReqControl Failed:', error)
  });

  return (
    <>
      <div className="container-xxl">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner">
            <div className="card">
              <div className="card-body">
                <div className="app-brand justify-content-center">
                  <a href="/" className="app-brand-link gap-2">
                    <span className="app-brand-logo demo">
                      <img src="./assets/img/logo.svg" alt="" height="100" width="100"/>
                    </span>
                    <span className="app-brand-text demo text-body fw-bolder">iWinGaming</span>
                  </a>
                </div>
                <h4 className="mb-2">Welcome to iWinGaming!</h4>
                <p className="mb-4">Please sign-in and start the adventure</p>

                <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email or Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email-username"
                      placeholder="Enter your email or username"
                      autoFocus
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                      <label className="form-label" htmlFor="password">Password</label>
                      <a href="auth-forgot-password-basic.html">
                        <small>Forgot Password?</small>
                      </a>
                    </div>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                        {...register("password", { required: true })}
                      />
                      <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="remember-me" />
                      <label className="form-check-label" htmlFor="remember-me"> Remember Me </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                  </div>
                </form>

                <p className="text-center">
                  <span>New on our platform?</span>
                  <a href="/register">
                    <span>Create an account</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

