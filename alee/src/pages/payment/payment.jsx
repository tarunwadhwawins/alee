import React, { Component } from "react";
import { Grid, Button, Header, Divider } from "semantic-ui-react";
import { Link, } from "../../../src/shared/functional/global-import";



class PaymentPage extends Component {	
  render() {
    return (
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Payment</Header>
				</Grid.Column>
				<Grid.Column width={16} textAlign="center">
					<Divider hidden/>
					<Button className="primaryBtn">Stripe</Button>
					<Divider hidden/>
				</Grid.Column>
			
			</Grid>
    );
  }
}

export default PaymentPage;

