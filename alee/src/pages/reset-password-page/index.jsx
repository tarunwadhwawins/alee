import React, { Component } from "react";
import { Button, Form, Grid, Header } from "semantic-ui-react";
import { commonFunctions, env, connect, bindActionCreators, actions,withRouter, Link } from "../../shared/functional/global-import";

class ResetPasswordPage extends Component {

  get initialState() {
    return {
      resetPassword: {  password: "", confirmPassword: "",actionPerformedBy: "admin", businessId: this.props.global.bussinessDetail.businessId, forgotPasswordToken: ""}
    };
  }
  
  constructor(props) {
    super(props);
    this.state = { ...this.initialState };
    this.validator = commonFunctions.initializeSimpleValidator();
  }


     // This function is used to get and store Token.
     getBussinessDetail = () => {
      
      const resetPassword = this.state.resetPassword;
      var forgotPasswordToken = window.location.search.replaceAll('?Token=', "");
      
      resetPassword.forgotPasswordToken = forgotPasswordToken 
      this.setState({ resetPassword }); 
    }
  
       componentDidMount() {
          this.getBussinessDetail();
        }

  // This function is used to set handle change
onHandleChange = (e, { name, value, type, checked, data }) => {

 var resetPassword = commonFunctions.onHandleChange(e, { name, value, type, checked, data }, this.state.resetPassword);
 this.setState({ resetPassword });
}

// This function is used to set handle submit
onHandleSubmit = (e) => {
  
var isFormValid = commonFunctions.onHandleFormSubmit(e, this);
if (isFormValid) {
   //  Api call login post 
   this.props.actions.apiCall({
    urls: ["UPDATEPASSWORD"], method: "PUT", data: this.state.resetPassword, onSuccess: (response) => this.onResetSuccess(response), showNotification: true
  });
}
}

onResetSuccess = (response) => {
  
  this.props.history.push(`${env.PUBLIC_URL}/`);
}
  render() {
    const { resetPassword } = this.state;
    const { api } = this.props; 
    return (
      <Grid textAlign="center" verticalAlign="middle" className="common-form">
        <Grid.Column className="cmn-shad">
          <Header as="h3">Reset Password</Header>
          <Form size="large">
               <Form.Input type="password" fluid textAlign="left" placeholder="Enter Your New Password"  label="New Password"
                 name="txtPassword" data="password" onChange={this.onHandleChange} error={this.validator.message('password', resetPassword.password, 'required|min:6')} value={resetPassword.password} />
                  <Form.Input type="password" fluid textAlign="left" placeholder="Confirm New Password"  label="Confirm New Password" name="txtConfirmPassword" data="confirmPassword" onChange={this.onHandleChange} error={this.validator.message('confirmPassword', resetPassword.confirmPassword,`required|validConfirmPassword:${resetPassword.password}`)} value={resetPassword.confirmPassword} />

            <Grid>
              <Grid.Column width={"16"} textAlign="center">
                <Button loading={api.isApiLoading} as={Link} className="orange-btn" to={`${process.env.REACT_APP_PUBLIC_URL}/passcode`} onClick={this.onHandleSubmit}>Reset Password</Button>
              </Grid.Column>
            </Grid>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
const mapStateToProps = state => {
  return {
    api: state.api,
    global: state.global,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      apiCall: bindActionCreators(actions.apiCall, dispatch),
      // storeBussinessDetail: bindActionCreators(actions.storeBussinessDetail, dispatch),
      // loginSuccess: bindActionCreators(actions.loginSuccess, dispatch)
    }
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResetPasswordPage));

