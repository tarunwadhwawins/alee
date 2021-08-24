import React, { useState, useEffect } from "react";
import { Modal, Button } from "semantic-ui-react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useSelector, useDispatch } from "react-redux";
import { apiCall } from "../../../../../store/actions/api.actions";

function AddChapterSummary(props) {
	const initialValues = {
		chapterId: props.summaryData ? props.summaryData.chapterId : "",
		chapterSummary: "",
		actionPerformedBy: "admin"
	}
	const [chapterSummary, setChapterSummary] = useState(initialValues);
	const api = useSelector((state) => state.api);
	const dispatch = useDispatch();
	const onEditorStateChange = (editorState) => {
		chapterSummary.chapterSummary = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
		setEditorState(editorState, chapterSummary)
		const x = JSON.parse(chapterSummary.chapterSummary)
		console.log("onEditorStateChange", x)
	}

	useEffect(() => {
		debugger;
		if (props.summaryData) {
			editChapterSummary();
		}
	}, [props.summaryData]);

	const editChapterSummary = () => {

		debugger
		const {
			chapterId,
			chapterSummary,
		} = props.summaryData;
		setChapterSummary({
			...chapterSummary, chapterId: chapterId, chapterSummary: chapterSummary
		});

	};
	const onHandleSubmit = () => {
		dispatch(
			apiCall({
				urls: ["ADDCHAPTERSUMMARY"],
				method: "POST",
				data: chapterSummary,
				onSuccess: (response) => {
					debugger
					props.closeModal();
					setChapterSummary(initialValues);
					props.GridReload();
				},
				showNotification: true,
			})
		);
	};

	const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
	// const onEditorStateChange = (editorState) => setEditorState(editorState);
	return (
		<Modal open={props.openModal} onClose={props.closeModal} size="small" closeOnDimmerClick={false}>
			<Modal.Header>Add Chapter Summary</Modal.Header>
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
				<Button className="primaryBtn" onClick={onHandleSubmit}>Save</Button>
			</Modal.Actions>
		</Modal>
	);
}

export default AddChapterSummary;