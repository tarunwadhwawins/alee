import React, { useEffect } from "react";
import { Grid, Icon, Table, Label, Header, Form, Dimmer, Loader } from "semantic-ui-react";
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../../src/store/actions/api.actions";

function ManageTeacherPage() {
	debugger;
	const initialValue = [
		{ schoolId: -1 }];
	const [teacher, setTeacher] = React.useState(initialValue)
		;
	const dispatch = useDispatch();
	useEffect(() => {
		getTeachersList();
	}, []);
	const getTeachersList = () => {
		debugger;
		dispatch(apiCall({
			urls: ["GETTEACHERSLIST"], method: "GET", data: teacher, onSuccess: (response) => {
				if (response.length > 0) {
					setTeacher(response)
				}
			}
		}));
	}
	const hooksData = useSelector(state => state.api)
	return (
		<Form>
			{hooksData.isApiLoading && (
				<Dimmer active inverted>
					<Loader />
				</Dimmer>
			)}
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">ManageTeacher</Header>
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

export default ManageTeacherPage;


