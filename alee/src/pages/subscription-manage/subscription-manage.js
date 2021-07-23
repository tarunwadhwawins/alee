import React from "react";
import { Grid, Icon,Table,Label, Header } from "semantic-ui-react";


function SubscriptionManagePage() {
    return (
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Subscription Manage</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<Table singleLine>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Buyer</Table.HeaderCell>
								<Table.HeaderCell>Plan</Table.HeaderCell>
								<Table.HeaderCell>Duration</Table.HeaderCell>
								<Table.HeaderCell>Start Date</Table.HeaderCell>
								<Table.HeaderCell>End Date</Table.HeaderCell>
								<Table.HeaderCell>Status</Table.HeaderCell>
								<Table.HeaderCell  textAlign="right">Action</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							<Table.Row>
								<Table.Cell>Stanton College Preparatory School</Table.Cell>
								<Table.Cell>Silver</Table.Cell>
								<Table.Cell>Yearly</Table.Cell>
								<Table.Cell>June 25, 2021</Table.Cell>
								<Table.Cell>June 24, 2022</Table.Cell>
								<Table.Cell><Label color="green">Active</Label></Table.Cell>
								<Table.Cell textAlign="right">
									<Icon name="edit" className="primary-color" link/>
									<Icon name="close" color="red" link/>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Gilbert Classical Academy</Table.Cell>
								<Table.Cell>Gold</Table.Cell>
								<Table.Cell>Monthly</Table.Cell>
								<Table.Cell>March 25, 2021</Table.Cell>
								<Table.Cell>April 24, 2022</Table.Cell>
								<Table.Cell><Label color="blue">Inactive</Label></Table.Cell>
								<Table.Cell textAlign="right">
									<Icon name="edit" className="primary-color" link/>
									<Icon name="close" color="red" link/>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Liberal Arts and Science Academy High School</Table.Cell>
								<Table.Cell>Gold</Table.Cell>
								<Table.Cell>Yearly</Table.Cell>
								<Table.Cell>May 25, 2021</Table.Cell>
								<Table.Cell>May 24, 2022</Table.Cell>
								<Table.Cell><Label color="green">Active</Label></Table.Cell>
								<Table.Cell textAlign="right">
									<Icon name="edit" className="primary-color" link/>
									<Icon name="close" color="red" link/>
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>
				</Grid.Column>
			
			</Grid>
    );
}

export default SubscriptionManagePage;

