import React from 'react';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";
import Carousel from 'react-bootstrap/Carousel'


class BestBooks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userEmail: this.props.auth0.user.email,
			serverUrl: process.env.REACT_APP_SERVER_URL,
			booksData: []
		}
	}

	componentDidMount = () => {
		axios.get(`${this.state.serverUrl}/books?email=${this.state.userEmail}`).then(response => {
			this.setState({
				booksData: response.data.books
			})
		}).catch(
			error => {
				alert(error.message);
			}
		);
		console.log(this.state.userEmail);
		console.log(this.state.booksData);
	}

	render() {
		return (
			<>
				<h2>My Books</h2>

				{this.state.booksData.length > 0 &&
					this.state.booksData.map((book, idx) => {
						return (
							<>
								<Carousel>

									<Carousel.Item>
										<img
											className="d-block w-100"
											src="https://i.pinimg.com/originals/1d/00/88/1d008873c346da889af1fc4cb50384c7.jpg"
											alt="First slide"
										/>
										<div key={idx}>
											<Carousel.Caption>
												<h3>{book.name}</h3>
												<p>{book.description}</p>
												<p>{book.status}</p>
											</Carousel.Caption>


										</div>
									</Carousel.Item>
								</Carousel>

							</>
						);
					}
					)}
			</>
		)
	}
}

export default withAuth0(BestBooks);



