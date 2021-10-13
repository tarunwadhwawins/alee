import React, { useState, useEffect, useRef } from "react";
import { Grid, Modal, Button, Form, Dimmer, Loader, Icon } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "../../../../../../src/store/actions/api.actions";
import SimpleReactValidator from 'simple-react-validator';
import { Notifications } from "../../../../functional/global-import";
import { commonFunctions } from "../../../../functional/global-import";

function AddSubAdmin(props) {
  const auth = useSelector((state) => state.auth);
  const api = useSelector((state) => state.api);
  const [, forceUpdate] = useState()
  const [iconToggle, setIconToggle] = useState(false);
  const [iconToggleConfirm, setIconToggleConfirm] = useState(false);

  const simpleValidator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } }));
  const initialAddValues = {
    email: "",
    password: "",
    confirmPassword: "",
    subAdminId: null,
    userName: "",
    isActive: true,
    userId: auth.userDetail.userId,
    actionPerformedBy: "string",
    actionPerformedDate: "2021-08-11T04:52:29.657Z",
  };
  const [subAdmin, setSubAdmin] = useState(initialAddValues);
  const dispatch = useDispatch();
  const onHandleChange = (e, { data, value, checked, type }) => {
    setSubAdmin({ ...subAdmin, [data]: value });
    if (type === "checkbox") {
      setSubAdmin({ ...subAdmin, [data]: checked });
    }
  };
  useEffect(() => {
    if (props.modalType === "EDIT") {
      editSubAdmin();
    }
  }, [props.openModal]);
  const editSubAdmin = () => {
    if (props.editDetail) {
      const {
        userName,
        email,
        password,
        isActive,
        confirmPassword,
        subAdminId,
      } = props.editDetail;
      setSubAdmin({
        ...subAdmin,
        userName: userName,
        confirmPassword: confirmPassword,
        password: password,
        email: email,
        isActive: isActive,
        subAdminId: subAdminId,
      });
    }
  };
  const onHandleSubmit = (e) => {
    ;
    // const formValid = simpleValidator.current.allValid()
    // if (!formValid) {
    //   simpleValidator.current.showMessages();
    //   forceUpdate(true);
    // }

    const isFormValid = commonFunctions.onHandleFormSubmit(e, simpleValidator, forceUpdate);
    if (isFormValid) {
      if (subAdmin.password !== subAdmin.confirmPassword) {
        dispatch(Notifications.show({ title: "Error", message: 'Password and confirm password not matched.', position: 'br', autoDismiss: 2 }, "error"))
      }
      if (props.modalType === "ADD" && (subAdmin.password === subAdmin.confirmPassword) && (subAdmin.password !== "" && subAdmin.confirmPassword !== "")) {
        dispatch(
          apiCall({
            urls: ["SUBADMINREGISTRATION"],
            method: "POST",
            data: subAdmin,
            onSuccess: (response) => {

              closeModal();
              props.GridReload();
              setSubAdmin(initialAddValues);

            },
            showNotification: true,
          })
        );
      } if (props.modalType !== "ADD") {
        dispatch(
          apiCall({
            urls: ["UPDATESUBADMIN"],
            method: "PUT",
            data: subAdmin,
            onSuccess: (response) => {
              closeModal();
              props.GridReload();
            },
            showNotification: true,
          })
        );
      }
    }
  };
  const closeModal = () => {
    simpleValidator.current.hideMessages();
    props.closeModal();
    setSubAdmin(initialAddValues);
  };

  const passwordToggle = () => {
    setIconToggle(!iconToggle)
  }
  const confirmPasswordToggle = () => {
    setIconToggleConfirm(!iconToggleConfirm)
  }

  return (
    <Modal
      open={props.openModal}
      onClose={closeModal}
      closeOnDimmerClick={false}
      size="small"
    >
      {api.isApiLoading && (
        <Dimmer active inverted>
          <Loader />
        </Dimmer>
      )}
      <Modal.Header>{subAdmin.subAdminId > 0 ? "Edit Sub-Admin" : "Add Sub-Admin"}</Modal.Header>
      <Modal.Content scrolling>
        <Modal.Description>
          <Form>
            <Grid columns="2">
              <Grid.Column>
                <Form.Input
                  label="Name"
                  data="userName"
                  value={subAdmin.userName}
                  onChange={onHandleChange}
                  error={simpleValidator.current.message('Name', subAdmin.userName, 'required')}
                />
              </Grid.Column>
              {props.modalType === "ADD" && (
                <>
                  <Grid.Column>
                    <Form.Input
                      label="Email"
                      data="email"
                      value={subAdmin.email}
                      onChange={onHandleChange}
                      error={simpleValidator.current.message('email', subAdmin.email, 'required|email')}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Input
                      label="Password"
                      data="password"
                      placeholder="********"
                      type={iconToggle ? "" : "password"}
                      value={subAdmin.password}
                      onChange={onHandleChange}
                      error={simpleValidator.current.message('password', subAdmin.password, 'required|min:6|max:150')} />
                    {!iconToggle && <Icon title="Show password" name="eye" className="primary-color passwordIcon" onClick={passwordToggle} />}
                    {iconToggle && <Icon title="Hide Password" name="eye slash" className="primary-color passwordIcon" onClick={passwordToggle} />}
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Input
                      label="Confirm Password"
                      value={subAdmin.confirmPassword}
                      data="confirmPassword"
                      placeholder="********"
                      type={iconToggleConfirm ? "" : "password"}
                      onChange={onHandleChange}
                      error={simpleValidator.current.message('confirmPassword', subAdmin.confirmPassword, 'required|min:6|max:150')} />
                    {!iconToggleConfirm && <Icon title="Show password" name="eye" className="primary-color passwordIcon" onClick={confirmPasswordToggle} />}
                    {iconToggleConfirm && <Icon title="Hide Password" name="eye slash" className="primary-color passwordIcon" onClick={confirmPasswordToggle} />}
                  </Grid.Column>
                </>
              )}
              <Grid.Column className="status">
                <p>Status</p>
                <div className="statusToggle">
                  <span>Inactive</span>
                  <Form.Checkbox
                    label="Active"
                    toggle
                    className="commonToggle"
                    onChange={onHandleChange}
                    data="isActive"
                    checked={subAdmin.isActive}
                  />
                </div>
              </Grid.Column>
            </Grid>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button className="secondaryBtn" onClick={() => closeModal()}>
          Cancel
        </Button>
        <Button
          className="primaryBtn"
          onClick={onHandleSubmit}
          loading={api.isApiLoading}>
          {props.modalType === "ADD" ? "Save" : "Update"}
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
export default AddSubAdmin;
