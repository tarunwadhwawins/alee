import React, { Component } from "react";
import { Grid, Header, Button } from "semantic-ui-react";
import { Link } from "../../shared/functional/global-import";


class BookSummaryPage extends Component {

  render() {
  
    return (
        <div className="bookSummary">
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Book Summary</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<div className="bookSummaryInner">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iusto, quibusdam fugit reprehenderit quis veritatis sapiente voluptatem at sequi, enim blanditiis cumque! Vel blanditiis aut labore quisquam commodi cumque ipsum.
						</p><br/>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. In, harum. Culpa magni quibusdam laborum. Sunt soluta quaerat, labore nisi qui doloribus, unde, dignissimos illum voluptas eaque atque ratione? Sint, eos!
						</p><br/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod voluptas velit magnam totam enim illum, nam quaerat nihil beatae, optio amet id laborum dolores nesciunt necessitatibus. Libero dolores eaque laboriosam?
						</p><br/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tempore perspiciatis dolorum tempora, neque vitae ullam porro harum sit sequi dolores odio repellat accusamus enim temporibus ea dicta sed nobis.
						</p><br/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tempore perspiciatis dolorum tempora, neque vitae ullam porro harum sit sequi dolores odio repellat accusamus enim temporibus ea dicta sed nobis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tempore perspiciatis dolorum tempora, neque vitae ullam porro harum sit sequi dolores odio repellat accusamus enim temporibus ea dicta sed nobis.
						</p><br/>
					</div>
				</Grid.Column>
				<Grid.Column width={16} textAlign="right">
					<Button className="primaryBtn" as={Link} to="lesson-plan-creation">Next</Button>
				</Grid.Column>
			</Grid>
		</div>
    );
  }
}

export default BookSummaryPage;

