import React, { useState, useEffect } from "react";
import { Grid, Button, Header } from "semantic-ui-react";
import { Link } from "../../shared/functional/global-import";
import HTMLFlipBook from 'react-pageflip';
import { BookPage1, BookPage2, BookPage3, BookPage4, BookPage5, BookPage6 } from "../../shared/functional/global-image-import";
import { useDispatch, useSelector } from 'react-redux';
import { storeBookDetails, storeTags } from "../../store/actions/global.actions";
import BookFlipPage from '../../../src/pages/book-flip/book-flip';
import AddTagModal from "./tag-modal";
import { apiCall } from "../../store/actions/api.actions";
import { useParams } from "react-router-dom";

function AddTagPage() {
	const chapterId = useParams();
	const tagInitialState = { bookId: 0, chapterId: chapterId.id, pageId: 0, tagText: "", bookTagList: [], actionPerformedBy: "string" }
	const [tagStatus, setTagStatus] = useState(false);
	const [tagFields, setTagFields] = useState([]);
	const [fieldData, setFieldData] = useState([]);
	const [tagData, setTagData] = useState(tagInitialState);

	const dispatch = useDispatch();

	const addtag1 = () => {
		dispatch(storeBookDetails(""));
	}

	const openModal = () => {
		debugger
		setTagStatus(!tagStatus);
	}

	useEffect(() => {
		getTagField();
	}, []);

	const getTagField = () => {

		let aa = [];

		dispatch(apiCall({
			urls: ["GETTAGCUSTOMFIELDS"], method: "GET", data: { "PageNo ": 1, "PageSize ": 100 }, onSuccess: (response) => {

				setTagFields(response)
				let fieldName = [];
				response.filter(code => code.dataTypeName === "Int").map((filtercode) => {

					fieldName.push(filtercode.fieldName)

				});
				setFieldData(fieldData.concat(fieldName))
			}
		}))
	}

	const onHandleTagSelected = (data) => {
		const textSelected = window.getSelection().toString();
		if (textSelected !== "") {
			setTagData({ ...tagData, tagText: textSelected, bookId: data.bookId, pageId: data.pageId })
			openModal();
		}
	}

	const onHandleTag = (e, { value, index }) => {
		const matchValue = tagData.bookTagList.findIndex((a) => a.customFieldId === index);
		if (matchValue !== -1) {
			tagData.bookTagList.splice(matchValue, 1);
		}
		const aa = tagData.bookTagList.concat({ customFieldId: index, response: JSON.stringify(value) })
		setTagData({ ...tagData, bookTagList: aa })
	}

	const tagOnContent = () => {
		dispatch(apiCall({
			urls: ["ADDBOOKTAG"], method: "POST", data: tagData, onSuccess: (response) => {
				openModal();
			}, showNotification: true
		}))
	}

	return (
		// className="addTag"
		<div>
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Add Tags</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<BookFlipPage onHandleTagSelected={onHandleTagSelected} />
				</Grid.Column>
			</Grid>

			<AddTagModal openModal={tagStatus} tagFields={tagFields} closeModal={openModal} fieldData={fieldData} onHandleTag={onHandleTag} tagOnContent={tagOnContent} />
		</div>
	);
}

export default AddTagPage;

