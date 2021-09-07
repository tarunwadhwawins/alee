import React, { useState, useEffect } from "react";
import { Grid, Modal, Button, Form, Dimmer, Loader } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "../../../../../../src/store/actions/api.actions";

function AddSubAdmin(props) {
  debugger
  const auth = useSelector((state) => state.auth);
  const api = useSelector((state) => state.api);
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

  const onHandleSubmit = () => {
    if (props.modalType === "ADD") {
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
    } else {
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
  };

  const closeModal = () => {
    props.closeModal();
    setSubAdmin(initialAddValues);
  };
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
                    />
                  </Grid.Column>

                  <Grid.Column>
                    <Form.Input
                      label="Password"
                      data="password"
                      type="password"
                      value={subAdmin.password}
                      onChange={onHandleChange}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Input
                      label="Confirm Password"
                      value={subAdmin.confirmPassword}
                      data="confirmPassword"
                      type="password"
                      onChange={onHandleChange}
                    />
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
