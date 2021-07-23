import React from "react";
import { Grid, Header } from "semantic-ui-react";

function PerformanceMatrix() {	

    return (
			<Grid className="performanceMatrix">
				<Grid.Row>
					<Grid.Column width="16">
						<Header as="h4">Performance Matrix</Header>
					</Grid.Column>
					<Grid.Column width="16">
						<div className="performanceMatrixInner">
							<Grid columns="5">
								<Grid.Column>
									<div className="performanceMatrixInnerBox">
										<Header as="h5">5</Header>
										<p>Lessons</p>
									</div>
								</Grid.Column>
								<Grid.Column>
									<div className="performanceMatrixInnerBox">
										<Header as="h5">4.2</Header>
										<p>Ratting</p>
									</div>
								</Grid.Column>
								<Grid.Column>
									<div className="performanceMatrixInnerBox">
										<Header as="h5">15</Header>
										<p>Students</p>
									</div>
								</Grid.Column>
								<Grid.Column>
									<div className="performanceMatrixInnerBox">
										<Header as="h5">3.5</Header>
										<p>Average Rating</p>
									</div>
								</Grid.Column>
								<Grid.Column>
									<div className="performanceMatrixInnerBox borderNone">
										<Header as="h5">65</Header>
										<p>Total Review</p>
									</div>
								</Grid.Column>
							</Grid>
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
  }
  
  export default PerformanceMatrix;