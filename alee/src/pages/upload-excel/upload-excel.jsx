import React, { Component } from "react";
import { Grid, Icon,Table,Label, Header, Form, Button } from "semantic-ui-react";
import { Link, } from "../../../src/shared/functional/global-import";



class UploadExcelPage extends Component {	
	constructor(props) {
		super(props);
		this.state = {
		  file: null
		};
	  }
	
	  fileInputRef = React.createRef();
	
  render() {
    return (
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Upload Excel</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<Form >
						<Form.Field>
							<Button
							content="Upload excel file including teacher's name and email address"
							labelPosition="left"
							icon="file"
							onClick={() => this.fileInputRef.current.click()}
							fluid
							/>
							<input
							ref={this.fileInputRef}
							type="file"
							hidden
							onChange={this.fileChange}
							/>
						</Form.Field>
					</Form>
				</Grid.Column>
				<Grid.Column width={16} textAlign="right">
					<Button className="primaryBtn">Upload</Button>
				</Grid.Column>
			</Grid>
    );
  }
}

export default UploadExcelPage;

