import React, { useState } from "react";
import { Grid, Item, Header, Icon } from "semantic-ui-react";
import { Link, } from "../../shared/functional/global-import";
import {Book} from "../../shared/functional/global-image-import"


function MyBookPage() {

	
	const addChapter = () => {
		if (localStorage.getItem("Usertype") === "teacher") {
		  localStorage.setItem("BookType", "With Topic Chapter");
		  setTimeout(() => {
			window.location.reload();
		  }, 1000);
		}
	  };

    return (
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">My Books</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<div className="booksResult myBooks">
						<Item.Group>
							<Item as={Link} onClick={addChapter} to={`${localStorage.getItem("Usertype") === "admin"? "book-flip":"book-summary"}`}> 
							<Item.Image size='tiny' src={Book} />
							<Item.Content >
								<Item.Header><span>Animal Farm</span></Item.Header>
								<Item.Meta><span>J.K. Rownling</span><span>125 pages</span></Item.Meta>
								<Item.Description>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, esse recusandae nam ratione aperiam quo culpa vero illum iusto nemo consequatur impedit in quis sed velit odit cum ipsam ?
								</Item.Description>
								<Item.Extra>Other Tags: 6.4, Empathy, Twist { localStorage.getItem("Usertype") === "admin" &&	 <div className="icons"><Icon name="edit" className="primary-color" /> <Icon name="trash alternate" color="red" /></div> }</Item.Extra>
							</Item.Content>
							</Item>

							<Item as={Link} onClick={addChapter} to={`${localStorage.getItem("Usertype") === "admin"? "book-flip":"book-summary"}`}>
							<Item.Image size='tiny' src={Book} />
							<Item.Content onClick={addChapter}>
								<Item.Header><span>America Dreams</span></Item.Header>
								<Item.Meta><span>J.K. Rownling</span><span>125 pages</span></Item.Meta>
								<Item.Description>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, esse recusandae nam ratione aperiam quo culpa vero illum iusto nemo consequatur impedit in quis sed velit odit cum ipsam ?
								</Item.Description>
								<Item.Extra>Other Tags: 7.4, Empathy { localStorage.getItem("Usertype") === "admin" &&	 <div className="icons"><Icon name="edit" className="primary-color" /> <Icon name="trash alternate" color="red" /></div> }</Item.Extra>
							</Item.Content>
							</Item>
							<Item as={Link} onClick={addChapter} to={`${localStorage.getItem("Usertype") === "admin"? "book-flip":"book-summary"}`}>
							<Item.Image size='tiny' src={Book} />
							<Item.Content onClick={addChapter}>
								<Item.Header><span>Old Man & Sea</span></Item.Header>
								<Item.Meta><span>J.K. Rownling</span><span>125 pages</span></Item.Meta>
								<Item.Description>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, esse recusandae nam ratione aperiam quo culpa vero illum iusto nemo consequatur impedit in quis sed velit odit cum ipsam ?
								</Item.Description>
								<Item.Extra>Other Tags: 7.4, Empathy { localStorage.getItem("Usertype") === "admin" &&	 <div className="icons"><Icon name="edit" className="primary-color" link/> <Icon name="trash alternate" color="red" link/></div> }</Item.Extra>
							</Item.Content>
							</Item>
						</Item.Group>
					</div>
				</Grid.Column>
			
			</Grid>
    );
}

export default MyBookPage;

