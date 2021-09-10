import React, { useState, useRef } from "react";
import { Grid, Icon, Form, Button, Header, Image } from "semantic-ui-react";
import { Link, commonFunctions } from "../../shared/functional/global-import";
import { apiCall } from "../../store/actions/api.actions";
import { useDispatch, useSelector } from 'react-redux';
import ImageUploading from 'react-images-uploading';
import { GlobalCodeMultiSelect } from "../../shared/components";
import SimpleReactValidator from 'simple-react-validator';

const initialState = {}
function UploadPdfPage() {
	const [uploadExcel, setUploadExcel] = useState(initialState)
	const [fileName, setFileName] = useState("")
	const [bookCoverImage, setBookCoverImage] = useState([])
	const [bookTitle, setBookTitle] = useState("")
	const [author, setAuthor] = useState("")
	const [grades, setGrades] = useState([])

	const fileInputRef = React.createRef();
	const dispatch = useDispatch();
	const api = useSelector(state => state.api)
	const [, forceUpdate] = useState()
	const simpleValidator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } }))

	const onFileChange = (event) => {
		const files = event.target.files;
		if (event.target.files.length > 0) {
			setFileName(event.target.files[0].name)
		}
		setUploadExcel(files)
	}

	const removeBook = () => {
		setFileName("");
		setUploadExcel(initialState);
		setBookTitle("");
		setAuthor("");
		setGrades([]);
		setBookCoverImage([]);
	}

	const onHandleSubmit = (e) => {
		const isFormValid = commonFunctions.onHandleFormSubmit(e, simpleValidator, forceUpdate);
		if (isFormValid) {
			let formdata = commonFunctions.getFormData({ pdfFile: uploadExcel, bookCoverImage: bookCoverImage, bookTitle: bookTitle, author: author, grades: grades });
			dispatch(apiCall({
				urls: ["UPLOADPDF"], method: "POST", data: formdata, onSuccess: (response) => {
					removeBook();
				}, showNotification: true
			}))
		}
	}

	const onImageChange = (imageList) => {
		setBookCoverImage(imageList)
	}

	return (
		<div className="scanBook">
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Upload book</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<div className="scanBookInner">
						<Grid>
							<Grid.Column width={8}>
								<Form.Input fluid placeholder="Book Title" value={bookTitle} onChange={(e, { value }) => setBookTitle(value)}
									error={simpleValidator.current.message('bookTitle', bookTitle, 'required')}
								/>
							</Grid.Column>
							<Grid.Column width={8}>
								<Form.Input fluid placeholder="Book Author" value={author} onChange={(e, { value }) => setAuthor(value)}
									error={simpleValidator.current.message('author', author, 'required')}
								/>
							</Grid.Column>
							<Grid.Column width={8}>
								<div className="field">
									<GlobalCodeMultiSelect fluid placeholder='Grade(s) taught' value={grades} categoryType="Grades" onChange={(e, { value }) => setGrades(value)}
										error={simpleValidator.current.message('grades', grades, 'required')}
									/>
									{simpleValidator.current.message("grades", grades, "required")}
								</div>
							</Grid.Column>

							<Grid.Column width={8}>
								<ImageUploading value={bookCoverImage} onChange={onImageChange} dataURLKey="data_url">
									{({
										imageList, onImageUpload, isDragging, dragProps, onImageRemove
									}) => (
										// write your building UI
										<div className={bookCoverImage.length > 0 && 'coverImg'}>
											<Button className="primaryBtn" onClick={onImageUpload} {...dragProps}>
												Cover Image
											</Button>
											{bookCoverImage.length <= 0 && <div className='uploadedImg'>
												<Image src={commonFunctions.concatenateImageWithAPIUrl(null)} /></div>}
											{bookCoverImage.map((image, index) => (
												<div key={index} >
													{image['data_url'] ?
														<Image src={image['data_url']} alt="image" /> :
														<Image src={image} alt="image" alt="image" />
													}
													<Icon name="close" onClick={() => onImageRemove(index)} />
												</div>
											))}
										</div>
									)}
								</ImageUploading>
							</Grid.Column>
							<Grid.Column width={4}>
								<Form>
									<Form.Field>
										<Button content="Choose Pdf" disabled={api.isApiLoading} className="primaryBtn" onClick={() => fileInputRef.current.click()} />
										<input ref={fileInputRef} accept="application/pdf" type="file" hidden onChange={onFileChange}
										// error={simpleValidator.current.message('fileName', fileName, 'required')}
										/>
									</Form.Field>
								</Form>
							</Grid.Column>
							{fileName !== "" && <> <Grid.Column width={4}>
								<div className="scanBookList">
									<Icon name='book' className="bookIcon" />
									<span>{fileName}</span>
									{/* <Icon name='close' className="closeIcon" color='red' link /> */}
								</div>
							</Grid.Column></>}
						</Grid>
					</div>
				</Grid.Column>

				<Grid.Column width={16} textAlign="right">
					<Button className="secondaryBtn" onClick={removeBook} >Cancel</Button>
					<Button className="primaryBtn" onClick={onHandleSubmit} loading={api.isApiLoading}>Upload</Button>
					{/* <Button className="primaryBtn" as={Link} to="book-flip" onClick={onHandleSubmit}>Next</Button> */}
				</Grid.Column>
			</Grid>
		</div>
	);
}

export default UploadPdfPage;

