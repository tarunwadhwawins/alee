import React from "react";
import { Grid, Header, Button, Icon, Form } from "semantic-ui-react";
import AddSubscription from "../../shared/components/organisms/modal/subscription/index";
import { DataTable } from "../../../src/shared/components/organisms";


function SubscriptionPage() {
	const [subscription, setSubscription] = React.useState(false)
	const openModal = () => {
		setSubscription(!subscription)
	}
	return (
		<div className="common-shadow">
			<Grid>
				<Grid.Column width={8} verticalAlign="middle">
					<Header as="h3" className="commonHeading">Subscription</Header>
				</Grid.Column>
				<Grid.Column width={8} textAlign="right">
					<Button className="primaryBtn" onClick={openModal}><Icon name="plus" /> Add Subscription</Button>
				</Grid.Column>
				<Grid.Column width={16}>
					<DataTable
						allApi={{ getApiName: "GETSUBSCRIPTIONPLANLIST", deleteApiName: "DELETESUBSCRIPTION", toggleApiName: "SUBSCRIPTIONTOGGLE" }} isSorting={false}
						searchOption={{ show: false, placeHolder: "Search" }}
						columns={[
							{
								headerName: "Name",
								fieldName: "subscriptionPlanName",
								isSorting: true,
							},
							{
								headerName: "Duration",
								fieldName: "duration",
								isSorting: true,
							},
							{
								headerName: "No. of Students",
								fieldName: "noOfStudents",
								isSorting: true
							},

							{
								headerName: "Price",
								fieldName: "price",
								isSorting: false,
							},
							{
								headerName: "Status",
								fieldName: "isActive",
								isSorting: false,
								Cell: (props, confirmModalOpen) => {
									return (
										<Form.Checkbox checked={props.isActive ? true : false} toggle className="commonToggle" onChange={() => confirmModalOpen(props.subscriptionPlanId, "toggle")} />
									);
								},
							},

							{
								headerName: "Action",
								fieldName: "Action",
								isSorting: false,
								Cell: (props, confirmModalOpen) => {
									return (
										<>
											<Icon name="edit" className="primary-color" link />
											<Icon name="trash alternate" color="red" link onClick={() => confirmModalOpen(props.subscriptionPlanId, "delete")} />
										</>
									);
								},
							},
						]}

					></DataTable>
				</Grid.Column>
			</Grid>
			<AddSubscription openModal={subscription} closeModal={openModal} />
		</div>
	);
}
export default SubscriptionPage;