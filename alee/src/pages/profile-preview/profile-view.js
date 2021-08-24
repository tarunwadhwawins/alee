import React from "react";
import { Grid, Header, Image, List, Divider, Icon } from "semantic-ui-react";
import { profile, Grade, Curriculum, Class, LessonPlan, } from "../../shared/functional/global-image-import"


function ProfileViewPage() {
	return (
		<div className="common-shadow profileView">
			<div className="profileViewHeader" >
				<div className="profileImgOuter">
					<div className="profileImg">
						<Image src={profile} />
					</div>
					<Icon name='edit outline' title="Edit" />
					<Icon name='trash alternate outline' title="Delete" />
				</div>

				<div className="profileViewHeaderDesc">
					<Header as='h3' className="commonHeading">
						Charlotte Jefferson
					</Header>
					<List horizontal className="basicInfo">
						<List.Item>
							<List.Icon name='mail' />
							<List.Content>cefferson@gmail.com</List.Content>
						</List.Item>
						<List.Item>
							<List.Icon name='mobile alternate' />
							<List.Content>(555) 564-5666</List.Content>
						</List.Item>
					</List>
					<p><span>School Name :</span> 	Thomas Jefferson High School for Science and Technology</p>
					<List horizontal className="gradePlan">
						<List.Item>
							<List.Content>
								<span>12th</span>
								<List.Header>Grade</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>
								<span>10</span>
								<List.Header>Lesson Plan </List.Header>
							</List.Content>
						</List.Item>
					</List>

				</div>
			</div>
			<Grid className="profileViewBody" columns="1">
				<Grid.Column width={8}>
					<p><span>Subject : </span> English Literature</p>
					<Header as="h4">Education Qualification</Header>
					<p><span>Degree : </span> BCA</p>
					<p><span>In progress : </span> Yes</p>
					<p><span>School/College/University : </span> Gilbert Classical Academy</p>
					<p><span>Year of passing : </span> 2012</p>
					<Divider hidden />
					<p><span>Degree : </span> MCA</p>
					<p><span>In progress : </span> Yes</p>
					<p><span>School/College/University : </span> Gilbert Classical Academy</p>
					<p><span>Year of passing : </span> 2015</p>
				</Grid.Column>
				<Grid.Column width={8}>

				</Grid.Column>
				<Grid.Column>
					<Header as="h4">Work/Employment History</Header>
					<p><span>Current Company : </span> Liberal Arts High School</p>
					<p><span>Position : </span> Teacher</p>
					<p><span>Grade Taught : </span> 5th, 7th, 9th</p>
					{/* <Divider fitted/> */}
					<p><span>Previous Company : </span> Gilbert Classical Academy</p>
					<p><span>Position : </span> Teacher</p>
				</Grid.Column>
				<Grid.Column>
					<Header as="h4">Key Skillset</Header>
					<p><span>Skills : </span> Communication, Patience, Creativity, Dedication.</p>
				</Grid.Column>
			</Grid>
		</div>
	);
}

export default ProfileViewPage;