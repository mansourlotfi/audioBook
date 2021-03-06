import React from 'react';
import clsx from 'clsx';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Router from '../../router';
//import { useAuth } from '../../context/auth';
import './drawer.scss';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	},

	search: {
		float: 'right',
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto'
		}
	},
	searchIcon: {
		width: theme.spacing(7),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 120,
			'&:focus': {
				width: 200
			}
		}
	}
}));

const NamesList = () => (
	<div>
		<ul>
			{Router.map((items, index) => (
				<Link to={items.path}>
					<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary={items.name} />
					</ListItem>
				</Link>
			))}
		</ul>
	</div>
);

export default function PersistentDrawerLeft(props) {
	const mystyle = {
		padding: '10px',
		fontFamily: 'Arial',
		display: 'flex',
		marginLeft: 'auto',
		alignItems: 'center'
	};
	const classes = useStyles();
	const theme = useTheme();
	const [ open, setOpen ] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	//clear tokens
	// const { setAuthTokens } = useAuth();
	// function logOut() {
	// 	setAuthTokens();
	// }

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap />
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
					<div style={mystyle}>
						<div style={{ width: 200, marginRight: 10, atextAlign: 'center' }} />
						<Button color="inherit" component={Link} to={'/rtl'} style={{ paddingRight: 20 }}>
							persian
						</Button>
						<Button color="inherit" component={Link} to={'/home'} style={{ paddingRight: 20 }}>
							english
						</Button>
						<Button component={Link} to={'/'} color="inherit">
							sign out
						</Button>
						{/* <Button onClick={logOut} color="inherit">
							sign out
						</Button> */}
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				role="presentation"
				open={open}
				transitionDuration={500}
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{
							theme.direction === 'ltr' ? <ChevronLeftIcon /> :
							<ChevronRightIcon />}
					</IconButton>
				</div>
				<Divider />
				<List>
					{/* imported router file */}
					<NamesList />
				</List>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open
				})}
				//i render app component here so shift content work fine but after separate layout configuration its a problem
			>
				{props.children}
			</main>
		</div>
	);
}
