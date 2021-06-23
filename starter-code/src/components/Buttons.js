import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export class Buttons extends Component {
	render() {
		return (
			<>
				{
					this.props.booksData.length && this.props.booksData.map((book, idx) => (
						<div>
							<Button variant="primary"  onClick={()=>this.props.deleteMyBook(idx)}>Delete</Button>
						</div>
					))
				}
			</>
		)
}
}

export default Buttons;
