import React, { Component } from "react";
import { Grid, Form, Header, Button } from "semantic-ui-react";
import LessonPlanCustomModal from "../../shared/components/organisms/modal/lesson-plan-creation/index";
import { Link } from "../../shared/functional/global-import";


class LessonPlanPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  modalStatus:false
		};
	  }
	
	openModal=()=>{
		this.setState({modalStatus:!this.state.modalStatus})
	}
	
  render() {
	
    return (
		<div className="common-shadow">
		<Grid columns="equal">
			<Grid.Column width={16}>
				<Header as="h3" className="commonHeading">Lesson Plan Template</Header>
			</Grid.Column>
			<Grid.Column width={16}>
				<Form>
					<Form.Input icon='search' iconPosition='left' placeholder="Search lesson plan template" fluid/>
				</Form>
			</Grid.Column>
			<Grid.Column >
				<div className="lessonPlanTemplate" onClick={this.openModal}>
					<p>Shared text</p>
				</div>
			</Grid.Column>
			<Grid.Column >
				<div className="lessonPlanTemplate" onClick={this.openModal}>
					<p>Readers workshop</p>
				</div>
			</Grid.Column>
			<Grid.Column >
				<div className="lessonPlanTemplate" onClick={this.openModal}>
					<p>Writers workshop</p>
				</div>
			</Grid.Column>
			<Grid.Column >
				<div className="lessonPlanTemplate" onClick={this.openModal}>
					<p>Interactive Read aloud</p>
				</div>
			</Grid.Column>
			<Grid.Column>
				<div className="lessonPlanTemplate yourOwn" >
					<a href="https://www.youtube.com/watch?v=2ZII3HOlIfA" target="_blank">Use your Own</a>
				</div>
			</Grid.Column>
			<Grid.Column width="16" textAlign="right">
				<Button className="primaryBtn" as={Link} to="lesson-plan-creation">Next</Button>
			</Grid.Column>
		</Grid>
			<LessonPlanCustomModal openModal={this.state.modalStatus} closeModal={this.openModal} />
		</div>
		);
	}
  }
  
  export default LessonPlanPage;