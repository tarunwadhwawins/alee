import React from "react";
import { Grid, Icon, Table, Label, Header, Form } from "semantic-ui-react";
import { DataTable } from "../../../src/shared/components/organisms";
import Moment from "react-moment";

function SubscriptionPlanPage() {
  return (
    <Grid>
      <Grid.Column width={16}>
        <Header as="h3" className="commonHeading">
          Subscription Plan
        </Header>
      </Grid.Column>
      <Grid.Column width={16}>
        <DataTable
          allApi={{
            getApiName: "GETUSERSUBSCRIPTIONLIST",
            deleteApiName: "DELETEUSERSUBSCRIPTION",
            toggleApiName: "USERSUBSCRIPTIONTOGGLE",
          }}
          searchOption={{ show: false, placeHolder: "Search" }}
          additionalParams={{ schoolId: -1 }}
          columns={[
            {
              headerName: "Plan",
              fieldName: "plan",
              isSorting: true,
            },
            {
              headerName: "Duration",
              fieldName: "duration",
              isSorting: true,
            },
            {
              headerName: "Start Date",
              isSorting: true,
              fieldName: "startDate",
              Cell: (props) => {
                return <Moment format="MM/DD/YYYY">{props.createdAt}</Moment>;
              },
            },

            {
              headerName: "End Date",
              fieldName: "endDate",
              isSorting: true,
			  Cell: (props) => {
                return <Moment format="MM/DD/YYYY">{props.endDate}</Moment>;
              },
            },
            {
              headerName: "Status",
              fieldName: "isActive",
              isSorting: false,
              Cell: (props, confirmModalOpen) => {
                return (
                  <Form.Checkbox
                    checked={props.isActive ? true : false}
                    toggle
                    className="commonToggle"
                    onChange={() =>
                      confirmModalOpen(props.userSubscriptionPlanId, "update")
                    }
                  />
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
                    <Icon name="repeat" className="primary-color" link />
                    <Icon name="plus" color="green" link />
                    <Icon
                      name="trash alternate"
                      color="red"
                      link
                      onClick={() =>
                        confirmModalOpen(props.userSubscriptionPlanId, "delete")
                      }
                    />
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
