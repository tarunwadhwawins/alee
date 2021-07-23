import React from "react";
import { Icon, Modal, Button, Form } from "semantic-ui-react";

const student = [
	{ key: 'All', value: 'All', text: 'All' },
	{ key: 'Jane Doe', value: 'Jane Doe', text: 'Jane Doe' },
	{ key: 'Maria Garcia', value: 'Maria Garcia', text: 'Maria Garcia' },
	{ key: 'Michael Smith', value: 'Michael Smith', text: 'Michael Smith' },
  ]

function AddNotes(props) {
    return (
		<Modal open={props.openModal} onClose={props.closeModal} size="small">
			<Modal.Header>Add Notes</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Form.Group >
							<Form.TextArea placeholder="Note" rows="1" width={7}/>
							<Form.Dropdown className="addMore"  multiple search selection placeholder="Select Student" options={student} width={7}/>
							<Form.Field width={2} className="addMore">
								<Icon name="plus square" className="primary-color" size="big" link/>
							</Form.Field>
						</Form.Group>
					</Form>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button className="secondaryBtn"  onClick={props.closeModal}>Cancel</Button>
				<Button className="primaryBtn"  onClick={props.closeModal}>Save</Button>
			</Modal.Actions>
		</Modal>
		);
}
  
  export default AddNotes;