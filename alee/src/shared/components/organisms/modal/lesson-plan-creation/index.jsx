import React, { Component } from "react";
import { Grid, Form, Modal,Button } from "semantic-ui-react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class LessonPlanCustomModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  editorState: EditorState.createEmpty(),
		  modalStatus:false
		};
	  }
	
	  onEditorStateChange: Function = (editorState) => {
		this.setState({
		  editorState,
		});
	  };


  render() {
	const { editorState } = this.state;

    return (
		<Modal
				open={this.props.openModal}
				onClose={this.props.closeModal}
				size="small"
			>
				<Modal.Header>Add Lesson Plan</Modal.Header>
				<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Grid>
							<Grid.Column width={8}>
								<Form.Input label="Teacher's Name" required fluid/>
							</Grid.Column>
							<Grid.Column width={8}>
								<Form.Input label="Grade" required fluid/>
							</Grid.Column>
							<Grid.Column width={8}>
								<Form.Input label="Lesson Week/Day (Start)" type="date" fluid/>
							</Grid.Column>
							<Grid.Column width={8}>
								<Form.Input label="Lesson Week/Day (End)" type="date" fluid/>
							</Grid.Column>
							<Grid.Column width={16}>
								<p>Content Box/Objective</p>
								<Editor
									editorState={editorState}
									toolbarClassName="toolbarClassName"
									wrapperClassName="wrapperClassName"
									editorClassName="editorClassName"
									onEditorStateChange={this.onEditorStateChange}
								/>
							</Grid.Column>
							<Grid.Column width={16}>
								<Form.Input label="Resoures"  action={{ icon: 'plus' }} placeholder='Audio, Video, Text' className="addBtnInput" fluid/>
								<Form.Input action={{ icon: 'plus' }} placeholder='Audio, Video, Text' className="addBtnInput" fluid/>
							</Grid.Column>
							<Grid.Column width={16}>
								<Form.Input label="Agenda" fluid/>
							</Grid.Column>
						</Grid>

					</Form>
				</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
				<Button className="secondaryBtn"  onClick={this.props.closeModal}>Cancel</Button>
				<Button className="primaryBtn"  onClick={this.props.closeModal}>Confirm</Button>
					</Modal.Actions>
			</Modal>
		);
	}
  }
  
  export default LessonPlanCustomModal;