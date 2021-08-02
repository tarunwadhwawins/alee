import React, { useState } from 'react';
import { Grid, Header, Button, Form, Image } from "semantic-ui-react";
import { Link, env } from "../../shared/functional/global-import";
import { Logo } from "../../shared/functional/global-image-import";
import SchoolSignup from './school-sign-up';
import TeacherSignup from './teacher-sign-up';

function Signup() {
    const [activeButton, setActiveButton] = useState("school")

    const buttonChange = (userType) => {
        setActiveButton(userType)
    }

    return (
        <div className="signIn">
            <div className="signInner">
                <Form>
                    <Grid>
                        <Grid.Column width={6} className="p-0">
                            <div className="signInnerLeft">
                                <Image src={Logo} />
                                <p>
                                    Have an account?
                                    <Link to={`${env.PUBLIC_URL}/`} className="primary-color">
                                        Sign In</Link>
                                </p>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={10} className="signInnerRight">
                            <Grid>
                                <Grid.Column width={8}>
                                    <Header as="h2">Sign up</Header>
                                </Grid.Column>
                                <Grid.Column width={8} textAlign="right">
                                    <Button.Group >
                                        <Button className={activeButton === 'school' ? 'active' : ''} onClick={() => buttonChange("school")}>School</Button>
                                        <Button className={activeButton === 'teacher' ? 'active' : ''} onClick={() => buttonChange("teacher")}>Teacher</Button>
                                    </Button.Group>
                                </Grid.Column>

                                {activeButton === 'school' && <SchoolSignup />}
                                {activeButton === 'teacher' && <TeacherSignup />}

                            </Grid>
                        </Grid.Column>
                    </Grid>
                </Form>
            </div>
        </div>
    );
}

export default Signup;