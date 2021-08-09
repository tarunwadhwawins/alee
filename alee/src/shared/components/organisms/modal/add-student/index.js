import React,{useState}from "react";
import { Grid, Modal, Button, Form ,Dimmer,Loader } from "semantic-ui-react";
import { apiCall } from "../../../../../store/actions/api.actions";
import { useDispatch, useSelector } from 'react-redux';
const Grade = [
	{ key: 'Grade 1', value: 'Grade 1', text: 'Grade 1' },
	{ key: 'Grade 2', value: 'Grade 2', text: 'Grade 2' },
	{ key: 'Grade 3', value: 'Grade 3', text: 'Grade 3' },
	{ key: 'Grade 4', value: 'Grade 4', text: 'Grade 4' },
	{ key: 'Grade 5', value: 'Grade 5', text: 'Grade 5' },
	{ key: 'Grade 6', value: 'Grade 6', text: 'Grade 6' },
	{ key: 'Grade 7', value: 'Grade 7', text: 'Grade 7' },
  ]
  function AddStudent(props) {
	  const auth = useSelector(state => state.auth);
	  const [addStudent, setAddStudent] = useState({ "teacherId":auth.loggedIn, firstName: "",lastName: "",email: "",gradeId:-1, actionPerformedBy:auth.userDetail.emailId});
	  
	const dispatch = useDispatch();
	const api = useSelector(state => state.api)


	


	const onHandleChange = (e, { value, data }) => {
		debugger;
        setAddStudent({ ...addStudent, [data]: value})
    }
	const onHandleSubmit = () => {
		 debugger;
        dispatch(apiCall({
            urls: ["ADDSTUDENT"], method: "Post", data: addStudent, onSuccess: (response) => {
				props.closeModal();
            }, showNotification: true
        })) 
    }
    return (
		
		<Modal open={props.openModal} onClose={props.closeModal} size="small">
			{api.isApiLoading && (
			<Dimmer active inverted>
				<Loader />
			</Dimmer>

		)}
			<Modal.Header>Add Student</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Grid columns="2">
							<Grid.Column>
								<Form.Input label="FirstName" data="firstName"
								//  value={addStudent.firstName} 
								onChange={onHandleChange}/>
							</Grid.Column>
							<Grid.Column>
								<Form.Input label="LastName" data="lastName"
								// value={addStudent.lastName}
								 onChange={onHandleChange}/>
							</Grid.Column>
							<Grid.Column>
								<Form.Input label="Email" data="email"
								//  value={addStudent.email}
								 onChange={onHandleChange}/>
							</Grid.Column>
							<Grid.Column>
								<Form.Select label="Grade" options={Grade} 
								data="gradeId" 
								onChange={onHandleChange} />
							</Grid.Column>
							<Grid.Column className='status'>
								<p>Status</p>
								<div className="statusToggle"> 
								<span>Inactive</span>
								<Form.Checkbox label="Active" toggle className="commonToggle"/>
								</div>
							</Grid.Column>
						</Grid>
					</Form>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button className="secondaryBtn"  onClick={props.closeModal}>Cancel</Button>
				<Button className="primaryBtn" onClick={onHandleSubmit} loading={api.isApiLoading}>Save</Button>
			</Modal.Actions>
		</Modal>
		);
  }
  
  export default AddStudent;