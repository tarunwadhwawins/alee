import React, { useState, useEffect } from "react";
import { Icon, Modal, Button, Form } from "semantic-ui-react";
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../../../../../src/store/actions/api.actions";

function AddNotes(props) {

	const [student, setStudent] = useState([])
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);

	useEffect(() => {
		getStudentList();
	}, []);
	//  get api //
	const getStudentList = () => {
		dispatch(apiCall({
			urls: ["GETSTUDENTSLIST"], method: "GET", data: { "teacherId": auth.userDetail.teacherId, "PageNo": 1, "PageSize": 1000 }, onSuccess: (response) => {
				const getStudents = response.map((student) => {
					return { value: student.studentId, text: student.studentName }
				});
				setStudent(getStudents)
			}
		}));
	}

	return (
		<Modal open={props.openModal} onClose={props.closeModal} size="small">
			<Modal.Header>Add Notes</Modal.Header>
			<Modal.Content>
				<Modal.Description>
					<Form>
						{props.addNotes && props.addNotes.length > 0 && props.addNotes.map((singleData, index) => {

							return (
								<Form.Group key={index}>
									<Form.TextArea placeholder="Note" rows="1" index={index} width={6} onChange={props.onChangeDescription} value={singleData.noteDescription} />

									<Form.Dropdown className="addMore" multiple search selection placeholder="Select Student" options={student} width={6} index={index} onChange={props.onChangeStudent} value={singleData.studentIds} />

									<Form.Field width={2} className="addMore">
										<Icon name="minus square" className="primary-color" size="big" link onClick={() => props.removeNotes(index)} /></Form.Field>
									{props.addNotes.length - 1 === index && <Form.Field width={2} className="addMore">
										<Icon name="plus square" className="primary-color" size="big" link onClick={props.addMultipleNotes} />
									</Form.Field>}
								</Form.Group>
							)
						})}
					</Form>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button className="secondaryBtn" onClick={props.closeModal}>Cancel</Button>
				<Button className="primaryBtn" onClick={props.addNotesInLessonplan}>Save</Button>
			</Modal.Actions>
		</Modal>
	);
}

export default AddNotes;