

import React, { Component } from "react";
import { Table, Grid, Icon, Header, Button } from "semantic-ui-react";
import { Link, env } from "../../shared/functional/global-import";
import AddSubtitle from "../../shared/components/organisms/modal/add-subtitle/index";


class SubtitlePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			SubtitleStatus:false
		};
	  }
	openModal=()=>{
		this.setState({SubtitleStatus:!this.state.SubtitleStatus})
	}


  render() {
  
    return (
		<div className="chapterPage">
		<Grid>
		<Grid.Column width={8} verticalAlign="middle">
			<Header className="commonHeading">Chapter One</Header>
		</Grid.Column>
		<Grid.Column width={8} textAlign="right">
			<Button className="primaryBtn" onClick={this.openModal}> <Icon name="plus"/> Topic </Button>
		</Grid.Column>
			<Grid.Column width={16}>
			<Table>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Topic</Table.HeaderCell>
						<Table.HeaderCell>Page No.</Table.HeaderCell>
						<Table.HeaderCell textAlign="right">Action</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					<Table.Row>
						<Table.Cell><Link to="subtitle"  className="primary-color">Topic One</Link></Table.Cell>
						<Table.Cell>1 - 4</Table.Cell>
						<Table.Cell  textAlign="right"> 
							<Icon name="pencil alternate" className="primary-color" link />
							<Icon name="trash alternate" color='red' link/>
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell><Link  to="subtitle"  className="primary-color">Topic Two</Link></Table.Cell>
						<Table.Cell>5 - 7</Table.Cell>
						<Table.Cell  textAlign="right"> 
							<Icon name="pencil alternate" className="primary-color" link />
							<Icon name="trash alternate" color='red' link/>
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell><Link  to="subtitle"  className="primary-color">Topic Three</Link></Table.Cell>
						<Table.Cell>8 - 13</Table.Cell>
						<Table.Cell  textAlign="right"> 
							<Icon name="pencil alternate" className="primary-color" link />
							<Icon name="trash alternate" color='red' link/>
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell><Link  to="subtitle"  className="primary-color">Topic Four</Link></Table.Cell>
						<Table.Cell>14 - 15</Table.Cell>
						<Table.Cell  textAlign="right"> 
							<Icon name="pencil alternate" className="primary-color" link />
							<Icon name="trash alternate" color='red' link/>
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
			</Grid.Column>
		</Grid>
		<AddSubtitle openModal={this.state.SubtitleStatus} closeModal={this.openModal} />
	</div>
    );
  }
}

export default SubtitlePage;

