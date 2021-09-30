import React from "react";
import { Grid, Header, Form, Icon } from "semantic-ui-react";
import { DataTable } from "../../../src/shared/components/organisms";
import { Link, env } from "../../shared/functional/global-import";
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
						messageInModal="teacher"
						additionalParams={{ schoolId: -1 }}
						columns={[
							{
								headerName: "Teacher Name",
								fieldName: "firstName",
								isSorting: true,
								Cell: (props) => {
									return (
										<>
											<Link
												to={`${env.PUBLIC_URL}/profile-preview/${props.teacherId}`}>
												{props.firstName}{" "}{props.lastName}
											</Link>

										</>
									);
								},

							},
							{
								headerName: "Email",
								fieldName: "email",
								isSorting: true,
								Cell: (props) => {
									return (
										<> <a className="orange-color" href={`mailto:${props.email}`}>{props.email}</a></>
									);
								},

							},

							{
								headerName: "Associated School",
								fieldName: "schoolName",
								isSorting: true,
							},
							{
								headerName: "Status",
								fieldName: "createdAt",
								isSorting: true,
								Cell: (props, confirmModalOpen) => {
									                  
									return (
										<Form.Checkbox checked={props.isActive ? true : false} toggle
											className="commonToggle" onChange={() => confirmModalOpen(props.teacherId, 
												"update", props.isActive)} />
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
											<Icon title="Delete" name="trash alternate" color="red" link onClick={() => confirmModalOpen(props.teacherId, "delete")} />
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


