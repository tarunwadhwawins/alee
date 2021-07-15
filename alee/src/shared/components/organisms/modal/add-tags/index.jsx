import React, { Component } from "react";
import { Grid, Modal, Button, Popup, Header } from "semantic-ui-react";
import {Link} from "../../../../functional/global-import"



class AddTags extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  SubAdminStatus:false
		};
	  }

  render() {

    return (
		<div className="addTagsModal">
			<Modal className="addTagsModal" open={this.props.openModal} onClose={this.props.closeModal} size="big" >
				<Modal.Header>Lesson Plan Creation (Animal Farm )</Modal.Header>
				<Modal.Content scrolling>
					<Modal.Description>
					<Grid>
						<Grid.Column width={8}>
							<div className="chapterBox">
								<Header as="h4">Chapter 1</Header>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In rem voluptatum excepturi maiores iusto non ex dolor, doloremque iure similique minima est voluptates sit ad neque cumque nesciunt.</p>
								<Header as="h5">Observe -</Header>
								<p>
									Aspernatur facere consequatur hic iste quia,
									<Popup  trigger={<b> neque dolorem dolore, </b>} content='7.1' position='top left'/>
									commodi quos ad asperiores alias unde! Voluptatem voluptatum perferendis mollitia sit amet consectetur
									<Popup  trigger={<b> neque dolorem dolore, </b>} content='Empathy' position='top left'/>
									adipisicing elit. Exercitationem, perspiciatis. 
									</p>
								<Header as="h5">Prompt Students -</Header>
								<p>
									Aspernatur facere consequatur hic iste quia,
									<Popup  trigger={<b> neque dolorem dolore, </b>} content='7.1' position='top left'/>
									commodi quos ad asperiores alias unde! Voluptatem voluptatum perferendis mollitia sit amet consectetur
									<Popup  trigger={<b> neque dolorem dolore, </b>} content='Empathy' position='top left'/>
									adipisicing elit. Exercitationem, perspiciatis. 
									</p>
									<Header as="h5">Demonstrate for Student -</Header>
									<p>
									Aspernatur facere consequatur hic iste quia,
									<Popup  trigger={<b> neque dolorem dolore, </b>} content='7.1' position='top left'/>
									commodi quos ad asperiores alias unde! Voluptatem voluptatum perferendis mollitia sit amet consectetur
									<Popup  trigger={<b> neque dolorem dolore, </b>} content='Empathy' position='top left'/>
									adipisicing elit. Exercitationem, perspiciatis. 
									</p>

							</div>
						</Grid.Column>
						<Grid.Column width={8}>
							<div className="chapterBox">
								<Header as="h4">Lesson Plan</Header>
								<div className="contentDragDrop">
									<p>Drag & Drop</p>
								</div>
								<Button className="alternateBtn" onClick={this.openModal2}>Add Notes</Button>
							</div>
						</Grid.Column>
						{/* <Grid.Column width={16} textAlign="right">
							<Button className="secondaryBtn" onClick={this.openModal}>Invite Teacher</Button>
							<Button className="alternateBtn">Save as Draft</Button>
							<Button className="primaryBtn">Save Plan</Button>
						</Grid.Column> */}
					</Grid>
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					<Button className="secondaryBtn" onClick={this.closeModal}>Invite Teacher</Button>
					<Button className="secondaryBtn"  onClick={this.props.closeModal}>Save as Draft</Button>
					<Button className="primaryBtn" onClick={this.props.closeModal}>Save Plan</Button>
				</Modal.Actions>
			</Modal>
		</div>
		);
	}
  }
  
  export default AddTags;