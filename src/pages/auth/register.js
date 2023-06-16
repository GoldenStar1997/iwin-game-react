import React from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { API_URL } from '../../utils/url';

export default function Register ({ invitedBy }) {

	const navigate = useNavigate();
	const { id } = useParams();
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch
	} = useForm();

	const onSubmit = async ( form_data ) => {
		const data = {
			...form_data,
			affiliate: invitedBy ? id : "",
		}
		await axios
			.post(`${API_URL}/auth/register`, data)
			.then((res) => {
				if (res.data.success) {
					navigate('/')
				} else {
					alert(res.data.error)
				}
			})
			.catch((error) => { throw error; });
	};

	const password = React.useRef({});
	password.current = watch('password', '');

	return (
		<section id="login-reg">
			<div className="overlay pb-120">
				<div className="container">
					<div className="row pt-120 d-flex justify-content-center">
						<div className="col-lg-6">
							<div className="login-reg-main text-center">
								<h4>Sign Up</h4>
								<div className="form-area">
									<form className="login-form" onSubmit={ handleSubmit(onSubmit) }>
										<div className="form-group">
											<label>Email</label>
											<input
												type="Email"
												placeholder="Email"
												{...register('email', { required: true })}
											/>
											{errors.name && <span> *Email* is mandatory </span>}
										</div>
										<div className="form-group">
											<label>Username</label>
											<input
												type="text"
												placeholder="Username"
												{...register('name', { required: true })}
											/>
											{
												errors.email && <span> *Username* is mandatory </span>
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
										<button type="submit" className="cmn-btn">Sign Up as Player</button>
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
										<p>Already have an account? <Link to="/">Sign In</Link></p>
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
