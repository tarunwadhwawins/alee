import React, { Component } from "react";
import { Grid, Icon,Table,Label, Header } from "semantic-ui-react";
import { Link, } from "../../../src/shared/functional/global-import";



class SubscriptionPlanPage extends Component {	
  render() {
    return (
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Subscription Plan</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<Table singleLine>
						<Table.Header>
							<Table.Row>
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
								<Table.Cell>Silver</Table.Cell>
								<Table.Cell>Yearly</Table.Cell>
								<Table.Cell>June 25, 2021</Table.Cell>
								<Table.Cell>June 24, 2022</Table.Cell>
								<Table.Cell><Label color="green">Active</Label></Table.Cell>
								<Table.Cell textAlign="right">
									<Icon name="repeat" className="primary-color" link/>
									<Icon name="plus" color='green' link/>
									<Icon name="close" color="red" link/>
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>
				</Grid.Column>
			
			</Grid>
    );
  }
}

export default SubscriptionPlanPage;

