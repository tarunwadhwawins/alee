import React, { useState } from "react";
import { Grid, Button, Form } from "semantic-ui-react";
import { env } from "../../shared/functional/global-import";
import { useHistory } from "react-router-dom";
import { apiCall } from "../../../src/store/actions/api.actions";
import { useDispatch } from 'react-redux';

function TeacherSignup(props) {

    const [teacherForm, setTeacherForm] = useState({ firstName: "", lastName: "", email: "", contactNo: "", password: "", confirmPassword: "" })
    let history = useHistory();
    const onHandleChange = (e, { value, data }) => {
        setTeacherForm({ ...teacherForm, [data]: value })
    }
    const dispatch = useDispatch();
    const onsubmit = () => {
        dispatch(apiCall({
            urls: ["TEACHERREGISTRATION"], method: "Post", data: teacherForm, onSuccess: (response) => {
                history.push(`${env.PUBLIC_URL}`);
            }, showNotification: true
        }))
    }

    return (
        <>
            <Grid.Column width={8}>
                <Form.Input label="First Name" placeholder="First Name" data="firstName" onChange={onHandleChange} />
            </Grid.Column>
            <Grid.Column width={8} >
                <Form.Input label="Last Name" placeholder="Last Name" data="lastName" onChange={onHandleChange} />
            </Grid.Column>
            <Grid.Column width={8} >
                <Form.Input label="Email" placeholder="abc@gmail.com" data="email" onChange={onHandleChange} />
            </Grid.Column>
            <Grid.Column width={8} >
                <Form.Input label="Phone Number" placeholder="(123) 456-7890" data="contactNo" onChange={onHandleChange} />
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

export default TeacherSignup;

