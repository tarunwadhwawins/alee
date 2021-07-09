import React, { Component } from "react";
import { Grid, Modal, Button, Form } from "semantic-ui-react";

const Duration = [
	{ key: 'Weekly', value: 'Weekly', text: 'Weekly' },
	{ key: 'Monthly', value: 'Monthly', text: 'Monthly' },
	{ key: 'Yearly', value: 'Yearly', text: 'Yearly' },
]

class AddSubscription extends Component {
	constructor(props) {
		super(props);
		this.state = {
			AddSubscriptionStatus:false
		};
	  }

  render() {

    return (
		<Modal open={this.props.openModal} onClose={this.props.closeModal} size="small">
			<Modal.Header>Add Subscription</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Grid columns="2">
							<Grid.Column>
								<Form.Input label="Subscription Plan"/>
							</Grid.Column>
							<Grid.Column>
								<Form.Select label="Duration" placeholder="Select Duration" options={Duration}/>
							</Grid.Column>
							<Grid.Column>
								<Form.Input label="No. of Students"/>
							</Grid.Column>
							<Grid.Column>
								<Form.Input label="Price"/>
							</Grid.Column>
							<Grid.Column className='status'>
								<p>Status</p>
								<div className="statusToggle"> 
								<span>Inactive</span>
								<Form.Checkbox label="Active" toggle className="commonToggle" />
								</div>
							</Grid.Column>
							<Grid.Column width={16}>
								<Form.TextArea label="Description" rows="2"/>
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
  
  export default AddSubscription;