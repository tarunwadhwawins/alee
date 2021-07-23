import React from "react";
import {  Modal, Button, Form, Grid } from "semantic-ui-react";


const type = [
	{ key: 'Standards', value: 'Standards', text: 'Standards' },
	{ key: 'Comprehension Strategies', value: 'Comprehension Strategies', text: 'Comprehension Strategies' },
	{ key: 'Values', value: 'Values', text: 'Values' },
	{ key: 'Literary Elements', value: 'Literary Elements', text: 'Literary Elements' },
]

function AddTagsListing(props) {
    return (
		<Modal open={props.openModal} onClose={props.closeModal} size="tiny">
			<Modal.Header>Add New Tag</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Grid>
							<Grid.Column width={8}>
								<Form.Input label="Tag Name" />
							</Grid.Column>
							<Grid.Column width={8}>
							<Form.Select label="Type" placeholder="Select Type" options={type}/>
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
  
  export default AddTagsListing;