import React, { useEffect, useState } from "react";
import { Form, Grid, Icon, Button, Table, TableCell, Dropdown } from "semantic-ui-react";
import { GlobalCodeMultiSelect } from "../../shared/components";
import { useDispatch } from 'react-redux';
import { apiCall } from "../../store/actions/api.actions";
function ProfileStepThree(props) {
	const [grade, setGradeList] = useState([]);
	const dispatch = useDispatch();
	const { onHandleChange, school, thirdSecondStep } = props;

	useEffect(() => {
		getGradeList();
	}, []);
	//  get api //
	const getGradeList = () => {
		dispatch(
			apiCall({
				urls: ["GETGRADESLIST"],
				method: "GET",
				data: ({ ActiveGrades: true, OrderBy: "GradeName", OrderByDescending: false }),
				onSuccess: (response) => {
					const grade = response.map((singledata) => {

						return {
							text: singledata.gradeName,
							value: singledata.gradeId
						};
					});
					setGradeList(grade);
				},
			})
		);
	};
	return (
		<Form>
			<Grid>
				<Grid.Column width={4}>
					<Form.Input placeholder='School Name' value={school.institute} onChange={onHandleChange} data="institute" />
				</Grid.Column>
				<Grid.Column width={4}>
					<Form.Input placeholder='Position' onChange={onHandleChange} value={school.position} data="position" />
				</Grid.Column>
				<Grid.Column width={4}>
					<Dropdown placeholder='Grade' fluid multiple selection onChange={onHandleChange} options={grade} data="grades" value={school.gradesgrades} />
				</Grid.Column>
				<Grid.Column width={4} > <div className="statusToggle">
					<Form.Checkbox label="CurrentPosition " toggle
						className="commonToggle"
						onChange={onHandleChange}
						value={school.isCurrent}
						checked={school.isCurrent ? true : false}
						data="isCurrent" />
				</div>
				</Grid.Column>
				<Grid.Column width={12}>
					{!school.updateButtonSchool ? <Button className="primaryBtn" onClick={props.addEducation}>
						<Icon name='plus' />Add</Button> : <>
						<Button className="primaryBtn" onClick={props.updateEducation}>Update</Button>
						<Button className="primaryBtn" onClick={props.ClearEducation}>Cancel</Button></>}
				</Grid.Column>
				<React.Fragment>
					{thirdSecondStep && thirdSecondStep.length > 0 && <Table fixed>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>School</Table.HeaderCell>
								<Table.HeaderCell>Position</Table.HeaderCell>
								<Table.HeaderCell>Grade</Table.HeaderCell>
								<Table.HeaderCell textAlign="right">CurrentPositiont</Table.HeaderCell>
								<Table.HeaderCell textAlign="right">Action</Table.HeaderCell>

							</Table.Row>
						</Table.Header>
						<Table.Body>
							{thirdSecondStep && thirdSecondStep.map((singleData, index) => {
								// let grades = JSON.parse(singleData.grades).toString()              
								return (
									<>
										<Table.Row key={index}>
											<Table.Cell>{singleData.institute}</Table.Cell>
											<Table.Cell>{singleData.position}</Table.Cell>
											<Table.Cell>{singleData.grades}</Table.Cell>
											<TableCell textAlign="right"><Form.Checkbox checked={singleData.isCurrent ? true : false} toggle className="commonToggle" /></TableCell>
											<Table.Cell textAlign="right">
												<Icon name="pencil alternate" size="large" link onClick={() => props.editEducation(singleData, index)} />
												<Icon name="trash alternate" size="large" link onClick={() => props.removeEducation(index)} />
											</Table.Cell>
										</Table.Row>
									</>)
							})}
						</Table.Body>
					</Table>}
				</React.Fragment>
			</Grid>
		</Form>
	);
}

export default ProfileStepThree;