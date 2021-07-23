import React  from "react";
import { Form, Grid} from "semantic-ui-react";


function ProfileStepFour() {
	return (
			<Form>
				<Grid>
					<Grid.Column width={16}>
						<Form.Input action={{ icon: 'plus' }} placeholder='Upload' className="addBtnInput"/>
					</Grid.Column>
					<Grid.Column width={16}>
						<Form.Input action={{ icon: 'plus' }} placeholder='Use from template' className="addBtnInput"/>
					</Grid.Column>
					
				</Grid>   
			</Form> 
	);
}
	  
export default ProfileStepFour;