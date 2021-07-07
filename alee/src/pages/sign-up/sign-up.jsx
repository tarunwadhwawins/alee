import React, { Component } from "react";
import { Grid, Header, Button, Form, Image } from "semantic-ui-react";
import { Link, env } from "../../shared/functional/global-import";
import { Logo } from "../../shared/functional/global-image-import";

class SignupForm extends Component {

  constructor() {
    super();
    this.state = {
      activeButton : localStorage.getItem("Usertype")?localStorage.getItem("Usertype"):"teacher"
    };
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
                    <p>Have an account?  <Link  to={`${env.PUBLIC_URL}/`} className="primary-color"> Sign In</Link></p>
                  </div>
                </Grid.Column>
                <Grid.Column  width={10} className="signInnerRight">
                  <Grid>
                    <Grid.Column width={8}>
                        <Header as="h2">Sign up</Header>
                    </Grid.Column>
					<Grid.Column width={8} textAlign="right">
            <Button.Group >
              <Button className={this.state.activeButton==='teacher'?'active':''} onClick={()=>this.buttonChange("teacher")}>Teacher</Button>
              <Button className={this.state.activeButton==='admin'?'active':''} onClick={()=>this.buttonChange("admin")}>Admin</Button>
            </Button.Group>
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Form.Input label="First Name" placeholder="First Name"/>
                    </Grid.Column>
                    <Grid.Column width={8} >
                      <Form.Input label="Last Name" placeholder="Last Name"/>
                    </Grid.Column>
					<Grid.Column width={8} >
                      <Form.Input label="Email" placeholder="abc@gmail.com"/>
                    </Grid.Column>
					<Grid.Column width={8} >
                      <Form.Input label="Phone Number" placeholder="(123) 456-7890"/>
                    </Grid.Column>
					<Grid.Column width={8} >
                      <Form.Input label="Password" placeholder="********"/>
                    </Grid.Column>
					<Grid.Column width={8} >
                      <Form.Input label="Confirm Password" placeholder="********"/>
                    </Grid.Column>
                    <Grid.Column width={16} >
                    { localStorage.getItem("Usertype") === "admin" &&	  <Button as={Link} to="scan-book" className="primaryBtn" >Sign Up</Button>}
			            	{ localStorage.getItem("Usertype") === "teacher" &&	  <Button as={Link} to="profile-setup" className="primaryBtn" >Sign Up</Button>}
                    
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

export default SignupForm;

