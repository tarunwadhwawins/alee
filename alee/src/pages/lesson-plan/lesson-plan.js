import React from "react";
import { Grid, Icon, Header, Button, Table, Form, Dropdown } from "semantic-ui-react";
import { Link } from "../../shared/functional/global-import";

function LessonPlanPage() {	
    return (
		<div className="common-shadow">
			<Grid columns="equal">
			<Grid.Column width={8} verticalAlign="middle">
				<Header as="h3" className="commonHeading">Lesson Plan</Header>
			</Grid.Column>
			<Grid.Column width={8} textAlign="right">
				<Button className="primaryBtn" as={Link} to="search"><Icon name="plus"/> New Lesson Plan</Button>
			</Grid.Column>
			<Grid.Column width={12}>
				<Form>
					<Form.Input placeholder="Search lesson plan"/>
				</Form>
			</Grid.Column>
			<Grid.Column width={4} textAlign="right" verticalAlign="middle">
				<Dropdown text='Filter' icon='filter'>
					<Dropdown.Menu>
						<Dropdown.Item content="Newest" />
						<Dropdown.Item content="Oldest" />
					</Dropdown.Menu>
				</Dropdown>
			</Grid.Column>
			<Grid.Column width={16}>
				<Table>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Book Name</Table.HeaderCell>
							<Table.HeaderCell>Chapter</Table.HeaderCell>
							<Table.HeaderCell><Link to="lesson-plan-creation" className="primary-color">Lesson Plan Name</Link></Table.HeaderCell>
							<Table.HeaderCell textAlign="right">Action</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						<Table.Row>
							<Table.Cell>Animal Farm</Table.Cell>
							<Table.Cell>Chapter One</Table.Cell>
							<Table.Cell><Link to="lesson-plan-creation" className="primary-color">DayOneWork</Link></Table.Cell>
							<Table.Cell textAlign="right">
									<Icon name="edit" className="primary-color" link/>
									<Icon name="trash alternate" color="red" link/>
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>America Dreams</Table.Cell>
							<Table.Cell>Chapter Nine</Table.Cell>
							<Table.Cell><Link to="lesson-plan-creation" className="primary-color">SecondWeekWork</Link></Table.Cell>
							<Table.Cell textAlign="right">
									<Icon name="edit" className="primary-color" link/>
									<Icon name="trash alternate" color="red" link/>
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Old Man & Sea</Table.Cell>
							<Table.Cell>Chapter Five</Table.Cell>
							<Table.Cell><Link to="lesson-plan-creation" className="primary-color">LastWeekWork</Link></Table.Cell>
							<Table.Cell textAlign="right">
									<Icon name="edit" className="primary-color" link/>
									<Icon name="trash alternate" color="red" link/>
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</Grid.Column>
		</Grid>
		</div>
		);
  }
  
  export default LessonPlanPage;