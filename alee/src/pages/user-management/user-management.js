import React from "react";
import { Grid, Header, Table, Checkbox, Icon, Label, Form} from "semantic-ui-react";
import AddStudent from "../../shared/components/organisms/modal/add-student/index";

  


function UserManagementPage() {	
	const [student, setStudent] = React.useState(false)
	const [file, setFile] = React.useState(null)

	const openModal = () => {
		setStudent(!student)
	}

	
	
	  const fileInputRef = React.createRef();	
	
	  const fileChange = e => {
		setFile( e.target.files[0] )
	  }
	
    return (
		<div className="common-shadow">
		<Form>
		<Grid>
			<Grid.Column width={8} verticalAlign="middle">
				<Header as="h3" className="commonHeading">User Management</Header>
			</Grid.Column>
			<Grid.Column width={16}>
			<Table>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>User Name</Table.HeaderCell>
						<Table.HeaderCell>Email</Table.HeaderCell>
						<Table.HeaderCell>Role</Table.HeaderCell>
						<Table.HeaderCell>Created At</Table.HeaderCell>
						<Table.HeaderCell>Approve/Disapprove</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					<Table.Row>
						<Table.Cell>Jane Doe</Table.Cell>
						<Table.Cell>jdoe@gmail.com</Table.Cell>
						<Table.Cell>Teacher</Table.Cell>
						<Table.Cell>July 20, 2021</Table.Cell>
						<Table.Cell>
							<Form.Checkbox toggle className="commonToggle" />
						</Table.Cell>
						
					</Table.Row>
					<Table.Row>
						<Table.Cell>Elijah</Table.Cell>
						<Table.Cell>elijah@gmail.com</Table.Cell>
						<Table.Cell>Teacher</Table.Cell>
						<Table.Cell>July 15, 2021</Table.Cell>
						<Table.Cell><Form.Checkbox toggle className="commonToggle" /></Table.Cell>
						
					</Table.Row>
					<Table.Row>
						<Table.Cell>Stanton College Preparatory School</Table.Cell>
						<Table.Cell>scpschool@gmail.com</Table.Cell>
						<Table.Cell>School</Table.Cell>
						<Table.Cell>July 10, 2021</Table.Cell>
						<Table.Cell><Form.Checkbox toggle className="commonToggle" /></Table.Cell>
						
					</Table.Row>
					<Table.Row>
						<Table.Cell>Gilbert Classical Academy</Table.Cell>
						<Table.Cell>gcacademy@gmail.com</Table.Cell>
						<Table.Cell>School</Table.Cell>
						<Table.Cell>July 25, 2021</Table.Cell>
						<Table.Cell><Form.Checkbox toggle className="commonToggle" /></Table.Cell>
						
					</Table.Row>
				</Table.Body>
			</Table>
			</Grid.Column>
		</Grid>
		</Form>
		<AddStudent openModal={student} closeModal={openModal} />
		</div>
		);
  }
  
  export default UserManagementPage;