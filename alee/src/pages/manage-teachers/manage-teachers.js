import React from "react";
import { Grid, Header, Form} from "semantic-ui-react";
import { DataTable } from "../../../src/shared/components/organisms";

function ManageTeacherPage() {
	return (
		<Form>
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">ManageTeacher</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<DataTable
						allApi={{ getApiName: "GETTEACHERSLIST", toggleApiName: "TEACHERTOGGLE", deleteApiName: "DELETETEACHER" }}
						searchOption={{ show: true, placeHolder: "Search" }}
						additionalParams={{ schoolId: 1 }}
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
										<Form.Checkbox checked={props.isActive ? true : false} toggle className="commonToggle" onChange={() => confirmModalOpen(props.teacherId, "Update")} />
									);
								}
							},
						]}

					></DataTable>
				</Grid.Column>

			</Grid>
		</Form>
	);
}

export default ManageTeacherPage;


