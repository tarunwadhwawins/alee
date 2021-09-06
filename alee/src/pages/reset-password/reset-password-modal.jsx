import React, { useState, useEffect } from 'react';
import { Grid, Modal, Button, Form } from "semantic-ui-react";
import { useDispatch } from 'react-redux';
import { apiCall } from "../../store/actions/api.actions";

const ResetPasswordModal = (props) => {

    const initialStateOfForgotPassword = { email: "" }
    const [password, setPassword] = React.useState(initialStateOfForgotPassword)
    const [resetPasswordEmail, setResetPasswordEmail] = React.useState(false)
    const [resetPasswordContent, setResetPasswordContent] = React.useState(false)

    const onHandleChange = (e, { value, data, checked, type }) => {
        setPassword({ ...password, [data]: value })
    }
    const dispatch = useDispatch();

    useEffect(() => {
        resetPasswordEmailToggle();
        return () => {

        }
    }, [])
    const resetPasswordEmailToggle = () => {
        setResetPasswordEmail(true);
        setResetPasswordContent(false);
    }
    // const onSubmit = () => {
    //     dispatch(apiCall({
    //         urls: ["FORGOTPASSWORD"], method: "POST", data: password, onSuccess: (response) => {
    //             // props.closeModal();
    //             setResetPasswordEmail(false)
    //             setPassword(initialStateOfForgotPassword);
    //         }, showNotification: true
    //     }));
    // }

    const onSubmit = () => {

    }
    return (
        <Modal
            open={props.openModal}
            closeIcon
            onClose={props.closeModalToLogin}
            size={"mini"}
        >
            <Modal.Header>Reset Password</Modal.Header>
            <Modal.Content>
                <Grid>
                    <p>Password has been changed successfully</p>
                </Grid>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={props.closeModalToLogin}>Login</Button>
            </Modal.Actions>
        </Modal>
    );
}

export default ResetPasswordModal;
