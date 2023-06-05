import axios from 'axios';
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';
import "./assets/login.css";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // login
  const onSubmit = async (data) => {
    await axios.post("http://localhost:4000/auth/login", data)
      .then(res => {
        console.log(res)
        if (res.data.accessToken) navigate('/home');
      })
      .catch(error => console.log(error))
  };

  // google login
  const gLogin = useGoogleLogin({
    onSuccess: async (user) => {
      await axios.post("http://localhost:4000/auth/google-login", {
        access_token: user.access_token
      })
        .then(res => {
          console.log(res)
          if (res.data.success) navigate('/home');
          else {
            if (window.confirm(res.data.error + "! Register?"))
              navigate('/register')
          }
        })
        .catch(error => console.log(error))
    },
    onError: (error) => console.log('ReqControl Failed:', error)
  });

  const mLogin = async () => {
    
  };


  return (
    <>
      <div className="btn-group">
        <button onClick={gLogin} className="btn btn-sm btn-primary"> Login with Google</button>
        <button onClick={mLogin} className="btn btn-sm btn-danger"> Login with MetaMask</button>
      </div>
      <br />
      <p className="title">Login Form</p>

      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

        <input type="text" placeholder="User Name" {...register("name", { required: true })} />
        {errors.name && <span style={{ color: "red" }}> *User Name* is mandatory </span>}

        <input type="password" placeholder="Password"  {...register("password", { required: true })} />
        {errors.password && <span style={{ color: "red" }}> *Password* is mandatory </span>}

        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
      <Link to='/register' type="">register?</Link>
    </>
  );
}
export default Login;
