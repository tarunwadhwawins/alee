import React, { useState } from "react";
import { Grid, Button, Form } from "semantic-ui-react";
import { env } from "../../shared/functional/global-import";
import { useHistory } from "react-router-dom";
import { apiCall } from "../../../src/store/actions/api.actions";
import { useDispatch, useSelector } from 'react-redux';

function SchoolSignup(props) {
  const [schoolForm, setSchoolForm] = useState({ schoolName: "", schoolAddress: "", email: "", schoolContactNo: "", password: "", confirmPassword: "" ,schoolId: null,actionPerformedBy:""})
  let history = useHistory();

  const dispatch = useDispatch();
  const api = useSelector(state => state.api)
  const onHandleChange = (e, { value, data }) => {
    setSchoolForm({ ...schoolForm, [data]: value })
  }

  const onsubmit = () => {
    dispatch(apiCall({
      urls: ["SCHOOLREGISTRATION"], method: "Post", data: schoolForm, onSuccess: (response) => {
        history.push(`${env.PUBLIC_URL}`);
      }, showNotification: true
    }));
  }

  return (
    <>
      <Grid.Column width={8}>
        <Form>
          <Form.Input label="Name" placeholder="Name" data="schoolName" value={schoolForm.schoolName} onChange={onHandleChange} />
        </Form>
      </Grid.Column>

      <Grid.Column width={8} >
        <Form.Input label="Address" placeholder="Address" data="schoolAddress" onChange={onHandleChange} />
      </Grid.Column>
      <Grid.Column width={8} >
        <Form.Input label="Email" placeholder="abc@gmail.com" data="email" onChange={onHandleChange} />
      </Grid.Column>
      <Grid.Column width={8} >
        <Form.Input label="Phone Number" placeholder="(123) 456-7890" data="schoolContactNo" onChange={onHandleChange} />
      </Grid.Column>
      <Grid.Column width={8} >
        <Form.Input label="Password" placeholder="********" type="password" data="password" onChange={onHandleChange} />
      </Grid.Column>
      <Grid.Column width={8} >
        <Form.Input label="Confirm Password" placeholder="********" type="password" data="confirmPassword" onChange={onHandleChange} />
      </Grid.Column>
      <Grid.Column width={6} >
        <Button className="primaryBtn" onClick={onsubmit} loading={api.isApiLoading}>Sign Up</Button>
      </Grid.Column>
    </>
  );
}

export default SchoolSignup;


