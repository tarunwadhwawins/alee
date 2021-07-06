// this component is note in use avoid it  

import React, { Component } from "react";
import { Button, Grid, Form, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { commonFunctions } from "../../shared/functional/global-import";
import { withRouter } from "react-router-dom";

class ResetPassword extends Component {
    // Put all key & values that need to reset on form submit and reset form.
    get initialState() {
        return {
            forgotPassword: { businessId: this.props.global.bussinessDetail.businessId, businessLocationId: 1, email: "", password: "", remember: false, createdBy: "admin" }
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            ...this.initialState,
            resetpassworddetil: false, resetpasswordmain: true
        };
        this.validator = commonFunctions.initializeSimpleValidator();

    }
    // This function is used to set handle change
    onHandleChange = (e, { name, value, type, checked, data }) => {
        e.preventDefault();
        var obj = commonFunctions.onHandleChange(e, { name, value, type, checked, data }, this.state.forgotPassword);
        this.setState({ obj });
    }

    // This function is used to set handle submit
    onHandleSubmit = (e) => {

        var isFormValid = commonFunctions.onHandleFormSubmit(e, this);
        if (isFormValid) {
            this.props.history.push('/passcode');
        }
    };

    showresetdetails = () => {
        this.setState({
            resetpassworddetil: true,
            resetpasswordmain: false
        });
    };
    showmain = () => {
        this.setState({
            resetpassworddetil: false,
            resetpasswordmain: true
        });
    };


    render() {
        const { forgotPassword } = this.state;
        return (
            <Modal
                open={this.props.openModal}
                closeIcon
                onClose={this.props.closeModal}
                size={"mini"}
            >
                <Modal.Header>Reset Password</Modal.Header>
                <Modal.Content>
                    <Grid>
                        {this.state.resetpasswordmain && (
                            <>
                                <Grid.Column width={16}>
                                    <p className="mbt">Enter email to reset password</p>
                                    <Form.Input fluid textAlign="left" name="txtEmail" label="Email" placeholder="E-mail address" error={this.validator.message("email", forgotPassword.email, "required|email")} data="email" onChange={this.onHandleChange} value={forgotPassword.email} />
                                </Grid.Column>
                                <Grid.Column width={16}><Button className="orange-btn" onClick={this.onHandleSubmit}>Send</Button></Grid.Column>
                            </>
                        )}
                        {this.state.resetpassworddetil && (
                            <>
                                <Grid.Column width={16}>
                                    <p className="mbt">
                                        A reset password link has been sent to your registered email
                                        account. Please click the reset password link to set your
                                        new password.
                  </p>
                                    <p className="mbt">Not received the email yet?</p>
                                    <p>Please check your spam folder, or
                    <Link className="orange-color" onClick={this.showmain}> try again.</Link>
                                    </p>
                                </Grid.Column>
                            </>
                        )}

                        {/* <Grid.Column width={16} textAlign="center">
              <Button className="blue-btn" onClick={this.props.closeModal}>
                Cancel
              </Button>{" "}
              &nbsp; &nbsp;
              <Button
                className="orange-btn"
                as={Link}
                to={`${process.env.REACT_APP_PUBLIC_URL}/`}
                onClick={this.props.closeModal}
              >
                Confirm
              </Button>
            </Grid.Column> */}
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
}

export default withRouter(ResetPassword);
