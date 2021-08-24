import React from "react";
import { Form, Grid, Icon, Button, Table } from "semantic-ui-react";

const passingYear = [];
let years = new Date().getFullYear()
let lastYears = years - 40;
for (let i = years; i > lastYears; i--) {
	passingYear.push({ key: i, text: i, value: i });
}
function ProfileStepTwo(props) {
	return (
		<Form>
			<Grid>
				<Grid.Column width={8}>
					<Form.Input placeholder='Degree' className="addBtnInput" onChange={props.onHandleChange} data="degree" value={props.secondstepValues.degree} />
					<Form.Checkbox label="In progress" onChange={props.onHandleChange} data="inProgress" value={props.secondstepValues.inProgress} checked={props.secondstepValues.inProgress ? true : false} />
				</Grid.Column>
				<Grid.Column width={8}>
					<Form.Input placeholder='School/College/University' className="addBtnInput" onChange={props.onHandleChange} data="college" value={props.secondstepValues.college} />
				</Grid.Column>
				<Grid.Column width={8}>
					<Form.Dropdown placeholder='Year of Passing' fluid selection options={passingYear} className="passingYear" onChange={props.onHandleChange} data="yearOfPassing" value={props.secondstepValues.yearOfPassing} />
				</Grid.Column>
			</Grid>
			<Grid>
				<Grid.Column width={16}>
					<Button className="primaryBtn" onClick={props.addMoreQualification}> <Icon name="plus circle" /> Add </Button>
					<Button className="primaryBtn" onClick={props.updateQualification}> <Icon name="plus circle" /> update </Button>
				</Grid.Column>
			</Grid>

			<React.Fragment>
				{props.formSecondStep && props.formSecondStep.length > 0 && <Table fixed>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Degree</Table.HeaderCell>
							<Table.HeaderCell>School/College/University</Table.HeaderCell>
							<Table.HeaderCell>Year of Passing</Table.HeaderCell>
							<Table.HeaderCell textAlign="right">Action</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{props.formSecondStep && props.formSecondStep.map((singleData, index) => {
							debugger
							return (
								<Table.Row key={index}>
									<Table.Cell>{singleData.degree}</Table.Cell>
									<Table.Cell>{singleData.college}</Table.Cell>
									<Table.Cell>{singleData.yearOfPassing}</Table.Cell>
									<Table.Cell textAlign="right">
										<Icon name="pencil alternate" size="large" link onClick={() => props.editQualification(singleData,index)}/>
										<Icon name="trash alternate" size="large" link onClick={() => props.removeQualification(index)} />
									</Table.Cell>
								</Table.Row>
							)
						})}
					</Table.Body>
				</Table>}
			</React.Fragment>
		</Form>
	);
}

export default ProfileStepTwo;