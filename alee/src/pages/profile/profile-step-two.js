import React from "react";
import { Form, Grid, Icon, Button} from "semantic-ui-react";


const passingYear = [
	{
		key: '2012',
		text: '2012',
		value: '2012',
	},
	{
		key: '2013',
		text: '2013',
		value: '2013',
	},
	{
		key: '2014',
		text: '2014',
		value: '2014',
	},
	{
		key: '2015',
		text: '2015',
		value: '2015',
	},
	{
	  key: '2016',
	  text: '2016',
	  value: '2016',
	},
	{
	  key: '2017',
	  text: '2017',
	  value: '2017',
	},
	{
	  key: '2018',
	  text: '2018',
	  value: '2018',
	},
	{
	  key: '2019',
	  text: '2019',
	  value: '2019',
	},
	{
	  key: '2020',
	  text: '2020',
	  value: '2020',
	},
	{
	  key: '2021',
	  text: '2021',
	  value: '2021',
	},
  ]
  
  function ProfileStepTwo() {

		return (
				<Form>
					<Grid>
						<Grid.Column width={8}>
							<Form.Input action={{ icon: 'plus' }} placeholder='Degree' className="addBtnInput"/>
							<Form.Checkbox label="In progress"/>
						</Grid.Column>
						<Grid.Column width={8}>
							<Form.Input action={{ icon: 'plus' }} placeholder='School/College/University' className="addBtnInput"/>
						</Grid.Column>
						<Grid.Column width={8}>
								<Form.Dropdown placeholder='Year of Passing' fluid selection options={passingYear}  className="passingYear"/>
						</Grid.Column>
					</Grid>   
					<Grid>
						<Grid.Column width={16}>
							<Button className="primaryBtn"> <Icon name="plus circle"/> Add more </Button>
						</Grid.Column>
					</Grid>
				</Form> 
		);
}
	  
export default ProfileStepTwo;