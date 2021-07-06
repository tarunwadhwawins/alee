import React, { Component } from "react";
import { Form, Grid, Icon, Button} from "semantic-ui-react";
import { connect, bindActionCreators, actions, Link, commonFunctions, withRouter, env } from "../../shared/functional/global-import";



class ProfileStepFour extends Component {

	render() {
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
}
	  
export default ProfileStepFour;