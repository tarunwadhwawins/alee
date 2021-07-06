import React, { Component } from "react";
import { Grid, Form, Header, Button } from "semantic-ui-react";
import { Link, env } from "../../shared/functional/global-import";

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
								{this.state.showObserve &&<Button className="primaryBtn" onClick={this.addtag1} as={Link} to="lesson-plan-creation">Save</Button>}
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

