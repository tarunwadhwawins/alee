import React, { useState } from "react";
import { Form } from "semantic-ui-react";
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

			<AddStudent openModal={student} closeModal={openModal} />
			<DataTable
				allApi={{ getApiName: "GETUSERMANAGEMENTLIST", toggleApiName: "APPROVEUSERMANAGEMENT", deleteApiName: "DELETESTUDENT" }}
				isSorting={false}
				searchOption={{ show: false, placeHolder: "Search" }}
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
						isSorting: false,
					},
					{
						headerName: "Created At",
						fieldName: "createdAt",
						isSorting: false,
						Cell: (props) => {
							return (
								<Moment format="MMMM DD,YYYY">{props.createdAt} </Moment>
							);
						},
					},
					{
						headerName: "Approve/Disapprove",
						fieldName: "isUser",
						isSorting: false,
						Cell: (props, confirmModalOpen) => {
							return (
								<Form.Checkbox checked={false} toggle className="commonToggle" onChange={() => confirmModalOpen(props.userId,"toggle")} />
							);
						},
					},
				]}

			></DataTable>
		</div>
	);
}
export default UserManagementPage;