import React, { useState, useEffect, useRef } from "react";
import { Grid, Icon, Header, Button, Form } from "semantic-ui-react";
import LessonPlanCustomModal from "../../shared/components/organisms/modal/lesson-plan-creation/index";
import AddTemplateModal from "../../shared/components/organisms/modal/add-template/index"
import { Link, env } from "../../shared/functional/global-import";
import { DataTable } from "../../../src/shared/components/organisms";
import { apiCall } from "../../store/actions/api.actions";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import SimpleReactValidator from 'simple-react-validator';
// import { commonFunctions } from "../../shared/functional/global-import";

function CreateTemplatePage() {
	const initialState = {
		templateId: null, templateName: "", "isActive": true,
		actionPerformedBy: ""
	}
	const [, forceUpdate] = useState()
	const simpleValidator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } }))
	const [lesson, setLesson] = useState(false)
	const [template, setTemplate] = useState(false)
	const [reload, setReload] = useState(false)
	const [templateName, setTemplateName] = useState(initialState);
	const [editData, setEditData] = useState([]);


	const dispatch = useDispatch();
	let history = useHistory();

	const openModal = () => {
		setLesson(!lesson)
	}
	const openModal2 = () => {
		setTemplate(!template)
	}
	const gridReload = () => {
		setReload(!reload)
	}
	const onSubmitTemplate = (e) => {

		dispatch(apiCall({
			urls: ["ADDUPDATETEMPLATE"], method: "POST", data: { templateName }, onSuccess: (response) => {

				openModal2();
				gridReload();
				history.push(`${env.PUBLIC_URL}/drag/${response.id}`)

				{/* {templateName.templateId === null ? history.push(`${env.PUBLIC_URL}/drag/${response.id}`) : response} */ }

			}, showNotification: true
		}))
	}
	const onHandleEdit = (e, text) => {
		history.push(`${env.PUBLIC_URL}/drag/${e.templateId}`);
	}
	const onChangeTemplate = (e, { value }) => {
		setTemplateName(value)
	}
	const onHandletemplateEdit = (data) => {
		setEditData(editData.concat(data))
		openModal2();
	}
	// useEffect(() => {
	// 	editTemplate();
	// }, [editData]);

	// const editTemplate = () => {
	// 	if (editData.length > 0) {
	// 		const { templateId, templateName } = editData[editData.length - 1];
	// 		setTemplateName({
	// 			...templateName, templateId: templateId, templateName: templateName
	// 		});
	// 	}
	// };
	return (
		<div className="common-shadow">
			<Grid>
				<Grid.Column width={8} verticalAlign="middle">
					<Header as="h3" className="commonHeading">Create Template</Header>
				</Grid.Column>
				<Grid.Column width={8} textAlign="right">
					<Button className="primaryBtn" onClick={openModal2}><Icon name="plus" />Create new template</Button>
				</Grid.Column>
				<Grid.Column width={16}>
					<DataTable
						allApi={{ getApiName: "GETTEMPLATELIST", deleteApiName: "DELETETEMPLATE", toggleApiName: "TOGGLEISACTIVE" }}
						searchOption={{ show: true, placeHolder: "Search" }} reload={reload}
						messageInModal="template"
						columns={[
							{
								headerName: "Template",
								fieldName: "templateName",
								isSorting: true,
								Cell: (props, confirmModalOpen) => {
									return (
										<Link className="primary-color">{props.templateName}</Link>
									);
								},
							},
							{
								headerName: "Status",
								fieldName: "isActive",
								isSorting: true,
								Cell: (props, confirmModalOpen) => {
									return (
										<Form.Checkbox checked={props.isActive ? true : false} toggle className="commonToggle" onChange={() => confirmModalOpen(props.templateId, "update", props.isActive)} />
									);
								},
							},
							{
								headerName: "Action",
								fieldName: "Action",
								isSorting: false,
								Cell: (props, confirmModalOpen) => {
									return (
										<>
											{/* <Icon title="tag" name="tag" className="primary-color" link onClick={() => onHandleEdit(props)} /> */}
											<Icon title="Edit" name="edit" className="primary-color" onClick={() => onHandleEdit(props)} link />
											<Icon title="Delete" name="trash alternate" color="red" link onClick={() => confirmModalOpen(props.templateId, "delete")} />
										</>
									);
								},
							},
						]}
					></DataTable>
				</Grid.Column>
			</Grid>
			<LessonPlanCustomModal openModal={lesson} closeModal={openModal} />
			<AddTemplateModal openModal={template} closeModal={openModal2} onChangeTemplate={onChangeTemplate} onSubmitTemplate={onSubmitTemplate} templateName={templateName} simpleValidator={simpleValidator} />
		</div>
	);
}

export default CreateTemplatePage;