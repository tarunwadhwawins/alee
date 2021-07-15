import React, { Component } from "react";
import { Table, Grid, Icon, Header, Button } from "semantic-ui-react";
import { Link } from "../../shared/functional/global-import";
import AddChapter from "../../shared/components/organisms/modal/add-chapter/index";
import AddSubtitle from "../../shared/components/organisms/modal/add-subtitle/index";
import AddChapterSummary from "../../shared/components/organisms/modal/add-chapter-summary/index";



class ChapterPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ChapterStatus:false,
			SubtitleStatus:false,
			ChapterSummaryStatus:false,
		};
	  }
	openModal=()=>{
		this.setState({ChapterStatus:!this.state.ChapterStatus})
	}
	openModal2=()=>{
		this.setState({SubtitleStatus:!this.state.SubtitleStatus})
	}
	openModal3=()=>{
		this.setState({ChapterSummaryStatus:!this.state.ChapterSummaryStatus})
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
							<Table.HeaderCell  width={3}>Chapter</Table.HeaderCell>
							<Table.HeaderCell  width={3}>Page No.</Table.HeaderCell>
							<Table.HeaderCell  width={3}>Topics</Table.HeaderCell>
							<Table.HeaderCell  width={5}>Summary</Table.HeaderCell>
							<Table.HeaderCell  width={2} textAlign="right">Action</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						<Table.Row>
							<Table.Cell><Link to="subtitle"  className="primary-color">Chapter One</Link></Table.Cell>
							<Table.Cell>1 - 15</Table.Cell>
							<Table.Cell><Button className="primaryBtn" onClick={this.openModal2}> <Icon name="plus"/> Topic</Button></Table.Cell>
							<Table.Cell><Button className="primaryBtn" onClick={this.openModal3}> <Icon name="plus"/> Chapter Summary</Button></Table.Cell>
							<Table.Cell  textAlign="right"> 
								<Icon name="pencil alternate" className="primary-color" link />
								<Icon name="trash alternate" color='red' link/>
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell><Link  to="subtitle"  className="primary-color">Chapter Two</Link></Table.Cell>
							<Table.Cell>16 - 30</Table.Cell>
							<Table.Cell><Button className="primaryBtn"  onClick={this.openModal2}> <Icon name="plus"/> Topic</Button></Table.Cell>
							<Table.Cell><Button className="primaryBtn" onClick={this.openModal3}> <Icon name="plus"/> Chapter Summary</Button></Table.Cell>

							<Table.Cell  textAlign="right"> 
								<Icon name="pencil alternate" className="primary-color" link />
								<Icon name="trash alternate" color='red' link/>
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
				</Grid.Column>
			</Grid>
			<AddChapter openModal={this.state.ChapterStatus} closeModal={this.openModal} />
			<AddSubtitle openModal={this.state.SubtitleStatus} closeModal={this.openModal2} />
			<AddChapterSummary openModal={this.state.ChapterSummaryStatus} closeModal={this.openModal3} />

		</div>
    );
  }
}

export default ChapterPage;
