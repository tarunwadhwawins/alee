import React, { useState, useRef } from "react";
import { Grid, Button, Form } from "semantic-ui-react";
import { Link } from "../../shared/functional/global-import";

function SchoolSignup(props) {
  const [schoolForm, setSchoolForm] = useState({ schoolName: "", schoolAddress: "", email: "", schoolContactNo: "", password: "", confirmPassword: "" })


  const onHandleChange = (e, { value, data }) => {
    setSchoolForm({ ...schoolForm, [data]: value })
  }

  const onsubmit = () => {

 
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
        <Form.Input label="Password" placeholder="********" data="password" onChange={onHandleChange} />
      </Grid.Column>
      <Grid.Column width={8} >
        <Form.Input label="Confirm Password" placeholder="********" data="confirmPassword" onChange={onHandleChange} />
      </Grid.Column>
      <Grid.Column width={10} verticalAlign="middle">
        <Form.Checkbox label='Remember me' />
      </Grid.Column>
      <Grid.Column width={6} >
        <Button as={Link} to="upload-excel" className="primaryBtn" onClick={onsubmit}>Sign Up</Button>
      </Grid.Column>

    </>
  );
}

export default SchoolSignup;

