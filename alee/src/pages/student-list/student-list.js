import React from "react";
import { Grid, Header, Table, Button, Icon, Label } from "semantic-ui-react";
import AddStudent from "../../shared/components/organisms/modal/add-student/index";

function StudentListPage(props) {
	const [student, setStudent] = React.useState(false)
	const [file, setFile] = React.useState(null)

	const openModal = () => {
		setStudent(!student)
	}



	const fileInputRef = React.createRef();

	const fileChange = e => {
		setFile(e.target.files[0])
	}

	return (
		<div className="common-shadow">
			<Grid>
				<Grid.Column width={8} verticalAlign="middle">
					<Header as="h3" className="commonHeading">Student list</Header>
				</Grid.Column>
				<Grid.Column width={8} textAlign="right">
					<Button className="primaryBtn" onClick={openModal}><Icon name="plus" /> Add Student</Button>
					<Button className="alternateBtn" onClick={() => fileInputRef.current.click()} ><Icon name="upload" /> Upload Excel</Button>
					<input ref={fileInputRef} type="file" hidden onChange={fileChange} />
				</Grid.Column>
				<Grid.Column width={16}>
					<Table>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Name</Table.HeaderCell>
								<Table.HeaderCell>Email</Table.HeaderCell>
								<Table.HeaderCell>Grade</Table.HeaderCell>
								<Table.HeaderCell>Status</Table.HeaderCell>
								<Table.HeaderCell textAlign="right">Action</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							<Table.Row>
								<Table.Cell>Jane Doe</Table.Cell>
								<Table.Cell>jdoe@gmail.com</Table.Cell>
								<Table.Cell>8th</Table.Cell>
								<Table.Cell><Label color="green">Active</Label></Table.Cell>
								<Table.Cell textAlign="right">
									<Icon name="edit" className="primary-color" link />
									<Icon name="trash alternate" color="red" link />
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Elijah</Table.Cell>
								<Table.Cell>elijah@gmail.com</Table.Cell>
								<Table.Cell>10th</Table.Cell>
								<Table.Cell><Label color="blue">Inactive</Label></Table.Cell>
								<Table.Cell textAlign="right">
									<Icon name="edit" className="primary-color" link />
									<Icon name="trash alternate" color="red" link />
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>William</Table.Cell>
								<Table.Cell>william@gmail.com</Table.Cell>
								<Table.Cell>5th</Table.Cell>
								<Table.Cell><Label color="green">Active</Label></Table.Cell>
								<Table.Cell textAlign="right">
									<Icon name="edit" className="primary-color" link />
									<Icon name="trash alternate" color="red" link />
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>James</Table.Cell>
								<Table.Cell>james@gmail.com</Table.Cell>
								<Table.Cell>9th</Table.Cell>
								<Table.Cell><Label color="green">Active</Label></Table.Cell>
								<Table.Cell textAlign="right">
									<Icon name="edit" className="primary-color" link />
									<Icon name="trash alternate" color="red" link />
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>
				</Grid.Column>
			</Grid>
			<AddStudent openModal={student} closeModal={openModal} />
		</div>
	);
}

export default StudentListPage;