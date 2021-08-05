import React from "react";
import { Grid, Icon,Table,Label, Header,Form } from "semantic-ui-react";
import { DataTable } from "../../../src/shared/components/organisms";

function SubscriptionPlanPage() {	
    return (
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Subscription Plan</Header>
				</Grid.Column>
				<Grid.Column width={16}>
						<DataTable
	           allApi={{ getApiName:"GETSUBSCRIPTIONPLANLIST", deleteApiName: "DELETESUBSCRIPTION",toggleApiName:"SUBSCRIPTIONTOGGLE"}}isSorting=     {false}
						searchOption={{ show: false, placeHolder: "Search" }}
						columns={[
							{
								headerName: "Plan",
								fieldName: "subscriptionPlanName",
								isSorting: true,
							},
							{
								headerName:"Duration",
                                fieldName:"duration",
								isSorting: true,
							},
							{
								headerName: "Start Date",
								fieldName: "noOfStudents",
								isSorting: true
							},

							{
								headerName: "End Date",
								fieldName: "price",
							isSorting: false,
							},
							{
								headerName: "Status",
								fieldName: "isActive",
								isSorting: false,
								Cell: (props, confirmModalOpen) => {
									return (
										<Form.Checkbox checked={props.isActive ? true : false} toggle className="commonToggle" onChange={() => confirmModalOpen(props.subscriptionPlanId,"toggle")} />
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
											<Icon name="repeat" className="primary-color" link/>
								        	<Icon name="plus" color='green' link/>
											<Icon name="trash alternate" color="red" link onClick={() => confirmModalOpen(props.subscriptionPlanId,"delete")} />
										</>
									);
								},
							},
						]}
					></DataTable>
				</Grid.Column>
			</Grid>
    );
}

export default SubscriptionPlanPage;

