import React, { useState } from "react";
import { Icon, Grid, Dropdown, Image, Feed, Card } from "semantic-ui-react";
import { Link } from "../../../functional/global-import";
import { profile } from "../../../functional/global-image-import";
import { useDispatch, useSelector } from 'react-redux';
import { storeBookDetails } from "../../../../store/actions/global.actions";

const trigger = (
  <span>
    <Image src={profile} /> Hello, Julie
  </span>
)

function Header(props) {
  const api = useSelector(state => state.auth.userDetail.role)
  const dispatch = useDispatch();

  const onHandleLogout = () => {
    dispatch(storeBookDetails(""));
  }

  return (
    <React.Fragment>
      <div className="Header">
        <Grid>
          <Grid.Column width={8} verticalAlign="middle">
            <div className="menuBar">
              <Icon name="bars" link onClick={props.onMenuClick}
              />
            </div>
          </Grid.Column>
          <Grid.Column width={8} className="profile">
            <Dropdown text='5' multiple icon='bell' title="Notifications" className="notificationDropdown">
              <Dropdown.Menu>
                <Card>
                  <Card.Content>
                    <Card.Header>Notification</Card.Header>
                  </Card.Content>
                  <Card.Content className="body">
                    <Feed>
                      <Feed.Event as={Link}>
                        <Feed.Label>
                          <Image src={profile} />
                        </Feed.Label>
                        <Feed.Content>
                          <Feed.Date content='1 day ago' />
                          <Feed.Summary>
                            You added Jenny Hess to your coworker group.
                          </Feed.Summary>
                        </Feed.Content>
                      </Feed.Event>

                      <Feed.Event as={Link}>
                        <Feed.Label>
                          <Image src={profile} />
                        </Feed.Label>
                        <Feed.Content>
                          <Feed.Date content='3 days ago' />
                          <Feed.Summary>
                            You added Molly Malone as a friend.
                          </Feed.Summary>
                        </Feed.Content>
                      </Feed.Event>

                      <Feed.Event as={Link}>
                        <Feed.Label>
                          <Image src={profile} />
                        </Feed.Label>
                        <Feed.Content>
                          <Feed.Date content='4 days ago' />
                          <Feed.Summary>
                            You added Elliot Baker to your musicians group.
                          </Feed.Summary>
                        </Feed.Content>
                      </Feed.Event>
                    </Feed>
                  </Card.Content>
                </Card>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown trigger={trigger}>
              <Dropdown.Menu className="left setting-dropdown">
                {api === "Teacher" &&
                  <Dropdown.Item
                    as={Link}
                    to="profile"
                    icon="user"
                    text="My Profile"
                  />}
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
                  to={`${process.env.REACT_APP_PUBLIC_URL === "" ? "/" : process.env.REACT_APP_PUBLIC_URL}`}
                  icon="log out"
                  text="Logout"
                  onClick={onHandleLogout}
                />
              </Dropdown.Menu>

            </Dropdown>
          </Grid.Column>
        </Grid>
      </div>
    </React.Fragment>
  );
}


export default Header;