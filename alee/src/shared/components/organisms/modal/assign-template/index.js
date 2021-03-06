import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form, Grid } from "semantic-ui-react";
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../../../../../src/store/actions/api.actions";
import SimpleReactValidator from 'simple-react-validator';
import { commonFunctions } from "../../../../functional/global-import";

function AddAssignTemplate(props) {
	const initialState = { teacherTemplateId: 0, schoolId: null, gradeId: null, teacherId: [], templateId: [], teacherAll: false, templateAll: false, isActive: true, actionPerformedBy: "" }
	const [template, setTemplate] = useState([])
	const [grade, setGrade] = useState([])
	const [school, setSchool] = useState([])
	const [teacher, setTeacher] = useState([])
	const [values, setValues] = useState(initialState);
	const api = useSelector(state => state.api);
	const dispatch = useDispatch();
	const [, forceUpdate] = useState()
	const simpleValidator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } }))
//  get api //
const getGrades = () => {
    dispatch(
      apiCall({
        urls: ["GETGRADESLIST"],
        method: "GET",
        data:({ActiveGrades:true,OrderBy:"GradeName",OrderByDescending:false}),
        onSuccess: (response) => {
                        
          const getGrades = response.map((singledata) => {
            return { text: singledata.gradeName, value: singledata.gradeId };
          });
		  setGrade(getGrades);
        },
      })
    );
  };
	const getTemplate = () => {
		dispatch(apiCall({
			urls: ["GETTEMPLATELIST"], method: "GET", data: { "templateId": -1, "PageNo": 1, "PageSize": 1000 }, onSuccess: (response) => {
				const getTemplate = response.map((template) => {
					return { value: template.templateId, text: template.templateName }
				});
				setTemplate(getTemplate)
			}
		}));
	}
	const getSchoolList = () => {
		dispatch(apiCall({
			urls: ["GETSCHOOLSLIST"], method: "GET", data: { schoolId: -1, pageNo: 1, pageSize: 10000 }, onSuccess: (response) => {
				const getSchool = response.map((school) => {
					return { value: school.schoolId, text: school.schoolName }
				});
				setSchool(getSchool)
			}
		}))
	}

	useEffect(() => {
		getTemplate();
		getGrades();
		getSchoolList();
	}, []);

	const onHandleChange = (e, { data, value }) => {
		if (data === "schoolId") {
			dispatch(apiCall({
				urls: ["GETTEACHERSLIST"], method: "GET", data: { SchoolId: value, pageNo: 1, pageSize: 1000 }, onSuccess: (response) => {
					const getTeachers = response.map((teacherData) => {
						;
						return { value: teacherData.teacherId, text: teacherData.firstName + teacherData.lastName }
					});
					setTeacher(getTeachers)
				}
			}))
		}
		setValues(initialState)
		setValues({ ...values, [data]: value });
	}
	const onHandleChangeToggle = (e, { data, checked, type }) => {

		if (type === "checkbox") {
			setValues({ ...values, [data]: checked });
		}
	};
	const onSubmit = (e) => {
		const isFormValid = commonFunctions.onHandleFormSubmit(e, simpleValidator, forceUpdate);
		if (isFormValid) {
			dispatch(apiCall({
				urls: ["POSTTEMPLATEASSIGNED"], method: "POST", data: values, onSuccess: (response) => {
					closeModal();
					props.GridReload();
					setValues(initialState);
				}, showNotification: true
			}))
		}
	}
	const closeModal = () => {
		setValues(initialState);
		props.closeModal();
		simpleValidator.current.hideMessages();
	}

	useEffect(() => {
		if (props.editTemplate) {
			editTemplatelist();
		}
	}, [props.editData]);

	const editTemplatelist = () => {

		if (props.editData !== undefined) {

			const { teacherTemplateId, schoolId, gradeId, teacherId, templateId, teacherAll, templateAll, isActive, } = props.editData;
			setValues({
				...values, teacherTemplateId: teacherTemplateId, schoolId: schoolId, gradeId: gradeId, teacherId: [teacherId],
				templateId: [templateId], teacherAll: teacherAll, templateAll: templateAll, isActive: isActive
			});
			dispatch(apiCall({
				urls: ["GETTEACHERSLIST"], method: "GET", data: { SchoolId: schoolId, pageNo: 1, pageSize: 1000 }, onSuccess: (response) => {
					const getTeachers = response.map((teacherData) => {
						return { value: teacherData.teacherId, text: teacherData.firstName + teacherData.lastName }
					});
					setTeacher(getTeachers)
				}
			}))


		}
	};

	return (
		<Modal open={props.openModal} onClose={closeModal} closeOnDimmerClick={false} size="tiny">
			<Modal.Header>Assign Template</Modal.Header>
			<Modal.Content>
				<Modal.Description>

					<Form>
						<Grid>
							<Grid.Column width={8}>
								<Form.Select label="School" placeholder="Select School" data="schoolId" options={school} onChange={onHandleChange} value={values.schoolId}
									error={simpleValidator.current.message('schoolId', values.schoolId, 'required')}
								/>
							</Grid.Column>
							<Grid.Column width={8}>
								<Form.Select multiple label="Teacher" placeholder="Select Teacher" data="teacherId" options={teacher} onChange={onHandleChange} value={values.teacherId}
									error={simpleValidator.current.message('teacherId', values.teacherId, 'required')} />
							</Grid.Column>
							<Grid.Column width={8}>
								<Form.Select label="Grade" placeholder="Select Grade" options={grade} data="gradeId" onChange={onHandleChange} value={values.gradeId}
									error={simpleValidator.current.message('gradeId', values.gradeId, 'required')} />
							</Grid.Column>
							<Grid.Column width={8}>
								<Form.Select multiple label="Template" placeholder="Select Template" data="templateId" options={template} onChange={onHandleChange} value={values.templateId}
									error={simpleValidator.current.message('templateId', values.templateId, 'required')} />
							</Grid.Column>
							<Grid.Column width={8} className='status'>
								<p>Status</p>
								<div className="statusToggle">
									<span>Inactive</span>
									<Form.Checkbox label="Active" toggle className="commonToggle"
										checked={values.isActive}
										value={values.isActive}
										data="isActive"
										onChange={onHandleChangeToggle} />
								</div>
							</Grid.Column>
						</Grid>
					</Form>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button className="secondaryBtn" onClick={() => closeModal()}>Cancel</Button>
				<Button className="primaryBtn" onClick={onSubmit} loading={api.isApiLoading} >{values.teacherTemplateId > 0 ? "Update" : "Confirm"}</Button>
			</Modal.Actions>
		</Modal>
	);
}

export default AddAssignTemplate;