import React from "react";
import { Grid, Header, Button, Icon, Form} from "semantic-ui-react";
import AddStudent from "../../shared/components/organisms/modal/add-student/index";
import { DataTable } from "../../../src/shared/components/organisms";

function StudentListPage() {
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
				
					<DataTable
						allApi={{ getApiName: "GETSTUDENTSLIST", deleteApiName: "DELETESTUDENT",toggleApiName:"STUDENTTOGGLE"}}
						searchOption={{ show: true, placeHolder: "Search" }}
						additionalParams={{ a:"a",b:"b"}}
						columns={[
							{
								headerName: "Name",
								fieldName: "studentName",
								isSorting: true,
							},
							{
								headerName: "Email",
								fieldName: "email",
								isSorting: true
							},

							{
								headerName: "Grade",
								fieldName: "gradeName",
								isSorting: true,
							},
							{
								headerName: "Status",
								fieldName: "isActive",
								isSorting: false,
								Cell: (props, confirmModalOpen) => {
									return (
										<Form.Checkbox checked={props.isActive ? true : false} toggle className="commonToggle" onChange={() => confirmModalOpen(props.studentId,"update")} />
									);
								},
							},
							{
								headerName: "Action",
								fieldName: "Action",
								isSorting: false,
								Cell: (props, confirmModalOpen) => {
									return (
										<>
											<Icon name="edit" className="primary-color" link />
											<Icon name="trash alternate" color="red" link onClick={() => confirmModalOpen(props.studentId,"delete")} />
										</>
									);
								},
							},
						]}

					></DataTable>

				</Grid.Column>
			</Grid>
			<AddStudent openModal={student} closeModal={openModal} /></div>
	);
}
export default StudentListPage;
