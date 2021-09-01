import React  from "react";
import { Form, Grid,Button,Icon,Table} from "semantic-ui-react";
function ProfileStepFour(props) {
		return (
				<Form>
					<Grid>
						<Grid.Column width={16}>
							<Form.Input  placeholder='Add Skill' className="addBtnInput" value={props.skilled} onChange={props.onHandleChange} />
						</Grid.Column>
						<Grid.Column width={16}>
					<Button className="primaryBtn" onClick={props.addMoreSkill}> <Icon name="plus circle" /> Add </Button>
					<Button className="primaryBtn" onClick={props.updateSkill}> <Icon name="plus circle" /> update </Button>
				</Grid.Column>
				<React.Fragment>
				{props.skills && props.skills.length > 0 && <Table fixed>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Skill</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{props.skills && props.skills.map((singleData,index) => {
							return (
								<Table.Row key={index}>
									<Table.Cell>{singleData}</Table.Cell>
									<Table.Cell textAlign="right">
					         	<Icon name="pencil alternate" size="large" link onClick={() => props.editSkills(singleData,index)}/>
					     	    <Icon name="trash alternate" size="large" link onClick={() => props.removeSkill(index)}/>
									</Table.Cell>
								</Table.Row>
							)
						})}
					</Table.Body>
				</Table>}
			</React.Fragment>
					</Grid>   
				</Form> 
		);
}
	  
export default ProfileStepFour;