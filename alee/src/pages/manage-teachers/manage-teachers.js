import React, { useEffect } from "react";
import { Grid, Icon, Table, Label, Header, Form, Dimmer, Loader } from "semantic-ui-react";
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../../src/store/actions/api.actions";
import { DataTable } from "../../../src/shared/components/organisms";

function ManageTeacherPage() {

	const [teacher, setTeacher] = React.useState("")
	return (
		<Form>
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">ManageTeacher</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					{/* <Table singleLine>
						<Table.Header>

							<Table.Row>
								<Table.HeaderCell>Teacher Name</Table.HeaderCell>
								<Table.HeaderCell>Email</Table.HeaderCell>
								<Table.HeaderCell>Associated School</Table.HeaderCell>
								<Table.HeaderCell>Status</Table.HeaderCell>
								<Table.HeaderCell textAlign="right">Action</Table.HeaderCell>
							</Table.Row>
						</Table.Header>


						<Table.Body>
							{teacher && teacher.map((teach) => {
								return (
									<Table.Row>
										<Table.Cell>{teach.firstName}{" "}{teach.lastName}</Table.Cell>
										<Table.Cell>{teach.email}</Table.Cell>
										<Table.Cell>{teach.schoolName}</Table.Cell>
										<Table.Cell>
											<Form.Checkbox toggle className="commonToggle" />
										</Table.Cell>
										<Table.Cell textAlign="right">
											<Icon name="edit" className="primary-color" link />
											<Icon name="trash alternate" color="red" link />
										</Table.Cell>
									</Table.Row>
								)
							})}
						</Table.Body>
					</Table> */}

					<DataTable
						allApi={{ getApiName: "GETTEACHERSLIST", toggleApiName: "TEACHERTOGGLE", deleteApiName: "DELETETEACHER" }}
						isSorting={false}
						searchOption={{ show: true, placeHolder: "Search" }}
						additionalParams={{ schoolId: 1 }}
						columns={[
							{
								headerName: "Teacher Name",
								fieldName: "firstName",
								isSorting: true,
								Cell: (props, confirmModalOpen) => {
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
									debugger
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


