import React,{ useState,useEffect } from "react";
import { Grid, Form, Dropdown, Checkbox, Header, Image, Button,Input,Dimmer,Loader } from "semantic-ui-react";
import { Link, } from "../../../src/shared/functional/global-import";
import {Book} from "../../shared/functional/global-image-import";
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../../src/store/actions/api.actions";
function SearchHeader(){	
	const [radiovalueOne, setRadiovalueOne] = useState("")
	const [radiovalueTwo, setRadiovalueTwo] = useState("")
	const [radiovalueThree, setRadiovalueThree] = useState("")
	const [radiovalueFour, setRadiovalueFour] = useState("")
	const api = useSelector(state => state.api)
	///////////////
	const dispatch = useDispatch();
	const [bookList, setBookList] = useState(null)
	const [values, setValues] = useState({ pageNo: 1, pageSize: 100, searchValue: "" })


	const handleStandardChange = (e, { value }) => {
		setRadiovalueOne(value)
	}
	const handleStrategiesChange = (e, { value }) => {
		setRadiovalueTwo(value)
	}
	const handleValuesChange = (e, { value }) => {
		setRadiovalueThree(value)
	}
	const handleElementsChange = (e, { value }) => {
		setRadiovalueFour(value)
	}
	const onHandleChangeSearch = (e, { value }) => {
		setValues({ ...values, searchValue: value })
	}
   //  call the api //
    useEffect(() => {
	getBookList();
    }, [values]);

      //  get api //
    const getBookList = () => {
	dispatch(apiCall({
		urls: ["GETBOOKSLIST"], method: "GET",data:values, onSuccess: (response) => {
			setBookList(response)
		}
	}));
}
// const getBookList = () => {
// 	dispatch(apiCall({
// 		urls: ["GETBOOKSLIST"], method: "GET",data:values, onSuccess: (response) => {
// 			setBookList(response)
// 		}
// 	}));
// }

    return (
		<div className="searchHeader">
			{api.isApiLoading && (
				<Dimmer active inverted>
					<Loader />
				</Dimmer>

			)}
			<Grid>
			<Grid.Column width={16}>
				<Header as="h3" className="commonHeading">Lesson Library</Header>
			</Grid.Column>
			
				{/* <Grid.Column width={16}>
					<Form>
		<Form.Input icon="search" iconPosition="left" placeholder="Search by Book Title" fluid/>

					</Form>
				</Grid.Column> */}
				<Grid.Column computer={8} tablet={8}>
					<Input fluid icon="search" name="searchValue" data="searchValue" iconPosition="left" placeholder="Search by Book Title" className="common-search-bar" onChange={onHandleChangeSearch} />
				</Grid.Column>

				<Grid.Column width={16} className="filterDropdwon">
					<Dropdown text='Standards' pointing item simple className='link item'>
						<Dropdown.Menu>
							<Dropdown.Item>
								<Checkbox radio name='StandardsRadioGroup' value='tl7.1' checked={radiovalueOne === 'tl7.1'} onChange={handleStandardChange} label='RL 7.1' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='StandardsRadioGroup' value='tl7.2'  checked={radiovalueOne === 'tl7.2'}  onChange={handleStandardChange}  label='RL 7.2' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='StandardsRadioGroup' value='tl7.3' checked={radiovalueOne === 'tl7.3'}  onChange={handleStandardChange}   label='RL 7.3' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox   radio name='StandardsRadioGroup' value='tl7.4' checked={radiovalueOne === 'tl7.4'}  onChange={handleStandardChange}  label='RL 7.4' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='StandardsRadioGroup' value='tl7.5' checked={radiovalueOne === 'tl7.5'}  onChange={handleStandardChange}   label='RL 7.5' />
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown text='Comprehension Strategies' pointing item simple className='link item'>
						<Dropdown.Menu>
							<Dropdown.Item>
								<Checkbox  radio name='StrategiesRadioGroup' value='Predicting' checked={radiovalueTwo === 'Predicting'}  onChange={handleStrategiesChange} label='Predicting' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='StrategiesRadioGroup' value='Questioning' checked={radiovalueTwo === 'Questioning'}  onChange={handleStrategiesChange}  label='Questioning' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='StrategiesRadioGroup' value='Making Inferences' checked={radiovalueTwo === 'Making Inferences'}  onChange={handleStrategiesChange}  label='Making Inferences' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='StrategiesRadioGroup' value='Visualizing' checked={radiovalueTwo === 'Visualizing'}  onChange={handleStrategiesChange}  label='Visualizing' />
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown text='Values' pointing item simple className='link item'>
						<Dropdown.Menu>
							<Dropdown.Item>
								<Checkbox   radio name='ValuesRadioGroup' value='Empathy' checked={radiovalueThree === 'Empathy'}  onChange={handleValuesChange}  label='Empathy' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox   radio name='ValuesRadioGroup' value='Inclusion' checked={radiovalueThree === 'Inclusion'}  onChange={handleValuesChange}  label='Inclusion' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox   radio name='ValuesRadioGroup' value='Problem Solving' checked={radiovalueThree === 'Problem Solving'}  onChange={handleValuesChange}  label='Problem Solving' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox   radio name='ValuesRadioGroup' value='Mindfulness' checked={radiovalueThree === 'Mindfulness'}  onChange={handleValuesChange}  label='Mindfulness' />
							</Dropdown.Item>
							
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown text='Literary Elements' pointing item simple className='link item'>
						<Dropdown.Menu>
							<Dropdown.Item>
								<Checkbox    radio name='ElementsRadioGroup' value='Dialogue' checked={radiovalueFour === 'Dialogue'}  onChange={handleElementsChange} label='Dialogue' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='ElementsRadioGroup' value='Flashback' checked={radiovalueFour === 'Flashback'}  onChange={handleElementsChange} label='Flashback' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='ElementsRadioGroup' value='Allegory' checked={radiovalueFour === 'Allegory'}  onChange={handleElementsChange} label='Allegory' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='ElementsRadioGroup' value='Metaphor' checked={radiovalueFour === 'Metaphor'}  onChange={handleElementsChange} label='Metaphor' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='ElementsRadioGroup' value='Imagery' checked={radiovalueFour === 'Imagery'}  onChange={handleElementsChange} label='Imagery' />
							</Dropdown.Item>
							<Dropdown.Item>
								<Checkbox  radio name='ElementsRadioGroup' value='Symbolism' checked={radiovalueFour === 'Symbolism'}  onChange={handleElementsChange} label='Symbolism' />
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Grid.Column>
			
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Staff Recommendation</Header>
				</Grid.Column>
				{bookList && bookList.map((data, index) => {
							debugger
							return (
								<>
				<Grid.Column width={3}>
					
					<div className="bookDetail">
						<Image src={Book}/>
						<Header>{data.bookName}</Header>
						<p>J.K. Rownling</p>
					</div>
				</Grid.Column>
				<Grid.Column width={3}>
					<div className="bookDetail">
						<Image src={Book}/>
						<Header>{data.bookName}</Header>
						<p>J.K. Rownling</p>
					</div>
				</Grid.Column>
				<Grid.Column width={3}>
					<div className="bookDetail">
						<Image src={Book}/>
						<Header>{data.bookName}</Header>
						<p>J.K. Rownling</p>
					</div>
				</Grid.Column>
				<Grid.Column width={3}>
					<div className="bookDetail">
						<Image src={Book}/>
						<Header>{data.bookName}</Header>
						<p>J.K. Rownling</p>
					</div>
				</Grid.Column>
				</>
					)
				})}
				<Grid.Column width={16}>
					<Button as={Link} to="search-result" className="primaryBtn">Show Search Result</Button>
				</Grid.Column>
			</Grid>
		</div>
    );
}

export default SearchHeader;

