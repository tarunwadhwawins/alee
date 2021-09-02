import React, { useState } from 'react';
import { Button, Form, Grid, Header } from "semantic-ui-react";
import { apiCall } from "../../store/actions/api.actions";

function ResetPassword(props) {
    const initialPassword = { email: "", password: "", confirmPassword: "", token: "" }
    const [password, setPassword] = useState(initialPassword);

    const onHandleChange = (e, { value, data }) => {
        setPassword({ ...password, [data]: value })
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

                            <Form.Input type="password" fluid textAlign="left" placeholder="Enter Your New Password" label="New Password"
                                name="txtPassword" data="password" onChange={onHandleChange} value={password.password} />
                            <Form.Input type="password" fluid textAlign="left" placeholder="Confirm New Password" label="Confirm New Password" name="txtConfirmPassword" data="confirmPassword" onChange={onHandleChange} value={password.confirmPassword} />
                        </Grid.Column>
                        <Grid.Column width={16} textAlign="right">
                            <Button className="primaryBtn">Save</Button>
                        </Grid.Column>
                    </Grid>
                </Form>

            </div>
        </div>


    );
}

export default ResetPassword;