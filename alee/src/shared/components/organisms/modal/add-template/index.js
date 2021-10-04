import React from "react";
import { Grid, Form, Modal, Button } from "semantic-ui-react";



function AddTemplateModal(props) {
	const { templateName, simpleValidator } = props;
	return (
		<Modal open={props.openModal} onClose={props.closeModal} size="tiny">
			<Modal.Header>{templateName.templateId > 0 ? "Edit Template" : "Create Template"} </Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Grid>
							<Grid.Column width={16}>
								<Form.Input label="Template Name" placeholder="Template Name" data="templateName" value={templateName.templateName}
									onChange={props.onChangeTemplate}
									error={simpleValidator.current.message('templateName', templateName.templateName, 'required')}
								/>
							</Grid.Column>
						</Grid>

					</Form>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button className="secondaryBtn" onClick={props.closeModal}>Cancel</Button>
				<Button className="primaryBtn" onClick={props.onSubmitTemplate}>{templateName.templateId > 0 ? "Update" : "Confirm"}</Button>
			</Modal.Actions>
		</Modal>
	);
}

export default AddTemplateModal;