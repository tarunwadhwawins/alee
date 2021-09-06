import React from "react";
import { Form, Grid, Icon, Button, Table, TableCell } from "semantic-ui-react";
import { GlobalCodeMultiSelect } from "../../shared/components";

function ProfileStepThree(props) {
	const { onHandleChange, school, thirdSecondStep } = props;

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
					<GlobalCodeMultiSelect placeholder='Grade(s) taught' value={school.grades} categoryType="Grades" onChange={onHandleChange} data="grades" />
				</Grid.Column>
				<Grid.Column width={4} > <div className="statusToggle">
					<Form.Checkbox label="isCurrent " toggle
						className="commonToggle"
						onChange={onHandleChange}
						value={school.isCurrent}
						// checked={school.isCurrent ? true : false}
						data="isCurrent" />
				</div>
				</Grid.Column>
				<Grid.Column width={12}>
					<Button className="primaryBtn" onClick={props.addEducation}><Icon name='plus' />Add</Button>
					<Button className="primaryBtn" onClick={props.updateEducation}><Icon name="plus circle" />Update</Button>
				</Grid.Column>
				<React.Fragment>
					{thirdSecondStep && thirdSecondStep.length > 0 && <Table fixed>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>School</Table.HeaderCell>
								<Table.HeaderCell>Position</Table.HeaderCell>
								<Table.HeaderCell>Grade</Table.HeaderCell>
								<Table.HeaderCell textAlign="right">IsCurrent</Table.HeaderCell>
								<Table.HeaderCell textAlign="right">Action</Table.HeaderCell>
								
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{thirdSecondStep && thirdSecondStep.map((singleData, index) => {
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