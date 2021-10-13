import React, { useState, useEffect } from "react";
import { Icon, Grid, Dropdown, Image, Feed, Card } from "semantic-ui-react";
import { Link } from "../../../functional/global-import";
import { profile } from "../../../functional/global-image-import";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../../../store/actions/auth.actions";
import { env } from "../../../functional/global-import";
import { commonFunctions } from "../../../functional/global-import";
import ChangePassword from "../modal/change-password/change-password";
import { apiCall } from "../../../../store/actions/api.actions";

function Header(props) {
  const [forgotPasswordStatus, setForgotPasswordStatus] = useState(false)
  const [notification, setNotification] = useState([])
  const userId = useSelector(state => state.auth.userDetail.userId)
  const image = useSelector(state => state.auth.userDetail.image);
  const name = useSelector(state => state.auth.userDetail.name);
  const trigger = (
    <span> <Image src={commonFunctions.concatenateImageWithAPIUrl(image)} />{name} </span>)
  const api = useSelector(state => state.auth.userDetail.role);
  const isPublished = useSelector(state => state.auth.userDetail.isPublished);
  const teacherId = useSelector(state => state.auth.userDetail.teacherId);
  const dispatch = useDispatch();
  const onHandleLogout = () => {
    dispatch(logout());
  }
  const forgetPassword = () => {
    setForgotPasswordStatus(!forgotPasswordStatus);
  };
  const GetNotification = () => {
    dispatch(apiCall({
      urls: ["GETNOTIFICATIONS"], method: "GET", data: { userId: userId }, onSuccess: (response) => {
        debugger
        setNotification(response)
      }
    }))
  }
  useEffect(() => {
    GetNotification();
  }, [])
  return (
    <React.Fragment>
      <div>
        <div className="Header">
          <Grid>
            <Grid.Column width={8} verticalAlign="middle">
              <div className="menuBar">
                <Icon name="bars" link onClick={props.onMenuClick}
                />
              </div>
            </Grid.Column>
            <Grid.Column width={8} className="profile">
              <Dropdown text={notification.length} multiple icon='bell' title="Notifications" className="notificationDropdown">
                <Dropdown.Menu>
                  <Card className="notification">
                    <Card.Content>
                      <Card.Header>Notification</Card.Header>
                    </Card.Content>
                    <Card.Content className="body">
                      <Feed>
                        {notification.map((item) =>
                          <Feed.Event as={Link}>
                            <Feed.Label>
                              <Image src={commonFunctions.concatenateImageWithAPIUrl(item.image)} />
                            </Feed.Label>
                            <Feed.Content>
                              <Feed.Date content={item.time} />
                              <Feed.Summary>
                                {item.message}
                              </Feed.Summary>
                            </Feed.Content>
                          </Feed.Event>
                        )
                        }
                        {/* <Feed.Event as={Link}>
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
                        </Feed.Event> */}
                      </Feed>
                    </Card.Content>
                  </Card>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown trigger={trigger}>
                <Dropdown.Menu className="left setting-dropdown">
                  {api === "School" &&
                    <Dropdown.Item
                      as={Link}
                      to="profiles"
                      icon="user"
                      text="Manage Profile"
                    />}
                  {api === "Teacher" &&
                    <Dropdown.Item
                      as={Link}
                      to={isPublished ? `${env.PUBLIC_URL}/profile-preview/${teacherId}` : `${env.PUBLIC_URL}/profile`}
                      icon="user"
                      text="My Profile"
                    />
                  }

                  <Dropdown.Item
                    icon="repeat"
                    text="Change Password"
                    onClick={forgetPassword}
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
        <ChangePassword openModal={forgotPasswordStatus} closeModal={forgetPassword} />
      </div>
    </React.Fragment>
  );
}


export default Header;