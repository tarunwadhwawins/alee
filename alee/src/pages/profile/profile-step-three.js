import React from "react";
import { Form, Grid, Icon, Button, Table } from "semantic-ui-react";
import { GlobalCodeMultiSelect } from "../../shared/components";

function ProfileStepThree(props) {
	const { onHandleChange, onHandleCurrentSchool } = props;
	return (
		<Form>
			<Grid>
				<Grid.Column width={6}>
					<Form.Input placeholder='Current School' value={props.currentSchool.institute} onChange={onHandleCurrentSchool} data="institute"/>
				</Grid.Column>
				<Grid.Column width={5}>
					<Form.Input placeholder='Position'  onChange={onHandleCurrentSchool} data="position" value={props.currentSchool.position}/>
				</Grid.Column>
				<Grid.Column width={5}>
					<GlobalCodeMultiSelect placeholder='Grade(s) taught' categoryType="Grades" onChange={onHandleCurrentSchool} value={props.currentSchool.grades} data="grades" />
				</Grid.Column>
				<Grid.Column width={6}>
					<Form.Input placeholder='Previous School' value={props.previousSchool.institute} onChange={onHandleChange} data="institute" />
				</Grid.Column>
				<Grid.Column width={5}>
					<Form.Input placeholder='Position' value={props.previousSchool.position} onChange={onHandleChange} data="position" />
				</Grid.Column>
				<Grid.Column width={5}>
					<GlobalCodeMultiSelect placeholder='Grade(s) taught' value={props.previousSchool.grades} categoryType="Grades" onChange={onHandleChange} data="grades" />
				</Grid.Column>
				<Grid.Column width={12}>
					<Button className="primaryBtn" onClick={props.addEducation}><Icon name='plus' />Add</Button>
					<Button className="primaryBtn" onClick={props.updateEducation}><Icon name="plus circle" />Update</Button>
				</Grid.Column>
				<React.Fragment>
					{props.thirdSecondStep && props.thirdSecondStep.length > 0 && <Table fixed>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Current School</Table.HeaderCell>
								<Table.HeaderCell>Position</Table.HeaderCell>
								<Table.HeaderCell>Grade</Table.HeaderCell>
								<Table.HeaderCell>Previous School</Table.HeaderCell>
								<Table.HeaderCell>Position</Table.HeaderCell>
								<Table.HeaderCell>Grade</Table.HeaderCell>
								<Table.HeaderCell textAlign="right">Action</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{props.thirdSecondStep && props.thirdSecondStep.map((singleData, index) => {
							   ;
								return (
								<>
									 <Table.Row key={index}>
										<Table.Cell>{singleData.curInstitute}</Table.Cell>
										<Table.Cell>{singleData.curPosition}</Table.Cell>
										<Table.Cell>{singleData.curGrades}</Table.Cell>
										<Table.Cell>{singleData.preInstitute}</Table.Cell>
										<Table.Cell>{singleData.prePosition}</Table.Cell>
										<Table.Cell>{singleData.preGrades}</Table.Cell>
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