import React, { Component } from "react";
import { Grid, Icon, Header, Button, Table, Label } from "semantic-ui-react";
import LessonPlanCustomModal from "../../shared/components/organisms/modal/lesson-plan-creation/index";
import { Link } from "../../shared/functional/global-import";


class CreateTemplatePage extends Component {
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
		<Grid>
			<Grid.Column width={8} verticalAlign="middle">
				<Header as="h3" className="commonHeading">Create Template</Header>
			</Grid.Column>
			<Grid.Column width={8} textAlign="right">
				<Button className="primaryBtn" as={Link} to="/https://www.youtube.com/watch?v=2ZII3HOlI" target="_blank"><Icon name="plus"/> Create new template</Button>
			</Grid.Column>
			<Grid.Column width={16}>
				<Table>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Template</Table.HeaderCell>
							<Table.HeaderCell>Status</Table.HeaderCell>
							<Table.HeaderCell textAlign="right">Action</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						<Table.Row>
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
							<Table.Cell><Link className="primary-color" onClick={this.openModal}>Writers workshop</Link></Table.Cell>
							<Table.Cell>
								<Label className="green">Active</Label>
							</Table.Cell>
							<Table.Cell textAlign="right">
								<Icon name="edit" className="primary-color" link/>
								<Icon name="trash alternate" color="red" link/>
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell><Link className="primary-color" onClick={this.openModal}>Readers workshop</Link></Table.Cell>
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
		</div>
		);
	}
  }
  
  export default CreateTemplatePage;