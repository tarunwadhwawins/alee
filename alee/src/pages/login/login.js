import React, { useState } from "react";
import { Grid, Header, Button, Form, Image } from "semantic-ui-react";
import { Link, env, bindActionCreators, connect, actions } from "../../shared/functional/global-import";
import { Logo } from "../../shared/functional/global-image-import";
import { useHistory } from "react-router-dom";

function LoginForm(props) {
  const [logInForm, setLogInForm] = useState({ email: "", password: "" })
  let history = useHistory();

  const onHandleChange = (e, { value, data }) => {
    setLogInForm({ ...logInForm, [data]: value })
  }

  const onsubmit = () => {
    props.actions.apiCall({
      urls: ["LOGIN"], method: "Post", data: logInForm, onSuccess: (response) => {
        history.push(`${env.PUBLIC_URL}/scan-book`);
      },showNotification: true
    });
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
                  <Form.Input label="Password" placeholder="******" data="password" onChange={onHandleChange} />
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);


