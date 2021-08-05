import React, { useEffect } from "react";
import { Grid, Header, Table, Button, Icon, Label, Dimmer, Loader } from "semantic-ui-react";
import AddSubscription from "../../shared/components/organisms/modal/subscription/index";
import { Link, env, bindActionCreators, connect, actions } from "../../shared/functional/global-import";
import { useDispatch } from 'react-redux';
import { apiCall } from "../../../src/store/actions/api.actions";

function SubscriptionPage(props) {
	const [subscription, setSubscription] = React.useState(false)
	const [subscriptionList, setSubscriptionList] = React.useState("")
	const dispatch = useDispatch();

	const openModal = () => {
		setSubscription(!subscription)
	}

	useEffect(() => {
		getSubscriptionList();
	}, []);

	const getSubscriptionList = () => {
		dispatch(apiCall({
			urls: ["GETSUBSCRIPTIONPLANLIST"], method: "GET", data: subscriptionList, onSuccess: (response) => {
				if (response.length > 0) {
					setSubscriptionList(response)
				}
			}
		}));
	}

	return (
		<div className="common-shadow">

			{/* {props.api.isApiLoading && (
				<Dimmer active inverted>
					<Loader />
				</Dimmer>

			)} */}
			<Grid>
				<Grid.Column width={8} verticalAlign="middle">
					<Header as="h3" className="commonHeading">Subscription</Header>
				</Grid.Column>
				<Grid.Column width={8} textAlign="right">
					<Button className="primaryBtn" onClick={openModal}><Icon name="plus" /> Add Subscription</Button>
				</Grid.Column>
				<Grid.Column width={16}>
					<Table>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Subscription Plan</Table.HeaderCell>
								<Table.HeaderCell>Duration</Table.HeaderCell>
								<Table.HeaderCell>No. of Students</Table.HeaderCell>
								<Table.HeaderCell textAlign="right">Price</Table.HeaderCell>
								<Table.HeaderCell>Status</Table.HeaderCell>
								<Table.HeaderCell textAlign="right">Action</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{subscriptionList && subscriptionList.map((sub) => {
								return (
									<Table.Row>
										<Table.Cell>{sub.subscriptionPlanName}</Table.Cell>
										<Table.Cell>{sub.duration}</Table.Cell>
										<Table.Cell>{sub.noOfStudents}</Table.Cell>
										<Table.Cell textAlign="right">{sub.price}</Table.Cell>
										<Table.Cell><Label color="green">{sub.isActive}</Label></Table.Cell>
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
			<AddSubscription openModal={subscription} closeModal={openModal} />
		</div>
	);
}
// const mapStateToProps = state => {
// 	return {
// 		api: state.api,
// 		auth: state.auth,
// 		global: state.global,
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		actions: {
// 			apiCall: bindActionCreators(actions.apiCall, dispatch),
// 			storeGlobalCodes: bindActionCreators(actions.storeGlobalCodes, dispatch)
// 		}
// 	};
// };
// export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionPage);
export default SubscriptionPage;