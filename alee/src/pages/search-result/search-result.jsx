import React, { Component } from "react";
import { Grid, Form, Header, Accordion, Menu, Item, Icon } from "semantic-ui-react";
import {Link} from "../../shared/functional/global-import";
import {Book} from "../../shared/functional/global-image-import"

const GradeLevel = (
	<Form>
	  <Form.Group grouped>
		<Form.Checkbox label='5' name='GradeLevel' value='5' />
		<Form.Checkbox label='6' name='GradeLevel' value='6' />
		<Form.Checkbox label='7' name='GradeLevel' value='7' />
		<Form.Checkbox label='8' name='GradeLevel' value='8' />
	  </Form.Group>
	</Form>
  )
  
  const SortBy = (
	<Form>
	  <Form.Group grouped>
		<Form.Checkbox label='Pages'  name='SortBy' value='Pages' />
		<Form.Checkbox label='Title'  name='SortBy' value='Title' />
		<Form.Checkbox label='Title'  name='SortBy' value='Title' />
		<Form.Checkbox label='Rating'  name='SortBy' value='Rating' />
	  </Form.Group>
	</Form>
  )
  


class SearchResultPage extends Component {
	state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
  render() {
	const { activeIndex } = this.state
    return (
		<div className="searchHeader">
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Search Result</Header>
				</Grid.Column>
				<Grid.Column width={4}>
					<div className="searchResultFilter">
						<Header as="h4">Filter By</Header>
						<Accordion as={Menu} vertical className="filterBy">
							<Menu.Item>
								<Accordion.Title
									active={activeIndex === 0}
									content='Grade Level'
									index={0}
									onClick={this.handleClick}
								/>
								<Accordion.Content active={activeIndex === 0} content={GradeLevel} />
							</Menu.Item>

							<Menu.Item>
								<Accordion.Title
									active={activeIndex === 1}
									content='Sort By'
									index={1}
									onClick={this.handleClick}
								/>
								<Accordion.Content active={activeIndex === 1} content={SortBy} />
							</Menu.Item>
						</Accordion>
					</div>
				</Grid.Column>
				<Grid.Column width={12}>
					<div className="booksResult">
						<Item.Group>
							<Item as={Link} to="lesson-plan">
							<Item.Image size='tiny' src={Book} />
							<Item.Content>
								<Item.Header><span>Animal Farm</span> <Icon name="heart outline" link/></Item.Header>
								<Item.Meta><span>J.K. Rownling</span><span>125 pages</span></Item.Meta>
								<Item.Description>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, esse recusandae nam ratione aperiam quo culpa vero illum iusto nemo consequatur impedit in quis sed velit odit cum ipsam ?
								</Item.Description>
								<Item.Extra>Other Tags: 6.4, Empathy, Twist</Item.Extra>
							</Item.Content>
							</Item>

							<Item as={Link} to="lesson-plan">
							<Item.Image size='tiny' src={Book} />
							<Item.Content>
								<Item.Header><span>America Dreams</span> <Icon name="heart outline" link/></Item.Header>
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
		</div>
    );
  }
}

export default SearchResultPage;

