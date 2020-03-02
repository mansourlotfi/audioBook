import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import LoginModalContents from './loginModalContents';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	paper: {
		position: 'absolute',
		width: 700,
		height: 500,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	}
}));

export default function SimpleModal(props) {
	const classes = useStyles();
	// getModalStyle is not a pure function, we roll the style only on the first render

	return (
		<div>
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				className={classes.modal}
				open={props.handleOpen}
				onClose={props.handleClose}
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 1000
				}}
			>
				<div className={classes.paper}>
					<LoginModalContents />
				</div>
			</Modal>
		</div>
	);
}
