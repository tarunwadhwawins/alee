import React, { Component } from "react";
import { Grid, Icon,Table,Label, Header } from "semantic-ui-react";
import { Link, } from "../../../src/shared/functional/global-import";



class SchoolManageTeacherPage extends Component {	
  render() {
    return (
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Manage Teacher</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<Table singleLine>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Teacher Name</Table.HeaderCell>
								<Table.HeaderCell>Email</Table.HeaderCell>
								<Table.HeaderCell>Username</Table.HeaderCell>
								<Table.HeaderCell>Password</Table.HeaderCell>
								<Table.HeaderCell>Status</Table.HeaderCell>
								<Table.HeaderCell  textAlign="right">Action</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							<Table.Row>
								<Table.Cell>Jane Doe</Table.Cell>
								<Table.Cell>jdoe@gmail.com</Table.Cell>
								<Table.Cell>jdoe@gmail.com</Table.Cell>
								<Table.Cell>janedoe@123</Table.Cell>
								<Table.Cell><Label color="green">Active</Label></Table.Cell>
								<Table.Cell textAlign="right">
									<Icon name="edit" className="primary-color" link/>
									<Icon name="trash alternate" color="red" link/>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Maria Garcia</Table.Cell>
								<Table.Cell>mgarica@gmail.com</Table.Cell>
								<Table.Cell>mgarica@gmail.com</Table.Cell>
								<Table.Cell>mariagarcia@123</Table.Cell>
								<Table.Cell><Label color="green">Active</Label></Table.Cell>
								<Table.Cell textAlign="right">
									<Icon name="edit" className="primary-color" link/>
									<Icon name="trash alternate" color="red" link/>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Michael Smith</Table.Cell>
								<Table.Cell>msmith@gmail.com</Table.Cell>
								<Table.Cell>msmith@gmail.com</Table.Cell>
								<Table.Cell>michaelsmith@123</Table.Cell>
								<Table.Cell><Label color="blue">Inactive</Label></Table.Cell>
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

export default SchoolManageTeacherPage;

