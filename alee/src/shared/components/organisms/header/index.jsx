import React, { Component } from "react";
import { Menu, Icon, List, Grid, Dropdown, Container, Checkbox, Image } from "semantic-ui-react";
import { Link, env, connect, commonFunctions, bindActionCreators, actions, withRouter } from "../../../functional/global-import";
import { profile } from "../../../../shared/functional/global-image-import";

const trigger = (
  <span>
    <Image src={profile}/> Hello, Julie
  </span>
)



class Header extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="Header">
          <Grid>
            <Grid.Column width={8} verticalAlign="middle">
              <div className="menuBar">
                <Icon name="long arrow alternate left" link onClick={this.props.onMenuClick}/>
              </div>
            </Grid.Column>
            <Grid.Column width={8} className="profile">
                <Dropdown trigger={trigger}>
                  <Dropdown.Menu className="left setting-dropdown">
                    
                    <Dropdown.Item
                      as={Link}
                      to="profile"
                      icon="user"
                      text="My Profile"
                    />
                    <Dropdown.Item
                      icon="repeat"
                      text="Change Password"
                    />
                    <Dropdown.Item
                      icon="unlock alternate"
                      text="Forget Password"
                    />
                    <Dropdown.Item
                      as={Link}
                      to={`${process.env.REACT_APP_PUBLIC_URL === ""? "/": process.env.REACT_APP_PUBLIC_URL}`}
                      icon="log out"
                      text="Logout"
                    />
                  </Dropdown.Menu>
                  
                </Dropdown>
            </Grid.Column>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}


export default Header;