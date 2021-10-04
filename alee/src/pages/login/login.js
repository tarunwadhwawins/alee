import React, { useState, useRef } from "react";
import { Grid, Header, Button, Form, Image, Icon } from "semantic-ui-react";
import { Link, env } from "../../shared/functional/global-import";
import { Logo } from "../../shared/functional/global-image-import";
import { useHistory } from "react-router-dom";
import { apiCall } from "../../../src/store/actions/api.actions";
import { storeUserDetail } from "../../../src/store/actions/auth.actions";
import { storeGlobalCodes, storeTags } from "../../../src/store/actions/global.actions";
import { useDispatch, useSelector } from 'react-redux';
import ForgotPasswordModal from "../../shared/components/organisms/modal/forgot-password/forgot-password";
import SimpleReactValidator from 'simple-react-validator';
import { commonFunctions } from "../../shared/functional/global-import";

function LoginForm() {
  const [forgotPasswordStatus, setForgotPasswordStatus] = React.useState(false)
//////// for tag store //////
  const [tagFields, setTagFields] = useState([]);
  const [fieldData, setFieldData] = useState([]);
  const [fieldOptions, setFieldOptions] = useState([]);

  const [iconToggle, setIconToggle] = React.useState(false)
  const [, forceUpdate] = useState()
  const simpleValidator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } }))
  const [logInForm, setLogInForm] = useState({ email: "", password: "" })
  let history = useHistory();
  const dispatch = useDispatch();
  const api = useSelector(state => state.api)
  const onHandleChange = (e, { value, data }) => {
    setLogInForm({ ...logInForm, [data]: value })
  }
  const onSubmit = (e) => {
        
    const isFormValid = commonFunctions.onHandleFormSubmit(e, simpleValidator, forceUpdate);
    if (isFormValid) {
      dispatch(apiCall({
        urls: ["LOGIN"], method: "Post", data: logInForm, onSuccess: (response) => {
          tagStore();
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
            if (response.role === "SubAdmin") {
              history.push(`${env.PUBLIC_URL}/dashboard`);
            }
          }
        }, showNotification: true
      }))
    }
    //dispatch(Notifications.error({ title: "Error", message: "", position: 'br', autoDismiss: 5 }));
    //(Notifications.success({ title: "warning", message: "a", position: 'br', autoDismiss: 5 }));
  }

  const tagStore = () => {
    let aa = [];
    dispatch(apiCall({
      urls: ["GETTAGCUSTOMFIELDS"], method: "GET", data: { pageNo: 1, pageSize: 100 }, onSuccess: (response) => {

        setTagFields(response)
        let fieldName = [];
        response.filter(code => code.dataTypeName === "Dropdown").map((filtercode) => {

          fieldName.push(filtercode.fieldName)
          setFieldData(fieldData.concat(fieldName))

          dispatch(apiCall({
            urls: ["GETTAGCUSTOMFIELDSLIST"], method: "GET", data: { fieldName: filtercode.fieldName }, onSuccess: (response) => {
              const res = response.map((single) => {
                return { value: single.tagId, text: single.tagTypeName }
              });

              // if (res.length > 0) {
              setFieldOptions(fieldOptions => [...fieldOptions, { [filtercode.fieldName]: res }])
              aa.push({ [filtercode.fieldName]: res })
              // }
            }
          }))
          dispatch(storeTags(aa))
        });
        setFieldData(fieldData.concat(fieldName))
      }
    }))

  }

  const getGlobalCode = () => {
    dispatch(apiCall({
      urls: ["GLOBALCODELIST"], method: "GET", data: { "categoryId": -1 }, onSuccess: (response) => {
        dispatch(storeGlobalCodes(response));
      }, showNotification: false
    }))
  }
  const forgetPassword = () => {
    setForgotPasswordStatus(!forgotPasswordStatus);
  };
  const passwordToggle = () => {
    setIconToggle(!iconToggle)
  }
  return (
    <div className="signIn">
      <div className="signInner">
        <Form
          onSubmit={onSubmit}
        // onSubmit={handleSubmit(onSubmit)}
        >
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
                  <Form.Input label="Email" placeholder="abc@gmail.com" data="email" type="email" name="email" onChange={onHandleChange}
                    error={simpleValidator.current.message('email', logInForm.email, 'required|email')}
                  // {...register("email")} 

                  />
                  {/* <p className="error">{errors.email?.message}</p> */}
                </Grid.Column>
                <Grid.Column width={16} >
                  <Form.Input className="loginPassword" label="Password" type={iconToggle ? "" : "password"} placeholder="******" data="password" onChange={onHandleChange}
                    error={simpleValidator.current.message('password', logInForm.password, 'required|password')}
                  //  {...register("password")} 
                  />
                  {!iconToggle && <Icon title="Show password" name="eye" className="primary-color passwordIcon" onClick={passwordToggle} />}
                  {iconToggle && <Icon title="Hide Password" name="eye slash" className="primary-color passwordIcon" onClick={passwordToggle} />}
                  {/* <p className="error">{errors.password?.message}</p> */}
                </Grid.Column>
                <Grid.Column width={10} verticalAlign="middle">
                  <Form.Checkbox label='Remember me' />
                </Grid.Column>
                <Grid.Column width={7}>
                  <Button className="primaryBtn" loading={api.isApiLoading} >Sign In</Button>
                </Grid.Column>
                <Grid.Column width={9} textAlign="right" verticalAlign="middle">
                  <Link onClick={forgetPassword} className="primary-color">Forgot Password</Link>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid>
        </Form>
        {forgotPasswordStatus && <ForgotPasswordModal openModal={forgotPasswordStatus} closeModal={forgetPassword} />}
      </div>
    </div>

  );
}
export default LoginForm;


