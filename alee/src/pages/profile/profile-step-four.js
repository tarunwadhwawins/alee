import React from "react";
import { Form, Grid,Button,Icon} from "semantic-ui-react";


function ProfileStepFour() {

		return (
				<Form>
					<Grid>
						<Grid.Column width={16}>
							<Form.Input  placeholder='Add Skill' className="addBtnInput"/>
						</Grid.Column>
						<Grid.Column width={16}>
							<Button className="primaryBtn"> <Icon name="plus circle"/> Add more </Button>
						</Grid.Column>
					</Grid>   
				</Form> 
		);
}
	  
export default ProfileStepFour;