import React from "react";
import { Redirect, Route } from "react-router-dom";
import { env } from "../functional/global-import";
import { connect } from "./global-import";
const PrivateRoute = ({ render: Component, auth, global, userTypes, ...rest }) => {
  let isRouteAllowed = false;
  if (rest.path.indexOf('dashboard') > 0) {
    isRouteAllowed = (auth.loggedIn && auth.loggedIn.token) ? true : false;
  }
  else {
    isRouteAllowed = (auth.loggedIn && auth.loggedIn.token && auth.userDetail) ? true : false;
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        return isRouteAllowed ? <Component {...props} /> : <Redirect to={(auth.loggedIn && auth.loggedIn.token) ?`${env.PUBLIC_URL}/dashboard` : `${env.PUBLIC_URL}/`} />
      }
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    global: state.global,
  };
};
export default connect(mapStateToProps, null)(PrivateRoute);
