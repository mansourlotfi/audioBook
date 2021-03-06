import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const AntSwitch = withStyles((theme) => ({
	root: {
		width: 40,
		height: 16,
		padding: 0,
		display: 'flex'
	},
	switchBase: {
		padding: 2,
		color: theme.palette.grey[500],
		'&$checked': {
			transform: 'translateX(12px)',
			color: theme.palette.common.white,
			'& + $track': {
				opacity: 1,
				backgroundColor: '#52d869',
				borderColor: theme.palette.primary.main
			}
		}
	},
	thumb: {
		width: 12,
		height: 12,
		boxShadow: 'none'
	},
	track: {
		border: `1px solid ${theme.palette.grey[500]}`,
		borderRadius: 16 / 2,
		opacity: 1,
		backgroundColor: theme.palette.common.white
	},
	checked: {}
}))(Switch);

export default function CustomizedSwitches() {
	const [ state, setState ] = React.useState({
		checked: true
	});

	const handleChange = (name) => (event) => {
		setState({ ...state, [name]: event.target.checked });
	};

	return (
		<FormGroup>
			<Typography component="div">
				<Grid component="label" container alignItems="center" spacing={1}>
					<Grid item>English</Grid>
					<Grid item>
						<AntSwitch checked={state.checked} onChange={handleChange('checked')} value="checked" />
					</Grid>
					<Grid item>Persian</Grid>
				</Grid>
			</Typography>
		</FormGroup>
	);
}
