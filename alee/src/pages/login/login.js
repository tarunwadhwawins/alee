import React, { useState } from "react";
import { Grid, Header, Button, Form, Image } from "semantic-ui-react";
import { Link, env, Notifications } from "../../shared/functional/global-import";
import { Logo } from "../../shared/functional/global-image-import";
import { useHistory } from "react-router-dom";
import { apiCall } from "../../../src/store/actions/api.actions";
import { loginSuccess } from "../../../src/store/actions/auth.actions";
import { useDispatch, useSelector } from 'react-redux';

function LoginForm() {
  const [logInForm, setLogInForm] = useState({ email: "", password: "" })
  let history = useHistory();
  const dispatch = useDispatch();
  const api = useSelector(state => state.action)
  const onHandleChange = (e, { value, data }) => {
    setLogInForm({ ...logInForm, [data]: value })
  }

  const onsubmit = () => {
    dispatch(apiCall({
      urls: ["LOGIN"], method: "Post", data: logInForm, onSuccess: (response) => {

        dispatch(loginSuccess(response.role));
        if (response.isSuccess) {
          if (response.role === "Admin") {
            history.push(`${env.PUBLIC_URL}/scan-book`);
          }
          if (response.role === "School") {
            history.push(`${env.PUBLIC_URL}/upload-excel`);
          }
          if (response.role === "Teacher") {
            history.push(`${env.PUBLIC_URL}/profile`);
          }
        }
      }, showNotification: true
    }))
    //dispatch(Notifications.error({ title: "Error", message: "", position: 'br', autoDismiss: 5 }));
    //(Notifications.success({ title: "warning", message: "a", position: 'br', autoDismiss: 5 }));
  }

  return (
    <div className="signIn">
      <div className="signInner">
        <Form>
          <Grid>
            <Grid.Column width={6} className="p-0">
              <div className="signInnerLeft">
                <Image src={Logo} />
                <p>Don't have an account?  <Link to={`${env.PUBLIC_URL}/sign-up`} className="primary-color"> Sign Up</Link> </p>
              </div>
            </Grid.Column>
            <Grid.Column width={10} className="signInnerRight">
              <Grid>
                <Grid.Column width={16}>
                  <Header as="h2">Sign In</Header>
                </Grid.Column>
                <Grid.Column width={16}>
                  <Form.Input label="Email" placeholder="abc@gmail.com" data="email" onChange={onHandleChange} />
                </Grid.Column>
                <Grid.Column width={16} >
                  <Form.Input label="Password" type="password" placeholder="******" data="password" onChange={onHandleChange} />
                </Grid.Column>
                <Grid.Column width={10} verticalAlign="middle">
                  <Form.Checkbox label='Remember me' />
                </Grid.Column>
                <Grid.Column width={7} >
                  <Button className="primaryBtn" onClick={onsubmit}>Sign In</Button>
                </Grid.Column>
                <Grid.Column width={9} textAlign="right" verticalAlign="middle">
                  <Link to="" className="primary-color">Forgot Password</Link>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid>
        </Form>
      </div>
    </div>
  );
}
export default LoginForm;


