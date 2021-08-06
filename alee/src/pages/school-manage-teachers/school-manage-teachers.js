import React from "react";
import { Grid, Icon, Header, Form } from "semantic-ui-react";
import { DataTable } from "../../../src/shared/components/organisms";

function SchoolManageTeacherPage(props) {

	return (
		<div className="common-shadow">
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Manage Teachers</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<DataTable
						allApi={{ getApiName: "GETTEACHERSLIST", deleteApiName: "DELETETEACHER", toggleApiName: "TEACHERTOGGLE" }}
						additionalParams={{ schoolId: -1 }}
						searchOption={{ show: true, placeHolder: "Search" }}
						columns={[
							{
								headerName: "School Name",
								fieldName: "schoolName",
								isSorting: true,
							},
							{
								headerName: "Email",
								fieldName: "email",
								isSorting: true
							},
							{
								headerName: "User Name",
								fieldName: "email",
								isSorting: true
							},
							{
								headerName: "Status",
								fieldName: "isActive",
								isSorting: false,
								Cell: (props, confirmModalOpen) => {
									debugger
									return (
										<Form.Checkbox checked={props.isActive ? true : false} toggle className="commonToggle" onChange={() => confirmModalOpen(props.teacherId, "Update")} />
									);
								},
							},
							{
								headerName: "Action",
								fieldName: "Action",
								isSorting: false,
								Cell: (props, confirmModalOpen) => {
									debugger
									return (
										<>
											<Icon name="edit" className="primary-color" link />
											<Icon name="trash alternate" color="red" link onClick={() => confirmModalOpen(props.teacherId, "delete")} />
										</>
									);
								},
							},
						]}

					></DataTable>
				</Grid.Column>
			</Grid>
		</div>
	);
}
export default SchoolManageTeacherPage;
