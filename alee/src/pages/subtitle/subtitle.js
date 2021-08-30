import React, { useState } from "react";
import { Grid, Icon, Header, Button } from "semantic-ui-react";
import { Link } from "../../shared/functional/global-import";
import AddSubtitle from "../../shared/components/organisms/modal/add-subtitle/index";
import { DataTable } from "../../../src/shared/components/organisms";
import { useParams, useLocation } from "react-router-dom";

function SubtitlePage() {
	debugger
	let search = useLocation().search
	const chapterName = new URLSearchParams(search).get('chapter')
	const id = useParams();
	const [subtitle, setSubtitle] = React.useState(false)
	const [editData, SetEditData] = useState([]);
	const initialState = { chapterId: id.id }
	const [chapter, SetChapter] = useState(initialState);
	const [reload, SetReload] = useState(false)

	const openModal = (props) => {
		debugger
		if (subtitle) {
			SetEditData([])
		}
		setSubtitle(!subtitle)
	}

	const editForm = (data) => {
		debugger;
		SetEditData(data)
		openModal()
	}
	const GridReload = () => {
		SetReload(!reload)
	}

	return (
		<div className="chapterPage">
			<Grid>
				<Grid.Column width={8} verticalAlign="middle">
					<Header className="commonHeading">{chapterName}</Header>
				</Grid.Column>
				<Grid.Column width={8} textAlign="right">
					<Button className="primaryBtn" onClick={openModal}> <Icon name="plus" /> Topic </Button>
				</Grid.Column>
				<Grid.Column width={16}>
					<DataTable
						debugger
						allApi={{
							getApiName: "GETCHAPTERSTOPIC",
							deleteApiName: "DELETETOPIC",
						}}
						reload={reload}
						additionalParams={{ chapterId: chapter.chapterId }}
						searchOption={{ show: true, placeHolder: "Search" }}
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
			<AddSubtitle openModal={subtitle} closeModal={openModal} editData={editData} chapterId={chapter.chapterId} GridReload={GridReload} />
		</div>
	);
}

export default SubtitlePage;

