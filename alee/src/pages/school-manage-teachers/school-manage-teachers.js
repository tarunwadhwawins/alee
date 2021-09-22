import React from "react";
import { Grid, Icon, Header, Form } from "semantic-ui-react";
import { DataTable } from "../../../src/shared/components/organisms";
import { useSelector } from 'react-redux';
import { Link, env } from "../../shared/functional/global-import";

function SchoolManageTeacherPage(props) {                      
	const schoolId = useSelector(state => state.auth.userDetail.schoolId)
	return (
		<div className="common-shadow">
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Manage Teachers</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<DataTable
						allApi={{ getApiName: "GETTEACHERSLIST", deleteApiName: "DELETETEACHER", toggleApiName: "TEACHERTOGGLE" }}
						additionalParams={{ schoolId: schoolId }}
						searchOption={{ show: true, placeHolder: "Search" }}
						messageInModal="school"

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
										<>
											<a className="orange-color" href={`mailto:${props.email}`}>{props.email}</a>
										</>
									);
								},
							},
							{
								headerName: "User Name",
								fieldName: "email",
								isSorting: true
							},
							{
								headerName: "Status",
								fieldName: "isActive",
								isSorting: true,
								Cell: (props, confirmModalOpen) => {
									return (
										<Form.Checkbox checked={props.isActive ? true : false} toggle className="commonToggle" onChange={() => confirmModalOpen(props.teacherId, "update", props.isActive)} />
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
											{/* <Icon title="Edit" name="edit" className="primary-color" link /> */}
											<Icon title="Delete" name="trash alternate" color="red" link onClick={() => confirmModalOpen(props.teacherId, "delete")} />
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
