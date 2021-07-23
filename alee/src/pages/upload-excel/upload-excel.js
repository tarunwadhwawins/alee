import React from "react";
import { Grid, Header, Form, Button } from "semantic-ui-react";

function UploadExcelPage() {	
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
							fluid
							/>
							<input
							type="file"
							hidden
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

export default UploadExcelPage;

