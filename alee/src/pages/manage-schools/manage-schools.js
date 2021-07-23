import React from "react";
import { Grid, Icon, Table, Label, Header } from "semantic-ui-react";


function ManageSchoolPage() {
    return (
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Manage Schools</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<Table singleLine>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>School Name</Table.HeaderCell>
								<Table.HeaderCell>Email</Table.HeaderCell>
								<Table.HeaderCell>Status</Table.HeaderCell>
								<Table.HeaderCell  textAlign="right">Action</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							<Table.Row>
								<Table.Cell>Stanton College Preparatory School</Table.Cell>
								<Table.Cell>scpc@gmail.com</Table.Cell>
								<Table.Cell><Label color="green">Active</Label></Table.Cell>
								<Table.Cell textAlign="right">
									<Icon name="edit" className="primary-color" link/>
									<Icon name="trash alternate" color="red" link/>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Gilbert Classical Academy</Table.Cell>
								<Table.Cell>gca@gmail.com</Table.Cell>
								<Table.Cell><Label color="green">Active</Label></Table.Cell>
								<Table.Cell textAlign="right">
									<Icon name="edit" className="primary-color" link/>
									<Icon name="trash alternate" color="red" link/>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Liberal Arts and Science Academy High School</Table.Cell>
								<Table.Cell>laacahc@gmail.com</Table.Cell>
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

export default ManageSchoolPage;

