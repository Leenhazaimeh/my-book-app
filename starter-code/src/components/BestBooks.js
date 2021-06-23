import React from 'react';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";
import BookFormModal from './BookFormModal';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import UpdateFormModal from './UpdateFormModal';

class BestBooks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userEmail: this.props.auth0.user.email,
			serverUrl: process.env.REACT_APP_SERVER_URL,
			booksData: [],
			bookName: '',
			bookNameUpdate: '',
			showUpdatForm: false,
			index: 0,
			bookUpdateName: ''
		}
	}

	createMyBook = (e) => {
		e.preventDefault()

		const reqBody = {
			bookName: this.state.bookName,
			userEmail: this.state.userEmail
		}
		axios.post(`${this.state.serverUrl}/book`, reqBody).then(response => {
			this.setState({
				booksData: response.data.books
			})
		}).catch(error =>
			alert(error.message)
		)
	}

	updateBookName = (bookName) => { this.setState({ bookName }) }
	updateBookNameFromTheModal = (bookName) => { this.setState({ bookUpdateName: bookName }) }



	deleteMyBook = (index) => {
		console.log('fun');
		axios.delete(`${this.state.serverUrl}/book/${index}?email=${this.state.userEmail}`).then(response => {
			this.setState({
				booksData: response.data.books,
				showUpdateForm: false
			});
		}).catch(error =>
			alert(error.message)
		)
	}

	updateMyBook = (e) => {
		e.preventDefault();
		const reqBody = {
			bookName: this.state.bookUpdateName,
			userEmail: this.state.userEmail
		}

		axios.put(`${this.state.serverUrl}/book/${this.state.bookIndex}`, reqBody).then(response => {
			this.setState({
				booksData: response.data.books
			})
		}).catch(error =>
			alert(error.message)
		)
	}

	showUpdateForm = (bookObject, idx) => this.setState({ showUpdateForm: !this.state.showUpdateForm, bookUpdateName: bookObject.name, bookIndex: idx })


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
				<BookFormModal
					createMyBook={this.createMyBook}
					updateBookName={this.updateBookName}
				/>
				<UpdateFormModal
					updateMyBook={this.updateMyBook}
					updateBookNameFromTheModal={this.updateBookNameFromTheModal}
					bookUpdateName={this.state.bookUpdateName}
				/>

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
												<div>
													<Button variant="primary" onClick={() => this.deleteMyBook(idx)}>Delete</Button>
													<Button variant="primary" onClick={() => this.showUpdateForm(book, idx)}>Update</Button>
												</div>
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



