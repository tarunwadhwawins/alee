import React, { useEffect } from "react";
import { Grid, Header, Table, Checkbox, Icon, Label, Form, Dimmer, Loader } from "semantic-ui-react";
import AddStudent from "../../shared/components/organisms/modal/add-student/index";
import { Link, env, bindActionCreators, connect, actions } from "../../shared/functional/global-import";
import Moment from "react-moment";




function UserManagementPage(props) {
	const [student, setStudent] = React.useState(false)
	const [user, setUser] = React.useState(null)

	const openModal = () => {
		setStudent(!student)
	}
	useEffect(() => {
		getUsers();

	}, []);
	const getUsers = () => {
		props.actions.apiCall({
			urls: ["GETUSERMANAGEMENTLIST"], method: "GET", data: student, onSuccess: (response) => {
				if (response.length > 0) {
					setUser(response)
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
			<Form>
				<Grid>
					<Grid.Column width={8} verticalAlign="middle">
						<Header as="h3" className="commonHeading">User Management</Header>
					</Grid.Column>
					<Grid.Column width={16}>
						<Table>
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell>User Name</Table.HeaderCell>
									<Table.HeaderCell>Email</Table.HeaderCell>
									<Table.HeaderCell>Role</Table.HeaderCell>
									<Table.HeaderCell>Created At</Table.HeaderCell>
									<Table.HeaderCell>Approve/Disapprove</Table.HeaderCell>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{user && user.map((use) => {
									return (
										<Table.Row>
											<Table.Cell>{use.userName}</Table.Cell>
											<Table.Cell>{use.email}</Table.Cell>
											<Table.Cell>{use.role}</Table.Cell>
											<Table.Cell><Moment format="MMMM DD,YYYY">{use.createdAt}</Moment></Table.Cell>
											<Table.Cell>
												<Form.Checkbox toggle className="commonToggle" />
											</Table.Cell>
										</Table.Row>
									)
								})}
							</Table.Body>
						</Table>
					</Grid.Column>
				</Grid>
			</Form>
			<AddStudent openModal={student} closeModal={openModal} />
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
export default connect(mapStateToProps, mapDispatchToProps)(UserManagementPage);