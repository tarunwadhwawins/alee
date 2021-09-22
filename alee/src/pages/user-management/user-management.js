import React, { useState } from "react";
import { Divider, Form, Grid, Header } from "semantic-ui-react";
import AddStudent from "../../shared/components/organisms/modal/add-student/index";
import Moment from "react-moment";
import { useDispatch } from 'react-redux';
import { DataTable } from "../../../src/shared/components/organisms";
import { logDOM } from "@testing-library/dom";

function UserManagementPage(props) {
	const [student, setStudent] = useState(false)
	const [popUpMessage, setPopUpMessage] = useState()
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
				debugger
				allApi={{ getApiName: "GETUSERMANAGEMENTLIST", toggleApiName: "APPROVEUSERMANAGEMENT", deleteApiName: "DELETESTUDENT" }}
				searchOption={{ show: true, placeHolder: "Search" }}
				messageInModal={popUpMessage}
				columns={[
					{
						headerName: "Name",
						fieldName: "name",
						isSorting: true,

					},
					{
						headerName: "Email",
						fieldName: "email",
						isSorting: true,
						Cell: (props) => {
							return (
								<a className="orange-color" href={`mailto:${props.email}`}>{props.email}</a>
							)
						},
					},

					{
						headerName: "Role",
						fieldName: "roleName",
						isSorting: true,
					},
					{
						headerName: "Created On",
						fieldName: "createdAt",
						isSorting: false,
						Cell: (props) => {
							return (
								<Moment format="MM/DD/YYYY">{props.createdAt}</Moment>
							);
						},
					},
					{
						headerName: "Approved",
						fieldName: "isUser",
						isSorting: true,
						Cell: (props, confirmModalOpen) => {
							debugger
							return (
								<Form.Checkbox checked={false} toggle className="commonToggle" onChange={() => {
									setPopUpMessage(props.roleName);
									confirmModalOpen(props.userId, "approve", props.isActive);
								}
								} />
							);
						},
					},
				]}

			></DataTable>
		</div>
	);
}
export default UserManagementPage;