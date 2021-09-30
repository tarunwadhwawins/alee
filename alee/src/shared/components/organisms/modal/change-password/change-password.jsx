import React, { useState, useEffect, useRef } from 'react';
import { Grid, Modal, Button, Form, Icon } from "semantic-ui-react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "../../../../functional/global-import";
import { apiCall } from "../../../../../store/actions/api.actions";
import SimpleReactValidator from 'simple-react-validator';
import { commonFunctions, Notifications } from "../../../../functional/global-import";

const ChangePassword = (props) => {
    const userEmail = useSelector(state => state.auth.userDetail.email)
    const initialStateOfChangePassword = { email: userEmail, existingPassword: "", newPassword: "", confirmPassword: "" }
    const [password, setPassword] = React.useState(initialStateOfChangePassword)
    const [iconToggle, setIconToggle] = React.useState(false)
    const [iconToggleNew, setIconToggleNew] = React.useState(false)
    const [iconToggleConfirm, setIconToggleConfirm] = React.useState(false)

    const [, forceUpdate] = useState()
    const simpleValidator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } }))
    const api = useSelector(state => state.api)
    const onHandleChange = (e, { value, data, checked, type }) => {
        setPassword({ ...password, [data]: value })
    }
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        const isFormValid = commonFunctions.onHandleFormSubmit(e, simpleValidator, forceUpdate);
        if (isFormValid && (password.newPassword === password.confirmPassword) && (password.newPassword !== "" && password.confirmPassword !== "") && (password.existingPassword !== password.newPassword)) {
            dispatch(apiCall({
                urls: ["CHANGEPASSWORD"], method: "POST", data: password, onSuccess: (response) => {
                    props.closeModal();
                    setPassword(initialStateOfChangePassword);
                    simpleValidator.current.hideMessages();
                }, showNotification: true
            }));
        } if (password.newPassword !== password.confirmPassword) {
            dispatch(Notifications.show({ title: "Error", message: 'Password and confirm password not matched.', position: 'br', autoDismiss: 2 }, "error"))
        } if (password.existingPassword === password.newPassword) {
            dispatch(Notifications.show({ title: "Error", message: 'Current password and new password can not be same.', position: 'br', autoDismiss: 2 }, "error"))
        }
    }
    const currentToggle = () => {
        setIconToggle(!iconToggle)
    }
    const newPasswordToggle = () => {
        setIconToggleNew(!iconToggleNew)
    }
    const confirmPasswordToggle = () => {
        setIconToggleConfirm(!iconToggleConfirm)
    }
    return (
        <Modal
            open={props.openModal}
            closeIcon
            onClose={props.closeModal}
            size={"mini"}
        >
            <Modal.Header>Change Password</Modal.Header>
            <Modal.Content>
                <Grid>
                    <>
                        <Grid.Column width={16}>
                            <Form.Input label="Current Password" fluid textAlign="left" name="existingPassword" placeholder="Please enter your current password" type={iconToggle ? "" : "password"}
                                data="existingPassword" onChange={onHandleChange} value={password.existingPassword}
                                error={simpleValidator.current.message('existingPassword', password.existingPassword, 'required|min:6|max:150|existingPassword')}
                            />
                            {!iconToggle && <Icon title="Show password" name="eye" className="primary-color passwordIcon" onClick={currentToggle} />}
                            {iconToggle && <Icon title="Hide Password" name="eye slash" className="primary-color passwordIcon" onClick={currentToggle} />}
                        </Grid.Column>
                        <Grid.Column width={16}>
                            <Form.Input fluid label="New Password" textAlign="left" name="newPassword" placeholder="Please enter your new password" type={iconToggleNew ? "" : "password"}
                                data="newPassword" onChange={onHandleChange} value={password.newPassword}
                                error={simpleValidator.current.message('newPassword', password.newPassword, 'required|min:6|max:150|newPassword')}
                            />
                            {!iconToggleNew && <Icon title="Show password" name="eye" className="primary-color passwordIcon" onClick={newPasswordToggle} />}
                            {iconToggleNew && <Icon title="Hide Password" name="eye slash" className="primary-color passwordIcon" onClick={newPasswordToggle} />}
                        </Grid.Column>
                        <Grid.Column width={16}>
                            <Form.Input fluid label="Confirm New Password" textAlign="left" name="confirmPassword" placeholder="Please enter confirm new password" type={iconToggleConfirm ? "" : "password"}
                                data="confirmPassword" onChange={onHandleChange} value={password.confirmPassword}
                                error={simpleValidator.current.message('confirmPassword', password.confirmPassword, 'required|min:6|max:150|confirmPassword')}
                            />
                            {!iconToggleConfirm && <Icon title="Show password" name="eye" className="primary-color passwordIcon" onClick={confirmPasswordToggle} />}
                            {iconToggleConfirm && <Icon title="Hide Password" name="eye slash" className="primary-color passwordIcon" onClick={confirmPasswordToggle} />}
                        </Grid.Column>
                        <Grid.Column width={16} textAlign="right"><Button className="primaryBtn" onClick={onSubmit} loading={api.isApiLoading}>Update</Button></Grid.Column>
                    </>
                </Grid>
            </Modal.Content>
        </Modal>
    );
}

export default ChangePassword;
