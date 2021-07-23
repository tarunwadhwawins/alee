import React from "react";
import { Grid, Header, Table, Button, Icon, Label} from "semantic-ui-react";
import AddSubAdmin from "../../shared/components/organisms/modal/add-sub-admin/index";

  


function SubAdminPage() {
	const [subadmin, setSubadmin] = React.useState(false)
	
	const openModal = () => {
		setSubadmin(!subadmin)
	}
    return (
		<div className="common-shadow">
		<Grid>
			<Grid.Column width={8} verticalAlign="middle">
				<Header as="h3" className="commonHeading">Sub-Admin</Header>
			</Grid.Column>
			<Grid.Column width={8} textAlign="right">
				<Button className="primaryBtn"  onClick={openModal}><Icon name="plus"/> Add Sub-Admin</Button>
			</Grid.Column>
			<Grid.Column width={16}>
			<Table>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Name</Table.HeaderCell>
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
						<Table.Cell>janedoe</Table.Cell>
						<Table.Cell>jane@123</Table.Cell>
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
		<AddSubAdmin openModal={subadmin} closeModal={openModal} />
		</div>
		);
  }
  
  export default SubAdminPage;