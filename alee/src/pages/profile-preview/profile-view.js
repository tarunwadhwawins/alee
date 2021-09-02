import React, { useState, useEffect } from "react";
import { Grid, Header, Image, List, Divider, Icon, Dimmer, Loader } from "semantic-ui-react";
import { profile } from "../../shared/functional/global-image-import"
import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "../../store/actions/api.actions";
import { useParams } from 'react-router-dom';
function ProfileViewPage() {
	const teacherId = useParams();
	const api = useSelector((state) => state.api);
	const dispatch = useDispatch();
	const [teacherData, setTeacherData] = useState([]);
	useEffect(() => {
		getTeacherProfile();
	}, []);
	const getTeacherProfile = () => {
		dispatch(
			apiCall({
				urls: ["GETTEACHERPROFILEDATA"],
				method: "GET",
				data: teacherId,
				onSuccess: (response) => {
                  debugger;
					setTeacherData(response);
					//   setTeacherProfile(initialValues);
				},
			})
		);
	};
	return (
		<>
			{api.isApiLoading && (
				<Dimmer active inverted>
					<Loader />
				</Dimmer>
			)}
			{teacherData.map((teacherProfile, index) => {
				     
				const education = teacherProfile.educationQualifications ? JSON.parse(teacherProfile.educationQualifications) : [];
				const Employe = teacherProfile.employmentHistory ? JSON.parse(teacherProfile.employmentHistory) : [];
				const skill = teacherProfile.keySkillSet ? JSON.parse(teacherProfile.keySkillSet) : [];
				const grade = teacherProfile.grades ? JSON.parse(teacherProfile.grades)[0] : [];
				return (
					<div className="common-shadow profileView">

						{api.isApiLoading && (<Dimmer active inverted><Loader /></Dimmer>)}
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
									{teacherProfile.teacherName}
								</Header>
								<List horizontal className="basicInfo">
									<List.Item>
										<List.Icon name='mail' />
										<List.Content>{teacherProfile.email}</List.Content>
									</List.Item>
									<List.Item>
										<List.Icon name='mobile alternate' />
										<List.Content>{teacherProfile.contactNo}</List.Content>
									</List.Item>
								</List>
								<p><span>{teacherProfile.schoolName}:</span>{teacherProfile.address}</p>
								<List horizontal className="gradePlan">
									<List.Item>
										<List.Content>
											<span>{grade}</span>
											<List.Header>Grade</List.Header>
										</List.Content>
									</List.Item>
									<List.Item>
										<List.Content>
											<span>{teacherProfile.lessonPlans}</span>
											<List.Header>LessonPlan</List.Header>
										</List.Content>
									</List.Item>
								</List>
							</div>
						</div>
						<Grid className="profileViewBody" columns="1">
							<Grid.Column width={8}>
								<p><span>Subject : </span>{teacherProfile.subject}</p>
								<Header as="h4">Education Qualification</Header>
								{education && education.length > 0 && education.map((Qualification, index) => {
									return (
										<>
											<p><span>Degree : </span> {Qualification.Degree}</p>
											<p><span>In progress : </span>{Qualification.InProgress}</p>
											<p><span>School/College/University :</span>{Qualification.College}</p>
											<p><span>Year of passing : </span>{Qualification.YearOfPassing}</p>
										</>
									);
								})}
							</Grid.Column>
							<Grid.Column width={8}>
							</Grid.Column>
							<Grid.Column>
								<Header as="h4">Work/Employment History</Header>
								{Employe && Employe.length > 0 && Employe.map((employmentHistory, index) => {
									     
									const currentCompany = Employe.find(x => x.IsCurrent === true)
									const previousCompany = Employe.find(x => x.IsCurrent === false)
									const employHistory =  JSON.parse(currentCompany.ClassesTaught)[0] ;
									return (
										<>
											<p><span>Current Company : </span>{currentCompany?.Institute}</p>
											<p><span>Position : </span>{currentCompany?.Position}</p>
											<p><span>Grade Taught : </span>{employHistory}</p>
											<p><span>Previous Company : </span>{previousCompany?.Institute}</p>
											<p><span>Position : </span>{previousCompany?.Position}</p>
										</>
									);
								})}
							</Grid.Column>
							<Grid.Column>
								<Header as="h4">Key Skillset</Header>
								{skill && skill.length > 0 && skill.map((skills, index) => {
									return (
										<>
											<p><span>Skills : </span>{skills}</p>
										</>
									);
								})}
							</Grid.Column>
						</Grid>
					</div>
				);
			})}
		</>
	);
}

export default ProfileViewPage;