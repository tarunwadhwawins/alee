import React  from "react";
import { Modal, Button } from "semantic-ui-react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function AddChapterSummary(props) {
	const [editorState, setEditorState] = React.useState(EditorState.createEmpty())

	const onEditorStateChange = (editorState) => setEditorState(editorState);
	return (
		<Modal open={props.openModal} onClose={props.closeModal} size="small">
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
				<Button className="secondaryBtn"  onClick={props.closeModal}>Cancel</Button>
				<Button className="primaryBtn"  onClick={props.closeModal}>Save</Button>
			</Modal.Actions>
		</Modal>
		);
  }
  
  export default AddChapterSummary;