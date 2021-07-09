import React, { Component } from "react";
import {  Modal, Button, Form, Grid } from "semantic-ui-react";
import {Link} from "../../../../functional/global-import"


const Teacher = [
	{ key: 'Jane Doe', value: 'Jane Doe', text: 'Jane Doe' },
	{ key: 'Michael Smith', value: 'Michael Smith', text: 'Michael Smith' },
	{ key: 'Maria Garcia', value: 'Maria Garcia', text: 'Maria Garcia' },
]
const Template = [
	{ key: 'Shared text', value: 'Shared text', text: 'Shared text' },
	{ key: 'Readers workshop', value: 'Readers workshop', text: 'Readers workshop' },
	{ key: 'Writers workshop', value: 'Writers workshop', text: 'Writers workshop' },
	{ key: 'Interactive Read aloud', value: 'Interactive Read aloud', text: 'Interactive Read aloud' },
]


class AddAssignTemplate extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  AssignStatus:false
		};
	  }	
	
  render() {

    return (
		<Modal open={this.props.openModal} onClose={this.props.closeModal} size="tiny">
			<Modal.Header>Assign Template</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Grid>
							<Grid.Column width={8}>
								<Form.Select label="Teacher" placeholder="Select Teacher" options={Teacher}/>
							</Grid.Column>
							<Grid.Column width={8}>
								<Form.Select label="Template" placeholder="Select Template" options={Template}/>
							</Grid.Column>
							<Grid.Column width={8}  className='status'>
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
				<Button className="primaryBtn"  onClick={this.props.closeModal}>Confirm</Button>
			</Modal.Actions>
		</Modal>
		);
	}
  }
  
  export default AddAssignTemplate;