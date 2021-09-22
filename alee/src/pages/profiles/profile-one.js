import React, { useState, useEffect } from "react";
import { Form, Grid, Button, Image, Header } from "semantic-ui-react";
import { useDispatch } from 'react-redux';
import { apiCall } from "../../store/actions/api.actions";
import { profile } from "../../shared/functional/global-image-import";
import { useSelector } from "react-redux";
import {env } from "../../shared/functional/global-import";
function ProfileOne(props) {
    const [schoolData, setSchoolData] = useState([]);
    const schoolId = useSelector(state => state.auth.userDetail.schoolId);
    const dispatch = useDispatch();
    useEffect(() => {
        getTeacherProfile();
    }, []);
    const getTeacherProfile = () => {
        dispatch(
            apiCall({
                urls: ["GETSCHOOLSLIST"],
                method: "GET",
                data: schoolId,
                onSuccess: (response) => {
                    debugger;
                    setSchoolData(response);
                },
            })
        );
    };
    const onHandleEdit = (data) => {
        debugger;
        setSchoolData(data);
    }

    return (
        <Form>
            <Grid>

                <Grid.Column width={16}>
                    <Header as="h3" className="commonHeading"
                        to={`${env.PUBLIC_URL}/profile-school/${props.schoolId}`}>Manage Profile</Header>
                </Grid.Column>
                <Grid.Column width={4}>
                    <div className="setImg">
                        <div className="setImgInner">
                            <Image src={profile} />
                        </div>
                        <Button className="primaryBtn">Browse Image<input type="file" /></Button>
                    </div>
                </Grid.Column >
                <Grid.Column width={12}>
                    <Grid>
                        <Grid.Column width={8}>
                            <Form.Input placeholder='Name' />
                        </Grid.Column>
                        <Grid.Column width={8} >
                            <Form.Input placeholder='Address' />
                        </Grid.Column>
                        <Grid.Column width={8} >
                            <Form.Input placeholder='Email' />
                        </Grid.Column>
                        <Grid.Column width={8} >
                            <Form.Input placeholder='PhoneNumber' />
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column className="primeBtn" width={16} textAlign="right">
                    <Button className="primaryBtn" >Cancel</Button>
                    <Button className="primaryBtn">Update</Button>
                </Grid.Column>

            </Grid>
        </Form>
    );
}

export default ProfileOne;