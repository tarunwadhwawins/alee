import React, { useState, useEffect } from "react";
import { Form, Grid, Icon, Image, Button } from "semantic-ui-react";
import { useDispatch } from 'react-redux';
import { apiCall } from "../../store/actions/api.actions";
import { GlobalCodeSelect, GlobalCodeMultiSelect } from "../../shared/components";
import { profile } from "../../shared/functional/global-image-import"

function ProfileStepOne(props) {
	const [school, setSchool] = useState([]);
	const dispatch = useDispatch();
	useEffect(() => {
		getSchoolList();
	}, []);
	const getSchoolList = () => {
		dispatch(apiCall({
			urls: ["GETSCHOOLSLIST"], method: "GET", data: { pageNo: 1, pageSize: 10000 }, onSuccess: (response) => {
				const getSchool = response.map((school) => {
					return { value: school.schoolId, text: school.schoolName }
				});
				setSchool(getSchool)
			}
		}))
	}
	const { onHandleChange, imageChange, values,removeSelectedImage} = props;
	return (
		<Form>
			<Grid>
				<Grid.Column width={4}>
					<div className="setImg">
						<div className="setImgInner">
							{values && (
								<>
									<img src={values.imageurl}/>
									{/* <Icon name="close" image={values.image} onclick={removeSelectedImage} /> */}
								</>
							)}
						</div>
						<Button className="primaryBtn" onChange={imageChange}>Browse Image<input type="file" /></Button>
					</div>
				</Grid.Column>
				<Grid.Column width={12}>
					<Grid>
						<Grid.Column width={8}>
							<Form.Dropdown placeholder='School Name' fluid selection search options={school} data="schoolId" onChange={onHandleChange} />
						</Grid.Column>
						<Grid.Column width={8} >
							{/* <Dropdown placeholder='Grade' fluid multiple selection options={props.grade} data="grades"/> */}
							<GlobalCodeMultiSelect placeholder='Grade(s) taught' value={school.grades} categoryType="Grades" onChange={onHandleChange} data="grades" />
						</Grid.Column>
						<Grid.Column width={8} >
							<GlobalCodeSelect
								placeholder="Choose Subjects"
								categoryType="Subjects"
								onChange={onHandleChange} data="subjectId"
							/>
						</Grid.Column>
					</Grid>
				</Grid.Column>


			</Grid>
		</Form>
	);
}

export default ProfileStepOne;