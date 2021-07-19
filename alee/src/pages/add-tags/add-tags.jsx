import React, { Component } from "react";
import { Grid, Form, Header, Button, Popup, Image } from "semantic-ui-react";
import { Link } from "../../shared/functional/global-import";
import HTMLFlipBook from 'react-pageflip';
import { BookPage1, BookPage2, BookPage3, BookPage4, BookPage5, BookPage6 } from "../../shared/functional/global-image-import";



const Standard = [
	{ key: 'Grade 1', value: 'Grade 1', text: 'Grade 1' },
	{ key: 'Grade 2', value: 'Grade 2', text: 'Grade 2' },
	{ key: 'Grade 3', value: 'Grade 3', text: 'Grade 3' },
	{ key: 'Grade 4', value: 'Grade 4', text: 'Grade 4' },
	{ key: 'Grade 5', value: 'Grade 5', text: 'Grade 5' },
	{ key: 'Grade 6', value: 'Grade 6', text: 'Grade 6' },
	{ key: 'Grade 7', value: 'Grade 7', text: 'Grade 7' },
  ]
const Value = [
	{ key: 'Mindfulness', value: 'Mindfulness', text: 'Mindfulness' },
	{ key: 'Problem Solving', value: 'Problem Solving', text: 'Problem Solving' },
	{ key: 'Inclusion', value: 'Inclusion', text: 'Inclusion' },
	{ key: 'Empathy', value: 'Empathy', text: 'Empathy' },
  ]
const ComprehensionStrategies = [
	{ key: 'Visualizing', value: 'Visualizing', text: 'Visualizing' },
	{ key: 'Making Inferences', value: 'Making Inferences', text: 'Making Inferences' },
	{ key: 'Questioning', value: 'Questioning', text: 'Questioning' },
	{ key: 'Visualizing', value: 'Visualizing', text: 'Visualizing' },
  ]
const LiteraryElements = [
	{ key: 'Dialogue', value: 'Dialogue', text: 'Dialogue' },
	{ key: 'Flashback', value: 'Flashback', text: 'Flashback' },
	{ key: 'Allegory', value: 'Allegory', text: 'Allegory' },
	{ key: 'Metaphor', value: 'Metaphor', text: 'Metaphor' },
  ]

class AddTagPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  showObserve:false
		};
	  }

	  showObserveHandle = () =>{
		this.setState({showObserve:true});
	  }

	  addtag1 = ()=>{
		localStorage.setItem("BookType","" );
		setTimeout(() => {
		window.location.reload();
		}, (1000));
	  }

  render() {
  
    return (
        <div className="addTag">
			<Grid>
				<Grid.Column width={16}>
					
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
					<Header as="h3" className="commonHeading">Chapter One</Header>
				</Grid.Column>
				<Grid.Column width={8}>
					<div className="bookPage">
					<Header as="h5">Page 1</Header>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p><br/>	
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p><br/>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.</p>
					</div>
				</Grid.Column>
				<Grid.Column width={8} >
					<div className="bookPage">
						<Grid>
							<Grid.Column width={16}>
								{!this.state.showObserve &&<Form>
									<Header as="h5">Add Tag</Header>
									<Form.Select placeholder='Select Standard' options={Standard} label="Standard"/>
									<Form.Select placeholder='Select Value' options={Value} label="Value"/>
									<Form.Select placeholder='Select Comprehension Strategies' options={ComprehensionStrategies} label="Comprehension Strategies"/>
									<Form.Select placeholder='Select Literary Elements' options={LiteraryElements} label="Literary Elements"/>
								</Form>
  }
							{this.state.showObserve &&	<Form>
									<Form.TextArea placeholder="Description" rows="2" label="Desciption"/>
									<Form.TextArea placeholder="Description" rows="2" label="Observe"/>
									<Form.TextArea placeholder="Description" rows="2" label="Prompt Students"/>
									<Form.TextArea placeholder="Description" rows="2" label="Demonstrate for Student"/>
								</Form>
  }
							</Grid.Column>
							<Grid.Column width={16} textAlign="right">
								<Button className="secondaryBtn">Edit</Button>
								{!this.state.showObserve && <Button className="primaryBtn" onClick={this.showObserveHandle} >Save</Button>}
								{this.state.showObserve &&<Button className="primaryBtn" onClick={this.addtag1} as={Link} to="my-books">Save</Button>}
							</Grid.Column>
						</Grid>
					</div>
				</Grid.Column>
			</Grid>
		</div>
    );
  }
}

export default AddTagPage;

