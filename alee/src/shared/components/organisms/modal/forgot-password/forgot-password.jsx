import React, { useState, useEffect, useRef } from 'react';
import { Grid, Modal, Button, Form, } from "semantic-ui-react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "../../../../functional/global-import";
import { apiCall } from "../../../../../store/actions/api.actions";
import SimpleReactValidator from 'simple-react-validator';
import { commonFunctions } from "../../../../functional/global-import";

const ForgotPasswordModal = (props) => {
    const initialStateOfForgotPassword = { email: "" }
    const [password, setPassword] = React.useState(initialStateOfForgotPassword)
    const [resetPasswordEmail, setResetPasswordEmail] = React.useState(false)
    const [resetPasswordContent, setResetPasswordContent] = React.useState(false)
    const [, forceUpdate] = useState()
    const simpleValidator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } }))
    const api = useSelector(state => state.api)
    const onHandleChange = (e, { value, data, checked, type }) => {
        setPassword({ ...password, [data]: value })
    }
    const dispatch = useDispatch();
    useEffect(() => {
        resetPasswordEmailToggle();

        if (resetPasswordContent) {
            setResetPasswordEmail(true);
            setResetPasswordContent(false);
        }
    }, [props.openModal])
    const resetPasswordEmailToggle = () => {
        setResetPasswordEmail(true);
        setResetPasswordContent(false);
    }
    useEffect(() => {

    }, [])
    const onSubmit = (e) => {
        const isFormValid = commonFunctions.onHandleFormSubmit(e, simpleValidator, forceUpdate);
        if (isFormValid) {
            dispatch(apiCall({
                urls: ["FORGOTPASSWORD"], method: "POST", data: password, onSuccess: (response) => {
                    // props.closeModal();
                    setResetPasswordEmail(false)
                    setResetPasswordContent(!resetPasswordContent);
                    setPassword(initialStateOfForgotPassword);
                    simpleValidator.current.hideMessages();
                }, showNotification: true
            }));
        }
    }
    return (
        <Modal
            open={props.openModal}
            closeIcon
            onClose={props.closeModal}
            size={"mini"}
        >
            <Modal.Header>Reset Password</Modal.Header>
            <Modal.Content>
                <Grid>
                    {resetPasswordEmail && (
                        <>
                            <Grid.Column width={16}>
                                <p className="mbt">Enter email to reset password</p>
                                <Form.Input fluid textAlign="left" name="txtEmail" placeholder="E-mail address"
                                    data="email" onChange={onHandleChange} value={password.email}
                                    error={simpleValidator.current.message('email', password.email, 'required|email')}
                                />
                            </Grid.Column>
                            <Grid.Column width={16}><Button className="primaryBtn" onClick={onSubmit} loading={api.isApiLoading}>Send</Button></Grid.Column>
                        </>
                    )}
                    {resetPasswordContent && (
                        <>
                            <Grid.Column width={16}>
                                <p className="mbt">
                                    A reset password link has been sent to your registered email
                                    account. Please click the reset password link to set your
                                    new password.
                                </p>
                                <p className="mbt">Not received the email yet?</p>
                                <p>Please check your spam folder, or
                                    <Link className="orange-color" onClick={resetPasswordEmailToggle}> try again.</Link>
                                </p>
                            </Grid.Column>
                        </>
                    )}
                </Grid>
            </Modal.Content>
        </Modal>
    );
}

export default ForgotPasswordModal;
