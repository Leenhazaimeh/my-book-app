import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class BookFormModal extends Component {
	render() {
		return (
			<>
				<Form onSubmit={(e) => this.props.createMyBook(e)}>
					<Row className="align-items-center">
						<Col>
							<Form.Control type="text" placeholder="Enter the book name" value="" onChange={(e) => this.props.updateBookName(e.target.value)} />
						</Col>
						<Col xs="auto" className="my-1">
							<Button type="submit" >Add Book......</Button>
						</Col>
					</Row>
				</Form>
			</>
		)
	}
}
export default BookFormModal;