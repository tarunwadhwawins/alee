import React, { Component } from "react";
import { Grid, Icon,Table,Label, Header } from "semantic-ui-react";
import { Link, } from "../../../src/shared/functional/global-import";



class PaymentManagementPage extends Component {	
  render() {
    return (
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Payment Management</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<Table singleLine>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Buyer</Table.HeaderCell>
								<Table.HeaderCell>Plan</Table.HeaderCell>
								<Table.HeaderCell>Payment Date</Table.HeaderCell>
								<Table.HeaderCell  textAlign="right">Action</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							<Table.Row>
								<Table.Cell>Jane Doe</Table.Cell>
								<Table.Cell>Gold</Table.Cell>
								<Table.Cell>June 25, 2021</Table.Cell>
								<Table.Cell textAlign="right">
									<Icon name="edit" className="primary-color" link/>
									<Icon name="trash alternate" color="red" link/>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Maria Garcia</Table.Cell>
								<Table.Cell>Silver</Table.Cell>
								<Table.Cell>June 20, 2021</Table.Cell>
								<Table.Cell textAlign="right">
									<Icon name="edit" className="primary-color" link/>
									<Icon name="trash alternate" color="red" link/>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Michael Smith</Table.Cell>
								<Table.Cell>Premium</Table.Cell>
								<Table.Cell>July 05, 2021</Table.Cell>
								<Table.Cell textAlign="right">
									<Icon name="edit" className="primary-color" link/>
									<Icon name="trash alternate" color="red" link/>
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>
				</Grid.Column>
			
			</Grid>
    );
  }
}

export default PaymentManagementPage;

