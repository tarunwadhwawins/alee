import React  from "react";
import { Form, Grid} from "semantic-ui-react";

const schoolname = [
	{
	  key: 'Thomas Jefferson High School for Science and Technology',
	  text: 'Thomas Jefferson High School for Science and Technology',
	  value: 'Thomas Jefferson High School for Science and Technology',
	},
	{
	  key: 'Carnegie Vanguard High School',
	  text: 'Carnegie Vanguard High School',
	  value: 'Carnegie Vanguard High School',
	},
	{
	  key: 'Liberal Arts and Science Academy High School',
	  text: 'Liberal Arts and Science Academy High School',
	  value: 'Liberal Arts and Science Academy High School',
	},
	{
	  key: 'Gilbert Classical Academy',
	  text: 'Gilbert Classical Academy',
	  value: 'Gilbert Classical Academy',
	},
	{
	  key: 'Design and Architecture Senior High School',
	  text: 'Design and Architecture Senior High School',
	  value: 'Design and Architecture Senior High School',
	},
	{
	  key: 'Stanton College Preparatory School',
	  text: 'Stanton College Preparatory School',
	  value: 'Stanton College Preparatory School',
	},
  ]

  const curriculums = [
	{
	  key: 'American Common Core',
	  text: 'American Common Core',
	  value: 'American Common Core',
	},
	{
	  key: 'Next Generation Science Standards (NGSS)',
	  text: 'Next Generation Science Standards (NGSS)',
	  value: 'Next Generation Science Standards (NGSS)',
	},
	{
	  key: 'Diploma Programme (DP)',
	  text: 'Diploma Programme (DP)',
	  value: 'Diploma Programme (DP)',
	},
	{
	  key: 'Middle Years Programme (MYP)',
	  text: 'Middle Years Programme (MYP)',
	  value: 'Middle Years Programme (MYP)',
	},
	{
	  key: 'English Curriculum',
	  text: 'English Curriculum',
	  value: 'English Curriculum',
	},
	{
	  key: 'Primary Years Programme (PYP)',
	  text: 'Primary Years Programme (PYP)',
	  value: 'Primary Years Programme (PYP)',
	},
  ]

  const subjects = [
	{
	  key: 'Accounting',
	  text: 'Accounting',
	  value: 'Accounting',
	},
	{
	  key: 'Business management',
	  text: 'Business management',
	  value: 'Business management',
	},
	{
	  key: 'Calculus',
	  text: 'Calculus',
	  value: 'Calculus',
	},
	{
	  key: 'Chemistry',
	  text: 'Chemistry',
	  value: 'Chemistry',
	},
	{
	  key: 'Computer Science',
	  text: 'Computer Science',
	  value: 'Computer Science',
	},
	{
	  key: 'English Literature',
	  text: 'English Literature',
	  value: 'English Literature',
	},
  ]



function ProfileStepOne() {
	return (
			<Form>
				<Grid>
					<Grid.Column width={8}>
						<Form.Dropdown placeholder='School Name' fluid selection search options={schoolname} />
                    </Grid.Column>
                    <Grid.Column width={8} >
						<Form.Dropdown placeholder='Choose Curriculums' fluid selection search options={curriculums} />
                    </Grid.Column>
                    <Grid.Column width={8} >
						<Form.Dropdown placeholder='Choose Subjects' fluid selection search options={subjects} />
                    </Grid.Column>
					
				</Grid>   
			</Form> 
	);
}
	  
export default ProfileStepOne;