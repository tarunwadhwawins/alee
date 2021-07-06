import React, { Component } from "react";
import { Grid, Header, Popup, Button} from "semantic-ui-react";
import { Link } from "../../shared/functional/global-import";
import InviteTeacher from "../../shared/components/organisms/modal/invite-teacher/index";



class LessonPlanCreationPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inviteStatus:false
		};
	}
	
	openModal=()=>{
		this.setState({inviteStatus:!this.state.inviteStatus})
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
					<div className="contentDragDrop">
						<p>Drag & Drop</p>
					</div>
					<Link className="primary-color">Prompt Student</Link>
				</div>
			</Grid.Column>
			<Grid.Column width={16} textAlign="right">
				<Button className="secondaryBtn" onClick={this.openModal}>Invite Teacher</Button>
				<Button className="primaryBtn">Save Plan</Button>
			</Grid.Column>
		</Grid>
		<InviteTeacher openModal={this.state.inviteStatus} closeModal={this.openModal} />
		</div>
		);
	}
  }
  
  export default LessonPlanCreationPage;