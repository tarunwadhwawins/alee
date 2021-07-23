import React, { useState } from "react";
import { Grid, Modal, Button, Form } from "semantic-ui-react";
import {Link} from "../../../../functional/global-import"




function AddChapter(props) {

	const  addChapter = () =>{
		localStorage.setItem("BookType","With Chapter" );
		setTimeout(() => {
			window.location.reload();
			}, (1000));
	  }
	


    return (
		<Modal open={props.openModal} onClose={props.closeModal} size="small">
			<Modal.Header>Add Chapter</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Grid>
							<Grid.Column width={10}>
								<Form.Input label="Chapter Name"/>
							</Grid.Column>
							<Grid.Column width={3}>
								<Form.Input label="Page No. (Start)"/>
							</Grid.Column>
							<Grid.Column width={3}>
								<Form.Input label="Page No. (End)"/>
							</Grid.Column>
						</Grid>
					</Form>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button className="secondaryBtn"  onClick={props.closeModal}>Cancel</Button>
				<Button className="primaryBtn" onClick={() => { props.closeModal(); addChapter();}}  as={Link} to="chapter">Confirm</Button>
			</Modal.Actions>
		</Modal>
		);
  }
  
  export default AddChapter;