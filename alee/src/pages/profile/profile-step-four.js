import React from "react";
import { Form, Grid, Button, Icon, Table, GridColumn } from "semantic-ui-react";
function ProfileStepFour(props) {
	return (
		<Form>
			<Grid>
				<Grid.Column width={16}>
					<Form.Input placeholder='Add Skill' className="addBtnInput" value={props.skilled} onChange={props.onHandleChange} />
				</Grid.Column>
				<Grid.Column width={16}>
					{!props.skill.updatedSkill ? <Button className="primaryBtn" onClick={props.addMoreSkill}> <Icon name="plus circle" /> Add </Button> : <>
						<Button className="primaryBtn" onClick={props.updateSkill}>Update </Button>
						<Button className="primaryBtn" onClick={props.ClearSkill}>Cancel </Button> </>}

				</Grid.Column>
				<GridColumn width={8}>
					{props.skills && props.skills.length > 0 && <Table fixed>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Skill</Table.HeaderCell>
								<Table.HeaderCell textAlign="right">Action</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{props.skills && props.skills.map((singleData, index) => {
								return (
									<Table.Row key={index}>
										<Table.Cell>{singleData}</Table.Cell>
										<Table.Cell textAlign="right">
											<Icon name="pencil alternate" size="large" link onClick={() => props.editSkills(singleData, index)} />
											<Icon name="trash alternate" size="large" link onClick={() => props.removeSkill(index)} />
										</Table.Cell>
									</Table.Row>
								)
							})}
						</Table.Body>
					</Table>}
				</GridColumn>
			</Grid>
		</Form>
	);
}

export default ProfileStepFour;