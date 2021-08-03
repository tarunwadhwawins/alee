import React ,{useState,useEffect}from "react";
import { Grid, Header, Table, Button, Icon, Label,Dimmer,Loader} from "semantic-ui-react";
import AddStudent from "../../shared/components/organisms/modal/add-student/index";
import { apiCall } from "../../../src/store/actions/api.actions";
import { useDispatch,useSelector } from 'react-redux';


function StudentListPage(props) {	
	const [student, setStudent] = React.useState(false)
	const [file, setFile] = React.useState(null)
	const [studentList ,setStudentList] = useState(null)
	const dispatch = useDispatch();

	const openModal = () => {
		setStudent(!student)
	}
	  const fileInputRef = React.createRef();	
	
	  const fileChange = e => {
		setFile( e.target.files[0] )
	  }
	
	  useEffect(() => {
		getStundentList();
	}, []);
	  const getStundentList = () => {
		
		dispatch(apiCall({
			urls: ["GETSTUDENTSLIST"], method: "GET",onSuccess: (response) => {
				debugger;
				if (response.length > 0) {
					setStudentList(response)
				}
			}
		}));
	}
	const hooksData = useSelector(state => state.api)

    return (
		<div className="common-shadow">
			{hooksData.isApiLoading && (
				<Dimmer active inverted>
					<Loader />
				</Dimmer>

			)}
		<Grid>
			<Grid.Column width={8} verticalAlign="middle">
				<Header as="h3" className="commonHeading">Student list</Header>
			</Grid.Column>
			<Grid.Column width={8} textAlign="right">
				<Button className="primaryBtn"  onClick={openModal}><Icon name="plus"/> Add Student</Button>
				<Button className="alternateBtn"  onClick={() => fileInputRef.current.click()} ><Icon name="upload"/> Upload Excel</Button>
				<input ref={fileInputRef} type="file" hidden onChange={fileChange}/>
			</Grid.Column>
			<Grid.Column width={16}>
			<Table>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Name</Table.HeaderCell>
						<Table.HeaderCell>Email</Table.HeaderCell>
						<Table.HeaderCell>Grade</Table.HeaderCell>
						<Table.HeaderCell>Status</Table.HeaderCell>
						<Table.HeaderCell  textAlign="right">Action</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				
				{studentList && studentList.map((data, index) => {
                  return (
				<Table.Body>
					<Table.Row>
						<Table.Cell>{data.studentName}</Table.Cell>
						<Table.Cell>{data.email}</Table.Cell>
						<Table.Cell>{data.gradeName}</Table.Cell>
						<Table.Cell><Label color="green">Active</Label></Table.Cell>
						<Table.Cell textAlign="right">
							<Icon name="edit" className="primary-color" link/>
							<Icon name="trash alternate" color="red" link/>
						</Table.Cell>
					</Table.Row>
				</Table.Body>
					  )
					})}
			</Table>
			</Grid.Column>
		</Grid>
		<AddStudent openModal={student} closeModal={openModal}/></div>
		);
  }
  export default StudentListPage;
