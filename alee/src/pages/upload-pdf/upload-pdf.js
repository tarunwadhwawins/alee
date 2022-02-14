import React, { useState, useRef, useEffect } from "react";
import { Grid, Icon, Form, Button, Header, Image, Dropdown } from "semantic-ui-react";
import { commonFunctions } from "../../shared/functional/global-import";
import { apiCall } from "../../store/actions/api.actions";
import { useDispatch, useSelector } from 'react-redux';
import ImageUploading from 'react-images-uploading';
import SimpleReactValidator from 'simple-react-validator';
import { env, Link } from "../../shared/functional/global-import";
import { useParams } from "react-router-dom";

const initialState = {}
function UploadPdfPage(props) {

	const urlId = useParams();
	const [uploadExcel, setUploadExcel] = useState(initialState)
	const [fileName, setFileName] = useState("");
	const [bookId, setBookId] = useState(urlId.id);
	const [bookCoverImage, setBookCoverImage] = useState([]);
	const [bookTitle, setBookTitle] = useState("")
	const [author, setAuthor] = useState("");
	const [grades, setGrades] = useState([]);
	const [grade, setGradeList] = useState([]);

	const fileInputRef = React.createRef();
	const dispatch = useDispatch();
	const api = useSelector(state => state.api)
	const [,forceUpdate] = useState()
	const simpleValidator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } }))

	const onFileChange = (event) => {
		const files = event.target.files;
		if (event.target.files.length > 0) {
			setFileName(event.target.files[0].name)
		}
		setUploadExcel(files)
	}
	const getBookForEdit = () => {
		dispatch(
			apiCall({
				urls: ["GETBOOKBASICINFO"],
				method: "GET",
				data: { bookId: bookId },
				onSuccess: (response) => {
					      
					setBookTitle(response[0].bookName)
					setAuthor(response[0].author)
					setGrades(JSON.parse(response[0].gradeId))
					setBookCoverImage([{ data_url: commonFunctions.concatenateImageWithAPIUrl(response[0].image) }])
					// setGradeList(grade);
				},
			})
		);
	};

	const removeBook = () => {
		setFileName("");
		setUploadExcel("");
		setBookTitle("");
		setAuthor("");
		setGrades([]);
		setBookCoverImage([]);

	}

	const onHandleSubmit = (e) => {
		const isFormValid = commonFunctions.onHandleFormSubmit(e, simpleValidator, forceUpdate);
		if (isFormValid) {
			      
			var formData = new FormData();
			formData.append('pdfFile', uploadExcel[0])
			formData.append('bookCoverImage', bookCoverImage[0].file)
			formData.append('bookTitle', bookTitle)
			formData.append('author', author)
			// formData.append('grades', [grades])
			grades.forEach((gradedata, index) => {
				formData.append(`Grades[${index}]`, gradedata)
			})
			dispatch(apiCall({
				urls: ["UPLOADPDF"], method: "POST", data: formData, onSuccess: (response) => {
					removeBook();
					simpleValidator.current.hideMessages();
				}, showNotification: true
			}))
		}
	}
	const onHandleUpdate = (e) => {
		      
		const isFormValid = commonFunctions.onHandleFormSubmit(e, simpleValidator, forceUpdate);
		if (isFormValid) {
			      
			var formData = new FormData();
			formData.append('bookId', bookId)
			formData.append('image', bookCoverImage[0].file)
			formData.append('bookName', bookTitle)
			formData.append('author', author)
			// formData.append('grades', [grades])
			grades.forEach((gradedata, index) => {
				formData.append(`Grades[${index}]`, gradedata)
			})
			dispatch(apiCall({
				urls: ["UPDATEBOOKBASICINFO"], method: "PUT", data: formData, onSuccess: (response) => {
					removeBook();
					simpleValidator.current.hideMessages();
				}, showNotification: true
			}))
		}
	}
	useEffect(() => {
		console.log("log", grades.grades)
	}, [grades])
	const onImageChange = (imageList) => {
		setBookCoverImage(imageList)
	}
	useEffect(() => {

		getGradeList();
		if (urlId.id) {
			getBookForEdit();
		}
	}, [urlId]);
	//  get api //
	const getGradeList = () => {
		dispatch(
			apiCall({
				urls: ["GETGRADESLIST"],
				method: "GET",
				data: ({ ActiveGrades: true, OrderBy: "GradeName", OrderByDescending: false }),
				onSuccess: (response) => {
					const grade = response.map((singledata) => {
						return {
							text: singledata.gradeName,
							value: singledata.gradeId
						};
					});
					setGradeList(grade);
				},
			})
		);
	};
	const onHandleChange = (e, data) => {

		setGrades(data.value);
	}

	return (
		<div className="scanBook">
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">{urlId.id ? "Edit pdf" : "Upload Pdf"}</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<div className="scanBookInner">
						<Grid>
							<Grid.Column width={8}>
								<Form.Input fluid placeholder="Book Title" disabled={urlId.id ? true : false} value={bookTitle} onChange={(e, { value }) => setBookTitle(value)}
									error={simpleValidator.current.message('bookTitle', bookTitle, 'required')}
								/>
							</Grid.Column>
							<Grid.Column width={8}>
								<Form.Input fluid placeholder="Book Author" disabled={urlId.id ? true : false} value={author} onChange={(e, { value }) => setAuthor(value)}
									error={simpleValidator.current.message('author', author, 'required')}
								/>
							</Grid.Column>
							<Grid.Column width={8}>
								<div className="field">
									<Form.Dropdown placeholder='Grade' fluid multiple selection onChange={(e, data) => onHandleChange(e, data)}
										value={grades} data="grades" options={grade} error={simpleValidator.current.message("grades", grades, "required")} />
									{/* {simpleValidator.current.message("grades", grades, "required")} */}
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
											{bookCoverImage.length <= 0 &&
												<div className='uploadedImg'>
													<Image src={commonFunctions.concatenateImageWithAPIUrl(null)} />
												</div>}
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
								{simpleValidator.current.message("bookCoverImage", bookCoverImage, "required")}
							</Grid.Column>
							<Grid.Column width={4}>
								<Form>
									<Form.Field>
										{!urlId.id &&
											<Button content="Choose Pdf" disabled={api.isApiLoading} className="primaryBtn"
												onClick={() => fileInputRef.current.click()} />}
										<input ref={fileInputRef} accept="application/pdf" type="file" hidden onChange={onFileChange}
										/>
									</Form.Field>
								</Form>
							</Grid.Column>
							{fileName !== "" && <> <Grid.Column width={4}>
								<div className="scanBookList">
									<Icon name='book' className="bookIcon" />
									<span>{fileName}</span>
									{/*<Icon name='close' className="closeIcon" color='red' link />*/}
								</div>
								{/* {simpleValidator.current.message("uploadExcel", uploadExcel, "required")} */}
							</Grid.Column></>}
						</Grid>
					</div>
				</Grid.Column>

				<Grid.Column width={16} textAlign="right">
					<Button className="secondaryBtn" onClick={removeBook} >Cancel</Button>
					{urlId.id ? <Button className="primaryBtn" as={Link} to="my-books" onClick={onHandleUpdate} loading={api.isApiLoading} >Update</Button> :
						<Button className="primaryBtn" as={Link} to="my-books" onClick={onHandleSubmit} loading={api.isApiLoading} >Upload</Button>}
				</Grid.Column>
			</Grid>
		</div>
	);
}

export default UploadPdfPage;

