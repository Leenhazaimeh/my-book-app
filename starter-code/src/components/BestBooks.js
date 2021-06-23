import React from 'react';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";
import BookFormModal from './BookFormModal';
import Carousel from 'react-bootstrap/Carousel'


class BestBooks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userEmail: this.props.auth0.user.email,
			serverUrl: process.env.REACT_APP_SERVER_URL,
			booksData: [],
			bookName: '',
			bookNameUpdate:'',
			showUpdatForm:false,
			index:0,

		}
	}
	createMyBook=(e) => {
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
	updateBookName=(bookName) => {
		this.setState({bookName})
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

	render() {
		return (
			<>
			<BookFormModal
			createMyBook={this.createMyBook} 
			updateBookName={this.updateBookName}/>



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
											
											<button onClick={this.deleteMyBook(idx)} >Delete Book</button>


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



