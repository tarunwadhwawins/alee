import React from "react";
import {Modal, Button, Form } from "semantic-ui-react";



function AddPageSummary(props) {

    return (
		<Modal open={props.openModal} onClose={props.closeModal} size="small">
			<Modal.Header>Add Book Summary</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Form.TextArea rows="4" placeholder="Book Summary" />
					</Form>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button className="secondaryBtn"  onClick={props.closeModal}>Cancel</Button>
				<Button className="primaryBtn"  onClick={props.closeModal}>Save</Button>
			</Modal.Actions>
		</Modal>
		);
  }
  
  export default AddPageSummary;