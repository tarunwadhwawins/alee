import React, { Component } from "react";
import { Grid, Modal, Button, Form } from "semantic-ui-react";
import {Link} from "../../../../functional/global-import"





class AddSubtitle extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  SubtitleStatus:false
		};
	  }

	  addSubTopic = () =>{
		localStorage.setItem("BookType","With Topic Chapter" );
		setTimeout(() => {
		window.location.reload();
		}, (1000));
	  }
	
  render() {

    return (
		<Modal open={this.props.openModal} onClose={this.props.closeModal} size="small">
			<Modal.Header>Add Topic</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Grid>
							<Grid.Column width={10}>
								<Form.Input label="Topic Name"/>
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
				<Button className="secondaryBtn"  onClick={this.props.closeModal}>Cancel</Button>
				<Button className="primaryBtn"  onClick={() => { this.props.closeModal(); this.addSubTopic();}} as={Link} to="subtitle">Confirm</Button>
			</Modal.Actions>
		</Modal>
		);
	}
  }
  
  export default AddSubtitle;