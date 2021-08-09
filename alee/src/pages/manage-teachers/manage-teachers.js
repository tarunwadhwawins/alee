import React from "react";
import { Grid, Header, Form,Icon} from "semantic-ui-react";
import { DataTable } from "../../../src/shared/components/organisms";

function ManageTeacherPage() {
	return (
		<Form>
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Manage Teachers</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<DataTable
						allApi={{ getApiName: "GETTEACHERSLIST", toggleApiName: "TEACHERTOGGLE", deleteApiName: "DELETETEACHER" }}
						searchOption={{ show: true, placeHolder: "Search" }}
						messageInModal= "teacher"
						additionalParams={{ schoolId: -1 }}
						columns={[
							{
								headerName: "Teacher Name",
								fieldName: "firstName",
								isSorting: true,
								Cell: (props) => {
									return (
										<>
											{props.firstName}{" "}{props.lastName}
										</>
									);
								},
							},
							{
								headerName: "Email",
								fieldName: "email",
								isSorting: true
							},

							{
								headerName: "Associated School",
								fieldName: "schoolName",
								isSorting: true,
							},
							{
								headerName: "Status",
								fieldName: "createdAt",
								isSorting: false,
								Cell: (props, confirmModalOpen) => {
									return (
										<Form.Checkbox checked={props.isActive ? true : false} toggle className="commonToggle" onChange={() => confirmModalOpen(props.teacherId, "update",props.isActive)} />
									);
								}
							},
							{
								headerName: "Action",
								fieldName: "Action",
								isSorting: false,
								Cell: (props, confirmModalOpen) => {
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
		</Form>
	);
}

export default ManageTeacherPage;


