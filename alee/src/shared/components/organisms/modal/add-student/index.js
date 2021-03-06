import React, { useState, useEffect, useRef } from "react";
import { Grid, Modal, Button, Form, Dimmer, Loader } from "semantic-ui-react";
import { apiCall } from "../../../../../store/actions/api.actions";
import { useDispatch, useSelector } from "react-redux";
import { GlobalCodeSelect } from "../../../../components";
import SimpleReactValidator from 'simple-react-validator';
import { commonFunctions } from "../../../../functional/global-import";

function AddStudent(props) {
  const auth = useSelector((state) => state.auth);
  const [grade, setGradeList] = useState(null);
  const initialValues = {
    teacherId: auth.userDetail.teacherId,
    studentId: null,
    firstName: "",
    lastName: "",
    email: "",
    isActive: true,
    gradeId: null,
    actionPerformedBy: "string",
  };
  const [addStudent, setAddStudent] = useState(initialValues);
  const [, forceUpdate] = useState()
  const simpleValidator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } }))

  const api = useSelector((state) => state.api);
  const dispatch = useDispatch();
  const onHandleChange = (e, { data, value, checked, type }) => {
    setAddStudent({ ...addStudent, [data]: value });
    if (type === "checkbox") {
      setAddStudent({ ...addStudent, [data]: checked });
    }
  };
  const onHandleSubmit = (e) => {
    const isFormValid = commonFunctions.onHandleFormSubmit(e, simpleValidator, forceUpdate);
    if (isFormValid) {
      dispatch(
        apiCall({
          urls: ["ADDUPDATESTUDENT"],
          method: "Post",
          data: addStudent,
          onSuccess: (response) => {
            closeModal();
            props.GridReload();
            setAddStudent(initialValues);
          },
          showNotification: true,
        })
      );
    }
  };
  useEffect(() => {
    if (props.editStudent) {
      editStudentlist();
    }
    getGradeList();
  }, [props.editStudent]);


  const editStudentlist = () => {
    if (props.editStudent) {
      const {
        firstName,
        lastName,
        email,
        isActive,
        gradeId,
        studentId,
      } = props.editData;
      setAddStudent({
        ...addStudent,
        studentId: studentId,
        firstName: firstName,
        lastName: lastName,
        email: email,
        isActive: isActive,
        gradeId: gradeId,
      });
    }
  };
  //  //  get api //
  const getGradeList = () => {
    dispatch(
      apiCall({
        urls: ["GETGRADESLIST"],
        method: "GET",
        data: grade,
        onSuccess: (response) => {
          const grade = response.map((singledata) => {
            return { text: singledata.gradeName, value: singledata.gradeId };
          });
          setGradeList(grade);
        },
      })
    );
  };
  const closeModal = () => {
    simpleValidator.current.hideMessages();
    setAddStudent(initialValues);
    props.closeModal();
  };

  return (
    <Modal
      open={props.openModal}
      onClose={props.closeModal}
      closeOnDimmerClick={false}
      size="small"
    >
      {api.isApiLoading && (
        <Dimmer active inverted>
          <Loader />
        </Dimmer>
      )}
      <Modal.Header> {addStudent.studentId > 0 ? "Edit Student" : "Add Student"}</Modal.Header>
      <Modal.Content scrolling>
        <Modal.Description>
          <Form>
            <Grid columns="2">
              <Grid.Column>
                <Form.Input
                  label="First Name"
                  data="firstName"
                  value={addStudent.firstName}
                  onChange={onHandleChange}
                  error={simpleValidator.current.message('firstName', addStudent.firstName, 'required')}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Input
                  label="Last Name"
                  data="lastName"
                  value={addStudent.lastName}
                  onChange={onHandleChange}
                  error={simpleValidator.current.message('lastName', addStudent.lastName, 'required')}

                />
              </Grid.Column>
              <Grid.Column>
                <Form.Input
                  label="Email"
                  data="email"
                  type="email"
                  onChange={onHandleChange}
                  value={addStudent.email}
                  error={simpleValidator.current.message('email', addStudent.email, 'required|email')}

                />
              </Grid.Column>
              <Grid.Column>
                <Form.Select
                  label="Grade"
                  placeholder="Grades"
                  options={grade}
                  data="gradeId"
                  value={addStudent.gradeId}
                  onChange={onHandleChange}
                  error={simpleValidator.current.message('grade', addStudent.gradeId, 'required')}

                />
              </Grid.Column>
              <Grid.Column className="status">
                <p>Status</p>
                <div className="statusToggle">
                  <span>Inactive</span>
                  <Form.Checkbox
                    label="Active"
                    toggle
                    className="commonToggle"
                    onChange={onHandleChange}
                    data="isActive"
                    checked={addStudent.isActive}
                    value={addStudent.isActive}
                  />
                </div>
              </Grid.Column>
            </Grid>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button className="secondaryBtn" onClick={() => closeModal()}>
          {" "}
          Cancel{" "}
        </Button>
        <Button
          className="primaryBtn"
          onClick={onHandleSubmit}
          loading={api.isApiLoading}>
          {addStudent.studentId > 0 ? "Update" : "Save"}
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default AddStudent;
