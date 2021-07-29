import React from "react";
import { Grid, Header, Popup, Button, Image} from "semantic-ui-react";
import InviteTeacher from "../../shared/components/organisms/modal/invite-teacher/index";
import AddNotes from "../../shared/components/organisms/modal/add-notes/index"
import { BookPage1, BookPage2, BookPage3, BookPage4, BookPage5, BookPage6 } from "../../shared/functional/global-image-import";
import HTMLFlipBook from 'react-pageflip';



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
			
			{/* <Grid.Column width={16}>
				<Header as="h4" className="bookName">Animal Farm</Header>
			</Grid.Column> */}
			<Grid.Column width={16} className="bookFlipOuter">
				<HTMLFlipBook  width={550} height={600} size="stretch" minWidth={315} maxWidth={2000} minHeight={400} maxHeight={1533} maxShadowOpacity={0.5} showCover={true} mobileScrollSupport={true}>
					<div className="demoPage">
						<Header as="h3">Page 1</Header>
						<Image src={BookPage1}/><br/>
						<p>
						Aspernatur facere consequatur hic iste quia,
						<Popup  trigger={<b> neque dolorem dolore, </b>} content='7.1' position='top left' />
						commodi quos ad asperiores alias unde! Voluptatem voluptatum perferendis mollitia sit amet consectetur
						<Popup  trigger={<b> neque dolorem dolore, </b>} content='Empathy' position='top left'/>
						 adipisicing elit. Exercitationem, perspiciatis praesentium. 
						 </p>
						 <p>
						Aspernatur facere consequatur hic iste quia,
						<Popup  trigger={<b> neque dolorem dolore, </b>} content='7.1' position='top left'/>
						commodi quos ad asperiores alias unde! Voluptatem voluptatum perferendis mollitia sit amet consectetur
						<Popup  trigger={<b> neque dolorem dolore, </b>} content='Empathy' position='top left'/>
						 adipisicing elit. Exercitationem, perspiciatis praesentium. 
						 </p>
					</div>
					<div className="demoPage">
						<Header as="h3">Page 2</Header>
						<Image src={BookPage2}/><br/>
						<p>
						Aspernatur facere consequatur hic iste quia,
						<Popup  trigger={<b> neque dolorem dolore, </b>} content='7.1' position='top left'/>
						commodi quos ad asperiores alias unde! Voluptatem voluptatum perferendis mollitia sit amet consectetur
						<Popup  trigger={<b> neque dolorem dolore, </b>} content='Empathy' position='top left'/>
						 adipisicing elit. Exercitationem, perspiciatis praesentium. 
						 </p>
						 <p>
						Aspernatur facere consequatur hic iste quia,
						<Popup  trigger={<b> neque dolorem dolore, </b>} content='7.1' position='top left'/>
						commodi quos ad asperiores alias unde! Voluptatem voluptatum perferendis mollitia sit amet consectetur
						<Popup  trigger={<b> neque dolorem dolore, </b>} content='Empathy' position='top left' />
						 adipisicing elit. Exercitationem, perspiciatis praesentium. 
						 </p>					</div>
					<div className="demoPage">
						<Header as="h3">Page 3</Header>
						<Image src={BookPage3}/><br/>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
					</div>
					<div className="demoPage">
						<Header as="h3">Page 4</Header>
						<Image src={BookPage4}/><br/>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
					</div>
					<div className="demoPage">
						<Header as="h3">Page 5</Header>
						<Image src={BookPage5}/><br/>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
					</div>
					<div className="demoPage">
						<Header as="h3">Page 6</Header>
						<Image src={BookPage6}/><br/>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
					</div>
				</HTMLFlipBook>
				</Grid.Column>
				<Grid.Column width={16}>
				<Header as="h3" className="commonHeading">Lesson Plan Creation</Header>
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