import React from "react";
import { Grid, Modal, Button, Form } from "semantic-ui-react";


function AddSubAdmin(props) {


    return (
		<Modal open={props.openModal} onClose={props.closeModal} size="small">
			<Modal.Header>Add Sub-Admin</Modal.Header>
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
								<Form.Input label="Username"/>
							</Grid.Column>
							<Grid.Column>
								<Form.Input label="Password"/>
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
				<Button className="secondaryBtn"  onClick={props.closeModal}>Cancel</Button>
				<Button className="primaryBtn"  onClick={props.closeModal}>Save</Button>
			</Modal.Actions>
		</Modal>
		);
  }
  
  export default AddSubAdmin;