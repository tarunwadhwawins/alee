import React from "react";
import { Grid, Modal, Button, Header } from "semantic-ui-react";

function BuyPlan(props) {
	return (
		<Modal open={props.openModal} onClose={props.closeModal} size="small" closeIcon>
			<Modal.Header>Upgrade Subscription</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Grid columns="3">
						<Grid.Column>
							<div className="buyPlan">
								<Header as="h4">Silver</Header>
								<p><span className="dollor">$</span> <span className="value">59</span> / month</p>
								<Button className="primaryBtn">Upgrade</Button>
							</div>
						</Grid.Column>
						<Grid.Column>
							<div className="buyPlan">
								<Header as="h4">Gold</Header>
								<p><span className="dollor">$</span> <span className="value">199</span> / quarterly</p>
								<Button className="primaryBtn">Upgrade</Button>
							</div>
						</Grid.Column>
						<Grid.Column>
							<div className="buyPlan">
								<Header as="h4">Platinum</Header>
								<p><span className="dollor">$</span> <span className="value">799</span> / year</p>
								<Button className="primaryBtn">Upgrade</Button>
							</div>
						</Grid.Column>
					</Grid>
				</Modal.Description>
			</Modal.Content>
			{/* <Modal.Actions>
				<Button className="secondaryBtn" onClick={props.closeModal}>Cancel</Button>
				<Button className="primaryBtn" onClick={props.closeModal}>Save</Button>
			</Modal.Actions> */}
		</Modal>
	);
}

export default BuyPlan;