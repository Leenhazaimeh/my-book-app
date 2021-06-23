import React, { Component } from 'react'
export class BookFormModal extends Component {
    render() {
        return (
            <form onSubmit={(e) => this.props.createMyBook(e)}>
                <label>Book Name</label>
                <input onChange={(e) => this.props.updateBookName(e.target.value)}></input>
                <input type='submit' value="Add book" />
            </form>
        )
    }
}
export default BookFormModal ;