import React, { useState, useEffect } from "react";
import { Grid, Header, Image, Dimmer, Loader } from "semantic-ui-react";
import { useDispatch } from 'react-redux';
import { apiCall } from "../../store/actions/api.actions";
import { useSelector } from "react-redux";
import { commonFunctions } from "../../shared/functional/global-import";
import { useParams } from 'react-router-dom';
function ProfileView() {
	const schoolId = useParams();
	const api = useSelector(state => state.api);
	const [schoolData, setSchoolData] = useState([]);
	const dispatch = useDispatch();
	useEffect(() => {
		getTeacherProfile();
	}, []);
	const getTeacherProfile = () => {
		dispatch(
			apiCall({
				urls: ["GETSCHOOLSLIST"],
				method: "GET",
				data: schoolId,
				onSuccess: (response) => {
					debugger;
					setSchoolData(response);
				},
			})
		);
	};
	return (

		<div className="common-shadow profileView">
			{api.isApiLoading && (
				<Dimmer active inverted><Loader /></Dimmer>)}
			{schoolData && schoolData.map((schoolProfile, index) => {
				debugger;
				return (
					<>
						<div className="profileViewHeader" >
							<div className="profileImgOuter">
								<div className="profileImg">
								<Image src={commonFunctions.concatenateImageWithAPIUrl(schoolProfile.image)} />
								</div>
							</div>

							<div className="profileViewHeaderDesc schoolHeader">
								<Header as='h3' className="commonHeading">
									{schoolProfile.schoolName}
								</Header>
							</div>
						</div>
						<Grid>
							<Grid.Column width={16}>
								<p>Email : <span>{schoolProfile.email}</span></p>
							</Grid.Column>
							<Grid.Column width={16}>
								<p>Address : <span>{schoolProfile.address}</span></p>
							</Grid.Column>
							<Grid.Column width={16}>
								<p>Phone : <span>{schoolProfile.contactNo}</span></p>
							</Grid.Column>
						</Grid>
					</>
				);
			})}
		</div>
	);
}

export default ProfileView;