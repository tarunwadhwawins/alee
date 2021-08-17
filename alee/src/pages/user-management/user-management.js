import React, { useState } from "react";
import { Divider, Form, Grid, Header } from "semantic-ui-react";
import AddStudent from "../../shared/components/organisms/modal/add-student/index";
import Moment from "react-moment";
import { useDispatch } from 'react-redux';
import { DataTable } from "../../../src/shared/components/organisms";

function UserManagementPage(props) {
	const [student, setStudent] = useState(false)
	const dispatch = useDispatch();

	const openModal = () => {
		setStudent(!student)
	}

	return (
		<div className="common-shadow">
			<Grid.Column width={16} verticalAlign="middle">
				<Header as="h3" className="commonHeading">User Management</Header>
			</Grid.Column>
			<Grid.Column width={16}>
				<Divider hidden></Divider>
			</Grid.Column>
			<AddStudent openModal={student} closeModal={openModal} />
			<DataTable
				allApi={{ getApiName: "GETUSERMANAGEMENTLIST", toggleApiName: "APPROVEUSERMANAGEMENT", deleteApiName: "DELETESTUDENT" }}
				searchOption={{ show: true, placeHolder: "Search" }}
				messageInModal="user"
				columns={[
					{
						headerName: "User Name",
						fieldName: "userName",
						isSorting: true,
					},
					{
						headerName: "Email",
						fieldName: "email",
						isSorting: true
					},

					{
						headerName: "Role",
						fieldName: "roleName",
						isSorting: true,
					},
					{
						headerName: "Created At",
						fieldName: "createdAt",
						isSorting: false,
						Cell: (props) => {
							return (
								<Moment format="MM/DD/YYYY">{props.createdAt}</Moment>
							);
						},
					},
					{
						headerName: "Disapprove/Approve",
						fieldName: "isUser",
						isSorting: false,
						Cell: (props, confirmModalOpen) => {
							return (
								<Form.Checkbox checked={false} toggle className="commonToggle" onChange={() => confirmModalOpen(props.userId, "approve",props.isActive)} />
							);
						},
					},
				]}

			></DataTable>
		</div>
	);
}
export default UserManagementPage;