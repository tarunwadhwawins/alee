import React, { useState } from "react";
import { Grid, Button, Form } from "semantic-ui-react";
import { env, bindActionCreators, connect, actions } from "../../shared/functional/global-import";
import { useHistory } from "react-router-dom";

function SchoolSignup(props) {
  const [schoolForm, setSchoolForm] = useState({ schoolName: "", schoolAddress: "", email: "", schoolContactNo: "", password: "", confirmPassword: "" })
  let history = useHistory();

  const onHandleChange = (e, { value, data }) => {
    setSchoolForm({ ...schoolForm, [data]: value })
  }

  const onsubmit = () => {
    props.actions.apiCall({
      urls: ["SCHOOLREGISTRATION"], method: "Post", data: schoolForm, onSuccess: (response) => {
        history.push(`${env.PUBLIC_URL}`);
      }, showNotification: true
    });
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
        <Button className="primaryBtn" onClick={onsubmit}>Sign Up</Button>
      </Grid.Column>

    </>
  );
}
const mapStateToProps = state => {
  return {
    api: state.api,
    auth: state.auth,
    global: state.global,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      apiCall: bindActionCreators(actions.apiCall, dispatch),
      storeGlobalCodes: bindActionCreators(actions.storeGlobalCodes, dispatch)
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SchoolSignup);


