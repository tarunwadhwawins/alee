import React, { useState, useEffect } from "react";
import { Grid, Form, Dropdown, Checkbox, Header, Image, Button, Input, Dimmer, Loader } from "semantic-ui-react";
import { Link, commonFunctions } from "../../shared/functional/global-import";
import { Book } from "../../shared/functional/global-image-import";
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../store/actions/api.actions";

function LessonLibrary() {
	const [standards, setStandards] = useState([])
	const [comprehensionStrategies, setComprehensionStrategies] = useState([])
	const [valuesTag, setValuesTag] = useState([])
	const [literaryElements, setLiteraryElements] = useState([])

	const api = useSelector(state => state.api)
	///////////////
	const dispatch = useDispatch();
	const [bookList, setBookList] = useState(null)
	const [values, setValues] = useState({ pageNo: 1, pageSize: 100, searchValue: "" })

	const globalCode = useSelector(state => state.global.codes)

	const onHandleChangeSearch = (e, { value }) => {
		setValues({ ...values, searchValue: value })
	}
	//  call the api //
	useEffect(() => {
		getStandardsTags();
		getComprehensionStrategiesTags();
		getValuesTags();
		getLiteraryElementsTags();
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
	const getStandardsTags = () => {
		dispatch(apiCall({
			urls: ["GETTAGLISTBYID"], method: "GET", data: { tagTypeId: (commonFunctions.getGlobalCodeDetails(globalCode, "TagType", "Standards")).globalCodeId }, onSuccess: (response) => {
				const tagList = response.map((singleTag) => {
					return { value: singleTag.tagId, text: singleTag.tagTypeName }
				});
				setStandards(tagList)
			}
		}));
	}
	const getComprehensionStrategiesTags = () => {
		dispatch(apiCall({
			urls: ["GETTAGLISTBYID"], method: "GET", data: { tagTypeId: (commonFunctions.getGlobalCodeDetails(globalCode, "TagType", "ComprehensionStrategies")).globalCodeId }, onSuccess: (response) => {
				 
				const tagList = response.map((singleTag) => {
					return { value: singleTag.tagId, text: singleTag.tagTypeName }
				});
				setComprehensionStrategies(tagList)

			}
		}));
	}
	const getValuesTags = () => {
		dispatch(apiCall({
			urls: ["GETTAGLISTBYID"], method: "GET", data: { tagTypeId: (commonFunctions.getGlobalCodeDetails(globalCode, "TagType", "Values")).globalCodeId }, onSuccess: (response) => {

				const tagList = response.map((singleTag) => {
					return { value: singleTag.tagId, text: singleTag.tagTypeName }
				});
				setValuesTag(tagList)

			}
		}));
	}
	const getLiteraryElementsTags = () => {
		dispatch(apiCall({
			urls: ["GETTAGLISTBYID"], method: "GET", data: { tagTypeId: (commonFunctions.getGlobalCodeDetails(globalCode, "TagType", "LiteraryElements")).globalCodeId }, onSuccess: (response) => {

				const tagList = response.map((singleTag) => {
					return { value: singleTag.tagId, text: singleTag.tagTypeName }
				});
				setLiteraryElements(tagList)
			}
		}));
	}

	const onHandleFilter = (e, { value, data }) => {
		     
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
					<Input fluid icon="search" name="searchValue" data="searchValue" iconPosition="left" placeholder="Search by Book Title" className="common-search-bar" onChange={onHandleChangeSearch} />
				</Grid.Column>

				<Grid.Column width={16} className="filterDropdwon">
					<Dropdown text='Standards' pointing item simple className='link item'>
						<Dropdown.Menu>
							{standards.map((singleTag, index) => {
								return (
									<Dropdown.Item>
										<Checkbox radio name='StandardsRadioGroup' label={singleTag.text} onChange={onHandleFilter} />
									</Dropdown.Item>
								)
							})}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown text='Comprehension Strategies' pointing item simple className='link item'>
						<Dropdown.Menu>
							{comprehensionStrategies.map((singleTag, index) => {
								return (
									<Dropdown.Item>
										<Checkbox radio label={singleTag.text} name='StandardsRadioGroup' />
									</Dropdown.Item>
								)
							})}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown text='Values' pointing item simple className='link item'>
						<Dropdown.Menu>
							{valuesTag.map((singleTag, index) => {
								return (
									<Dropdown.Item>
										<Checkbox radio label={singleTag.text} name='StandardsRadioGroup' />
									</Dropdown.Item>
								)
							})}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown text='Literary Elements' pointing item simple className='link item'>
						<Dropdown.Menu>
							{literaryElements.map((singleTag, index) => {
								return (
									<Dropdown.Item>
										<Checkbox radio label={singleTag.text} name='StandardsRadioGroup' />
									</Dropdown.Item>
								)
							})}
						</Dropdown.Menu>
					</Dropdown>

					<Button>Filter</Button>

				</Grid.Column>

				<Grid.Column computer={16}>
					<Header as="h3" className="commonHeading">Staff Recommendation</Header>
				</Grid.Column>

				{bookList && bookList.map((data, index) => {
					return (
						<Grid.Column width={3}>
							<div className="bookDetail">

								<Image size='tiny' src={commonFunctions.concatenateImageWithAPIUrl(data.image)}
								/>
								<Header as="h5">{data.bookName}</Header>

								<p>{data.tagName}</p>
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

