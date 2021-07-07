import React, { Component } from "react";
import { Grid, Header, Button, Form, Tab, Table, Icon } from "semantic-ui-react";
import {Link} from "../../shared/functional/global-import";

const Grade = [
	{ key: 'Grade 1', value: 'Grade 1', text: 'Grade 1' },
	{ key: 'Grade 2', value: 'Grade 2', text: 'Grade 2' },
	{ key: 'Grade 3', value: 'Grade 3', text: 'Grade 3' },
	{ key: 'Grade 4', value: 'Grade 4', text: 'Grade 4' },
	{ key: 'Grade 5', value: 'Grade 5', text: 'Grade 5' },
	{ key: 'Grade 6', value: 'Grade 6', text: 'Grade 6' },
	{ key: 'Grade 7', value: 'Grade 7', text: 'Grade 7' },
  ]
const Chapter = [
	{ key: 'Chapter 1', value: 'Chapter 1', text: 'Chapter 1' },
	{ key: 'Chapter 2', value: 'Chapter 2', text: 'Chapter 2' },
	{ key: 'Chapter 3', value: 'Chapter 3', text: 'Chapter 3' },
	{ key: 'Chapter 4', value: 'Chapter 4', text: 'Chapter 4' },
	{ key: 'Chapter 5', value: 'Chapter 5', text: 'Chapter 5' },
	{ key: 'Chapter 6', value: 'Chapter 6', text: 'Chapter 6' },
	{ key: 'Chapter 7', value: 'Chapter 7', text: 'Chapter 7' },
  ]
const Page = [
	{ key: 'Page 1', value: 'Page 1', text: 'Page 1' },
	{ key: 'Page 2', value: 'Page 2', text: 'Page 2' },
	{ key: 'Page 3', value: 'Page 3', text: 'Page 3' },
	{ key: 'Page 4', value: 'Page 4', text: 'Page 4' },
	{ key: 'Page 5', value: 'Page 5', text: 'Page 5' },
	{ key: 'Page 6', value: 'Page 6', text: 'Page 6' },
	{ key: 'Page 7', value: 'Page 7', text: 'Page 7' },
  ]
const Book = [
	{ key: 'Animal Farm', value: 'Animal Farm', text: 'Animal Farm' },
	{ key: 'America Dreams', value: 'America Dreams', text: 'America Dreams' },
	{ key: 'Old Man & Sea', value: 'Old Man & Sea', text: 'Old Man & Sea' },
  ]

  const panes = [
	{
	  menuItem: 'Audio',
	  render: () => 
	  <Tab.Pane attached={false}>
		  <Table>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Grade</Table.HeaderCell>
					<Table.HeaderCell>Book</Table.HeaderCell>
					<Table.HeaderCell>Chapter</Table.HeaderCell>
					<Table.HeaderCell>Page</Table.HeaderCell>
					<Table.HeaderCell>Audio</Table.HeaderCell>
					<Table.HeaderCell textAlign="right">Action</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>7th</Table.Cell>
					<Table.Cell>Animal Farm</Table.Cell>
					<Table.Cell>3rd</Table.Cell>
					<Table.Cell>5th</Table.Cell>
					<Table.Cell><Link className="primary-color" as={Link} to="https://test.com">https://test.com</Link></Table.Cell>
					<Table.Cell textAlign="right">
						<Icon  className="primary-color" name="edit" link/>
						<Icon  color='red'  name="trash alternate" link/>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		  </Table>
	  </Tab.Pane>,
	},
	{
	  menuItem: 'Video',
	  render: () => <Tab.Pane attached={false}>
		   <Table>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Grade</Table.HeaderCell>
					<Table.HeaderCell>Book</Table.HeaderCell>
					<Table.HeaderCell>Chapter</Table.HeaderCell>
					<Table.HeaderCell>Page</Table.HeaderCell>
					<Table.HeaderCell>Video</Table.HeaderCell>
					<Table.HeaderCell textAlign="right">Action</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>7th</Table.Cell>
					<Table.Cell>Animal Farm</Table.Cell>
					<Table.Cell>3rd</Table.Cell>
					<Table.Cell>5th</Table.Cell>
					<Table.Cell><Link className="primary-color" as={Link} to="https://test.com">https://test.mp4</Link></Table.Cell>
					<Table.Cell textAlign="right">
						<Icon  className="primary-color" name="edit" link/>
						<Icon  color='red'  name="trash alternate" link/>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		  </Table>
	  </Tab.Pane>,
	},
	{
	  menuItem: 'Article',
	  render: () => <Tab.Pane attached={false}>
		   <Table fixed singleLine>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Grade</Table.HeaderCell>
					<Table.HeaderCell>Book</Table.HeaderCell>
					<Table.HeaderCell>Chapter</Table.HeaderCell>
					<Table.HeaderCell>Page</Table.HeaderCell>
					<Table.HeaderCell>Article</Table.HeaderCell>
					<Table.HeaderCell textAlign="right">Action</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>7th</Table.Cell>
					<Table.Cell>Animal Farm</Table.Cell>
					<Table.Cell>3rd</Table.Cell>
					<Table.Cell>5th</Table.Cell>
					<Table.Cell><Link className="primary-color" as={Link} to="https://test.com">https://test.doc</Link></Table.Cell>
					<Table.Cell textAlign="right">
						<Icon  className="primary-color" name="edit" link/>
						<Icon  color='red'  name="trash alternate" link/>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		  </Table>
	  </Tab.Pane>,
	},
  ]

class ResourcesPage extends Component {


  render() {
  
    return (
		<div className="common-shadow resources">
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Resources</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<Form>
						<Grid>
							<Grid.Column width="4">
								<Form.Select label="Grade" placeholder="Select Grade" options={Grade}/>
							</Grid.Column>
							<Grid.Column width="4">
								<Form.Select label="Book" placeholder="Select Book" options={Book}/>
							</Grid.Column>
							<Grid.Column width="4">
								<Form.Select label="Chapter" placeholder="Select Chapter" options={Chapter}/>
							</Grid.Column>
							<Grid.Column width="4">
								<Form.Select label="Page" placeholder="Select Page" options={Page}/>
							</Grid.Column>
							<Grid.Column width="8">
								<Form.Input label="Audio" placeholder="Embed URL"/>
							</Grid.Column>
							<Grid.Column width="8">
								<Form.Input label="Video" placeholder="Embed URL"/>
							</Grid.Column>
							<Grid.Column width="16">
								<Form.Input label="Article" placeholder="Embed URL"/>
							</Grid.Column>
							

							<Grid.Column width="16" textAlign="right">
								<Button className="secondaryBtn">Cancel</Button>
								<Button className="primaryBtn">Save</Button>
							</Grid.Column>

							<Grid.Column width={16}>
								<Tab menu={{ text: true }} panes={panes} />
							</Grid.Column>
						</Grid>
					</Form>
				</Grid.Column>
			</Grid>
		</div>
    );
  }
}

export default ResourcesPage;

