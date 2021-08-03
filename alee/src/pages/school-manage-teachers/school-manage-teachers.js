import React, { useState, useEffect } from "react";
import { Grid, Icon, Table, Label, Header, Dimmer, Loader } from "semantic-ui-react";
import { Link, env, bindActionCreators, connect, actions } from "../../shared/functional/global-import";

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
					<Table singleLine>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Teacher Name</Table.HeaderCell>
								<Table.HeaderCell>Email</Table.HeaderCell>
								<Table.HeaderCell>Username</Table.HeaderCell>
								<Table.HeaderCell>Password</Table.HeaderCell>
								<Table.HeaderCell>Status</Table.HeaderCell>
								<Table.HeaderCell textAlign="right">Action</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							{teacher && teacher.map((teach) => {
								return (
									<Table.Row>
										<Table.Cell>Jane Doe</Table.Cell>
										<Table.Cell>jdoe@gmail.com</Table.Cell>
										<Table.Cell>jdoe@gmail.com</Table.Cell>
										<Table.Cell>janedoe@123</Table.Cell>
										<Table.Cell><Label color="green">Active</Label></Table.Cell>
										<Table.Cell textAlign="right">
											<Icon name="edit" className="primary-color" link />
											<Icon name="trash alternate" color="red" link />
										</Table.Cell>
									</Table.Row>
								)
							})}
						</Table.Body>
					</Table>
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
