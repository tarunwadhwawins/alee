import React, { useState, useRef } from "react";
import { Grid, Button, Form } from "semantic-ui-react";
import { env } from "../../shared/functional/global-import";
import { useHistory } from "react-router-dom";
import { apiCall } from "../../../src/store/actions/api.actions";
import { useDispatch, useSelector } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import { commonFunctions, Notifications } from "../../shared/functional/global-import";

function TeacherSignup(props) {

    const [teacherForm, setTeacherForm] = useState({ firstName: "", lastName: "", email: "", contactNo: "", password: "", confirmPassword: "", actionPerformedBy: "", userId: "", excelReferenceId: null, teacherId: null, schoolId: 0 })
    let history = useHistory();
    const onHandleChange = (e, { value, data }) => {
        setTeacherForm({ ...teacherForm, [data]: value })
    }
    const dispatch = useDispatch();
    const api = useSelector(state => state.api)
    const [, forceUpdate] = useState()
    const simpleValidator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } }))

    const onsubmit = (e) => {
        debugger

        const isFormValid = commonFunctions.onHandleFormSubmit(e, simpleValidator, forceUpdate);
        if (isFormValid &&
            (teacherForm.password === teacherForm.confirmPassword)) {
            dispatch(apiCall({
                urls: ["TEACHERREGISTRATION"], method: "Post", data: teacherForm, onSuccess: (response) => {
                    history.push(`${env.PUBLIC_URL}`);
                }, showNotification: true
            }))
        } if (teacherForm.password !== teacherForm.confirmPassword) {
            dispatch(Notifications.show({ title: "Error", message: 'Password and confirm password not matched.', position: 'br', autoDismiss: 2 }, "error"))
        }
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
                    />
                </Grid.Column>
                <Grid.Column width={8} >
                    <Form.Input label="Email" placeholder="abc@gmail.com" data="email" onChange={onHandleChange}
                        error={simpleValidator.current.message('email', teacherForm.email, 'required|email')}
                    />
                </Grid.Column>
                <Grid.Column width={8} >
                    <Form.Input label="Phone Number" placeholder="(123) 456-7890" data="contactNo" onChange={onHandleChange}
                        error={simpleValidator.current.message('contactNo', teacherForm.contactNo, 'required')}
                    />
                </Grid.Column>
                <Grid.Column width={8} >
                    <Form.Input label="Address" placeholder="Address" data="address" onChange={onHandleChange}
                        error={simpleValidator.current.message('address', teacherForm.address, 'required')}
                    />
                </Grid.Column>
                <Grid.Column width={8} >
                    <Form.Input label="Password" placeholder="********" type="password" data="password" onChange={onHandleChange}
                        error={simpleValidator.current.message('password', teacherForm.password, 'required')}
                    />
                </Grid.Column>
                <Grid.Column width={8} >
                    <Form.Input label="Confirm Password" placeholder="********" type="password" data="confirmPassword" onChange={onHandleChange}
                        error={simpleValidator.current.message('confirmPassword', teacherForm.confirmPassword, 'required')}
                    />
                </Grid.Column>

                <Grid.Column width={8} textAlign="right">
                    <Button className="primaryBtn" loading={api.isApiLoading}>Sign Up</Button>
                </Grid.Column>
            </Grid>
        </Form>
    );
}

export default TeacherSignup;

