import React, { useState } from "react";
import { Grid, Icon, Header, Button, Form } from "semantic-ui-react";
import AddChapter from "../../shared/components/organisms/modal/add-chapter/index";
import AddSubtitle from "../../shared/components/organisms/modal/add-subtitle/index";
import AddChapterSummary from "../../shared/components/organisms/modal/add-chapter-summary/index";
import { DataTable } from "../../../src/shared/components/organisms";
function ChapterPage() {
	const [chapter, setChapter] = useState(false);
	const [subtitle, setSubtitle] = useState(false);
	const [summary, setSummary] = useState(false);
	const [reload, SetReload] = useState(false);
	const [editData, SetEditData] = useState([]);
	const [summaryData, setSummaryData] = useState([]);
	const openModal = () => {
		setChapter(!chapter)
	}
	const openModal2 = () => {
		setSubtitle(!subtitle)
	}
	const openModal3 = (props) => {
		console.log("props", props);
		setSummary(!summary)
		 const data = JSON.parse(props)
		setSummaryData(data);
	}
	const GridReload = () => {
		SetReload(!reload)
	}
	const onHandleEdit = (data) => {
		SetEditData(data)
		openModal();
	}

	return (
		<div className="chapterPage">
			<Grid>
				<Grid.Column width={8} verticalAlign="middle">
					<Header className="commonHeading">Animal Farm</Header>
				</Grid.Column>
				<Grid.Column width={8} textAlign="right">
					<Button className="primaryBtn" onClick={openModal}> <Icon name="plus" /> Chapter </Button>
				</Grid.Column>
				<Grid.Column width={16}>
					<DataTable
						allApi={{ getApiName: "GETCHAPTERLIST", deleteApiName:"DELETECHAPTER"}} reload={reload}
						additionalParams={{ bookId: 43 }}
						searchOption={{ show: true, placeHolder: "Search" }}
						messageInModal="Chapter"
						columns={[
							{
								headerName: "Chapter",
								fieldName: "chapterName",
								isSorting: true,
							},
							{
								headerName: "Page No.",
								fieldName: "pageNo",
								isSorting: true
							},

							{
								headerName: "Topics",
								fieldName: "gradeName",
								isSorting: true,
								Cell: (props, confirmModalOpen) => {
									return (
										<>
											<Button className="primaryBtn" onClick={openModal2}> <Icon name="plus" /> Topic</Button>
										</>
									);
								},
							},
							{
								headerName: "Summary",
								fieldName: "chapterSummary",
								isSorting: true,
								Cell: (props, confirmModalOpen) => {
								  debugger;
									return (
										<>
											<Button className="primaryBtn" onClick={() => openModal3(props.chapterSummary)}> <Icon name="plus" /> Chapter Summary</Button>
										</>
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
											<Icon name="trash alternate" color="red" link onClick={() => confirmModalOpen(props.chapterId,"delete")}/>
										</>
									);
								},
							},
						]}

					></DataTable>
				</Grid.Column>
			</Grid>
			{chapter && <AddChapter openModal={chapter} closeModal={openModal} GridReload={GridReload} editData={editData} />}
			{subtitle && <AddSubtitle openModal={subtitle} closeModal={openModal2} />}
			{summary && <AddChapterSummary openModal={summary} closeModal={openModal3} summaryData={summaryData}/>}

		</div>
	);
}

export default ChapterPage;

