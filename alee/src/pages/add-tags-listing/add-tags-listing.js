import React, { useState } from "react";
import { Grid, Header, Button, Icon, Form } from "semantic-ui-react";
import AddTagsListing from "../../shared/components/organisms/modal/add-tags-lisiting"
import { DataTable } from "../../../src/shared/components/organisms";

function AddTagsListingPage(props) {
	const [taglisting, setTaglisting] = React.useState(false)
	const [editData, SetEditData] = useState()
	const [reload, SetReload] = useState(false)

	const openModal = () => {
		debugger
		setTaglisting(!taglisting)

	}
	const onHandleEdit = (data) => {
		SetEditData(data)
		openModal();
	}
	const GridReload = () => {
		SetReload(!reload)
	}
	return (
		<div className="bookSummary">
			<Grid>
				<Grid.Column width={8}>
					<Header as="h3" className="commonHeading">Add Tags Listing</Header>
				</Grid.Column>

				<Grid.Column width={8} textAlign="right">
					<Button className="primaryBtn" onClick={openModal}><Icon name="plus" /> New Tag</Button>
				</Grid.Column>
				<Grid.Column width={16}>

					<DataTable
						allApi={{ getApiName: "GETTAGSLIST", deleteApiName: "TAGSDELETETAG", toggleApiName: "TAGTOGGLEISACTIVE" }}
						searchOption={{ show: true, placeHolder: "Search" }} reload={reload}
						messageInModal="tag"
						columns={[
							{
								headerName: "Tag Name",
								fieldName: "tagName",
								isSorting: true,
							},
							{
								headerName: "Type",
								fieldName: "tagTypeName",
								isSorting: true
							},
							{
								headerName: "Status",
								fieldName: "isActive",
								isSorting: false,
								Cell: (props, confirmModalOpen) => {
									return (
										<Form.Checkbox checked={props.isActive ? true : false} toggle className="commonToggle" onChange={() => confirmModalOpen(props.tagId, "update", props.isActive)} />
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
											<Icon name="edit" className="primary-color" link onClick={() => onHandleEdit(props)} />
											<Icon name="trash alternate" color="red" link onClick={() => confirmModalOpen(props.tagId, "delete")} />
										</>
									);
								},
							},
						]}
					></DataTable>
				</Grid.Column>
			</Grid>
			<AddTagsListing openModal={taglisting} closeModal={openModal} GridReload={GridReload} editData={editData} />
		</div>
	);
}

export default AddTagsListingPage;
