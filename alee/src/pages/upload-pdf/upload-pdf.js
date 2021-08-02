import React, { useState } from "react";
import { Grid, Icon, Form, Button, Header } from "semantic-ui-react";
import { Link, } from "../../shared/functional/global-import";

function UploadPdfPage() {
	const [file, setFile] = useState(null)
	
	  const fileInputRef = React.createRef();	
	
	  const fileChange = e => {
		setFile( e.target.files[0] )
	  }
	

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
								<Button content="Upload Pdf" className="primaryBtn" onClick={() => fileInputRef.current.click()} />
								<input ref={fileInputRef} type="file" hidden onChange={fileChange}/>
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

export default UploadPdfPage;

