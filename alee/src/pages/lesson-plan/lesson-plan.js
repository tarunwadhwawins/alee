import React from "react";
import { Grid, Icon, Header, Button, Form, Dropdown } from "semantic-ui-react";
import { Link } from "../../shared/functional/global-import";
import { DataTable } from "../../../src/shared/components/organisms";

function LessonPlanPage() {
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
						columns={[
							{
								headerName: "Lesson Plan Name",
								fieldName: "lessonPlanName",
								isSorting: true
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
											<Icon title="Edit" name="edit" className="primary-color" link />
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