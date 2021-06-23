import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

export class BookFormModal extends Component {


	render() {
		return (

			<>
				<Modal show={this.props.show} onHide={this.props.hidingTheModal}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form onSubmit={(e) => this.props.createMyBook(e)}>
							<Row className="align-items-center">
								<Col>
									<Form.Control type="text" placeholder="Enter the book name" onChange={(e) => this.props.updateBookName(e.target.value)} />
									<Form.Control type="text" placeholder="Enter the description" onChange={(e) => this.props.updateBookDescription(e.target.value)} />
									<Form.Control type="text" placeholder="Enter the status" onChange={(e) => this.props.updateBookStatus(e.target.value)} />
								</Col>
								<Col xs="auto" className="my-1">
									<Button type="submit" >Add Book......</Button>
								</Col>
							</Row>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.props.hidingTheModal}>
							Preview
						</Button>
					</Modal.Footer>
				</Modal>

			</>
		)
	}
}
export default BookFormModal;