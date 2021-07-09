import React, { Component } from "react";
import { Grid, Modal, Button, Form } from "semantic-ui-react";

const Grade = [
	{ key: 'Grade 1', value: 'Grade 1', text: 'Grade 1' },
	{ key: 'Grade 2', value: 'Grade 2', text: 'Grade 2' },
	{ key: 'Grade 3', value: 'Grade 3', text: 'Grade 3' },
	{ key: 'Grade 4', value: 'Grade 4', text: 'Grade 4' },
	{ key: 'Grade 5', value: 'Grade 5', text: 'Grade 5' },
	{ key: 'Grade 6', value: 'Grade 6', text: 'Grade 6' },
	{ key: 'Grade 7', value: 'Grade 7', text: 'Grade 7' },
  ]

class AddStudent extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  SubAdminStatus:false
		};
	  }

  render() {

    return (
		<Modal open={this.props.openModal} onClose={this.props.closeModal} size="small">
			<Modal.Header>Add Student</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Grid columns="2">
							<Grid.Column>
								<Form.Input label="Name"/>
							</Grid.Column>
							<Grid.Column>
								<Form.Input label="Email"/>
							</Grid.Column>
							<Grid.Column>
								<Form.Select label="Grade" options={Grade} />
							</Grid.Column>
							<Grid.Column className='status'>
								<p>Status</p>
								<div className="statusToggle"> 
								<span>Inactive</span>
								<Form.Checkbox label="Active" toggle className="commonToggle" />
								</div>
							</Grid.Column>
						</Grid>
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
  
  export default AddStudent;