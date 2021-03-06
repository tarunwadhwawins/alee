import React from "react";
import { Grid, Header } from "semantic-ui-react";


function TotalBoxes() {
    return (
			<Grid columns="5" className="totalBoxes">
				<Grid.Column width="16">
					<Header as="h3" className="commonHeading">Dashboard</Header>
				</Grid.Column>
				<Grid.Column>
					<div className="totalBoxesInnerr">
						<p>Total Students</p>
						<Header as="h5">150</Header>
					</div>
				</Grid.Column>
				<Grid.Column>
					<div className="totalBoxesInnerr">
						<p>Total Teachers</p>
						<Header as="h5">50</Header>
					</div>
				</Grid.Column>
			</Grid>
		);
  }
  
  export default TotalBoxes;