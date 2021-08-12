import React, { useState, useEffect } from "react";
import { Form, Grid } from "semantic-ui-react";
import { useDispatch } from 'react-redux';
import { apiCall } from "../../store/actions/api.actions";
import { GlobalCodeMultiSelect, GlobalCodeSelect } from "../../shared/components";

function ProfileStepOne(props) {
	const [school, setSchool] = useState([])

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

	const { onHandleChange } = props;
	return (
		<Form>
			<Grid>
				<Grid.Column width={8}>
					<Form.Dropdown placeholder='School Name' fluid selection search options={school} data="schoolId" onChange={onHandleChange} />
				</Grid.Column>
				<Grid.Column width={8} >
					<GlobalCodeMultiSelect placeholder='Grade(s) taught' categoryType="Grades" onChange={onHandleChange} data="grades"
					/>
				</Grid.Column>
				<Grid.Column width={8} >
					<GlobalCodeSelect placeholder="Choose Subjects" categoryType="Subjects" onChange={onHandleChange} data="subjectId"/>
				</Grid.Column>

			</Grid>
		</Form>
	);
}

export default ProfileStepOne;