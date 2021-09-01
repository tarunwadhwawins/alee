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
        <Grid textAlign="center" verticalAlign="middle" className="common-form">
            <Grid.Column className="cmn-shad">
                <Header as="h3">Reset Password</Header>
                <Form size="large">
                    <Form.Input type="password" fluid textAlign="left" placeholder="Enter Your New Password" label="New Password"
                        name="txtPassword" data="password" onChange={onHandleChange} value={password.password} />
                    <Form.Input type="password" fluid textAlign="left" placeholder="Confirm New Password" label="Confirm New Password" name="txtConfirmPassword" data="confirmPassword" onChange={onHandleChange} value={password.confirmPassword} />

                    <Grid>
                        <Grid.Column width={"16"} textAlign="center">
                            {/* <Button loading={api.isApiLoading} as={Link} className="orange-btn" to={`${process.env.REACT_APP_PUBLIC_URL}/passcode`} onClick={onHandleSubmit}>Reset Password</Button> */}
                        </Grid.Column>
                    </Grid>
                </Form>
            </Grid.Column>
        </Grid>
    );
}

export default ResetPassword;