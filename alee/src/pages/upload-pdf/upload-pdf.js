import React, { useState } from "react";
import { Grid, Icon, Form, Button, Header } from "semantic-ui-react";
import { Link, } from "../../shared/functional/global-import";

const initialState = {}
function UploadPdfPage() {
	const [uploadExcel, setUploadExcel] = useState(initialState)
	const [fileName, SetFileName] = useState("")

	const fileInputRef = React.createRef();

	const onFileChange = (event) => {
		debugger
		const files = event.target.files;
		if (event.target.files.length > 0) {
			SetFileName(event.target.files[0].name)
		}
		setUploadExcel(files)
	}

	const removeBook = () => {
		SetFileName("");
		setUploadExcel(initialState);
	}

	const onHandleSubmit = () => {

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
								<input ref={fileInputRef} type="file" hidden onChange={onFileChange} />
							</Form.Field>
						</Form>
					</div>
				</Grid.Column>
				{fileName !== "" && <> <Grid.Column width={16}>
					<div className="scanBookList">
						<Icon name='book' className="bookIcon" />
						<span>{fileName}</span>
						<Icon name='close' className="closeIcon" color='red' link onClick={removeBook} />
					</div>
				</Grid.Column>
					<Grid.Column width={16} textAlign="right">
						<Button className="primaryBtn" as={Link} to="book-flip" onClick={onHandleSubmit}>Next</Button>
					</Grid.Column> </>}
			</Grid>
		</div>
	);
}

export default UploadPdfPage;

