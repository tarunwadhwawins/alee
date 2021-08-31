import React, { useState } from "react";
import { Grid, Icon, Header, Label } from "semantic-ui-react";
import { DataTable } from "../../../src/shared/components/organisms";
import Moment from "react-moment";
import { useSelector } from 'react-redux';
import BuyPlan from "../../shared/components/organisms/modal/buy-subscription/index";

function SubscriptionPlanPage(props) {
  const [modalStatus, setModalStatus] = useState(false)
  const schoolId = useSelector(state => state.auth.userDetail.schoolId)

  const openModal = () => {
    setModalStatus(!modalStatus)
  }

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
          additionalParams={{ schoolId: schoolId }}
          messageInModal="subscription Plan"
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
              isSorting: true,
              Cell: (props) => {
                debugger 
                return <Label className={props.isActive ? "green" : "red"}>{props.isActive ? "Active" : "Inactive"}</Label>;
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
                    <Icon title="Add" name="plus" color="green" link onClick={openModal} />
                  </>
                );
              },
            },
          ]}
        ></DataTable>
      </Grid.Column>

      <BuyPlan openModal={modalStatus} closeModal={openModal} />
    </Grid>
  );
}

export default SubscriptionPlanPage;
