import React, { useState, useRef } from "react";
import { Grid, Button, Form, Icon } from "semantic-ui-react";
import { env } from "../../shared/functional/global-import";
import { useHistory } from "react-router-dom";
import { apiCall } from "../../../src/store/actions/api.actions";
import { useDispatch, useSelector } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import { commonFunctions, Notifications } from "../../shared/functional/global-import";
function SchoolSignup(props) {

  const [schoolForm, setSchoolForm] = useState({ schoolName: "", schoolAddress: "", email: "", schoolContactNo: "", password: "", confirmPassword: "", schoolId: null, userId: "", actionPerformedBy: "" })
  let history = useHistory();

  const dispatch = useDispatch();
  const api = useSelector(state => state.api)
  const [, forceUpdate] = useState()
  const [iconToggle, setIconToggle] = React.useState(false)
  const [iconToggleConfirm, setIconToggleConfirm] = React.useState(false)
  const simpleValidator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } }))

  const onHandleChange = (e, { value, data }) => {
    debugger
    setSchoolForm({ ...schoolForm, [data]: value })
  }

  const onSubmit = (e) => {
    const isFormValid = commonFunctions.onHandleFormSubmit(e, simpleValidator, forceUpdate);
    if (isFormValid && (schoolForm.password === schoolForm.confirmPassword)) {
      dispatch(apiCall({
        urls: ["SCHOOLREGISTRATION"], method: "Post", data: schoolForm, onSuccess: (response) => {
          history.push(`${env.PUBLIC_URL}`);
        }, showNotification: true
      }));
    } if (schoolForm.password !== schoolForm.confirmPassword) {
      dispatch(Notifications.show({ title: "Error", message: 'Password and confirm password not matched.', position: 'br', autoDismiss: 2 }, "error"))
    }
  }
  const passwordToggle = () => {
    setIconToggle(!iconToggle)
  }
  const confirmPasswordToggle = () => {
    setIconToggleConfirm(!iconToggleConfirm)
  }
  return (
    <>
      <Form onSubmit={onSubmit}>
        <Grid>
          <Grid.Column width={8}>
            <Form.Input label="Name" placeholder="Name" data="schoolName" onChange={onHandleChange}
              error={simpleValidator.current.message('schoolName', schoolForm.schoolName, 'required')} />
          </Grid.Column>

          <Grid.Column width={8} >
            <Form.Input label="Address" placeholder="Address" data="schoolAddress" onChange={onHandleChange}
              error={simpleValidator.current.message('schoolAddress', schoolForm.schoolAddress, 'required')}
            />
          </Grid.Column>
          <Grid.Column width={8} >
            <Form.Input label="Email" placeholder="abc@gmail.com" data="email" type="email" name="email" onChange={onHandleChange}
              error={simpleValidator.current.message('email', schoolForm.email, 'required|email')}
            />
          </Grid.Column>
          <Grid.Column width={8} >
            <Form.Input label="Phone Number" placeholder="(123) 456-7890" data="schoolContactNo" onChange={onHandleChange}
              error={simpleValidator.current.message('schoolContactNo', schoolForm.schoolContactNo, 'required')}
            />
          </Grid.Column>
          <Grid.Column width={8} >
            <Form.Input label="Password" placeholder="********" type={iconToggle ? "" : "password"} data="password" onChange={onHandleChange}
              error={simpleValidator.current.message('password', schoolForm.password, 'required|password')}
            />
            {!iconToggle && <Icon title="Show password" name="eye" className="primary-color passwordIcon" onClick={passwordToggle} />}
            {iconToggle && <Icon title="Hide Password" name="eye slash" className="primary-color passwordIcon" onClick={passwordToggle} />}
          </Grid.Column>
          <Grid.Column width={8} >
            <Form.Input label="Confirm Password" placeholder="********" type={iconToggleConfirm ? "" : "password"} data="confirmPassword" onChange={onHandleChange}
              error={simpleValidator.current.message('confirmPassword', schoolForm.confirmPassword, 'required|password')}
            />
            {!iconToggleConfirm && <Icon title="Show password" name="eye" className="primary-color passwordIcon" onClick={confirmPasswordToggle} />}
            {iconToggleConfirm && <Icon title="Hide Password" name="eye slash" className="primary-color passwordIcon" onClick={confirmPasswordToggle} />}
          </Grid.Column>
          <Grid.Column width={6} >
            <Button className="primaryBtn" loading={api.isApiLoading}>Sign Up</Button>
          </Grid.Column>
        </Grid>
      </Form>
    </>
  );
}

export default SchoolSignup;


