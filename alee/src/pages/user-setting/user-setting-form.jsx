import React, { Component } from 'react';
import { connect, bindActionCreators, actions, Notifications} from "../../shared/functional/global-import";

class UserSettingForm extends Component {
    render() {
        return (

            <React.Fragment>
                <div>UserSettingForm</div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        api: state.api,
        global: state.global,
        auth: state.auth
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            apiCall: bindActionCreators(actions.apiCall, dispatch),
            storeGlobalCodes: bindActionCreators(actions.storeGlobalCodes, dispatch),
            showNotification: bindActionCreators(Notifications.show, dispatch)
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserSettingForm);
