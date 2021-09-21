import React, { useState } from "react";
import { Grid, Header, Button,Icon,Form } from "semantic-ui-react";
import AddGrade from "../../shared/components/organisms/modal/add-grade/index"
import { DataTable } from "../../../src/shared/components/organisms";


function AddGradePage() {
	const [addgrade, setAddgrade] = React.useState(false);
	const [reload, setReload] = useState(false);
	const [editGrade, setEditGrade] = useState([]);
	const [editGradeToggle, setEditGradeToggle] = useState(false);
	const openModal = () => {
		setAddgrade(!addgrade)
		if (editGradeToggle) {
			setEditGradeToggle(!editGradeToggle);
		}
	}
	const GridReload = () => {
		setReload(!reload)
	}
	const onHandleEdit = (data) => {
		setEditGrade(data)
		setEditGradeToggle(!editGradeToggle)
		openModal();
	}
	return (
		<div className="bookSummary">
			<Grid>
				<Grid.Column width={8}>
					<Header as="h3" className="commonHeading">Add Grade</Header>
				</Grid.Column>

				<Grid.Column width={8} textAlign="right">
					<Button className="primaryBtn" onClick={openModal}><Icon name="plus" /> Add Grade</Button>
				</Grid.Column>
				<Grid.Column width={16}>
					<DataTable
						allApi={{ getApiName: "GETGRADESLIST", deleteApiName: "DELETEGRADE", toggleApiName: "GRADESTOGGLE" }} reload={reload}
						searchOption={{ show: true, placeHolder: "Search" }}
						messageInModal="grade"
						additionalParams={{ ActiveGrades: false }}
						columns={[
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
										<Form.Checkbox checked={props.isActive ? true : false} toggle className="commonToggle" onChange={() => confirmModalOpen(props.gradeId, "update", props.isActive)} />
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
											<Icon title="Edit" name="edit" className="primary-color" link
												onClick={() => { onHandleEdit(props) }}
											/>
											<Icon title="Delete" name="trash alternate" color="red" link onClick={() => confirmModalOpen(props.gradeId, "delete")} />
										</>
									);
								},
							},
						]}

					></DataTable>
				</Grid.Column>
			</Grid>
			<AddGrade openModal={addgrade} editGrade={editGrade} closeModal={openModal} GridReload={GridReload} editGradeToggle={editGradeToggle} />
		</div>
	);
}
export default AddGradePage;

