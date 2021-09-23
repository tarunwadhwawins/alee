import React, { useState, useEffect } from "react";
import { Form, Grid,Button, Dimmer, Loader,Dropdown} from "semantic-ui-react";
import { useDispatch } from 'react-redux';
import { apiCall } from "../../store/actions/api.actions";
import { GlobalCodeSelect} from "../../shared/components";
import { useSelector } from "react-redux";
// import ImageUploading from 'react-images-uploading';
// import { commonFunctions } from "../../shared/functional/global-import";
function ProfileStepOne(props) {
	const [school, setSchool] = useState([]);
	const api = useSelector(state => state.api);
	const [grade, setGradeList] = useState([]);
	const dispatch = useDispatch();
	useEffect(() => {
		getSchoolList();
		getGradeList();
	}, []);
	const getSchoolList = () => {
		dispatch(apiCall({
			urls: ["GETSCHOOLSLIST"], method: "GET", data: { schoolId:-1, pageNo: 1, pageSize: 10000 }, onSuccess: (response) => {
				const getSchool = response.map((school) => {
					return { value: school.schoolId, text: school.schoolName }
				});
				setSchool(getSchool)
			}
		}))
	}
	//  get api //
	const getGradeList = () => {
		dispatch(
			apiCall({
				urls: ["GETGRADESLIST"],
				method: "GET",
				data: ({ ActiveGrades: true, OrderBy: "GradeName", OrderByDescending: false }),
				onSuccess: (response) => {
					const grade = response.map((singledata) => {
						return {
							text: singledata.gradeName,
							value: singledata.gradeId
						};
					});
					setGradeList(grade);
				},
			})
		);
	};

	const { onHandleChange, imageChange, values } = props;
	return (
		<Form>
			<Grid>
				{
					api.isApiLoading && (
						<Dimmer active inverted>
							<Loader />
						</Dimmer>
					)
				}
				<Grid.Column width={4}>
					<div className="setImg">
						<div className="setImgInner">
							{values && (
								<>
									<img src={values.imageurl} data="image" value={values.imageurl}/>
								</>
							)}
						</div>
						<Button className="primaryBtn" onChange={imageChange}>Browse Image<input type="file" /></Button>
					</div>
				</Grid.Column >
				<Grid.Column width={12}>
					<Grid>
						<Grid.Column width={8}>
							<Form.Dropdown placeholder='School Name' fluid selection search value={values.schoolId} options={school} data="schoolId" onChange={onHandleChange} />
						</Grid.Column>
						<Grid.Column width={8} >
						<Dropdown placeholder='Grade' fluid multiple selection onChange={onHandleChange} options={grade} data="grades" value={values.grades}/>
						</Grid.Column>
						<Grid.Column width={8} >
							<GlobalCodeSelect
								placeholder="Choose Subjects"
								categoryType="Subjects"
								onChange={onHandleChange} data="subjectId" value={values.subjectId}
							/>
						</Grid.Column>
					</Grid>
				</Grid.Column>


			</Grid>
		</Form>
	);
}

export default ProfileStepOne;