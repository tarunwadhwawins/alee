import React from "react";
import { Grid, Icon, Header, Form } from "semantic-ui-react";
import { DataTable } from "../../../src/shared/components/organisms";
import { Link, env } from "../../shared/functional/global-import";

function ManageSchoolPage() {
	return (
		<Grid>
			<Grid.Column width={16}>
				<Header as="h3" className="commonHeading">Manage Schools</Header>
			</Grid.Column>
			<Grid.Column width={16}>
				<DataTable
					allApi={{ getApiName: "GETSCHOOLSLIST", deleteApiName: "DELETESCHOOL", toggleApiName: "SCHOOLTOGGLE" }}
					additionalParams={{ SchoolId:-1  }}
					searchOption={{ show: true, placeHolder: "Search" }}
					messageInModal="school"
					columns={[
						{
							headerName: "School Name",
							fieldName: "schoolName",
							isSorting: true,
							Cell: (props) => {
								return (
									<>
										<Link
											to={`${env.PUBLIC_URL}/profile-school/${props.schoolId}`}>
											{props.schoolName}{" "}
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
								
								return  (
							<a className="orange-color" href={`mailto:${props.email}`}>{props.email}</a>
								) 
							  },
					
						},

						{
							headerName: "Status",
							fieldName: "isActive",
							isSorting: true,
							Cell: (props, confirmModalOpen) => {
								return (
									<Form.Checkbox checked={props.isActive ? true : false} toggle className="commonToggle" onChange={() => confirmModalOpen(props.schoolId, "update", props.isActive)} />
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
										<Icon title="Delete" name="trash alternate" color="red" link onClick={() => confirmModalOpen(props.schoolId, "delete")} />
									</>
								);
							},
						},
					]}

				></DataTable>
			</Grid.Column>

		</Grid>
	);
}

export default ManageSchoolPage;

