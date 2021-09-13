import React, { useState, useEffect } from "react";
import { Form, Grid, Icon, Image, Button,Dimmer,Loader } from "semantic-ui-react";
import { useDispatch } from 'react-redux';
import { apiCall } from "../../store/actions/api.actions";
import { GlobalCodeSelect, GlobalCodeMultiSelect } from "../../shared/components";
import { useSelector} from "react-redux";



function ProfileStepOne(props) {
	const [school, setSchool] = useState([]);
	const api = useSelector(state => state.api);

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
	const { onHandleChange, imageChange, values} = props;
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
							<Form.Dropdown placeholder='School Name' fluid selection search value={values.schoolId} options={school} data="schoolId" onChange={onHandleChange} />
						</Grid.Column>
						<Grid.Column width={8} >
							{/* <Dropdown placeholder='Grade' fluid multiple selection options={props.grade} data="grades"/> */}
							<GlobalCodeMultiSelect placeholder='Grade(s) taught' value={values.grades} categoryType="Grades" onChange={onHandleChange} data="grades"/>
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