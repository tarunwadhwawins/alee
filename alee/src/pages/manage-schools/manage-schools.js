import React from "react";
import { Grid, Icon, Table, Label, Header, Form } from "semantic-ui-react";
import { DataTable } from "../../../src/shared/components/organisms";

function ManageSchoolPage() {
	return (
		<Grid>
			<Grid.Column width={16}>
				<Header as="h3" className="commonHeading">Manage Schools</Header>
			</Grid.Column>
			<Grid.Column width={16}>
				<DataTable
					allApi={{ getApiName: "GETSCHOOLSLIST", deleteApiName: "DELETESCHOOL", toggleApiName: "TOGGLEISACTIVE" }}
					isSorting={false}
					searchOption={{ show: false, placeHolder: "Search" }}
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
							headerName: "Status",
							fieldName: "isActive",
							isSorting: true,
							Cell: (props, confirmModalOpen) => {
								debugger
								return (
									<Form.Checkbox checked={props.isActive ? true : false} toggle className="commonToggle" onChange={() => confirmModalOpen(props.schoolId, "toggle")} />
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
										<Icon name="trash alternate" color="red" link onClick={() => confirmModalOpen(props.schoolId, "delete")} />
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

