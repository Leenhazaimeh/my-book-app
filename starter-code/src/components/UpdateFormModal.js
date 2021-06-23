import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class UpdateFormModal extends Component {
	render() {
		return (
			<div>
				<Form onSubmit={(e) => this.props.updateMyBook(e)}>
					<Row className="align-items-center">
						<Col>
							<Form.Control type="text" placeholder="Update the book" value={this.props.bookUpdateName} onChange={(e) => this.props.updateBookNameFromTheModal(e.target.value)} />
						</Col>
						<Col xs="auto" className="my-1">
							<Button type="submit">Update Book</Button>
						</Col>
					</Row>
				</Form>
			</div>
		)
	}
}

export default UpdateFormModal
