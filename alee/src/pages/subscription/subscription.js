import React, { useState } from "react";
import { Grid, Header, Button, Icon, Form } from "semantic-ui-react";
import AddSubscription from "../../shared/components/organisms/modal/subscription/index";
import { DataTable } from "../../../src/shared/components/organisms";

function SubscriptionPage() {
	const [subscription, setSubscription] = useState(false)
	const [reload, SetReload] = useState(false)
	const [editData, SetEditData] = useState([]);
	const openModal = () => {
		setSubscription(!subscription)
	}
	const GridReload = () => {
		SetReload(!reload)
	}
	const onHandleEdit = (data) => {
		SetEditData(editData.concat(data))
		openModal();
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
						allApi={{ getApiName: "GETSUBSCRIPTIONPLANLIST", deleteApiName: "DELETESUBSCRIPTION", toggleApiName: "SUBSCRIPTIONTOGGLE" }} reload={reload}
						searchOption={{ show: true, placeHolder: "Search" }}
						messageInModal="subscription"
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
								isSorting: true,
							},
							{
								headerName: "Status",
								fieldName: "isActive",
								isSorting: true,
								Cell: (props, confirmModalOpen) => {
									return (
										<Form.Checkbox checked={props.isActive ? true : false} toggle className="commonToggle" onChange={() => confirmModalOpen(props.subscriptionPlanId, "update", props.isActive)} />
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
											<Icon title="Edit" name="edit" className="primary-color" link onClick={() => onHandleEdit(props)} />
											<Icon title="Delete" name="trash alternate" color="red" link onClick={() => confirmModalOpen(props.subscriptionPlanId,"delete")}/>
										</>
									);
								},
							},
						]}
					></DataTable>
				</Grid.Column>
			</Grid>
			<AddSubscription openModal={subscription} closeModal={openModal} GridReload={GridReload} editData={editData} />
		</div>
	);
}
export default SubscriptionPage;
