import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
//authentication
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/auth';

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1)
	},
	container: {
		textAlign: 'center',
		marginTop: '100px',
		direction: 'rtl'
	}
}));

export default function LoginModalContents() {
	const classes = useStyles();
	const [ isLoggedIn, setLoggedIn ] = useState(false);
	const [ isError, setIsError ] = useState(false);
	const [ userName, setUserName ] = useState('');
	const [ password, setPassword ] = useState('');
	const { setAuthTokens } = useAuth();

	function postLogin() {
		axios
			.post('https://www.somePlace.com/auth/login', {
				userName,
				password
			})
			.then((result) => {
				if (result.status === 200) {
					setAuthTokens(result.data);
					setLoggedIn(true);
				} else {
					setIsError(true);
				}
			})
			.catch((e) => {
				setIsError(true);
			});
	}

	if (isLoggedIn) {
		return <Redirect to="/home" />;
	}

	return (
		<div className={classes.container}>
			<p style={{ fontSize: 24, fontWeight: 700 }}>Sample login authentication ,click below link for login</p>
			<Link to="/home">
				<p>ورود به پنل کاربری </p>
			</Link>
			<TextField
				className={classes.margin}
				id="input-with-icon-textfield"
				label="نام کاربری"
				value={userName}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<AccountCircle />
						</InputAdornment>
					)
				}}
				onChange={(e) => {
					setUserName(e.target.value);
				}}
				style={{ margin: '40px' }}
			/>
			<br />
			<TextField
				className={classes.margin}
				id="input-with-icon-textfield"
				label="رمز"
				value={password}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<AccountCircle />
						</InputAdornment>
					)
				}}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
				style={{ margin: '40px' }}
			/>
			<br />
			<Button variant="contained" color="primary" onClick={postLogin}>
				ورود
			</Button>
			{isError && <p>The username or password provided were incorrect!</p>}
		</div>
	);
}
