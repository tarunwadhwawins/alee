import React, { Component } from 'react';
import { connect, Notifications } from "../../../functional/global-import";

class NotificationAlert extends Component {
    render() {
        return (
            <div>
                <Notifications notifications={this.props.notifications}></Notifications>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
      notifications: state.notifications
    };
  };
  export default connect(mapStateToProps, null)(NotificationAlert);
  