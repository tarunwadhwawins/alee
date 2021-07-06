import React, { Component } from "react";
import { Grid, Form, Dropdown, Checkbox, Header, Image, Button } from "semantic-ui-react";
import { Link, } from "../../../src/shared/functional/global-import";
import {Book} from "../../shared/functional/global-image-import";


class SearchHeader extends Component {
	state = {}
	handleStandardChange = (e, { value }) => this.setState({ value })
	handleStrategiesChange = (e, { value }) => this.setState({ value })
	handleValuesChange = (e, { value }) => this.setState({ value })
	handleElementsChange = (e, { value }) => this.setState({ value })
	
  render() {
    return (
		<div className="searchHeader">
			<Grid>
				<Grid.Column width={16}>
					<Form>
						<Form.Input icon="search" iconPosition="left" placeholder="Search by keyword : Book Title" fluid/>
					</Form>
				</Grid.Column>
				<Grid.Column width={16} className="filterDropdwon">
					<Dropdown text='Standards' pointing item simple className='link item'>
						<Dropdown.Menu>
							<Dropdown.Item>
								<Checkbox radio name='StandardsRadioGroup' value='tl7.1' checked={this.state.value === 'tl7.1'}  onChange={this.handleStandardChange} label='RL 7.1' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='StandardsRadioGroup' value='tl7.2' checked={this.state.value === 'tl7.2'}  onChange={this.handleStandardChange}  label='RL 7.2' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='StandardsRadioGroup' value='tl7.3' checked={this.state.value === 'tl7.3'}  onChange={this.handleStandardChange}   label='RL 7.3' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox   radio name='StandardsRadioGroup' value='tl7.4' checked={this.state.value === 'tl7.4'}  onChange={this.handleStandardChange}  label='RL 7.4' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='StandardsRadioGroup' value='tl7.5' checked={this.state.value === 'tl7.5'}  onChange={this.handleStandardChange}   label='RL 7.5' />
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown text='Comprehension Strategies' pointing item simple className='link item'>
						<Dropdown.Menu>
							<Dropdown.Item>
								<Checkbox  radio name='StrategiesRadioGroup' value='Predicting' checked={this.state.value === 'Predicting'}  onChange={this.handleStrategiesChange} label='Predicting' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='StrategiesRadioGroup' value='Questioning' checked={this.state.value === 'Questioning'}  onChange={this.handleStrategiesChange}  label='Questioning' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='StrategiesRadioGroup' value='Making Inferences' checked={this.state.value === 'Making Inferences'}  onChange={this.handleStrategiesChange}  label='Making Inferences' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='StrategiesRadioGroup' value='Visualizing' checked={this.state.value === 'Visualizing'}  onChange={this.handleStrategiesChange}  label='Visualizing' />
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown text='Values' pointing item simple className='link item'>
						<Dropdown.Menu>
							<Dropdown.Item>
								<Checkbox   radio name='ValuesRadioGroup' value='Empathy' checked={this.state.value === 'Empathy'}  onChange={this.handleValuesChange}  label='Empathy' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox   radio name='ValuesRadioGroup' value='Inclusion' checked={this.state.value === 'Inclusion'}  onChange={this.handleValuesChange}  label='Inclusion' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox   radio name='ValuesRadioGroup' value='Problem Solving' checked={this.state.value === 'Problem Solving'}  onChange={this.handleValuesChange}  label='Problem Solving' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox   radio name='ValuesRadioGroup' value='Mindfulness' checked={this.state.value === 'Mindfulness'}  onChange={this.handleValuesChange}  label='Mindfulness' />
							</Dropdown.Item>
							
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown text='Literary Elements' pointing item simple className='link item'>
						<Dropdown.Menu>
							<Dropdown.Item>
								<Checkbox    radio name='ElementsRadioGroup' value='Dialogue' checked={this.state.value === 'Dialogue'}  onChange={this.handleElementsChange} label='Dialogue' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='ElementsRadioGroup' value='Flashback' checked={this.state.value === 'Flashback'}  onChange={this.handleElementsChange} label='Flashback' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='ElementsRadioGroup' value='Allegory' checked={this.state.value === 'Allegory'}  onChange={this.handleElementsChange} label='Allegory' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='ElementsRadioGroup' value='Metaphor' checked={this.state.value === 'Metaphor'}  onChange={this.handleElementsChange} label='Metaphor' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='ElementsRadioGroup' value='Imagery' checked={this.state.value === 'Imagery'}  onChange={this.handleElementsChange} label='Imagery' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='ElementsRadioGroup' value='Symbolism' checked={this.state.value === 'Symbolism'}  onChange={this.handleElementsChange} label='Symbolism' />
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Grid.Column>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Books/Literature available</Header>
				</Grid.Column>
				<Grid.Column width={3}>
					<div className="bookDetail">
						<Image src={Book}/>
						<Header>Animal Farm</Header>
						<p>J.K. Rownling</p>
					</div>
				</Grid.Column>
				<Grid.Column width={3}>
					<div className="bookDetail">
						<Image src={Book}/>
						<Header>America Dreams</Header>
						<p>J.K. Rownling</p>
					</div>
				</Grid.Column>
				<Grid.Column width={3}>
					<div className="bookDetail">
						<Image src={Book}/>
						<Header>Old Man & Sea</Header>
						<p>J.K. Rownling</p>
					</div>
				</Grid.Column>
				<Grid.Column width={3}>
					<div className="bookDetail">
						<Image src={Book}/>
						<Header>Animal Farm</Header>
						<p>J.K. Rownling</p>
					</div>
				</Grid.Column>
				<Grid.Column width={16}>
					<Button as={Link} to="search-result" className="primaryBtn">Show Search Result</Button>
				</Grid.Column>
			</Grid>
		</div>
    );
  }
}

export default SearchHeader;

