import React, { useState } from "react";
import { Grid, Icon, Header, Button, Form } from "semantic-ui-react";
import AddChapter from "../../shared/components/organisms/modal/add-chapter/index";
import AddSubtitle from "../../shared/components/organisms/modal/add-subtitle/index";
import AddChapterSummary from "../../shared/components/organisms/modal/add-chapter-summary/index";
import { DataTable } from "../../../src/shared/components/organisms";
import { useSelector } from 'react-redux';
import BookFlipPage from "../book-flip/book-flip";

function ChapterPage(props) {
	const [chapter, setChapter] = useState(false);
	const [subtitle, setSubtitle] = useState(false);
	const [summary, setSummary] = useState(false);
	const [reload, SetReload] = useState(false);
	const [editData, SetEditData] = useState([]);
	const [summaryData, setSummaryData] = useState([]);
	const [topicData, setTopicData] = useState();
	const [chapterText, setChapterText] = useState();

	const bookName = useSelector(state => state.global.myBookData.bookName);
	const bookId = useSelector(state => state.global.myBookData.bookId);
	const openModal = (text) => {
		setChapter(!chapter)
		setChapterText(text)
	}

	const openModal2 = (props) => {
		setSubtitle(!subtitle)
		setTopicData(props);
	}

	const openModal3 = (props) => {
		setSummary(!summary)
		const data = JSON.parse(props)
		setSummaryData(data)
	}
	const closeModal = () => {
		setSubtitle(!subtitle);
		SetEditData([])
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
			<BookFlipPage />
			<Grid>
				<Grid.Column width={8} verticalAlign="middle">
					<Header className="commonHeading">{bookName}</Header>
				</Grid.Column>
				<Grid.Column width={8} textAlign="right">
					<Button className="primaryBtn" onClick={() => openModal("chapter")}> <Icon name="plus" /> Chapter </Button>
				</Grid.Column>
				<Grid.Column width={16}>
					<DataTable
						allApi={{ getApiName: "GETCHAPTERLIST", deleteApiName: "DELETECHAPTER" }} reload={reload}
						additionalParams={{ bookId: bookId }}
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
								isSorting: false,
								Cell: (props, confirmModalOpen) => {
									return (
										<>
											<Button className="primaryBtn" onClick={() => openModal2(props)}> <Icon name="plus" /> Topic</Button>
										</>
									);
								},
							},
							{
								headerName: "Summary",
								fieldName: "chapterSummary",
								isSorting: false,
								Cell: (props, confirmModalOpen) => {

									return (
										<>
											<Button className="primaryBtn" onClick={() => openModal3(props)}> <Icon name="plus" /> Chapter Summary</Button>
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
											<Icon title="Edit" name="edit" className="primary-color" link onClick={() => onHandleEdit(props)} />
											<Icon title="Delete" name="trash alternate" color="red" link onClick={() => confirmModalOpen(props.chapterId, "delete")} />
										</>
									);
								},
							},
						]}

					></DataTable>
				</Grid.Column>
			</Grid>
			{chapter && <AddChapter openModal={chapter} closeModal={openModal} GridReload={GridReload} editData={editData} chapterText={chapterText} />}
			{subtitle && <AddSubtitle openModal={subtitle} closeModal={closeModal} topicData={topicData} />}
			{summary && <AddChapterSummary openModal={summary} closeModal={openModal3} summaryData={summaryData} GridReload={GridReload} />}

		</div>
	);
}

export default ChapterPage;

