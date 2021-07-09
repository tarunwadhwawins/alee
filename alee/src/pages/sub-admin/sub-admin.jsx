import React, { Component } from "react";
import { Grid, Header, Table, Button, Icon, Label} from "semantic-ui-react";
import { Link } from "../../shared/functional/global-import";
import AddSubAdmin from "../../shared/components/organisms/modal/add-sub-admin/index";

  



class SubAdminPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			SubAdminStatus:false
		};
	}
	
	openModal=()=>{
		this.setState({SubAdminStatus:!this.state.SubAdminStatus})
	}
  render() {
    return (
		<div className="common-shadow">
		<Grid>
			<Grid.Column width={8} verticalAlign="middle">
				<Header as="h3" className="commonHeading">Sub-Admin</Header>
			</Grid.Column>
			<Grid.Column width={8} textAlign="right">
				<Button className="primaryBtn"  onClick={this.openModal}><Icon name="plus"/> Add Sub-Admin</Button>
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
		<AddSubAdmin openModal={this.state.SubAdminStatus} closeModal={this.openModal} />
		</div>
		);
	}
  }
  
  export default SubAdminPage;