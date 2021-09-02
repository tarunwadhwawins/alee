import React from "react";
import {  Modal, Button, Form, Grid } from "semantic-ui-react";


const School = [
	{ key: 'Stanton College Preparatory School', value: 'Stanton College Preparatory School', text: 'Stanton College Preparatory School' },
	{ key: 'Gilbert Classical Academy', value: 'Gilbert Classical Academy', text: 'Gilbert Classical Academy' },
	{ key: 'Liberal Arts and Science Academy High School', value: 'Liberal Arts and Science Academy High School', text: 'Liberal Arts and Science Academy High School' },
]
const Teacher = [
	{ key: 'All', value: 'All', text: 'All' },
	{ key: 'Jane Doe', value: 'Jane Doe', text: 'Jane Doe' },
	{ key: 'Michael Smith', value: 'Michael Smith', text: 'Michael Smith' },
	{ key: 'Maria Garcia', value: 'Maria Garcia', text: 'Maria Garcia' },
]
const Grade = [
	{ key: '5th', value: '5th', text: '5th' },
	{ key: '6th', value: '6th', text: '6th' },
	{ key: '7th', value: '7th', text: '7th' },
	{ key: '8th', value: '8th', text: '8th' },
	{ key: '9th', value: '9th', text: '9th' },
	{ key: '10th', value: '10th', text: '9th' },
]
const Template = [
	{ key: 'All', value: 'All', text: 'All' },
	{ key: 'Shared text', value: 'Shared text', text: 'Shared text' },
	{ key: 'Readers workshop', value: 'Readers workshop', text: 'Readers workshop' },
	{ key: 'Writers workshop', value: 'Writers workshop', text: 'Writers workshop' },
	{ key: 'Interactive Read aloud', value: 'Interactive Read aloud', text: 'Interactive Read aloud' },
]

function AddAssignTemplate(props) {
	 
    return (
		<Modal open={props.openModal} onClose={props.closeModal} size="tiny">
			<Modal.Header>Assign Template</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Grid>
							<Grid.Column width={8}>
								<Form.Select label="School" placeholder="Select School" options={School}/>
							</Grid.Column>
							<Grid.Column width={8}>
								<Form.Select multiple label="Teacher" placeholder="Select Teacher" options={Teacher}/>
							</Grid.Column>
							<Grid.Column width={8}>
								<Form.Select label="Grade" placeholder="Select Grade" options={Grade}/>
							</Grid.Column>
							<Grid.Column width={8}>
								<Form.Select multiple label="Template" placeholder="Select Template" options={Template}/>
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
				<Button className="secondaryBtn"  onClick={props.closeModal}>Cancel</Button>
				<Button className="primaryBtn"  onClick={props.closeModal}>Confirm</Button>
			</Modal.Actions>
		</Modal>
		);
  }
  
  export default AddAssignTemplate;