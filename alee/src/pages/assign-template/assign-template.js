import React, { useState } from "react";
import { Grid, Icon, Header, Button, Form } from "semantic-ui-react";
import LessonPlanCustomModal from "../../shared/components/organisms/modal/lesson-plan-creation/index";
import AddAssignTemplate from "../../shared/components/organisms/modal/assign-template/index";
import { DataTable } from "../../../src/shared/components/organisms";

function AssignTemplatePage() {
	const [lesson, setLesson] = useState(false)
	const [template, setTemplate] = useState(false)
	const [reload, setReload] = useState(false)
	const [editData, SetEditData] = useState([])
	const [editTemplate, SetEditTemplate] = useState(false)

	const openModal = () => {
		setLesson(!lesson)
	}
	const openModal2 = () => {
		setTemplate(!template)
		SetEditTemplate(!editTemplate)
	}
	const GridReload = () => {
		setReload(!reload)
	}
	const onHandleEdit = (data) => {
		SetEditData(data)
		SetEditTemplate(false)
		openModal2();
	}
	return (
		<div className="common-shadow">
			<Grid>
				<Grid.Column width={8} verticalAlign="middle">
					<Header as="h3" className="commonHeading">Assign Template</Header>
				</Grid.Column>
				<Grid.Column width={8} textAlign="right">
					<Button className="primaryBtn" onClick={openModal2}><Icon name="plus" /> Assign template</Button>
				</Grid.Column>
				<Grid.Column width={16}>
					<DataTable
						allApi={{ getApiName: "GETASSIGNEDTEMPLATES", deleteApiName: "DELETEASSIGNEDTEMPLATE", toggleApiName: "TOGGLEASSIGNEDTEMPPLATE" }} reload={reload}
						additionalParams={{ SchoolId: -1 }}
						searchOption={{ show: true, placeHolder: "Search" }}
						messageInModal="assigned template"
						columns={[
							{
								headerName: "Template",
								fieldName: "templateName",
								isSorting: true,
							},
							{
								headerName: "School Name",
								fieldName: "schoolName",
								isSorting: true,
							},
							{
								headerName: "Teacher Name",
								fieldName: "teacherName",
								isSorting: true,
							},

							{
								headerName: "Grade",
								fieldName: "gradeName",
								isSorting: true,
							},
							{
								headerName: "Status",
								fieldName: "isActive",
								isSorting: true,
								Cell: (props, confirmModalOpen) => {
									return (
										<Form.Checkbox checked={props.isActive ? true : false} toggle className="commonToggle" onChange={() => confirmModalOpen(props.teacherTemplateDetailId, "update", props.isActive)} />
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
											<Icon title="Edit" name="edit" className="primary-color"
												onClick={() => onHandleEdit(props)}
												link />
											<Icon title="Delete" name="trash alternate" color="red" link onClick={() => confirmModalOpen(props.teacherTemplateDetailId, "delete")} />
										</>
									);
								},
							},
						]}

					></DataTable>
				</Grid.Column>
			</Grid>
			<LessonPlanCustomModal openModal={lesson} closeModal={openModal} />
			<AddAssignTemplate openModal={template} closeModal={openModal2} GridReload={GridReload} editData={editData} editTemplate={editTemplate} />
		</div>
	);
}

export default AssignTemplatePage;