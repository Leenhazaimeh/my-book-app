import React from 'react';



import axios from 'axios';


class BestBooks extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
           
            serverUrl: process.env.REACT_APP_SERVER_URL,
            booksData: []
        }
    }

    componentDidMount = () => {
        axios.get(`${this.state.serverUrl}/books?email=${this.state.userEmail}`).then(response => {
            this.setState({
                booksData: response.data[0].books
            })
        }).catch(
            error => {
                alert(error.message);
            }
        );
    }
    render() {
        return (

            <>
                <h2>My Books</h2>
                {this.state.booksData.length && this.state.booksData.map((book, idx) => (
                    <div key={idx}>
                        {book.name}
                        {book.description}
                        {book.status}
                    </div>
                ))}
            </>
        )
    }
}

export default BestBooks;



