import React, { Component } from "react";
import { Grid, Header, Popup, Button, Select, Form, Icon} from "semantic-ui-react";
import { Link } from "../../shared/functional/global-import";
import InviteTeacher from "../../shared/components/organisms/modal/invite-teacher/index";
import AddNotes from "../../shared/components/organisms/modal/add-notes/index"


const Template = [
	{ key: 'Template 1', value: 'Template 1', text: 'Template 1' },
	{ key: 'Template 2', value: 'Template 2', text: 'Template 2' },
	{ key: 'Template 3', value: 'Template 3', text: 'Template 3' },
	{ key: 'Template 4', value: 'Template 4', text: 'Template 4' },
	{ key: 'Template 5', value: 'Template 5', text: 'Template 5' },
  ]
  



class LessonPlanCreationPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inviteStatus:false,
			notesStatus:false
		};
	}
	
	openModal=()=>{
		this.setState({inviteStatus:!this.state.inviteStatus})
	}
	openModal2=()=>{
		this.setState({notesStatus:!this.state.notesStatus})
	}
  render() {
    return (
		<div className="common-shadow">
		<Grid>
			<Grid.Column width={16}>
				<Header as="h3" className="commonHeading">Lesson Plan Creation</Header>
			</Grid.Column>
			<Grid.Column width={16}>
				<Header as="h4" className="bookName">Animal Farm</Header>
			</Grid.Column>
			<Grid.Column width={8}>
				<div className="chapterBox">
					<Header as="h4">Chapter 1</Header>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In rem voluptatum excepturi maiores iusto non ex dolor, doloremque iure similique minima est voluptates sit ad neque cumque nesciunt cum modi.</p>
					<Header as="h5">Observe -</Header>
					<p>
						Aspernatur facere consequatur hic iste quia,
						<Popup  trigger={<b> neque dolorem dolore, </b>} content='7.1' position='top left'/>
						commodi quos ad asperiores alias unde! Voluptatem voluptatum perferendis mollitia sit amet consectetur
						<Popup  trigger={<b> neque dolorem dolore, </b>} content='Empathy' position='top left'/>
						 adipisicing elit. Exercitationem, perspiciatis praesentium. 
						 </p>
					<Header as="h5">Prompt Students -</Header>
					<p>
						Aspernatur facere consequatur hic iste quia,
						<Popup  trigger={<b> neque dolorem dolore, </b>} content='7.1' position='top left'/>
						commodi quos ad asperiores alias unde! Voluptatem voluptatum perferendis mollitia sit amet consectetur
						<Popup  trigger={<b> neque dolorem dolore, </b>} content='Empathy' position='top left'/>
						 adipisicing elit. Exercitationem, perspiciatis praesentium. 
						 </p>
						 <Header as="h5">Demonstrate for Student -</Header>
						 <p>
						Aspernatur facere consequatur hic iste quia,
						<Popup  trigger={<b> neque dolorem dolore, </b>} content='7.1' position='top left'/>
						commodi quos ad asperiores alias unde! Voluptatem voluptatum perferendis mollitia sit amet consectetur
						<Popup  trigger={<b> neque dolorem dolore, </b>} content='Empathy' position='top left'/>
						 adipisicing elit. Exercitationem, perspiciatis praesentium. 
						 </p>

				</div>
			</Grid.Column>
			<Grid.Column width={8}>
				<div className="chapterBox">
					<Header as="h4">Content</Header>
					<Form>
					<Form.Input label="Lesson Plan Name"/>
					<Form.Select placeholder='Select template' label="Template" options={Template} fluid/>
					</Form>
					<div className="contentDragDrop">
						<p>Drag & Drop</p>
					</div>
					<Button className="alternateBtn" onClick={this.openModal2}>Add Notes</Button>
				</div>
			</Grid.Column>
			<Grid.Column width={16} textAlign="right">
				<Button className="secondaryBtn" onClick={this.openModal}>Invite Teacher</Button>
				<Button className="alternateBtn">Save as Draft</Button>
				<Button className="primaryBtn">Save Plan</Button>
			</Grid.Column>
		</Grid>
		<InviteTeacher openModal={this.state.inviteStatus} closeModal={this.openModal} />
		<AddNotes openModal={this.state.notesStatus} closeModal={this.openModal2} />
		</div>
		);
	}
  }
  
  export default LessonPlanCreationPage;