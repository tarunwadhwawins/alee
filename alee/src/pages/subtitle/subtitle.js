import React, { useState, useEffect } from "react";
import { Table, Grid, Icon, Header, Button } from "semantic-ui-react";
import { Link } from "../../shared/functional/global-import";
import AddSubtitle from "../../shared/components/organisms/modal/add-subtitle/index";
import { DataTable } from "../../../src/shared/components/organisms";



function SubtitlePage() {
	const [subtitle, setSubtitle] = React.useState(false)
	const [editData, SetEditData] = useState([]);

	const openModal = (props) => {
		if (subtitle) {
			SetEditData([])
		}
		setSubtitle(!subtitle)

	}

	const editForm = (data) => {
		debugger;
		SetEditData(data)
		openModal()

		// const { chapterId, chapterName, endPageNo, pageNo, startPageNo, topicId, topicsName } = props;
		// setSubtitle({ ...subtitle, tagId: tagId, tagName: tagName, tagTypeId: tagTypeId, isActive: isActive })
	}

	return (
		<div className="chapterPage">
			<Grid>
				<Grid.Column width={8} verticalAlign="middle">
					<Header className="commonHeading">Chapter One</Header>
				</Grid.Column>
				<Grid.Column width={8} textAlign="right">
					<Button className="primaryBtn" onClick={openModal}> <Icon name="plus" /> Topic </Button>
				</Grid.Column>
				<Grid.Column width={16}>
					<DataTable
						allApi={{
							getApiName: "GETCHAPTERSTOPIC",
							deleteApiName: "DELETETOPIC",
							// toggleApiName: "USERSUBSCRIPTIONTOGGLE",
						}}
						searchOption={{ show: true, placeHolder: "Search" }}
						additionalParams={{ chapterId: 1 }}
						messageInModal="topic"
						columns={[
							{
								headerName: "Topic",
								fieldName: "topicName",
								isSorting: true,
							},

							{
								headerName: "Page No.",
								fieldName: "pageNo",
								isSorting: true,
							},
							{
								headerName: "Action",
								fieldName: "Action",
								isSorting: false,
								Cell: (props, confirmModalOpen) => {
									return (
										<>
											<Icon name="pencil alternate" className="primary-color" onClick={() => editForm(props)} />
											<Icon name="trash alternate" color='red' onClick={() => confirmModalOpen(props.topicId, "delete")} />
										</>
									);
								},
							},
						]}
					></DataTable>
				</Grid.Column>
				<Grid.Column width={16} textAlign="right">
					<Button className="primaryBtn" as={Link} to="add-tags">Add Tag</Button>
				</Grid.Column>
			</Grid>
			<AddSubtitle openModal={subtitle} closeModal={openModal} editData={editData} />
		</div>
	);
}

export default SubtitlePage;

