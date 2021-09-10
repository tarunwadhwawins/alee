import React, { useState, useEffect, useRef } from "react";
import { Modal, Button } from "semantic-ui-react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useSelector, useDispatch } from "react-redux";
import { apiCall } from "../../../../../store/actions/api.actions";
import { commonFunctions } from "../../../../functional/global-import";
import SimpleReactValidator from 'simple-react-validator';

function AddChapterSummary(props) {
	const initialValues = {
		chapterId: props.summaryData.chapterId,
		chapterSummary: "",
		actionPerformedBy: "admin"
	}
	const [chapterSummary, setChapterSummary] = useState(initialValues);
	const api = useSelector((state) => state.api);
	const [, forceUpdate] = useState()
	const simpleValidator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } }))

	const dispatch = useDispatch();
	const onEditorStateChange = (editorState) => {
		chapterSummary.chapterSummary = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
		setEditorState(editorState, chapterSummary)
		// setChapterSummary(chapterSummary)
		const x = JSON.parse(chapterSummary.chapterSummary)
		console.log("onEditorStateChange", x)
	}

	useEffect(() => {

		if (props.openModal && props.summaryData.chapterSummary) {
			setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(props.summaryData.chapterSummary))));
		}
	}, [props.openModal]);

	const onHandleSubmit = (e) => {
		debugger
		const isFormValid = commonFunctions.onHandleFormSubmit(e, simpleValidator, forceUpdate);
		if (isFormValid) {
			dispatch(
				apiCall({
					urls: ["ADDCHAPTERSUMMARY"],
					method: "POST",
					data: chapterSummary,
					onSuccess: (response) => {

						closeModal();
						props.GridReload();
						setChapterSummary(initialValues);
					},
					showNotification: true,
				})
			);
		}
	};
	const closeModal = () => {
		props.closeModal();
		setChapterSummary(initialValues);
	};

	const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
	return (
		<Modal open={props.openModal} onClose={closeModal} size="small" closeOnDimmerClick={false}>
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
						error={simpleValidator.current.message('editorState', editorState, 'required')}

					/>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button className="secondaryBtn" onClick={() => closeModal()}>Cancel</Button>
				<Button className="primaryBtn" onClick={onHandleSubmit}>Save</Button>
			</Modal.Actions>
		</Modal>
	);
}

export default AddChapterSummary;