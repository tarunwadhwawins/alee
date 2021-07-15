import React, { Component } from "react";
import { Grid, Icon, Header, Button, Table, Label } from "semantic-ui-react";
import LessonPlanCustomModal from "../../shared/components/organisms/modal/lesson-plan-creation/index";
import AddAssignTemplate from "../../shared/components/organisms/modal/assign-template/index";
import { Link } from "../../shared/functional/global-import";


class AssignTemplatePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  modalStatus:false,
		  assignStatus:false
		};
	  }
	
	openModal=()=>{
		this.setState({modalStatus:!this.state.modalStatus})
	}
	openModal2=()=>{
		this.setState({assignStatus:!this.state.assignStatus})
	}
	
  render() {
	
    return (
		<div className="common-shadow">
		<Grid>
			<Grid.Column width={8} verticalAlign="middle">
				<Header as="h3" className="commonHeading">Assign Template</Header>
			</Grid.Column>
			<Grid.Column width={8} textAlign="right">
				<Button className="primaryBtn"  onClick={this.openModal2}><Icon name="plus"/> Assign template</Button>
			</Grid.Column>
			<Grid.Column width={16}>
				<Table>
					<Table.Header>
						<Table.Row> 
							<Table.HeaderCell>School Name</Table.HeaderCell>
							<Table.HeaderCell>Teacher Name</Table.HeaderCell>
							<Table.HeaderCell>Grade</Table.HeaderCell>
							<Table.HeaderCell>Template</Table.HeaderCell>
							<Table.HeaderCell>Status</Table.HeaderCell>
							<Table.HeaderCell textAlign="right">Action</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						<Table.Row>
							<Table.Cell><Link className="primary-color">Stanton College Preparatory School</Link></Table.Cell>
							<Table.Cell><Link className="primary-color">Jane Doe</Link></Table.Cell>
							<Table.Cell>9th</Table.Cell>
							<Table.Cell><Link className="primary-color" onClick={this.openModal}>Shared text</Link></Table.Cell>
							<Table.Cell>
								<Label className="green">Active</Label>
							</Table.Cell>
							<Table.Cell textAlign="right">
								<Icon name="edit" className="primary-color" link/>
								<Icon name="trash alternate" color="red" link/>
							</Table.Cell>
						</Table.Row>
						<Table.Row>
						<Table.Cell><Link className="primary-color">Gilbert Classical Academy</Link></Table.Cell>
						<Table.Cell><Link className="primary-color">Michael Smith</Link></Table.Cell>
						<Table.Cell>5th</Table.Cell>
						<Table.Cell><Link className="primary-color" onClick={this.openModal}>Interactive Read aloud</Link></Table.Cell>
							<Table.Cell>
								<Label className="green">Active</Label>
							</Table.Cell>
							<Table.Cell textAlign="right">
								<Icon name="edit" className="primary-color" link/>
								<Icon name="trash alternate" color="red" link/>
							</Table.Cell>
						</Table.Row>
						<Table.Row>
						<Table.Cell><Link className="primary-color">Liberal Arts and Science Academy High School</Link></Table.Cell>
						<Table.Cell><Link className="primary-color">Maria Garcia</Link></Table.Cell>
						<Table.Cell>8th</Table.Cell>
							<Table.Cell><Link className="primary-color" onClick={this.openModal}>Writers workshop</Link></Table.Cell>
							<Table.Cell>
								<Label className="green">Active</Label>
							</Table.Cell>
							<Table.Cell textAlign="right">
								<Icon name="edit" className="primary-color" link/>
								<Icon name="trash alternate" color="red" link/>
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</Grid.Column>
		</Grid>
			<LessonPlanCustomModal openModal={this.state.modalStatus} closeModal={this.openModal} />
			<AddAssignTemplate openModal={this.state.assignStatus} closeModal={this.openModal2} />
		</div>
		);
	}
  }
  
  export default AssignTemplatePage;