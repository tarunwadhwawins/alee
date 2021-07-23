import React, { useState } from "react";
import { Grid, Form, Modal, Button } from "semantic-ui-react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


function LessonPlanCustomModal(props) {

	const [editorState, setEditorState] = React.useState(EditorState.createEmpty())

	const onEditorStateChange = (editorState) => setEditorState(editorState);

	return (
		<Modal
			open={props.openModal}
			onClose={props.closeModal}
			size="small"
		>
			<Modal.Header>Add Lesson Plan</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Grid>
							<Grid.Column width={8}>
								<Form.Input label="Teacher's Name" required fluid />
							</Grid.Column>
							<Grid.Column width={8}>
								<Form.Input label="Grade" required fluid />
							</Grid.Column>
							<Grid.Column width={8}>
								<Form.Input label="Lesson Week/Day (Start)" type="date" fluid />
							</Grid.Column>
							<Grid.Column width={8}>
								<Form.Input label="Lesson Week/Day (End)" type="date" fluid />
							</Grid.Column>
							<Grid.Column width={16}>
								<p>Content Box/Objective</p>
								<Editor
									editorState={editorState}
									toolbarClassName="toolbarClassName"
									wrapperClassName="wrapperClassName"
									editorClassName="editorClassName"
									onEditorStateChange={onEditorStateChange}
								/>
							</Grid.Column>
							<Grid.Column width={16}>
								<Form.Input label="Resoures" action={{ icon: 'plus' }} placeholder='Audio, Video, Text' className="addBtnInput" fluid />
								<Form.Input action={{ icon: 'plus' }} placeholder='Audio, Video, Text' className="addBtnInput" fluid />
							</Grid.Column>
							<Grid.Column width={16}>
								<Form.Input label="Agenda" fluid />
							</Grid.Column>
						</Grid>

					</Form>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button className="secondaryBtn" onClick={props.closeModal}>Cancel</Button>
				<Button className="primaryBtn" onClick={props.closeModal}>Confirm</Button>
			</Modal.Actions>
		</Modal>
	);
}

export default LessonPlanCustomModal;