import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Register = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch
	} = useForm();

	const onSubmit = async (data) => {
		await axios
			.post('http://localhost:4000/auth/register', data)
			.then((res) => {
				if (res) navigate('/home');
			})
			.catch((error) => { throw error; });
	};

	const password = React.useRef({});
	password.current = watch('password', '');

	return (
		<section id="login-reg">
			<div className="overlay pb-120">
				<div className="container">
					<div className="top-area">
						<div className="row d-flex align-items-center">
							<div className="col-sm-5 col">
								<Link className="back-home" to="/">
									<img src="./assets/images/left-icon.png" alt="" />
									Back To iWinGames
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
								<h4>Let's get started</h4>
								<div className="form-area">
									<form className="login-form" onSubmit={handleSubmit(onSubmit)}>
										<div className="form-group">
											<label>Email</label>
											<input
												type="text"
												placeholder="Name"
												{...register('name', { required: true })}
											/>
											{errors.name && <span> *Name* is mandatory </span>}
										</div>
										<div className="form-group">
											<label>Username</label>
											<input
												type="email"
												placeholder="Email"
												{...register('email', { required: true })}
											/>
											{
												errors.email && <span> *Email* is mandatory </span>
											}
										</div>
										<div className="form-group">
											<label>Password</label>
											<input
												type="password"
												placeholder="Password"
												{...register('password', { required: true })}
											/>
											{
												errors.password && <span> *Password* is mandatory </span>
											}
										</div>
										<div className="form-group">
											<label>Confirm Password</label>
											<input
												type="password"
												placeholder="Confirm Password"
												{...register('confirm_password', {
													required: true,
													validate: (value) => value === password.current || 'Passwords do not match'
												})}
											/>
											{
												errors.confirm_password && <span>{errors.confirm_password.message}</span>
											}
										</div>
										<button type="submit" className="cmn-btn">Sign Up Free</button>
									</form>
									<div className="or">
										<p>OR</p>
									</div>
									<div className="sign-in">
										<p>Sign in with your</p>
									</div>
									<div className="reg-with">
										<div className="social-area d-flex justify-content-center">
											<Link to="#"><img src="./assets/images/social-icon-1.png" alt="" /></Link>
											<Link className="twitch" to="#"><img src="./assets/images/social-icon-2.png" alt="" /></Link>
											<Link className="google" to="#"><img src="./assets/images/social-icon-3.png" alt="" /></Link>
										</div>
									</div>
									<div className="account">
										<p>Already have an account? <Link to="/login">Sign In</Link></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >
		</section >
	)
};

export default Register;
