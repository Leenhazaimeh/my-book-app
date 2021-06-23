

// import React from 'react';
// import axios from 'axios';
// import { withAuth0 } from "@auth0/auth0-react";
// import BookFormModal from './BookFormModal';
// import Carousel from 'react-bootstrap/Carousel';
// import Button from 'react-bootstrap/Button';
// import UpdateFormModal from './UpdateFormModal';

// class BestBooks extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			userEmail: this.props.auth0.user.email,
// 			serverUrl: process.env.REACT_APP_SERVER_URL,
// 			booksData: [],
// 			bookName: '',
// 			bookNameUpdate: '',
// 			showUpdatForm: false,
// 			index: 0,
// 			bookUpdateName: '',
// 			show: false,
// 			description: '',
// 			status: ''
// 		}
// 	}

// 	createMyBook = (e) => {
// 		e.preventDefault()

// 		const reqBody = {
// 			bookName: this.state.bookName,
// 			description: this.state.description,
// 			status: this.state.status,
// 			userEmail: this.state.userEmail
// 		}
// 		axios.post(`${this.state.serverUrl}/book`, reqBody).then(response => {
// 			this.setState({
// 				booksData: response.data.books
// 			})
// 		}).catch(error =>
// 			alert(error.message)
// 		)
// 	}

// 	updateBookName = (bookName, ) => { this.setState({bookName}) }
// 	updateBookDescription = (description) => {this.setState({description})}
// 	updateBookStatus = (status) => {this.setState({status})}

// 	updateBookNameFrom = (bookName) => { this.setState({ bookUpdateName: bookName })}
// 	updateBookDescriptionFrom = (description) => { this.setState({ updateBookDescription: description}) }
// 	updateBookStatusFrom = (status) => { this.setState({ updateBookStatus: status})}


// 	deleteMyBook = (index) => {
// 		console.log('fun');
// 		axios.delete(`${this.state.serverUrl}/book/${index}?email=${this.state.userEmail}`).then(response => {
// 			this.setState({
// 				booksData: response.data.books,
// 				showUpdateForm: false
// 			});
// 		}).catch(error =>
// 			alert(error.message)
// 		)
// 	}

// 	updateMyBook = (e) => {
// 		e.preventDefault();
// 		const reqBody = {
// 			bookName: this.state.bookUpdateName,
// 			description: this.state.description,
// 			status: this.state.status,
// 			userEmail: this.state.userEmail
// 		}

// 		axios.put(`${this.state.serverUrl}/book/${this.state.bookIndex}`, reqBody).then(response => {
// 			this.setState({
// 				booksData: response.data.books
// 			})
// 		}).catch(error =>
// 			alert(error.message)
// 		)
// 	}

// 	showUpdateForm = (bookObject, idx) => this.setState({ showUpdateForm: !this.state.showUpdateForm, bookUpdateName: bookObject.name, 
// 		description: bookObject.description, status: bookObject.status, bookIndex: idx })


// 	componentDidMount = () => {
// 		axios.get(`${this.state.serverUrl}/books?email=${this.state.userEmail}`).then(response => {
// 			this.setState({
// 				booksData: response.data.books
// 			})
// 		}).catch(
// 			error => {
// 				alert(error.message);
// 			}
// 		);
// 		console.log(this.state.userEmail);
// 		console.log(this.state.booksData);
// 	}

// 	showTheModal = () => {
// 		this.setState({
// 			show: true
// 		})
// 	}

// 	hidingTheModal = () => {
// 		this.setState({
// 			show: false
// 		})
// 	}


// 	render() {
// 		return (
// 			<>

// 			<div>
// 			<Button variant="primary" onClick={this.showTheModal}>Add new book</Button>
// 			<Button variant="primary" onClick={this.showTheModal}>Update</Button>

// 			</div>
// 				<BookFormModal
// 					createMyBook={this.createMyBook}
// 					updateBookName={this.updateBookName}
// 					showTheModal={this.showTheModal}
// 					hidingTheModal={this.hidingTheModal}
// 					show={this.state.show}
// 					updateBookDescription={this.updateBookDescription}
// 					updateBookStatus={this.updateBookStatus} 

// 				/>
// 				<UpdateFormModal
// 					updateMyBook={this.updateMyBook}
// 					bookUpdateName={this.state.bookUpdateName}
// 					show={this.state.show}
// 					showTheModal={this.showTheModal}
// 					hidingTheModal={this.hidingTheModal}
// 					updateBookNameFrom={this.updateBookNameFrom}
// 					updateBookDescriptionForm={this.updateBookDescriptionForm}
// 					updateBookStatusForm={this.updateBookStatusForm}
// 				/>

// 				<h2>My Books</h2>

// 				{this.state.booksData.length > 0 &&
// 					this.state.booksData.map((book, idx) => {
// 						return (
// 							<>
// 								<Carousel>
// 									<Carousel.Item>
// 										<img
// 											className="d-block w-100"
// 											src="https://i.pinimg.com/originals/1d/00/88/1d008873c346da889af1fc4cb50384c7.jpg"
// 											alt="First slide"
// 										/>
// 										<div key={idx}>
// 											<Carousel.Caption>
// 												<h3>{book.name}</h3>
// 												<p>{book.description}</p>
// 												<p>{book.status}</p>
// 												<div>
// 													<Button variant="primary" onClick={() => this.deleteMyBook(idx)}>Delete</Button>
// 													<Button variant="primary" onClick={() => this.showUpdateForm(book, idx)}>Update</Button>
// 												</div>
// 											</Carousel.Caption>
// 										</div>
// 									</Carousel.Item>
// 								</Carousel>

// 							</>
// 						);
// 					}
// 					)}
// 			</>
// 		)
// 	}
// }

// export default withAuth0(BestBooks);


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
			bookUpdateName: '',
			bookUpdateDescription: '',
			bookUpdateStatus: '',
			show: false,
			description: '',
			status: ''
		}
	}



	updateBookName = (bookName,) => { this.setState({ bookName }) }
	updateBookDescription = (description) => { this.setState({ description }) }
	updateBookStatus = (status) => { this.setState({ status }) }


	updateBookNameFromTheModal = (bookName) => { this.setState({ bookUpdateName: bookName }) }
	updateBookDescFromTheModal = (description) => { this.setState({ bookUpdateDescription: description }) }
	updateBookStatusFromTheModal = (status) => { this.setState({ bookUpdateStatus: status }) }


	showTheModal = () => {
		this.setState({
			show: true
		})
	}

	hidingTheModal = () => {
		this.setState({
			show: false
		})
	}

	createMyBook = (e) => {
		e.preventDefault()

		const reqBody = {
			bookName: this.state.bookName,
			description: this.state.description,
			status: this.state.status,
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
			description: this.state.bookUpdateDescription,
			status: this.state.bookUpdateStatus,
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

	showUpdateForm = (bookObject, idx) => this.setState({
		showUpdateForm: !this.state.showUpdateForm, bookUpdateName: bookObject.name,
		bookUpdateDescription: bookObject.description, bookUpdateStatus: bookObject.status, bookIndex: idx
	})


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
				<div>
					<Button variant="primary" onClick={this.showTheModal}>Add new book</Button>
				</div>
				<BookFormModal
					createMyBook={this.createMyBook}
					updateBookName={this.updateBookName}
					showTheModal={this.showTheModal}
					hidingTheModal={this.hidingTheModal}
					show={this.state.show}
					updateBookDescription={this.updateBookDescription}
					updateBookStatus={this.updateBookStatus}

				/>
				<UpdateFormModal
					updateMyBook={this.updateMyBook}
					updateBookNameFromTheModal={this.updateBookNameFromTheModal}
					bookUpdateName={this.state.bookUpdateName}
					bookUpdateDescription={this.state.bookUpdateDescription}
					bookUpdateStatus={this.state.bookUpdateStatus}
					updateBookDescFromTheModal={this.updateBookDescFromTheModal}
					updateBookStatusFromTheModal={this.updateBookStatusFromTheModal}
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

