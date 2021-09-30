import React, { useState, useEffect, useRef } from "react";
import { Form, Grid, Button, Image, Header, Dimmer, Loader } from "semantic-ui-react";
import { useDispatch } from 'react-redux';
import { apiCall } from "../../store/actions/api.actions";
import { useSelector } from "react-redux";
import { commonFunctions } from "../../shared/functional/global-import";
import { env, Link } from "../../shared/functional/global-import";
import SimpleReactValidator from 'simple-react-validator';
function ProfileOne(props) {
    const initState = { schoolId: null, schoolName: "", schoolAddress: "", email: "", schoolContactNo: "", image: "", actionPerformedBy: "", imageurl: null }
    const [schoolForm, setSchoolForm] = useState(initState);
    const schoolId = useSelector(state => state.auth.userDetail.schoolId);
    const api = useSelector(state => state.api);
    const dispatch = useDispatch();
    const [, forceUpdate] = useState()
    const simpleValidator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } }))


    useEffect(() => {
        getTeacherProfile();
    }, []);
    const getTeacherProfile = () => {
        dispatch(
            apiCall({
                urls: ["GETSCHOOLSLIST"],
                method: "GET",
                data: { schoolId: schoolId },
                onSuccess: (response) => {
                    if (response.length > 0) {
                        setSchoolForm({
                            ...schoolForm,
                            schoolName: response[0].schoolName, schoolAddress: response[0].schoolAddress,
                            email: response[0].email,
                            schoolContactNo: response[0].schoolContactNo, schoolId: response[0].schoolId,
                        })
                    }

                },
            })
        );
    };
    const onHandleSubmit = (e) => {
                          
        const isFormValid = commonFunctions.onHandleFormSubmit(e, simpleValidator, forceUpdate);
        if (isFormValid) {
            var formData = commonFunctions.getFormData(schoolForm);
            dispatch(
                apiCall({
                    urls: ["UPDATESCHOOLPROFILE"],
                    method: "PUT",
                    data: formData,
                    onSuccess: (response) => {
                        setSchoolForm(response);
                    },showNotification: true
                })
            );
        }
    };
    const imageChange = (e, index) => {
        if (e.target.files) {
            setSchoolForm({ ...schoolForm, imageurl: window.URL.createObjectURL(e.target.files[0]), image: e.target.files[0] });
        }
    };
    const onHandleChange = (e, { data, value }) => {
        setSchoolForm({ ...schoolForm, [data]: value });
    }

    return (
        <>
            <Form>
                <Grid>


                    <Grid.Column width={16}>
                        <Header as="h3" className="commonHeading">Manage Profile</Header>
                    </Grid.Column>
                    {api.isApiLoading && (
                        <Dimmer active inverted><Loader /></Dimmer>)}
                    <Grid.Column width={4}>

                        <div className="setImg">
                            <div className="setImgInner">
                                <img src={schoolForm.imageurl}
                                />
                            </div>
                            <Button className="primaryBtn" onChange={imageChange}>Browse Image<input type="file" /></Button>
                        </div>
                    </Grid.Column >
                    <Grid.Column width={12}>
                        <Grid>
                            <Grid.Column width={8}>
                                <Form.Input placeholder='Name' data="schoolName" value={schoolForm.schoolName} onChange={(e, { data, value }) => onHandleChange(e, { data, value })} />
                                {simpleValidator.current.message('schoolName', schoolForm.schoolName, 'required')}
                            </Grid.Column>
                            <Grid.Column width={8} >
                                <Form.Input placeholder='Address' data="schoolAddress" value={schoolForm.schoolAddress} onChange={(e, { data, value }) => onHandleChange(e, { data, value })} />
                                {simpleValidator.current.message('schoolAddress', schoolForm.schoolAddress, 'required')}
                            </Grid.Column>
                            <Grid.Column width={8} >
                                <Form.Input placeholder='Email' data="email" value={schoolForm.email} onChange={(e, { data, value }) => onHandleChange(e, { data, value })}
                                    disabled={schoolForm.schoolId !== undefined ? true : false}
                                />
                            </Grid.Column>

                            <Grid.Column width={8} >
                                <Form.Input placeholder='PhoneNumber' data="schoolContactNo" value={schoolForm.schoolContactNo} maxLength="11" onChange={(e, { data, value }) => onHandleChange(e, { data, value })} />
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column className="primeBtn" width={16} textAlign="right">
                        <Button className="primaryBtn" loading={api.isApiLoading}
                            onClick={onHandleSubmit}
                            // as={Link} to={`${env.PUBLIC_URL}/profile-school/${schoolId}`}
                        >Update</Button>
                    </Grid.Column>

                </Grid>
            </Form>
        </>
    );
}

export default ProfileOne;