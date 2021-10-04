import React, { useState } from "react";
import { Divider, Form, Grid, Header, Icon } from "semantic-ui-react";
import AddStudent from "../../shared/components/organisms/modal/add-student/index";
import Moment from "react-moment";
import { DataTable } from "../../../src/shared/components/organisms";
import { logDOM } from "@testing-library/dom";

function UserManagementPage(props) {
	const [student, setStudent] = useState(false)
	const [popup, setPopup] = useState(null)
	const [message, setMessage] = useState()

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
				allApi={{ getApiName: "GETUSERMANAGEMENTLIST", toggleApiName: "APPROVEUSERMANAGEMENT", deleteApiName: "DELETEUSER" }}
				searchOption={{ show: true, placeHolder: "Search" }}
				messageInModal={message}
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

							return (
								<Form.Checkbox checked={false} toggle className="commonToggle" onChange={() => {
									setMessage(props.roleName)
									confirmModalOpen(props.userId, "approve", props.isActive);
								}
								} />
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
									<Icon title="Delete" name="trash alternate" color="red"
										link onClick={() => {
											setMessage(props.roleName)
											confirmModalOpen(props.userId, "delete")
										}} />
								</>
							);
						},
					},
				]}

			></DataTable>
			<div>
			</div>
		</div>
	);
}
export default UserManagementPage;