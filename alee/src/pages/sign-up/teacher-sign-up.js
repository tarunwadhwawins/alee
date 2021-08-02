import React, { useState } from "react";
import { Grid, Button, Form } from "semantic-ui-react";
import { Link } from "../../shared/functional/global-import";
import { bindActionCreators, connect, actions } from "../../shared/functional/global-import";

function TeacherSignup(props) {

    const [teacherForm, setTeacherForm] = useState({ firstName: "", lastName: "", email: "", contactNo: "", password: "", confirmPassword: "" })

    const onHandleChange = (e, { value, data }) => {
        setTeacherForm({ ...teacherForm, [data]: value })
    }

    const onsubmit = () => {
        props.actions.apiCall({
            urls: ["TEACHERREGISTRATION"], method: "POST", data: teacherForm, onSuccess: (response) => {

            }
        });
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
                <Form.Input label="Password" placeholder="********" data="password" onChange={onHandleChange} />
            </Grid.Column>
            <Grid.Column width={8} >
                <Form.Input label="Confirm Password" placeholder="********" data="confirmPassword" onChange={onHandleChange} />
            </Grid.Column>
            <Grid.Column width={10} verticalAlign="middle">
                <Form.Checkbox label='Remember me' />
            </Grid.Column>
            <Grid.Column width={6} >
                <Button as={Link} to="profile" className="primaryBtn" onClick={onsubmit}>Sign Up</Button>
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
export default connect(mapStateToProps, mapDispatchToProps)(TeacherSignup);

