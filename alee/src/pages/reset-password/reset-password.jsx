import React, { useState } from 'react';
import { Button, Form, Grid, Header } from "semantic-ui-react";
import { apiCall } from "../../store/actions/api.actions";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import ResetPasswordModal from './reset-password-modal'
import { useHistory } from "react-router-dom";
import { env } from "../../shared/functional/global-import";

function ResetPassword(props) {
    debugger
    const search = useLocation().search;
    const token = new URLSearchParams(search).get('token');
    const email = new URLSearchParams(search).get('emailId');
    const initialPassword = { email: email, password: "", confirmPassword: "", token: (token.trim()) }
    const [password, setPassword] = useState(initialPassword);
    const [resetPasswordStatus, setResetPasswordStatus] = React.useState(false)

    const dispatch = useDispatch();
    let history = useHistory();

    const onHandleChange = (e, { value, data }) => {
        setPassword({ ...password, [data]: value })
    }
    const onSubmit = () => {
        dispatch(apiCall({
            urls: ["RESETPASSWORD"], method: "POST", data: password, onSuccess: (response) => {
                // history.push(`${env.PUBLIC_URL}`);
                resetPasswordToggle();
                setPassword(initialPassword)
            }, showNotification: true
        }))
    }
    const resetPasswordToggle = () => {
        setResetPasswordStatus(!resetPasswordStatus);
    };
    const closeModalToLogin = () => {
        setResetPasswordStatus(!resetPasswordStatus);
        history.push(`${env.PUBLIC_URL}`);
    }
    return (
        <div className="signIn">
            <div className="signInner resetPassword">
                <Form>
                    <Grid>
                        <Grid.Column width={16}>
                            <Header as="h3">Reset Password</Header>
                        </Grid.Column>
                        <Grid.Column width={16}>
                            <Form.Input type="password" fluid textAlign="left" placeholder="Enter Your New Password" label="New Password" name="txtPassword" data="password" onChange={onHandleChange} value={password.password} />
                            <Form.Input type="password" fluid textAlign="left" placeholder="Confirm New Password" label="Confirm New Password" name="txtConfirmPassword" data="confirmPassword" onChange={onHandleChange} value={password.confirmPassword} />
                        </Grid.Column>
                        <Grid.Column width={16} textAlign="right">
                            <Button className="primaryBtn" onClick={onSubmit}>Save</Button>
                        </Grid.Column>
                    </Grid>
                </Form>

            </div>
            <ResetPasswordModal openModal={resetPasswordStatus} closeModalToLogin={closeModalToLogin} />
        </div>
    );
}

export default ResetPassword;