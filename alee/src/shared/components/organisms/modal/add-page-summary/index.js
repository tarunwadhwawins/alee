import React, { useState, useEffect } from "react";
import { Modal, Button } from "semantic-ui-react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../../../../store/actions/api.actions";

function AddPageSummary(props) {
	 
	const bookId = useSelector(state => state.global.myBookData.bookId)

	const initialValues = { bookId: bookId, bookSummary: "", pageNo: 1, pageSize: 100 }
	const [bookSummary, setBookSummary] = React.useState(initialValues)
	const [editorState, setEditorState] = React.useState(EditorState.createEmpty())
	const onEditorStateChange = (editorState) => {
		 
		// const bookSummaryText = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
		// bookSummary.bookSummary = JSON.parse(bookSummaryText).blocks[0].text
		bookSummary.bookSummary = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
		setEditorState(editorState)
		setBookSummary(bookSummary)
	}
	const dispatch = useDispatch();

	//  call the api //
	useEffect(() => {
		getBookSummary();
	}, []);

	// const editChapterSummary = () => {
	// 	 
	// 	const {
	// 		chapterId,
	// 		chapterSummary,
	// 	} = props.summaryData;
	// 	setChapterSummary({
	// 		...chapterSummary, chapterId: chapterId, chapterSummary: chapterSummary
	// 	});

	// };
	const getBookSummary = () => {
		dispatch(apiCall({
			urls: ["GETBOOKSUMMARY"], method: "GET", data: { bookId: bookId }, onSuccess: (response) => {
				 
				// bookSummary.bookSummary = response[0].bookSummary
				// editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(response[0].bookSummary)))
				setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(response[0].bookSummary))));
				// setEditorState(EditorState.createWithContent(response[0].bookSummary));
				console.log("setEditorState", editorState)
			}
		}));
	}

	const onsubmit = () => {
		 
		dispatch(apiCall({
			urls: ["ADDBOOKSUMMARY"], method: "Post", data: bookSummary, onSuccess: (response) => {
				// history.push(`${env.PUBLIC_URL}`);
				props.closeModal();
				// props.GridReload();
				setBookSummary(initialValues);
			}, showNotification: true
		}));
	}
	return (

		<Modal open={props.openModal} onClose={props.closeModal} size="small">
			<Modal.Header>Add Book Summary</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<p>Content Box/Objective</p>
					<Editor
						editorState={editorState}
						toolbarClassName="toolbarClassName"
						wrapperClassName="wrapperClassName"
						editorClassName="editorClassName"
						onEditorStateChange={onEditorStateChange}
					/>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button className="secondaryBtn" onClick={props.closeModal}>Cancel</Button>
				<Button className="primaryBtn" onClick={onsubmit}>Save</Button>
			</Modal.Actions>
		</Modal>
	);
}

export default AddPageSummary;