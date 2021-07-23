import React from "react";
import { Grid, Header, Button, Label, Table, Icon } from "semantic-ui-react";
import AddTagsListing from "../../shared/components/organisms/modal/add-tags-lisiting"



function AddTagsListingPage() {
	const [taglisting, setTaglisting] = React.useState(false)
	const openModal = () => {
		setTaglisting(!taglisting)
	}

    return (
        <div className="bookSummary">
			<Grid>
				<Grid.Column width={8}>
					<Header as="h3" className="commonHeading">Add Tags Listing</Header>
				</Grid.Column>
				
				<Grid.Column width={8} textAlign="right">
					<Button className="primaryBtn"  onClick={openModal}><Icon name="plus"/> New Tag</Button>
				</Grid.Column>
				<Grid.Column width={16}>
					<Table>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Tag Name <Icon name="sort" className="primary-color" link/> </Table.HeaderCell>
								<Table.HeaderCell>Type <Icon name="sort" className="primary-color" link/> </Table.HeaderCell>
								<Table.HeaderCell>Status <Icon name="sort" className="primary-color" link/> </Table.HeaderCell>
								<Table.HeaderCell textAlign="right">Action</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							<Table.Row>
								<Table.Cell>Visualizing</Table.Cell>
								<Table.Cell>Comprehension Strategies</Table.Cell>
								<Table.Cell><Label color="blue">Inactive</Label></Table.Cell>
								<Table.Cell textAlign="right">
									<Icon name="edit" className="primary-color" link/>
									<Icon name="trash alternate" color="red" link/>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Metaphor</Table.Cell>
								<Table.Cell>Literary Elements</Table.Cell>
								<Table.Cell><Label color="green">Active</Label></Table.Cell>
								<Table.Cell textAlign="right">
									<Icon name="edit" className="primary-color" link/>
									<Icon name="trash alternate" color="red" link/>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Problem Solving</Table.Cell>
								<Table.Cell>Value</Table.Cell>
								<Table.Cell><Label color="green">Active</Label></Table.Cell>
								<Table.Cell textAlign="right">
									<Icon name="edit" className="primary-color" link/>
									<Icon name="trash alternate" color="red" link/>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Predicting</Table.Cell>
								<Table.Cell>Comprehension Strategies</Table.Cell>
								<Table.Cell><Label color="blue">Inactive</Label></Table.Cell>
								<Table.Cell textAlign="right">
									<Icon name="edit" className="primary-color" link/>
									<Icon name="trash alternate" color="red" link/>
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>
				</Grid.Column>
			</Grid>
			<AddTagsListing openModal={taglisting} closeModal={openModal} />
		</div>
    );
}

export default AddTagsListingPage;

