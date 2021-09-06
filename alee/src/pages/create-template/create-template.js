import React, { useState } from "react";
import { Grid, Icon, Header, Button, Table, Label, Form } from "semantic-ui-react";
import LessonPlanCustomModal from "../../shared/components/organisms/modal/lesson-plan-creation/index";
import AddTemplateModal from "../../shared/components/organisms/modal/add-template/index"
import { Link } from "../../shared/functional/global-import";
import { DataTable } from "../../../src/shared/components/organisms";

function CreateTemplatePage() {
	const [lesson, setLesson] = React.useState(false)
	const [template, setTemplate] = React.useState(false)
	const [reload, SetReload] = useState(false)

	const openModal = () => {
		setLesson(!lesson)
	}
	const openModal2 = () => {
		setTemplate(!template)
	}
	const GridReload = () => {
		SetReload(!reload)
	}
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
								fieldName: "template",
								isSorting: true,
							},
							{
								headerName: "Status",
								fieldName: "isActive",
								isSorting: false,
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
											<Icon title="Edit" name="edit" className="primary-color" link />
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
			<AddTemplateModal openModal={template} closeModal={openModal2} />
		</div>
	);
}

export default CreateTemplatePage;