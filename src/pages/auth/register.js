import React from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { API_URL } from '../../utils/url';


export default function Register({ invitedBy }) {

	const navigate = useNavigate();
	const { id } = useParams();
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch
	} = useForm();

	const onSubmit = async (form_data) => {
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
		<>
			<div className="container-xxl">
				<div className="authentication-wrapper authentication-basic container-p-y">
					<div className="authentication-inner">
						<div className="card">
							<div className="card-body">
								<div className="app-brand justify-content-center">
									<Link to="/" className="app-brand-link gap-2">
										<span className="app-brand-logo demo">
											<img src="../assets/img/logo.svg" alt="" height="100" width="100" />
										</span>
										<span className="app-brand-text demo text-body fw-bolder">Sneat</span>
									</Link>
								</div>
								<h4 className="mb-2">Register</h4>
								<p className="mb-4">Play the Advanture!</p>

								<form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
									<div className="mb-3">
										<label className="form-label">Username</label>	
										<input
											type="text"
											className="form-control"
											placeholder="Enter your username"
											autoFocus
											{...register('name', { required: true })}
										/>
									</div>
									<div className="mb-3">
										<label className="form-label">Email</label>
										<input
											type="email"
											className="form-control"
											placeholder="Enter your email"
											{...register('email', { required: true })}
										/>
									</div>
									<div className="mb-3 form-password-toggle">
										<label className="form-label">Password</label>
										<div className="input-group input-group-merge">
											<input
												type="password"
												className="form-control"
												placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
												aria-describedby="password"
												{...register('password', { required: true })}
											/>
											<span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
										</div>
									</div>

									<div className="mb-3">
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
											/>
											<label className="form-check-label">
												I agree to
												<Link to="">privacy policy & terms</Link>
											</label>
										</div>
									</div>
									<button className="btn btn-primary d-grid w-100">Sign up</button>
								</form>

								<p className="text-center">
									<span>Already have an account?</span>
									<Link to="/">
										<span>Sign in instead</span>
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div >
			</div >
		</>
	)
};
