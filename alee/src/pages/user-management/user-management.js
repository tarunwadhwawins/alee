import React, { useState, useEffect} from "react";
import { Form, Dimmer, Loader } from "semantic-ui-react";
import AddStudent from "../../shared/components/organisms/modal/add-student/index";
import Moment from "react-moment";
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../../src/store/actions/api.actions";
import { DataTable } from "../../../src/shared/components/organisms";

function UserManagementPage(props) {
	const [student, setStudent] = useState(false)
	const dispatch = useDispatch();

	const api = useSelector(state => state.api)
	const openModal = () => {
		setStudent(!student)
	}

	return (
		<div className="common-shadow">
			{api.isApiLoading && (
				<Dimmer active inverted>
					<Loader />
				</Dimmer>

			)}

			<AddStudent openModal={student} closeModal={openModal} />
			<DataTable
				getApiName="GETUSERMANAGEMENTLIST"
				toggleApiName="APPROVEUSERMANAGEMENT"
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
								<Form.Checkbox checked={false} toggle className="commonToggle" onChange={() => confirmModalOpen(props.userId)} />
							);
						},
					},
				]}

			></DataTable>
		</div>
	);
}
export default UserManagementPage;