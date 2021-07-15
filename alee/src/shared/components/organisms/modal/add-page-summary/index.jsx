import React, { Component } from "react";
import { Grid, Modal, Button, Form } from "semantic-ui-react";


class AddPageSummary extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  SubAdminStatus:false
		};
	  }

  render() {

    return (
		<Modal open={this.props.openModal} onClose={this.props.closeModal} size="small">
			<Modal.Header>Add Book Summary</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Form.TextArea rows="4" placeholder="Book Summary" />
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
  
  export default AddPageSummary;