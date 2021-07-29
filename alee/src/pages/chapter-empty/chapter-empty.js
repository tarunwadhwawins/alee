import React from "react";
import { Table, Grid, Icon, Header, Button, Image, Popup } from "semantic-ui-react";
import AddChapter from "../../shared/components/organisms/modal/add-chapter/index";
import { BookPage1, BookPage2, BookPage3, BookPage4, BookPage5, BookPage6 } from "../../shared/functional/global-image-import";
import HTMLFlipBook from 'react-pageflip';


function ChapterEmptyPage() {
	const [chapter, setChapter] = React.useState(false)
	
	const openModal = () => {
		setChapter(!chapter)
	}
    return (
        <div className="chapterPage">
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
			<Grid.Column width={8} verticalAlign="middle">
				<Header className="commonHeading">Animal Farm</Header>
			</Grid.Column>
			<Grid.Column width={8} textAlign="right">
				<Button className="primaryBtn" onClick={openModal}> <Icon name="plus"/> Chapter </Button>
			</Grid.Column>
				<Grid.Column width={16}>
				<Table>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell  width={5}>Chapter</Table.HeaderCell>
							<Table.HeaderCell  width={5}>Page No.</Table.HeaderCell>
							<Table.HeaderCell  width={3}>Topics</Table.HeaderCell>
							<Table.HeaderCell  width={3} textAlign="right">Action</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						<Table.Row>
							<Table.Cell colSpan="4" textAlign="center">No Topics available</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
				</Grid.Column>
			</Grid>
			<AddChapter openModal={chapter} closeModal={openModal} />
		</div>
    );
}

export default ChapterEmptyPage;

