import React, { useState, useEffect } from "react";
import { Grid, Header, Button, Label, Table, Icon, Dimmer, Loader } from "semantic-ui-react";
import AddTagsListing from "../../shared/components/organisms/modal/add-tags-lisiting"
import { Link, env, bindActionCreators, connect, actions } from "../../shared/functional/global-import";



function AddTagsListingPage(props) {
	const [taglisting, setTaglisting] = React.useState(false)
	const [tag, setTag] = React.useState(null)
	const openModal = () => {
		setTaglisting(!taglisting)
	}

	useEffect(() => {
		getTag();
	}, []);

	const getTag = () => {
		console.log("dfghjk")

		props.actions.apiCall({
			urls: ["GETTAGSLIST"], method: "GET", data: tag, onSuccess: (response) => {
				if (response.length > 0) {
					setTag(response)
				}
			}
		});
	}

	return (
		<div className="bookSummary">

			{props.api.isApiLoading && (
				<Dimmer active inverted>
					<Loader />
				</Dimmer>

			)}

			<Grid>
				<Grid.Column width={8}>
					<Header as="h3" className="commonHeading">Add Tags Listing</Header>
				</Grid.Column>

				<Grid.Column width={8} textAlign="right">
					<Button className="primaryBtn" onClick={openModal}><Icon name="plus" /> New Tag</Button>
				</Grid.Column>
				<Grid.Column width={16}>
					<Table>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Tag Name <Icon name="sort" className="primary-color" link /> </Table.HeaderCell>
								<Table.HeaderCell>Type <Icon name="sort" className="primary-color" link /> </Table.HeaderCell>
								<Table.HeaderCell>Status <Icon name="sort" className="primary-color" link /> </Table.HeaderCell>
								<Table.HeaderCell textAlign="right">Action</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{tag && tag.map((tags) => {
								return (
									<Table.Row>
										<Table.Cell>{tags.tagName}</Table.Cell>
										<Table.Cell>{tags.tagType}</Table.Cell>
										<Table.Cell><Label color="blue">{tags.isActive}</Label></Table.Cell>
										<Table.Cell textAlign="right">
											<Icon name="edit" className="primary-color" link />
											<Icon name="trash alternate" color="red" link />
										</Table.Cell>
									</Table.Row>
								)
							})}
						</Table.Body>
					</Table>
				</Grid.Column>
			</Grid>
			<AddTagsListing openModal={taglisting} closeModal={openModal} />
		</div>
	);
}

const mapStateToProps = state => {
	return {
		api: state.api,
		auth: state.auth,
		global: state.global,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			apiCall: bindActionCreators(actions.apiCall, dispatch),
			storeGlobalCodes: bindActionCreators(actions.storeGlobalCodes, dispatch)
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(AddTagsListingPage);

