import React from "react";
import { Grid, Icon, Header, Button, Table, Label } from "semantic-ui-react";
import LessonPlanCustomModal from "../../shared/components/organisms/modal/lesson-plan-creation/index";
import { Link } from "../../shared/functional/global-import";


function CreateTemplatePage() {
	const [lesson, setLesson] = React.useState(false)
	
	const openModal = () => {
		setLesson(!lesson)
	}
	
    return (
		<div className="common-shadow">
		<Grid>
			<Grid.Column width={8} verticalAlign="middle">
				<Header as="h3" className="commonHeading">Create Template</Header>
			</Grid.Column>
			<Grid.Column width={8} textAlign="right">
				<Button className="primaryBtn"><Icon name="plus"/>Create new template</Button>
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
							<Table.Cell><Link className="primary-color" onClick={openModal}>Shared text</Link></Table.Cell>
							<Table.Cell>
								<Label className="green">Active</Label>
							</Table.Cell>
							<Table.Cell textAlign="right">
								<Icon name="edit" className="primary-color" link/>
								<Icon name="trash alternate" color="red" link/>
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell><Link className="primary-color" onClick={openModal}>Interactive Read aloud</Link></Table.Cell>
							<Table.Cell>
								<Label className="green">Active</Label>
							</Table.Cell>
							<Table.Cell textAlign="right">
								<Icon name="edit" className="primary-color" link/>
								<Icon name="trash alternate" color="red" link/>
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell><Link className="primary-color" onClick={openModal}>Writers workshop</Link></Table.Cell>
							<Table.Cell>
								<Label className="green">Active</Label>
							</Table.Cell>
							<Table.Cell textAlign="right">
								<Icon name="edit" className="primary-color" link/>
								<Icon name="trash alternate" color="red" link/>
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell><Link className="primary-color" onClick={openModal}>Readers workshop</Link></Table.Cell>
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
			<LessonPlanCustomModal openModal={lesson} closeModal={openModal} />
		</div>
		);
  }
  
  export default CreateTemplatePage;