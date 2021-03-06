import React from "react";
import { Grid, Icon, Table, Header, Form } from "semantic-ui-react";
import { DataTable } from "../../../src/shared/components/organisms";
import Moment from "react-moment";
function SubscriptionManagePage() {
  return (
    <Grid>
      <Grid.Column width={16}>
        <Header as="h3" className="commonHeading">
          Subscription Manage
        </Header>
      </Grid.Column>
      <Grid.Column width={16}>
      
          <DataTable
            allApi={{
              getApiName: "GETUSERSUBSCRIPTIONLIST",
              deleteApiName: "DELETEUSERSUBSCRIPTION",
              toggleApiName: "USERSUBSCRIPTIONTOGGLE",
            }}
            searchOption={{ show: true, placeHolder: "Search" }}
            additionalParams={{ schoolId:-1 }}
			messageInModal= "buyer"
            columns={[
              {
                headerName: "Buyer",
                fieldName: "buyer",
                isSorting: true,
              },

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
                isSorting: true,
                Cell: (props, confirmModalOpen) => {
                  return (
                    <Form.Checkbox
                      checked={props.isActive ? true : false}
                      toggle
                      className="commonToggle"
                      onChange={() =>
                        confirmModalOpen(props.userSubscriptionPlanId, "update",props.isActive)
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
                      <Icon title="Repeat" name="repeat" className="primary-color" link />
                      <Icon title="Add" name="plus" color="green" link />
                      <Icon
                      title="Delete"
                        name="trash alternate"
                        color="red"
                        link
                        onClick={() =>
                          confirmModalOpen(
                            props.userSubscriptionPlanId,
                            "delete"
                          )
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

export default SubscriptionManagePage;
