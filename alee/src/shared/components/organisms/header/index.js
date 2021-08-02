import React ,{useState} from "react";
import { Icon, Grid, Dropdown, Image } from "semantic-ui-react";
import { Link } from "../../../functional/global-import";
import { profile } from "../../../functional/global-image-import";

const trigger = (
  <span>
    <Image src={profile}/> Hello, Julie
  </span>
)

function Header(props) {
  	const [activeButton, setActiveButton] = useState(localStorage.getItem("Usertype")?localStorage.getItem("Usertype"):"school")
    localStorage.setItem("BookType","" );
  
    return (
      <React.Fragment>
        <div className="Header">
          <Grid>
            <Grid.Column width={8} verticalAlign="middle">
              <div className="menuBar">
                <Icon name="long arrow alternate left" link onClick={props.onMenuClick}
                />
              </div>
            </Grid.Column>
            <Grid.Column width={8} className="profile">
                <Dropdown trigger={trigger}>
                  <Dropdown.Menu className="left setting-dropdown">
                  { localStorage.getItem("Usertype") === "teacher" &&	
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


export default Header;