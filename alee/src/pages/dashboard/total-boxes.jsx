import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import LessonPlanCustomModal from "../../shared/components/organisms/modal/lesson-plan-creation/index";
import { Link } from "../../shared/functional/global-import";


class TotalBoxes extends Component {
  render() {
	
    return (
			<Grid columns="equal" className="totalBoxes">
				<Grid.Column width="16">
					<Header as="h3" className="commonHeading">Dashboard</Header>
				</Grid.Column>
				<Grid.Column>
					<div className="totalBoxesInnerr">
						<p>Total Students</p>
						<Header as="h5">50</Header>
					</div>
				</Grid.Column>
				<Grid.Column>
					<div className="totalBoxesInnerr">
						<p>Grade</p>
						<Header as="h5">8th</Header>
					</div>
				</Grid.Column>
				<Grid.Column>
					<div className="totalBoxesInnerr">
						<p>Total Lessons</p>
						<Header as="h5">120</Header>
					</div>
				</Grid.Column>
				<Grid.Column>
					<div className="totalBoxesInnerr">
						<p>Total Books</p>
						<Header as="h5">150</Header>
					</div>
				</Grid.Column>
				<Grid.Column>
					<div className="totalBoxesInnerr">
						<p>Recent Lesson</p>
						<Header as="h5"><Link>Animal Farm, week one</Link></Header>
					</div>
				</Grid.Column>
				<Grid.Column>
					<div className="totalBoxesInnerr">
						<p>Upcoming Lesson</p>
						<Header as="h5"><Link>Animal Farm, week one</Link></Header>
					</div>
				</Grid.Column>
			</Grid>
		);
	}
  }
  
  export default TotalBoxes;