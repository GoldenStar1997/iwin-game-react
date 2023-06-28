import React from 'react'
import { useForm } from "react-hook-form";
import { API_URL } from '../utils/url';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom'


export default function Contact() {

  const {
    name
  } = useSelector((state) => state.auth.userInfo);

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    await axios.post(`${API_URL}/reports/${name}`, data)
      .then(res => {
        if (res.data) {
          console.log(res.data)
        } else {
          alert(res.data.error)
        }
      })
      .catch(error => { throw error; })
  };


  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          <div className="card">
            <div className="card-body">
              <div className="app-brand justify-content-center">
                <Link to="/" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo">
                    <img src="./assets/img/logo.svg" alt="" height="100" width="100" />
                  </span>
                  <span className="app-brand-text demo text-body fw-bolder">Contact</span>
                </Link>
              </div>
              <h4 className="mb-2">Contact Us</h4>
              <p className="mb-4">Thanks for your feedback!</p>

              <form id="feedback-form" className="mb-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Enter your title."
                    autoFocus
                    {...register("title", { required: true })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="text" className="form-label">Text</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="text"
                    name="text"
                    rows={5}
                    placeholder="Enter your feedback."
                    {...register("text", { required: true })}
                  />
                </div>
                <div className="mb-3">
                  <button className="btn btn-primary d-grid w-100" type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
