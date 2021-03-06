import React, { useState } from "react";
import { Grid, Icon, Header, Button, Form, Dropdown } from "semantic-ui-react";
import { Link } from "../../shared/functional/global-import";
import { DataTable } from "../../../src/shared/components/organisms";
import { useSelector } from 'react-redux';
import { env } from "../../shared/functional/global-import";
import { useHistory } from "react-router-dom";

// import LessonPreview from "../../shared/components/organisms/modal/lesson-preview/index"
function LessonPlanPage() {
	const [lessonPreview, setLessonPreview] = useState(false)
	const teacherId = useSelector(state => state.auth.userDetail.teacherId);
	let history = useHistory();

	const openModal = () => {

		setLessonPreview(!lessonPreview);
	}

	const onHandleEdit = (props) => {
		history.push(`${env.PUBLIC_URL}/edit-book-flip/${props.lessonPlanId}`);
	}
	return (
		<div className="common-shadow">
			<Grid columns="equal">
				<Grid.Column width={8} verticalAlign="middle">
					<Header as="h3" className="commonHeading">Lesson Plan</Header>
				</Grid.Column>
				<Grid.Column width={8} textAlign="right">
					<Button className="primaryBtn" as={Link} to="lesson-library"><Icon name="plus" /> New Lesson Plan</Button>
				</Grid.Column>
				<Grid.Column width={12}>
					<Form>
						{/* <Form.Input placeholder="Search lesson plan"/> */}
					</Form>
				</Grid.Column>
				<Grid.Column width={16}>
					<DataTable
						allApi={{ getApiName: "GETLESSONPLANLIST", deleteApiName: "DELETELESSONPLAN", toggleApiName: "LESSONTOGGLEISACTIVE" }} messageInModal="lesson Plan"
						searchOption={{ show: true, placeHolder: "Search" }}
						additionalParams={{ teacherId: teacherId }}
						columns={[
							{
								headerName: "Lesson Plan Name",
								fieldName: "lessonPlanName",
								isSorting: true,
								Cell: (props) => {
									return (
										<>
											<Link
												to={`${env.PUBLIC_URL}/lesson-preview/${props.lessonPlanId}`}>
												{props.lessonPlanName}
											</Link>
										</>
									);
								},
							},
							{
								headerName: "Chapter",
								fieldName: "chapter",
								isSorting: true,
							},
							{
								headerName: "Book Name",
								fieldName: "bookName",
								isSorting: true,
							},
							{
								headerName: "Action",
								fieldName: "Action",
								isSorting: false,
								Cell: (props, confirmModalOpen) => {
									return (
										<>
											<Icon title="Edit" name="edit" className="primary-color" link onClick={() => onHandleEdit(props)} />
											<Icon title="Delete" name="trash alternate" color="red" link onClick={() => confirmModalOpen(props.lessonPlanId, "delete")} />
										</>
									);
								},
							},
						]}
					></DataTable>
				</Grid.Column>
			</Grid>
		</div>
	);
}

export default LessonPlanPage;