import React, { Component } from "react";
import { Grid, Header, Button, Form, Image } from "semantic-ui-react";
import { Link, env } from "../../shared/functional/global-import";
import { Logo } from "../../shared/functional/global-image-import";

class LoginForm extends Component {

  constructor() {
    super();
    localStorage.setItem("BookType","" );
  }


  buttonChange = (userType)=>{
    localStorage.setItem("Usertype",userType );

    this.setState({
      activeButton:userType
    })
  }


  render() {
  
    return (
        <div className="signIn">
          <div className="signInner">
            <Form>
              <Grid>
                <Grid.Column width={6} className="p-0">
                  <div className="signInnerLeft">
                    <Image src={Logo}/>
                    <p>Don't have an account?  <Link to={`${env.PUBLIC_URL}/sign-up`} className="primary-color"> Sign Up</Link> </p>
                  </div>
                </Grid.Column>
                <Grid.Column  width={10} className="signInnerRight">
                  <Grid>
                    <Grid.Column width={16}>
                        <Header as="h2">Sign In</Header>
                    </Grid.Column>
                    <Grid.Column width={16}>
                      <Form.Input label="Email" placeholder="abc@gmail.com"/>
                    </Grid.Column>
                    <Grid.Column width={16} >
                      <Form.Input label="Password" placeholder="******"/>
                    </Grid.Column>
                    <Grid.Column width={7} >
                    <Button as={Link} to={`${env.PUBLIC_URL}/profile-setup`} className="primaryBtn" onClick={()=>this.buttonChange("teacher")}>Sign Up</Button>
                    </Grid.Column>
                    <Grid.Column width={9} textAlign="right" verticalAlign="middle">
                      <Link to="" className="primary-color">Forget Password</Link>
                    </Grid.Column>
                  </Grid>
                </Grid.Column>
              </Grid>
            </Form>
          </div>
        </div>
    );
  }
}

export default LoginForm;
