import React, { useState, useEffect } from "react";
import { Grid, Header, Dimmer, Loader, Button, Form } from "semantic-ui-react";
import InviteTeacher from "../../shared/components/organisms/modal/invite-teacher/index";
import AddNotes from "../../shared/components/organisms/modal/add-notes/index";
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../store/actions/api.actions";

function LessonPlanCreationPage(props) {
	const bookId = useSelector(state => state.global.myBookData.bookId);
	const auth = useSelector((state) => state.auth);
	const initialState = { lessonPlanId: null, teacherId: auth.userDetail.teacherId, bookId: bookId, chapterId: null, gradeId: null, templateId: null, lessonPlanName: "", templateResponse: [], notes: [], actionPerformedBy: "", isNoteAdded: true }

	const [invite, setInvite] = useState(false)
	const [notes, setNotes] = useState(false)
	const [template, setTemplate] = useState([])
	const [grade, setGrade] = useState([])
	const [lessonPlan, setLessonPlan] = useState(initialState)
	const [templateFields, setTemplateFields] = useState([])
	const [tagBookData, setTagBookData] = useState([])
	const [addNotes, setAddNotes] = useState([{ noteId: null, noteDescription: "", studentIds: [], studentAll: false }])

	const teacherId = useSelector(state => state.auth.userDetail.teacherId)
	const schoolId = useSelector(state => state.auth.userDetail.schoolId)
	const api = useSelector(state => state.api)
	const dispatch = useDispatch();
	const openModal = () => {
		setInvite(!invite)
	}
	const openModal2 = () => {
		setNotes(!notes)
	}

	const onTemplateChange = (e, { value }) => {
		setLessonPlan({ ...lessonPlan, templateId: value })
		dispatch(apiCall({
			urls: ["GETTEMPLATEFIELDLIST"], method: "GET", data: { "templateId": value }, onSuccess: (response) => {
				setTemplateFields(response)
			}
		}));
	}

	const onHandleChange = (e, { value, data }) => {
		setLessonPlan({ ...lessonPlan, [data]: value })
	}

	useEffect(() => {
		getTemplate();
		getGrades();
		getBookTagContent();
	}, []);
	//  get api //
	const getTemplate = () => {
		dispatch(apiCall({
			urls: ["GETASSIGNEDTEMPLATETEACHER"], method: "GET", data: { "TeacherId": teacherId, "SchoolId": schoolId, }, onSuccess: (response) => {
				const getTemplate = response.map((template) => {
					return { value: template.templateId, text: template.templateName }
				});
				setTemplate(getTemplate)
			}
		}));
	}

	const getGrades = () => {
		dispatch(apiCall({
			urls: ["GETGRADESLIST"], method: "GET", data: { "ActiveGrades": true, "PageNo": 1, "PageSize": 1000 }, onSuccess: (response) => {
				const getGrades = response.map((grades) => {
					return { value: grades.gradeId, text: grades.gradeName }
				});
				setGrade(getGrades)
			}
		}));
	}

	const getBookTagContent = () => {
		dispatch(apiCall({
			urls: ["GETBOOKTAGDATA"], method: "GET", data: { "PageId": 1432, "TagText": "About the Author" }, onSuccess: (response) => {
				setTagBookData(response)
				setLessonPlan({ ...lessonPlan, chapterId: response[0].chapterId })
			}
		}));
	}

	const onTemplateFieldChange = (e, { value, index, checked, type }) => {
		const matchValue = lessonPlan.templateResponse.findIndex((a) => a.templateFieldId === index);
		if (matchValue !== -1) {
			lessonPlan.templateResponse.splice(matchValue, 1);
		}
		const aa = lessonPlan.templateResponse.concat({ templateFieldId: index, response: value })
		setLessonPlan({ ...lessonPlan, templateResponse: aa })
	}

	const onChangeDescription = (e, { value, index }) => {
		const description = [...addNotes]
		description[index]["noteDescription"] = value;
		setAddNotes(description)
	}

	const onChangeStudent = (e, { value, index }) => {
		const student = [...addNotes]
		student[index]["studentIds"] = value;
		setAddNotes(student)
	}

	const addMultipleNotes = () => {
		setAddNotes(addNotes.concat({ noteId: null, noteDescription: "", studentIds: [], studentAll: false }))
	}

	const removeNotes = (index) => {
		const rows = [...addNotes]
		rows.splice(index, 1);
		setAddNotes(rows);
	}

	const addNotesInLessonplan = () => {
		openModal2();
		const rows = [...addNotes]
		setLessonPlan({ ...lessonPlan, notes: rows })
	}

	const onHandleSubmit = () => {
		dispatch(apiCall({
			urls: ["ADDLESSONPLANDATA"], method: "POST", data: lessonPlan, onSuccess: (response) => {

			}, showNotification: true
		}));
	}

	return (
		<div className="common-shadow">
			<Form>
				<Grid>
					<Grid.Column width={16}>
						<Header as="h3" className="commonHeading">Lesson Plan Creation</Header>
					</Grid.Column>

					<Grid.Column width={5}>
						<Form.Input placeholder="Lesson Plan" onChange={onHandleChange} data="lessonPlanName" />
					</Grid.Column>

					<Grid.Column width={5}>
						<Form.Select placeholder="Choose Template" options={template} onChange={onTemplateChange} />
					</Grid.Column>

					<Grid.Column width={6}>
						<Form.Select placeholder="Choose Grade" options={grade} onChange={onHandleChange} data="gradeId" />
					</Grid.Column>
				</Grid>
			</Form>

			<Grid>
				<Grid.Column width={8}>
					<div className="chapterBox">
						<Header as="h3">{tagBookData.length > 0 && tagBookData[0].chapterName}</Header>
						<p>{tagBookData.length > 0 && tagBookData[0].tagText}</p>
						{tagBookData.length > 0 && JSON.parse(tagBookData[0].bookTagList).map((tagData, index) => {
							return (<>
								<Header as="h5">{tagData.fieldName}</Header>
								<p>{JSON.parse(tagData.Response)}</p>
							</>)
						})}


					</div>
				</Grid.Column>
				<Grid.Column width={8}>
					<div className="chapterBox">
						{api.isApiLoading && (
							<Dimmer active inverted>
								<Loader />
							</Dimmer>
						)}
						<Form>
							<Grid>
								{templateFields.map((singleData, index) => {

									if (singleData.fieldDataType === "Header") {
										return (

											<Grid.Column width={16} key={index}>
												<Header as="h3" className="commonHeading">{singleData.fieldName}</Header>
											</Grid.Column>

										)
									}
									if (singleData.fieldDataType === "Dropdown") {
										return (
											<Grid.Column width={16} key={index}>
												<Form.Select placeholder={singleData.fieldName} onChange={onTemplateFieldChange} index={singleData.templateFieldId} fluid />
											</Grid.Column>
										)
									}
									if (singleData.fieldDataType === "Checkboxes") {
										return (
											<Grid.Column width={16} key={index}>
												<Form.Checkbox label={singleData.fieldName} className="commonToggle" onChange={onTemplateFieldChange} index={singleData.templateFieldId} fluid />
											</Grid.Column>
										)
									}
									if (singleData.fieldDataType === "TextInput") {
										return (
											<Grid.Column width={16} key={index}>
												<Form.Input placeholder={singleData.fieldName} type="text" onChange={onTemplateFieldChange} index={singleData.templateFieldId} fluid />
											</Grid.Column>
										)
									}
									if (singleData.fieldDataType === "NumberInput") {
										return (
											<Grid.Column width={16} key={index}>
												<Form.Input placeholder={singleData.fieldName} type="number" onChange={onTemplateFieldChange} index={singleData.templateFieldId} fluid />
											</Grid.Column>
										)
									}
									if (singleData.fieldDataType === "TextArea") {
										return (
											<Grid.Column width={16} key={index}>

												<Form.TextArea placeholder={singleData.fieldName} onChange={onTemplateFieldChange} index={singleData.templateFieldId} rows="2" />
											</Grid.Column>
										)
									}
								})}
								<Grid.Column width={16}>
									<Button className="alternateBtn" onClick={openModal2}>Add Notes</Button>
								</Grid.Column>
							</Grid>
						</Form>

					</div>

					{/* </div> */}
				</Grid.Column>
				<Grid.Column width={16} textAlign="right">
					<Button className="secondaryBtn" onClick={openModal}>Invite Teacher</Button>
					<Button className="alternateBtn">Save as Draft</Button>
					<Button className="primaryBtn" onClick={onHandleSubmit} >Save Plan</Button>
				</Grid.Column>
			</Grid>
			<InviteTeacher openModal={invite} closeModal={openModal} />
			<AddNotes openModal={notes} closeModal={openModal2} onChangeDescription={onChangeDescription} onChangeStudent={onChangeStudent} addMultipleNotes={addMultipleNotes} addNotes={addNotes} removeNotes={removeNotes} addNotesInLessonplan={addNotesInLessonplan} />
		</div>
	);
}

export default LessonPlanCreationPage;