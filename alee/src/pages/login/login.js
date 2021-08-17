import React, { useState } from "react";
import { Grid, Header, Button, Form, Image } from "semantic-ui-react";
import { Link, env } from "../../shared/functional/global-import";
import { Logo } from "../../shared/functional/global-image-import";
import { useHistory } from "react-router-dom";
import { apiCall } from "../../../src/store/actions/api.actions";
import { loginSuccess, storeUserDetail } from "../../../src/store/actions/auth.actions";
import { storeGlobalCodes, storeSchoolDetails } from "../../../src/store/actions/global.actions";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("Email must be valid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  // const onSubmit = data => console.log(data);
  const [logInForm, setLogInForm] = useState({ email: "", password: "" })
  let history = useHistory();
  const dispatch = useDispatch();
  const api = useSelector(state => state.api)
  const onHandleChange = (e, { value, data }) => {
    setLogInForm({ ...logInForm, [data]: value })
  }
  const onSubmit = (values) => {
    console.log(values)
    dispatch(apiCall({
      urls: ["LOGIN"], method: "Post", data: values, onSuccess: (response) => {
        if (response.isSuccess) {
          //dispatch(loginSuccess(response.role));
          dispatch(storeUserDetail(response));
          getGlobalCode();
          if (response.role === "Admin") {
            history.push(`${env.PUBLIC_URL}/dashboard`);
          }
          if (response.role === "School") {
            history.push(`${env.PUBLIC_URL}/upload-excel`);
          }
          if (response.role === "Teacher") {
            history.push(`${env.PUBLIC_URL}/dashboard`);
          }
        }
      }, showNotification: true
    }))
    //dispatch(Notifications.error({ title: "Error", message: "", position: 'br', autoDismiss: 5 }));
    //(Notifications.success({ title: "warning", message: "a", position: 'br', autoDismiss: 5 }));
  }

  const getGlobalCode = () => {
    dispatch(apiCall({
      urls: ["GLOBALCODELIST"], method: "GET", data: { "categoryId": -1 }, onSuccess: (response) => {
        dispatch(storeGlobalCodes(response));
      }, showNotification: false
    }))
  }

  return (
    <div className="signIn">
      <div className="signInner">
        <Form onSubmit={handleSubmit(onSubmit)}>
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
                  <Form.Input label="Email" placeholder="abc@gmail.com" data="email" type="email" name="email" onChange={onHandleChange}  {...register("email")} />
                  <p className="error">{errors.email?.message}</p>
                </Grid.Column>
                <Grid.Column width={16} >
                  <Form.Input label="Password" type="password" placeholder="******" data="password" onChange={onHandleChange}  {...register("password")} />
                  <p className="error">{errors.password?.message}</p>
                </Grid.Column>
                <Grid.Column width={10} verticalAlign="middle">
                  <Form.Checkbox label='Remember me' />
                </Grid.Column>
                <Grid.Column width={7} >
                  <Button className="primaryBtn" type="submit" loading={api.isApiLoading}>Sign In</Button>
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


