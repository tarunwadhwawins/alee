import React, { Component } from "react";
import { Grid, Item, Header } from "semantic-ui-react";
import { Link, } from "../../../src/shared/functional/global-import";
import {Book} from "../../shared/functional/global-image-import"



class MyBookPage extends Component {
	addSubTopic = () =>{
	
	  }
	
  render() {
    return (
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">My Books</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<div className="booksResult myBooks">
						<Item.Group>
							<Item as={Link} to="book-flip"> 
							<Item.Image size='tiny' src={Book} />
							<Item.Content onClick={this.addSubTopic}>
								<Item.Header><span>Animal Farm</span></Item.Header>
								<Item.Meta><span>J.K. Rownling</span><span>125 pages</span></Item.Meta>
								<Item.Description>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, esse recusandae nam ratione aperiam quo culpa vero illum iusto nemo consequatur impedit in quis sed velit odit cum ipsam ?
								</Item.Description>
								<Item.Extra>Other Tags: 6.4, Empathy, Twist</Item.Extra>
							</Item.Content>
							</Item>

							<Item as={Link} to="book-flip">
							<Item.Image size='tiny' src={Book} />
							<Item.Content onClick={this.addSubTopic}>
								<Item.Header><span>America Dreams</span></Item.Header>
								<Item.Meta><span>J.K. Rownling</span><span>125 pages</span></Item.Meta>
								<Item.Description>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, esse recusandae nam ratione aperiam quo culpa vero illum iusto nemo consequatur impedit in quis sed velit odit cum ipsam ?
								</Item.Description>
								<Item.Extra>Other Tags: 7.4, Empathy</Item.Extra>
							</Item.Content>
							</Item>
							<Item as={Link} to="book-summary">
							<Item.Image size='tiny' src={Book} />
							<Item.Content onClick={this.addSubTopic}>
								<Item.Header><span>Old Man & Sea</span></Item.Header>
								<Item.Meta><span>J.K. Rownling</span><span>125 pages</span></Item.Meta>
								<Item.Description>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, esse recusandae nam ratione aperiam quo culpa vero illum iusto nemo consequatur impedit in quis sed velit odit cum ipsam ?
								</Item.Description>
								<Item.Extra>Other Tags: 7.4, Empathy</Item.Extra>
							</Item.Content>
							</Item>
						</Item.Group>
					</div>
				</Grid.Column>
			
			</Grid>
    );
  }
}

export default MyBookPage;

