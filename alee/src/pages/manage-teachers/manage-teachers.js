import React, { useEffect } from "react";
import { Grid, Icon, Table, Label, Header, Form } from "semantic-ui-react";
import { Link, env, bindActionCreators, connect, actions } from "../../shared/functional/global-import";


function ManageTeacherPage(props) {

	const [teacher, setTeacher] = React.useState("")

	useEffect(() => {
		getTeachersList();
	}, []);

	const getTeachersList = () => {
		props.actions.apiCall({
			urls: ["GETTEACHERSLIST"], method: "GET", data: teacher, onSuccess: (response) => {
				if (response.length > 0) {
					setTeacher(response)
				}
			}
		});
	}
	return (
		<Form>
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Manage Teacher</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<Table singleLine>
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
					</Table>
				</Grid.Column>

			</Grid>
		</Form>
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
export default connect(mapStateToProps, mapDispatchToProps)(ManageTeacherPage);


