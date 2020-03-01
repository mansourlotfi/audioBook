import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: 500
		}
	}
}));

function Dashboard() {
	const classes = useStyles();
	const [ values, setValues ] = useState({
		userName: 'topsocialmedia',
		person: []
	});
	console.warn(values.person.edge_followed_by);

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
		// console.warn(event.target.value);
	};
	const handleClick = async () => {
		await axios
			.get(`https://www.instagram.com/${values.userName}/?__a=1`)
			// .then((res) => console.log(JSON.stringify(res.data)))
			.then((res) => {
				const personres = res.data.graphql.user;
				setValues({ ...values, person: personres });
			});
	};

	useEffect(
		() => {
			setTimeout(() => {
				console.warn(values.person);
			}, 20);
		},
		[ values ]
	);

	return (
		<div style={{ textAlign: 'center', padding: '50px 100px 50px 100px' }}>
			<h2 style={{ textAlign: 'center', padding: '10px 100px 50px 100px', color: 'blue' }}>Dashboard</h2>
			<h3 style={{ paddingBottom: '60px' }}>Enter instagram id here to get detaile</h3>

			<form className={classes.root} noValidate autoComplete="off" fullWidth>
				<TextField
					id="standard-basic"
					label="Instagram ID"
					InputProps={{
						startAdornment: <InputAdornment position="start">https://www.instagram.com/</InputAdornment>
					}}
					value={values.userName}
					onChange={handleChange('userName')}
				/>
			</form>

			<Button variant="contained" color="primary" onClick={handleClick}>
				Check This Account
			</Button>

			<div>
				<h3>نام</h3>
				<TextField id="standard-basic" value={values.person.full_name} />
				<h3>عکس پروفایل</h3>
				<img src={values.person.profile_pic_url} alt="" />
				<h3>بیوگرافی</h3>
				<p>{values.person.biography}</p>
				<h3>وضعیت پروفایل</h3>
				<p>
					{
						values.person.is_private ? 'پرایویت' :
						'باز'}
				</p>
				<h3>تعداد فالوئرها</h3>
				<p>{JSON.stringify(values.person.edge_followed_by)}</p>
				{/* <p>{values.person.edge_followed_by.count} </p> */}

				<h3>تعداد فالوئینگ ها</h3>
				<p>{JSON.stringify(values.person.edge_follow)}</p>
			</div>
		</div>
	);
}

export default Dashboard;
