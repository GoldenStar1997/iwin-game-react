import axios from 'axios';
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google'

import "./assets/login.css";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await axios.post("http://localhost:4000/auth/login", data)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  };

  // google login
  const gLogin = useGoogleLogin({
    onSuccess: (user) => {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        }).then((res) => {
          console.log(res)
        }).catch((err) => console.log(err));
    },
    onError: (error) => console.log('ReqControl Failed:', error)
  });
  return (
    <>
      <div className="btn-group">
        <button onClick={gLogin} className="btn btn-sm btn-primary"> Login with Google</button>
        <button onClick={gLogin} className="btn btn-sm btn-danger"> Login with Facebook</button>
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
