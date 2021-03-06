import React, { useState, useEffect } from "react";
import { Grid, Header, Image, List, Dimmer, Loader, Icon, Button } from "semantic-ui-react";
import { commonFunctions } from "../../shared/functional/global-import";
import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "../../store/actions/api.actions";
import { useParams } from 'react-router-dom';
import { env } from "../../shared/functional/global-import";
import { Link } from "../../shared/functional/global-import";
function ProfileViewPage() {
	const teacherId = useParams();
	const api = useSelector((state) => state.api);
	const dispatch = useDispatch();
	const [teacherData, setTeacherData] = useState([]);
	const roles = useSelector(state => state.auth.userDetail.role)
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
					debugger
					setTeacherData(response);
					console.log("teacherData", teacherData)
					console.log("teacherData", teacherData.length)
				},
			})
		);
	};
	const onHandleEdit = (data) => {
		setTeacherData(data);
	}
	debugger
	console.log("teacherData", teacherData)
	return (
		<>
			<div className="common-shadow profileView">
				{api.isApiLoading && (
					<Dimmer active inverted><Loader /></Dimmer>)}
				<div className="profileViewHeader">
					{teacherData.length === 0 && <div className="teacherProfileText"><h2>No record</h2></div>}
					{teacherData && teacherData.map((teacherProfile, index) => {
						const education = teacherProfile.educationQualifications ? JSON.parse(teacherProfile.educationQualifications) : [];
						const Employe = teacherProfile.employmentHistory ? JSON.parse(teacherProfile.employmentHistory) : [];
						const skill = teacherProfile.keySkillSet ? JSON.parse(teacherProfile.keySkillSet) : [];
						return (
							<>
								{roles === "Teacher" &&
									<div className="ProfileEdit">
										<Button as={Link}
											to={{ pathname: `${env.PUBLIC_URL}/profile`, state: { teacherProfile, education, Employe, skill } }}
											onClick={() => onHandleEdit(teacherProfile)} icon> <Icon name="edit" /></Button>
									</div>
								}
								<div className="profileImgOuter">
									<div className="profileImg">
										<Image src={commonFunctions.concatenateImageWithAPIUrl(teacherProfile.image)} />
									</div>
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
												<span>{teacherProfile.lessonPlans}</span>
												<List.Header>LessonPlan</List.Header>
											</List.Content>
										</List.Item>
									</List>
								</div>
							</>
						);
					})}
				</div>
				{teacherData && teacherData.map((teacherdata, index) => {
					const education = teacherdata.educationQualifications ? JSON.parse(teacherdata.educationQualifications) : [];
					const Employe = teacherdata.employmentHistory ? JSON.parse(teacherdata.employmentHistory) : [];
					const skill = teacherdata.keySkillSet ? JSON.parse(teacherdata.keySkillSet) : [];
					return (
						<Grid className="profileViewBody" columns="1">
							<Grid.Column width={8}>
								<p><span>Subject : </span>{teacherdata.subject}</p>
								<Header as="h4">Education Qualification</Header>
								{/* <div className="ProfileEdit">
								<Button type='button' as={Link}
									to={{ pathname:`${env.PUBLIC_URL}/profile`, state: {education} }}
									onClick={() => onHandleEductionEdit(teacherData)}> Edit</Button>
						      	</div> */}
								{education && education.length > 0 && education.map((Qualification, index) => {
									return (
										<>
											<p><span>Degree : </span> {Qualification.degree}</p>
											<p><span>In progress : </span>{Qualification.inProgress}</p>
											<p><span>School/College/University :</span>{Qualification.college}</p>
											<p><span>Year of passing : </span>{Qualification.yearOfPassing}</p>
										</>
									);
								})}
							</Grid.Column>
							<Grid.Column width={8}>
							</Grid.Column>
							<Grid.Column>
								<Header as="h4">Work/Employment History</Header>
								{Employe && Employe.length > 0 && Employe.map((employmentHistory, index) => {

									const currentCompany = Employe.find(x => x.isCurrent === true)
									const previousCompany = Employe.find(x => x.isCurrent === false)
									const grade = JSON.parse(employmentHistory.grades)[0];
									return (
										<>
											<p><span>Current Company : </span>{currentCompany?.institute}</p>
											<p><span>Position : </span>{currentCompany?.position}</p>
											<p><span>Grade : </span>{grade}</p>
											<p><span>Previous Company : </span>{previousCompany?.institute}</p>
											<p><span>Position : </span>{previousCompany?.position}</p>
											{/* <p><span>Grade  : </span>{previousGrade}</p> */}
										</>
									);
								})}
							</Grid.Column>
							<Grid.Column>
								<Header as="h4">Key Skillset</Header>
								{skill && skill.length > 0 && skill.map((skills, index) => {
									return (
										<><p><span>Skills:</span>{skills}</p></>
									);
								})}
							</Grid.Column>
						</Grid>
					);
				})}

			</div>

		</>
	);
}

export default ProfileViewPage;