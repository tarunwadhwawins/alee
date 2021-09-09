import React, { useState } from "react";
import { Grid, Form, Modal, Button } from "semantic-ui-react";


function AddTemplateModal(props) {
	return (
		<Modal
			open={props.openModal}
			onClose={props.closeModal}
			size="tiny"
		>
			<Modal.Header>Create Template</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Grid>
							<Grid.Column width={16}>
								<Form.Input label="Template Name" placeholder="Template Name" onChange={props.onChangeTemplate}/>	
							</Grid.Column>
						</Grid>

					</Form>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button className="secondaryBtn" onClick={props.closeModal}>Cancel</Button>
				<Button className="primaryBtn" onClick={props.onSubmitTemplate}>Confirm</Button>
			</Modal.Actions>
		</Modal>
	);
}

export default AddTemplateModal;