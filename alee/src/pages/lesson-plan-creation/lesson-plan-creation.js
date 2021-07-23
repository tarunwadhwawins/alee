import React from "react";
import { Grid, Header, Popup, Button} from "semantic-ui-react";
import InviteTeacher from "../../shared/components/organisms/modal/invite-teacher/index";
import AddNotes from "../../shared/components/organisms/modal/add-notes/index"



function LessonPlanCreationPage() {
	const [invite, setInvite] = React.useState(false)
	const [notes, setNotes] = React.useState(false)
	
	const openModal = () => {
		setInvite(!invite)
	}
	const openModal2 = () => {
		setNotes(!notes)
	}
	
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
					<Header as="h4">Lesson Plan</Header>
					<div className="contentDragDrop">
						<p>Drag & Drop</p>
					</div>
					<Button className="alternateBtn" onClick={openModal2}>Add Notes</Button>
				</div>
			</Grid.Column>
			<Grid.Column width={16} textAlign="right">
				<Button className="secondaryBtn" onClick={openModal}>Invite Teacher</Button>
				<Button className="alternateBtn">Save as Draft</Button>
				<Button className="primaryBtn">Save Plan</Button>
			</Grid.Column>
		</Grid>
		<InviteTeacher openModal={invite} closeModal={openModal} />
		<AddNotes openModal={notes} closeModal={openModal2} />
		</div>
		);
  }
  
  export default LessonPlanCreationPage;