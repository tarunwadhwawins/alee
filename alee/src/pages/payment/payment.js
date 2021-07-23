import React from "react";
import { Grid, Button, Header, Divider } from "semantic-ui-react";


function PaymentPage() {

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

export default PaymentPage;

