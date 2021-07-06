import React, { Component } from "react";
import { Table, Grid, Icon, Header, Button } from "semantic-ui-react";
import { Link, env } from "../../shared/functional/global-import";
import AddChapter from "../../shared/components/organisms/modal/add-chapter/index";
import AddSubtitle from "../../shared/components/organisms/modal/add-subtitle/index";



class ChapterEmptyPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ChapterStatus:false,
			SubtitleStatus:false
		};
	  }
	openModal=()=>{
		this.setState({ChapterStatus:!this.state.ChapterStatus})
	}
	openModal2=()=>{
		this.setState({SubtitleStatus:!this.state.SubtitleStatus})
	}


  render() {
  
    return (
        <div className="chapterPage">
			<Grid>
			<Grid.Column width={8} verticalAlign="middle">
				<Header className="commonHeading">Animal Farm</Header>
			</Grid.Column>
			<Grid.Column width={8} textAlign="right">
				<Button className="primaryBtn" onClick={this.openModal}> <Icon name="plus"/> Chapter </Button>
			</Grid.Column>
				<Grid.Column width={16}>
				<Table>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell  width={5}>Chapter</Table.HeaderCell>
							<Table.HeaderCell  width={5}>Page No.</Table.HeaderCell>
							<Table.HeaderCell  width={3}>Topics</Table.HeaderCell>
							<Table.HeaderCell  width={3} textAlign="right">Action</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						<Table.Row>
							<Table.Cell colSpan="4" textAlign="center">No Topics available</Table.Cell>
							
						</Table.Row>
					
					</Table.Body>
				</Table>
				</Grid.Column>
			</Grid>
			<AddChapter openModal={this.state.ChapterStatus} closeModal={this.openModal} />
			<AddSubtitle openModal={this.state.SubtitleStatus} closeModal={this.openModal2} />

		</div>
    );
  }
}

export default ChapterEmptyPage;

