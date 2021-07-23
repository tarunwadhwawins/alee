import React from "react";
import { Grid, Header, Table, Button, Icon, Label} from "semantic-ui-react";
import AddSubscription from "../../shared/components/organisms/modal/subscription/index";

  


function SubscriptionPage() {
	const [subscription, setSubscription] = React.useState(false)
	
	const openModal = () => {
		setSubscription(!subscription)
	}

    return (
		<div className="common-shadow">
		<Grid>
			<Grid.Column width={8} verticalAlign="middle">
				<Header as="h3" className="commonHeading">Subscription</Header>
			</Grid.Column>
			<Grid.Column width={8} textAlign="right">
				<Button className="primaryBtn"  onClick={openModal}><Icon name="plus"/> Add Subscription</Button>
			</Grid.Column>
			<Grid.Column width={16}>
			<Table>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Subscription Plan</Table.HeaderCell>
						<Table.HeaderCell>Duration</Table.HeaderCell>
						<Table.HeaderCell>No. of Students</Table.HeaderCell>
						<Table.HeaderCell textAlign="right">Price</Table.HeaderCell>
						<Table.HeaderCell>Status</Table.HeaderCell>
						<Table.HeaderCell  textAlign="right">Action</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					<Table.Row>
						<Table.Cell>Gold</Table.Cell>
						<Table.Cell>Monthly</Table.Cell>
						<Table.Cell>10</Table.Cell>
						<Table.Cell textAlign="right">$89.00</Table.Cell>
						<Table.Cell><Label color="green">Active</Label></Table.Cell>
						<Table.Cell textAlign="right">
							<Icon name="edit" className="primary-color" link/>
							<Icon name="trash alternate" color="red" link/>
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>Silver</Table.Cell>
						<Table.Cell>Yearly</Table.Cell>
						<Table.Cell>20</Table.Cell>
						<Table.Cell textAlign="right">$129.00</Table.Cell>
						<Table.Cell><Label color="green">Active</Label></Table.Cell>
						<Table.Cell textAlign="right">
							<Icon name="edit" className="primary-color" link/>
							<Icon name="trash alternate" color="red" link/>
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>Premium</Table.Cell>
						<Table.Cell>Monthly</Table.Cell>
						<Table.Cell>30</Table.Cell>
						<Table.Cell textAlign="right">$119.00</Table.Cell>
						<Table.Cell><Label color="green">Active</Label></Table.Cell>
						<Table.Cell textAlign="right">
							<Icon name="edit" className="primary-color" link/>
							<Icon name="trash alternate" color="red" link/>
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
			</Grid.Column>
		</Grid>
		<AddSubscription openModal={subscription} closeModal={openModal} />
		</div>
		);
  }
  
  export default SubscriptionPage;