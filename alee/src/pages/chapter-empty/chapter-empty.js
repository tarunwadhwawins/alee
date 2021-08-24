
import React,{useState} from "react";
import { Table, Grid, Icon, Header, Button, Image, Popup } from "semantic-ui-react";
import AddChapter from "../../shared/components/organisms/modal/add-chapter/index";
import { BookPage1, BookPage2, BookPage3, BookPage4, BookPage5, BookPage6 } from "../../shared/functional/global-image-import";
import { DataTable } from "../../../src/shared/components/organisms";
import BookFlipPage from "../book-flip/book-flip";
import { useSelector } from 'react-redux';

function ChapterEmptyPage() {

	const [chapter, setChapter] = useState(false)
	const [reload, SetReload] = useState(false);
	const [editData, SetEditData] = useState([]);
	const bookName = useSelector(state => state.global.myBookData.bookName)
	const bookId = useSelector(state => state.global.myBookData.bookId);
	const openModal = () => {
		setChapter(!chapter)
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
				<Button className="primaryBtn" onClick={openModal}> <Icon name="plus"/> Chapter </Button>
			</Grid.Column>
				<Grid.Column width={16}>
				<DataTable
						allApi={{ getApiName: "GETCHAPTERLIST" , deleteApiName:"DELETECHAPTER" }} reload={reload}
						additionalParams={{ bookId:bookId }}
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
								fieldName: "",
								isSorting: true,
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
			<AddChapter openModal={chapter} closeModal={openModal} GridReload={GridReload} editData={editData}/>
		</div>
    );
}

export default ChapterEmptyPage;

