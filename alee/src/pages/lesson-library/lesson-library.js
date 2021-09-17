import React, { useState, useEffect } from "react";
import { Grid, Form, Dropdown, Header, Image, Button, Input, Dimmer, Loader, Item } from "semantic-ui-react";
import { Link, commonFunctions } from "../../shared/functional/global-import";
// import { Book } from "../../shared/functional/global-image-import";
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../store/actions/api.actions";
import { storeMyBookData } from "../../store/actions/global.actions";
function LessonLibrary() {
	const [valuesTag, setValuesTag] = useState([])
	const [tagFields, setTagFields] = useState([]);
	const [textSearch, setTextSearch] = useState({textToSearch:""})
	const api = useSelector(state => state.api)
	const tags = useSelector(state => state.global.tags)
	const dispatch = useDispatch();
	const [bookList, setBookList] = useState([])
	const [values, setValues] = useState({ pageNo: 1, pageSize: 100, searchValue: "" })

	const onHandleChangeSearch = (e, {data,value }) => {
		   
		setValues({ ...values, searchValue: value })
		setTextSearch({...textSearch ,[data]:value})
	}
	useEffect(() => {
		getTagField();
	}, []);

	useEffect(() => {
		getBookList();
	}, [values]);
	//  get api //
	const getBookList = () => {
		dispatch(apiCall({
			urls: ["GETBOOKSLIST"], method: "GET", data: values, onSuccess: (response) => {
				setBookList(response)
			}
		}));
	}
	const getTagField = () => {
		dispatch(apiCall({
			urls: ["GETTAGCUSTOMFIELDS"], method: "GET", data: { PageNo: 1, PageSize: 100 }, onSuccess:(response) =>{
				setTagFields(response)
			}
		}))
	}
	const onFilter = () => {
		       
		dispatch(apiCall({
			urls: ["BOOKSEARCHBYTAG"], method: "POST", data: {tagIds:valuesTag,textSearch}, onSuccess:(response) =>{
				       
				setBookList(response)
			}
		}));
	}

	const onReset = () => {
		getBookList();
		setValuesTag([]);
	}

	const onValue = (e, { value }) => {
		   
		const matchValue = valuesTag.indexOf(value)
		if (matchValue === -1) {
			setValuesTag(valuesTag.concat(value))
		}
		else {
			const removeId = [...valuesTag]
			removeId.splice(matchValue, 1)
			setValuesTag(removeId)
		}
	}
	const addBookData = (data) => {   
		dispatch(storeMyBookData(data));
	}
	return (
		<div className="searchHeader">
			{api.isApiLoading && (
				<Dimmer active inverted>
					<Loader />
				</Dimmer>
			)}

			<Grid>
				<Grid.Column computer={16}>
					<Header as="h3" className="commonHeading">Lesson Library</Header>
				</Grid.Column>

				<Grid.Column computer={8} tablet={8}>
					<Input fluid icon="search" name="searchValue" value={textSearch.textToSearch} data="textToSearch" iconPosition="left" placeholder="Search by Book Title" className="common-search-bar" onChange={onHandleChangeSearch} />
				</Grid.Column>


				<Grid.Column width={16} className="filterDropdwon">
					{tagFields && tagFields.length > 0 && tagFields.map((singleField, index) => {
						const ss = tags.length > 0 && tags.filter(code => code[singleField.fieldName])
						const aa = singleField.dataTypeName === "Dropdown" && ss[0][singleField.fieldName]
						return (
							<>
								{singleField.dataTypeName === "Dropdown" ?
									<Dropdown text={singleField.fieldName} pointing item simple className='link item'>
										<Dropdown.Menu>
											{aa.map((singleTag, index) => {
												   
												return (
													<Dropdown.Item>
														<Form.Checkbox checked={valuesTag.includes(singleTag.value)} label={singleTag.text} onChange={onValue} value={singleTag.value} />
													</Dropdown.Item>
												)
											})}
										</Dropdown.Menu>
									</Dropdown>
									: null}
							</>
						)
					})}
				</Grid.Column>

				<Grid.Column width={16} className="filterDropdwon">
					<Button className="primaryBtn" disabled={valuesTag.length <= 0} onClick={onFilter} >Filter</Button>
					<Button className="primaryBtn" onClick={onReset} >Reset</Button>
				</Grid.Column>


				<Grid.Column computer={16}>
					<Header as="h3" className="commonHeading">Staff Recommendation</Header>
				</Grid.Column>

				{bookList && bookList.map((data, index) => {
					return (
						<Grid.Column width={4}>
							<div className="bookDetail">

								<Item.Group>
									<Item as={Link} to={{ pathname: '/book-flip', state: "lessonPlan" }} onClick={() => addBookData(data)}>
										<Image as={Link} to={{ pathname: '/book-flip', state: "lessonPlan" }} size='tiny' src={commonFunctions.concatenateImageWithAPIUrl(data.image)}
										/>
										<Item.Content>
											<Item.Header>{data.bookName}</Item.Header>
											<Item.Meta>{data.author}</Item.Meta>
										</Item.Content>
									</Item>
								</Item.Group>

								{/* <Image as={Link} to={{ pathname: '/book-flip', state: "lessonPlan" }} size='tiny' src={commonFunctions.concatenateImageWithAPIUrl(data.image)}
								/>
								<Header as={Link} to={{ pathname: '/book-flip', state: "lessonPlan" }} as="h5">{data.bookName}</Header>

								<p>{data.author}</p> */}
						      </div>
						   </Grid.Column>
					)
				})}
				<Grid.Column width={16}>
					<Button as={Link} to="search-result" className="primaryBtn">Show Search Result</Button>
				</Grid.Column>
			</Grid>
		</div>
	);
}

export default LessonLibrary;

