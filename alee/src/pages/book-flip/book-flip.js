import React, { useState } from "react";
import { Grid, Button, Header, Image, Popup, Form } from "semantic-ui-react";
import { Link, } from "../../shared/functional/global-import";
import { BookPage1, BookPage2, BookPage3, BookPage4, BookPage5, BookPage6 } from "../../shared/functional/global-image-import";
import HTMLFlipBook from 'react-pageflip';
import AddPageSummary from "../../shared/components/organisms/modal/add-page-summary/index"
import InviteTeacher from "../../shared/components/organisms/modal/invite-teacher/index";

import AddTags from "../../shared/components/organisms/modal/add-tags"
const Grade = [
	{ key: '5th', value: '5th', text: '5th' },
	{ key: '6th', value: '6th', text: '6th' },
	{ key: '7th', value: '7th', text: '7th' },
	{ key: '8th', value: '8th', text: '8th' },
	{ key: '9th', value: '9th', text: '9th' },
	{ key: '10th', value: '10th', text: '9th' },
]
const Template = [
	{ key: 'Shared text', value: 'Shared text', text: 'Shared text' },
	{ key: 'Readers workshop', value: 'Readers workshop', text: 'Readers workshop' },
	{ key: 'Writers workshop', value: 'Writers workshop', text: 'Writers workshop' },
	{ key: 'Interactive Read aloud', value: 'Interactive Read aloud', text: 'Interactive Read aloud' },
]

function BookFlipPage() {

	const [summary, setSummary] = React.useState(false)
	const [tag, setTags] = React.useState(false)
	const [invite, setInvite] = React.useState(false)
	
	const openModal = () => {
		setSummary(!summary)
	}
	const openModal2 = () => {
		setTags(!tag)
	}
	const openModal3 = () => {
		setInvite(!invite)
	}

	const addBook = () =>{
		localStorage.setItem("BookType","No Chapter" );
		setTimeout(() => {
			window.location.reload();
			}, (1000));

	  }

    return (
		<>
		<div className="bookFlip">
			<Grid>
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
				<Grid.Column width={16} textAlign="right">
				{ localStorage.getItem("Usertype") === "admin" &&
					 <>
						<Button className="secondaryBtn" onClick={openModal}>Add Book Summray</Button>
						<Button className="primaryBtn"  onClick={addBook} as={Link} to="chapter-empty">Add Chapter/Topic</Button>
					</>
				}
				</Grid.Column>
			</Grid>
		
		</div>
		
		{ localStorage.getItem("Usertype") === "teacher" &&
		
			<Grid>
				<Grid.Column width={16} id="lessonPlan">
				<Header as="h3" className="commonHeading">Lesson Plan Creation</Header>
			</Grid.Column>
			<Grid.Column width={16}>
				<Form>
					<Form.Group widths="equal">
						<Form.Input placeholder="Lesson Plan"/>
						<Form.Select placeholder="Choose Template"  options={Template}/>
						<Form.Input placeholder="Grade" options={Grade} />
					</Form.Group>
				</Form>
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
				<Button className="secondaryBtn" onClick={openModal3}>Invite Teacher</Button>
				<Button className="alternateBtn">Save as Draft</Button>
				<Button className="primaryBtn" as={Link} to="lesson-plan">Save Plan</Button>
			</Grid.Column>
		</Grid>
  }
  			<AddPageSummary openModal={summary} closeModal={openModal} />
			<AddTags openModal={tag} closeModal={openModal2} />
			<InviteTeacher openModal={invite} closeModal={openModal3} />
		</>
    );
}

export default BookFlipPage;

