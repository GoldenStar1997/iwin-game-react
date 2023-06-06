import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { useForm } from 'react-hook-form';
import './assets/login.scss';

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
			.catch((error) => console.log(error));
	};

	const password = React.useRef({});
	password.current = watch('password', '');

	return (
		<div className='auth-container'>
			<div>
				<p className="title">Registration Form</p>

				<form className="login-form" onSubmit={handleSubmit(onSubmit)}>
					<input type="text" placeholder="Name" {...register('name', { required: true })} />
					{errors.name && <span style={{ color: 'red' }}> *Name* is mandatory </span>}

					<input type="email" placeholder="Email" {...register('email', { required: true })} />
					{errors.email && <span style={{ color: 'red' }}> *Email* is mandatory </span>}

					<input
						type="password"
						placeholder="Password"
						{...register('password', { required: true })}
					/>
					{errors.password && <span style={{ color: 'red' }}> *Password* is mandatory </span>}

					<input
						type="password"
						placeholder="Confirm Password"
						{...register('confirm_password', {
							required: true,
							validate: (value) => value === password.current || 'Passwords do not match'
						})}
					/>
					{errors.confirm_password && (
						<span style={{ color: 'red' }}>{errors.confirm_password.message}</span>
					)}

					<input type={'submit'} style={{ backgroundColor: '#a1eafb' }} />
				</form>

				<Link to="/login">Login</Link>
			</div>
		</div>
	);
};

export default Register;
