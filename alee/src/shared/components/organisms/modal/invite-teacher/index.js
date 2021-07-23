import React from "react";
import { Grid, Dropdown, Modal,Button, Header, Form } from "semantic-ui-react";

const countryOptions = [
	{ key: 'James Smith', value: 'James Smith', text: 'James Smith' },
	{ key: 'Maria Garcia', value: 'Maria Garcia', text: 'Maria Garcia' },
	{ key: 'Michael Smith', value: 'Michael Smith', text: 'Michael Smith' },
	{ key: 'Harris Jericho', value: 'Harris Jericho', text: 'Harris Jericho' },
	{ key: 'Wes Eliezer', value: 'Wes Eliezer', text: 'Wes Eliezer' },
  ]

  function InviteTeacher(props) {



    return (
		<Modal open={props.openModal}onClose={props.closeModal} size="small">
				<Modal.Header>Invite Teacher</Modal.Header>
				<Modal.Content scrolling>
				<Modal.Description>
					<Grid>
						<Grid.Column width={16}>
							<Dropdown placeholder='Select Teacher' fluid search selection options={countryOptions}/>
						</Grid.Column>
						<Grid.Column width={16}>
							<Header as="h5">Do want to invite teacher?</Header>
							<Button  className="secondaryBtn">No</Button>
							<Button  className="primaryBtn">Yes</Button>
						</Grid.Column>
						<Grid.Column width={16}>
							<Form>
								<Form.Input label="Email Address" placeholder="Add email address here to invite teacher"/>
							</Form>
						</Grid.Column>
					</Grid>
				</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
				<Button className="secondaryBtn"  onClick={props.closeModal}>Cancel</Button>
				<Button className="primaryBtn"  onClick={props.closeModal}>Confirm</Button>
					</Modal.Actions>
			</Modal>
		);
  }
  
  export default InviteTeacher;