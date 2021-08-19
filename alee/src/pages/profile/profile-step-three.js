import React from "react";
import { Form, Grid, Icon, Button } from "semantic-ui-react";
import { GlobalCodeMultiSelect } from "../../shared/components";

function ProfileStepThree(props) {

	const { onHandleChange } = props;
	return (
		<Form>
			<Grid>
				<Grid.Column width={6}>
					<Form.Input placeholder='Current School' data="school" />
				</Grid.Column>
				<Grid.Column width={5}>
					<Form.Input placeholder='Position' data="position" />
				</Grid.Column>
				<Grid.Column width={5}>
					<GlobalCodeMultiSelect placeholder='Grade(s) taught' categoryType="Grades" onChange={onHandleChange} data="grades"
					/>
				</Grid.Column>

				<Grid.Column width={6}>
					<Form.Input placeholder='Previous School' data="school"/>
				</Grid.Column>
				<Grid.Column width={5}>
					<Form.Input placeholder='Position' />
				</Grid.Column>
				<Grid.Column width={5}>
					<GlobalCodeMultiSelect placeholder='Grade(s) taught' categoryType="Grades" onChange={onHandleChange} data="grades"
					/>
				</Grid.Column>

				<Grid.Column width={12}>
					<Button className="primaryBtn" onClick={props.addWorkHistory} > <Icon name='plus'/> Add </Button>
				</Grid.Column>

			</Grid>
		</Form>
	);
}

export default ProfileStepThree;