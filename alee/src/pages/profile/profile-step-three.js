import React from "react";
import { Form, Grid, Icon, Button} from "semantic-ui-react";



const Grade = [
	{ key: '1st', text: '1st', value: '1st' },
	{ key: '2nd', text: '2nd', value: '2nd' },
	{ key: '3rd', text: '3rd', value: '3rd' },
	{ key: '4th', text: '4th', value: '4th' },
	{ key: '5th', text: '5th', value: '5th' },
	{ key: '6th', text: '6th ', value: '6th' },
	{ key: '7th', text: '7th', value: '7th' },
	{ key: '8th', text: '8th', value: '8th' },
	{ key: '9th', text: '9th', value: '9th' },
	{ key: '10th', text: '10th', value: '10th' },
	{ key: '11th', text: '11th', value: '11th' },
	{ key: '12th', text: '12th', value: '12th' },
  ]
function ProfileStepThree() {
		return (
				<Form>
					<Grid>

						 <Grid.Column width={6}>
							<Form.Input placeholder='Previous Company'/>
						</Grid.Column>
						<Grid.Column width={5}>
							<Form.Input placeholder='Position'/>
						</Grid.Column>
						<Grid.Column width={5}>
							<Form.Dropdown placeholder='Grade(s) taught ' fluid multiple selection options={Grade} />
						</Grid.Column>
						{/* <Grid.Column width={6}>
							<Form.Input placeholder='Previous Company'/>
						</Grid.Column>
						<Grid.Column width={5}>
							<Form.Input placeholder='Position'/>
						</Grid.Column> */}
						<Grid.Column width={12}>
							<Button className="primaryBtn">  <Icon name='plus' /> Add Additional</Button>
						</Grid.Column>
						
						{/* <Grid.Column width={16}>
							<Form.Input action={{ icon: 'plus' }} placeholder='Entry 1' className="addBtnInput"/>
						</Grid.Column>
						<Grid.Column width={16}>
							<Form.Input action={{ icon: 'plus' }} placeholder='Entry 2' className="addBtnInput"/>
						</Grid.Column> */}
						
					</Grid>   
				</Form> 
		);
}
	  
export default ProfileStepThree;