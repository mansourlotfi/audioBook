import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import { makeStyles } from '@material-ui/core/styles';

import './entryPage.css';

export default function EntryPage() {
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
			<div className="container2" style={{ padding: 100 }}>
				<ul style={{ color: 'white' }}>
					{books.map((book) => (
						<li>
							<img src={book.download_url} alt="books" />
							<br />
							{book.author}
						</li>
					))}
				</ul>
			</div>

			<Footer />
		</div>
	);
}
