import React, { Component } from "react";
import { Modal, Button, Form } from "semantic-ui-react";


class AddChapterSummary extends Component {
  render() {

    return (
		<Modal open={this.props.openModal} onClose={this.props.closeModal} size="small">
			<Modal.Header>Add Chapter Summary</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Form.TextArea rows="4" placeholder="Chapter Summary" />
					</Form>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button className="secondaryBtn"  onClick={this.props.closeModal}>Cancel</Button>
				<Button className="primaryBtn"  onClick={this.props.closeModal}>Save</Button>
			</Modal.Actions>
		</Modal>
		);
	}
  }
  
  export default AddChapterSummary;