import React, { useState, useEffect } from "react";
import { Grid, Icon, Table, Label, Header, Dimmer, Loader, Form } from "semantic-ui-react";
import { Link, env, bindActionCreators, connect, actions } from "../../shared/functional/global-import";
import { DataTable } from "../../../src/shared/components/organisms";

function SchoolManageTeacherPage(props) {

	const [teacher, setTeacher] = React.useState("")

	useEffect(() => {
		getTeachersList();
	}, []);

	const getTeachersList = () => {
		props.actions.apiCall({
			urls: [""], method: "GET", data: teacher, onSuccess: (response) => {
				if (response.length > 0) {
					setTeacher(response)
				}
			}
		});
	}
	return (
		<div className="common-shadow">
			{props.api.isApiLoading && (
				<Dimmer active inverted>
					<Loader />
				</Dimmer>
			)}
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Manage Teachers</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<DataTable
						allApi={{ getApiName: "GETTEACHERSLIST", deleteApiName: "DELETETEACHER", toggleApiName: "TEACHERTOGGLE" }}
						additionalParams={{ schoolId: -1}}
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
								headerName: "User Name",
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
		</div>
	);
}
const mapStateToProps = state => {
	return {
		api: state.api,
		auth: state.auth,
		global: state.global,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			apiCall: bindActionCreators(actions.apiCall, dispatch),
			storeGlobalCodes: bindActionCreators(actions.storeGlobalCodes, dispatch)
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SchoolManageTeacherPage);
