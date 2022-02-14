import React, { useState, useRef } from "react";
import { Grid, Button, Form, Icon } from "semantic-ui-react";
import { env } from "../../shared/functional/global-import";
import { useHistory } from "react-router-dom";
import { apiCall } from "../../../src/store/actions/api.actions";
import { useDispatch, useSelector } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import { PhoneNumberInput } from "../../shared/components";
import { commonFunctions, Notifications } from "../../shared/functional/global-import";

function TeacherSignup(props) {

    const [teacherForm, setTeacherForm] = useState({ firstName: "", lastName: "", email: "", contactNo: "", password: "", confirmPassword: "", actionPerformedBy: "", userId: "", excelReferenceId: null, teacherId: null, schoolId: 0, Phone: '' })
    const [iconToggle, setIconToggle] = useState(false)
    const [iconToggleConfirm, setIconToggleConfirm] = React.useState(false)
    let history = useHistory();
    

    // const onHandleChange = (e, { value, data }) => {
    //     ;
    //     if (rx_live.test(e.target.value)) {
    //         setTeacherForm({ ...teacherForm, [data]: value, contactNo: e.target.value })
    //     }
    // }
    const onHandleChange = (e, { value, data }) => {
     setTeacherForm({ ...teacherForm, [data]: value})
    }
    const  onHandleChanged = (e, {value, type, checked, data }) => {
              
        var teacherForms = commonFunctions.onHandleChange(e,
          { value, type, checked, data },teacherForm);
          setTeacherForm(teacherForms);
      }

    const dispatch = useDispatch();
    const api = useSelector(state => state.api)
    const [, forceUpdate] = useState()
    const simpleValidator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } }))
     const validator = commonFunctions.initializeSimpleValidator();

    const onsubmit = (e) => {
        const isFormValid = commonFunctions.onHandleFormSubmit(e, simpleValidator, forceUpdate);
        if (isFormValid &&
            (teacherForm.password === teacherForm.confirmPassword)) {
            dispatch(apiCall({
                urls: ["TEACHERREGISTRATION"], method: "Post", data: teacherForm, onSuccess: (response) => {
                    history.push(`${env.PUBLIC_URL}`);
                }, showNotification: true
            }))
        } if (teacherForm.password !== teacherForm.confirmPassword) {
            dispatch(Notifications.show({
                title: "Error",
                message: 'Password and confirm password not matched.',
                position: 'br', autoDismiss: 2
            }, "error"))
        }
    }
    const passwordToggle = () => {
        setIconToggle(!iconToggle)
    }
    const confirmPasswordToggle = () => {
        setIconToggleConfirm(!iconToggleConfirm)
    }
    return (
        <Form onSubmit={onsubmit}  >
            <Grid>
                <Grid.Column width={8}>
                    <Form.Input label="First Name" placeholder="First Name" data="firstName" onChange={onHandleChange}
                        error={simpleValidator.current.message('firstName', teacherForm.firstName, 'required')}
                    />
                </Grid.Column>
                <Grid.Column width={8} >
                    <Form.Input label="Last Name" placeholder="Last Name" data="lastName" onChange={onHandleChange}
                        error={simpleValidator.current.message('lastName', teacherForm.lastName, 'required')} />
                </Grid.Column>
                <Grid.Column width={8} >
                    <Form.Input label="Email" placeholder="abc@gmail.com" data="email" onChange={onHandleChange}
                        error={simpleValidator.current.message('email', teacherForm.email, 'required|email')}
                    />
                </Grid.Column>
                {/* <Grid.Column width={8} >
                    <Form.Input label="Phone Number" placeholder="+1(123) 456-7890" data="contactNo" onChange={onHandleChange}
                        pattern="[+-]?\d+(?:[.,]\d+)?" maxLength="11" value={teacherForm.contactNo}
                        error={simpleValidator.current.message("contactNo", teacherForm.contactNo, "required")}
                    />
                </Grid.Column> */}
                  <Grid.Column width={8}>
                        <PhoneNumberInput
                          onChange={(value, country, e, formattedValue) => onHandleChanged(e, {
                            name: "phoneNumber", value: formattedValue, type:"phoneNumber", data:"contactNo"
                          })}
                          value={teacherForm.contactNo}
                          error={validator.message("phoneNumber", teacherForm.contactNo, "required")} />
                      </Grid.Column>
                <Grid.Column width={8} >
                    <Form.Input className="password" label="Password" placeholder="********" type={iconToggle ? "" : "password"} data="password" onChange={onHandleChange}
                        error={simpleValidator.current.message('password', teacherForm.password, 'required|password|')}
                    // error={teacherForm.password ? simpleValidator.current.message("password", teacherForm.password, "required|min:6|max:20") : simpleValidator.current.message("password", teacherForm.password, "min:6|max:20")}
                    />
                    {!iconToggle && <Icon title="Show password" name="eye" className="primary-color passwordIcon" onClick={passwordToggle} />}
                    {iconToggle && <Icon title="Hide Password" name="eye slash" className="primary-color passwordIcon" onClick={passwordToggle} />}

                </Grid.Column>
                <Grid.Column width={8} >
                    <Form.Input label="Confirm Password" placeholder="********" type={iconToggleConfirm ? "" : "password"} data="confirmPassword" onChange={onHandleChange}
                        error={simpleValidator.current.message('confirmPassword', teacherForm.confirmPassword, 'required|password|')}                    />
                    {!iconToggleConfirm && <Icon title="Show password" name="eye" className="primary-color passwordIcon" onClick={confirmPasswordToggle} />}
                    {iconToggleConfirm && <Icon title="Hide Password" name="eye slash" className="primary-color passwordIcon" onClick={confirmPasswordToggle} />}

                </Grid.Column>

                <Grid.Column width={8} textAlign="right">
                    <Button className="primaryBtn" loading={api.isApiLoading}>Sign Up</Button>
                </Grid.Column>
            </Grid>
        </Form>
    );
}

export default TeacherSignup;

