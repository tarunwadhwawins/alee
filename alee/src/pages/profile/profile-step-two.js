import React from "react";
import { Form, Grid, Icon, Button } from "semantic-ui-react";

const passingYear = [];
let years = new Date().getFullYear()
let lastYears = years - 40;
for (let i = years; i > lastYears; i--) {
	passingYear.push({ key: i, text: i, value: i });
}

function ProfileStepTwo() {

	return (
		<Form>
			<Grid>
				<Grid.Column width={8}>
					<Form.Input placeholder='Degree' className="addBtnInput" />
					<Form.Checkbox label="In progress" />
				</Grid.Column>
				<Grid.Column width={8}>
					<Form.Input placeholder='School/College/University' className="addBtnInput" />
				</Grid.Column>
				<Grid.Column width={8}>
					<Form.Dropdown placeholder='Year of Passing' fluid selection options={passingYear} className="passingYear" />
				</Grid.Column>
			</Grid>
			<Grid>
				<Grid.Column width={16}>
					<Button className="primaryBtn"> <Icon name="plus circle" /> Add more </Button>
				</Grid.Column>
			</Grid>
		</Form>
	);
}

export default ProfileStepTwo;