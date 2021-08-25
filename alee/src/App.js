import { Suspense } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { NoTemplateRoutesConfing, AuthenticateTemplateRoutesConfing } from "./config/routes";
import PrivateRoute from "./shared/functional/private-route";
import './assets/scss/app.scss';
import 'semantic-ui-css/semantic.min.css';
import { NotificationAlert, AuthenticateUserTemplate } from './shared/components';
import AppContainer from './app-container';
import * as env from "./config/env.config";
import { Loader } from 'semantic-ui-react';

function App(props) {

  return (
    <div className="app">

      <Router>
        <AppContainer>
          <Suspense fallback={<></>}>
            <Switch>
              {
                NoTemplateRoutesConfing.map((route, i) => {
                  const Component = route.component;
                  return route.private ?
                    // handle private routes of the application   userTypes={route.userTypes}
                    <PrivateRoute key={i} exact={route.exact} path={route.path} render={(props) => <Component {...props} />} />
                    :
                    // handle public routes of the application
                    <Route key={i} exact={route.exact} path={route.path} render={(props) => <Component {...props} />} />
                })
              }
              {/* <Route path={`${env.PUBLIC_URL}/:path?/:path?`} exact> */}
              <AuthenticateUserTemplate>
                <Suspense fallback={<Loader active />}>
                  <Switch>
                    {AuthenticateTemplateRoutesConfing.map((route, i) => {
                      const Component = route.component;
                      return route.private ?
                        // handle private routes of the application   userTypes={route.userTypes}
                        <PrivateRoute key={i} exact={route.exact} path={route.path} render={(props) => <Component {...props} />} />
                        :
                        // handle public routes of the application
                        <Route key={i} exact={route.exact} path={route.path} render={(props) => <Component {...props} />} />
                    })
                    }
                  </Switch>

                </Suspense>
              </AuthenticateUserTemplate>
              {/* </Route> */}
            </Switch>
          </Suspense>
        </AppContainer>
      </Router>
      <NotificationAlert></NotificationAlert>

    </div>
  );

}

export default App;
