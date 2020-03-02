import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import { makeStyles } from '@material-ui/core/styles';

import './entryPage.css';

const useStyles = makeStyles((theme) => ({
	root: {
		// display: 'flex',
		margin: 150
	},
	paper: {
		padding: theme.spacing(2),
		margin: 20,
		Width: 400,
		minWidth: 500
	},
	image: {
		width: 240,
		height: 240
	},
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%'
	}
}));

export default function EntryPage() {
	const classes = useStyles();

	const [ books, setBooks ] = useState([]);
	// state = {
	// 	books: []
	// };

	// componentDidMount() {
	// 	axios.get(`https://picsum.photos/v2/list`).then((res) => {
	// 		const books = res.data;
	// 		this.setState({ books });
	// 		console.warn(this.state.books);
	// 	});
	// }

	useEffect(() => {
		async function fetchData() {
			setBooks(await axios.get(`https://picsum.photos/v2/list`).then((res) => res.data));
		}
		fetchData();
	}, []);

	return (
		<div className="loginBody">
			<Header />
			{/* <div className="root">
					<GridList className="gridList" cols={2.5}>
						{this.state.books.map((book) => (
							<GridListTile key={book.download_url}>
								<img src={book.download_url} alt={book.url} />
								<GridListTileBar title={book.author} />
							</GridListTile>
						))}
					</GridList>
				</div> */}
			{/* <div className="container2" style={{ padding: 100 }}>
				<ul style={{ color: 'white' }}>
					{books.map((book) => (
						<li>
							<img src={book.download_url} alt="books" />
							<br />
							{book.author}
						</li>
					))}
				</ul>
			</div> */}

			<div className={classes.root}>
				{books.map((book) => (
					<Paper className={classes.paper} elevation={0}>
						<Grid container>
							<Grid item>
								<ButtonBase className={classes.image}>
									<img className={classes.img} alt={book.url} src={book.download_url} />
								</ButtonBase>
							</Grid>
							<Grid item xs={12} sm container>
								<Grid item xs container direction="column" spacing={2}>
									<Grid item xs tyle={{ padding: '15px' }}>
										<Typography
											gutterBottom
											variant="subtitle1"
											style={{
												paddingRight: '50px',
												fontFamily: 'yekan',
												fontSize: 24,
												fontWeight: 700
											}}
										>
											عنوان کتاب
										</Typography>
										<Typography
											variant="body2"
											gutterBottom
											style={{ padding: '15px', fontFamily: 'yekan', fontSize: 22 }}
										>
											لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
											طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
											لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
											بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
											آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
											بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
											زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود
											در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
											حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
											اساسا مورد استفاده قرار گیرد.
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											style={{ padding: '15px', fontFamily: 'yekan', fontSize: 22 }}
										>
											نویسنده:
											<br />
											{book.author}
											<br />
											گوینده: <br />
											{book.author}
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				))}
			</div>

			<Footer />
		</div>
	);
}
