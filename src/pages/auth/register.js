import React from "react";
import { useForm } from "react-hook-form";
import "./assets/login.css";

export default () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = (data) => {
    console.log(data)
  };

	return (
		<>
			<p className="title">Registration Form</p>

			<form className="login-form" onSubmit={handleSubmit(onSubmit)}>
				<input type="text" placeholder="Name" {...register("name", { required: true })} />
				{errors.name && <span style={{ color: "red" }}> *Name* is mandatory </span>}

				<input type="email" placeholder="Email" {...register("email", { required: true })} />
				{errors.email && <span style={{ color: "red" }}> *Email* is mandatory </span>}

				<input type="password" placeholder="Password" {...register("password", { required: true })} />
				{errors.password && <span style={{ color: "red" }}> *Password* is mandatory </span>}

				<input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
			</form>
		</>
	);
}