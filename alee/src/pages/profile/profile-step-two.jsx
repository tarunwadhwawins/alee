import React, { Component } from "react";
import { Form, Grid} from "semantic-ui-react";



class ProfileStepTwo extends Component {

	render() {
		return (
				<Form>
					<Grid>
						<Grid.Column width={16}>
							<Form.Input action={{ icon: 'plus' }} placeholder='Add Skill' className="addBtnInput"/>
						</Grid.Column>
						<Grid.Column width={16}>
							<Form.Input action={{ icon: 'plus' }} placeholder='Add Skill' className="addBtnInput"/>
						</Grid.Column>
						
					</Grid>   
				</Form> 
		);
	}
}
	  
export default ProfileStepTwo;