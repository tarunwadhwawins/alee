import React, { Component } from "react";
import { Grid, Icon, Form, Button, Header } from "semantic-ui-react";
import { Link, } from "../../../src/shared/functional/global-import";


class UploadPdfPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  file: null
		};
	  }
	
	  fileInputRef = React.createRef();	
	
	  fileChange = e => {
		this.setState({ file: e.target.files[0] }, () => {
		  console.log("File chosen --->", this.state.file);
		});
	  };
	
  render() {
    return (
		<div className="scanBook">
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Upload book</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<div className="scanBookInner">
						<Form>
							<Form.Field>
								<Button content="Upload Pdf" className="primaryBtn" onClick={() => this.fileInputRef.current.click()} />
								<input ref={this.fileInputRef} type="file" hidden onChange={this.fileChange}/>
							</Form.Field>
						</Form>
					</div>
				</Grid.Column>
				<Grid.Column width={16}>
					<div className="scanBookList">
						<Icon name='book' className="bookIcon"/>
						<span>Animal Farm</span>
						<Icon name='close' className="closeIcon" color='red' link/>
					</div>
					<div className="scanBookList">
						<Icon name='book' className="bookIcon"/>
						<span>America Dreams</span>
						<Icon name='close' className="closeIcon" color='red' link/>
					</div>
				</Grid.Column>
				<Grid.Column width={16} textAlign="right">
					<Button className="primaryBtn" as={Link} to="book-flip">Next</Button>
				</Grid.Column>
			</Grid>
		</div>
    );
  }
}

export default UploadPdfPage;

