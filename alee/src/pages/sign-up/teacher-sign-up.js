import React, { useState, useRef } from "react";
import { Grid, Button, Form } from "semantic-ui-react";
import { env } from "../../shared/functional/global-import";
import { useHistory } from "react-router-dom";
import { apiCall } from "../../../src/store/actions/api.actions";
import { useDispatch, useSelector } from 'react-redux';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import SimpleReactValidator from 'simple-react-validator';

// const schema = yup.object().shape({
//     email: yup.string().email("Email must be valid email").required("Email is required"),
//     password: yup.string().required("Password is required"),
//     confirmPassword: yup.string().required("Confirm password is required"),
//     firstName: yup.string().required("First Name is required"),
//     lastName: yup.string().required("Last Name is required"),
//     contactNo: yup.string().required("Phone Number is required"),
//     address: yup.string().required("Address is required"),
// });

function TeacherSignup(props) {
    // const { register, handleSubmit, formState: { errors } } = useForm({
    //     resolver: yupResolver(schema),
    //     mode: 'onChange'
    // });
    const [teacherForm, setTeacherForm] = useState({ firstName: "", lastName: "", email: "", contactNo: "", password: "", confirmPassword: "", actionPerformedBy: "", userId: "", excelReferenceId: null, teacherId: null, schoolId: 0 })
    let history = useHistory();
    const onHandleChange = (e, { value, data }) => {
        setTeacherForm({ ...teacherForm, [data]: value })
    }
    const dispatch = useDispatch();
    const api = useSelector(state => state.api)
    const [, forceUpdate] = useState()
    const simpleValidator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } }))

    const onsubmit = () => {
        debugger
        // values.schoolId = 0
        // values.teacherId = null
        // values.excelReferenceId = null
        // values.userId = "test"
        // values.actionPerformedBy = ""
        const formValid = simpleValidator.current.allValid()
        if (!formValid) {
            simpleValidator.current.showMessages();
            forceUpdate(true);
        } else {
            dispatch(apiCall({
                urls: ["TEACHERREGISTRATION"], method: "Post", data: teacherForm, onSuccess: (response) => {
                    history.push(`${env.PUBLIC_URL}`);
                }, showNotification: true
            }))
        }
    }

    return (
        <Form
            onSubmit={onsubmit}
        // onSubmit={handleSubmit(onsubmit)}
        >
            <Grid>
                <Grid.Column width={8}>
                    <Form.Input label="First Name" placeholder="First Name" data="firstName" onChange={onHandleChange}
                        // {...register("firstName")} 
                        error={simpleValidator.current.message('firstName', teacherForm.firstName, 'required')}
                    />
                    {/* <p className="error">{errors.firstName?.message}</p> */}
                </Grid.Column>
                <Grid.Column width={8} >
                    <Form.Input label="Last Name" placeholder="Last Name" data="lastName" onChange={onHandleChange}
                    // {...register("lastName")} 
                    // error={simpleValidator.current.message('lastName', teacherForm.lastName, 'required')}

                    />
                    {/* <p className="error">{errors.lastName?.message}</p> */}
                </Grid.Column>
                <Grid.Column width={8} >
                    <Form.Input label="Email" placeholder="abc@gmail.com" data="email" onChange={onHandleChange}
                        // {...register("email")} 
                        error={simpleValidator.current.message('email', teacherForm.email, 'required|email')}

                    />
                    {/* <p className="error">{errors.email?.message}</p> */}
                </Grid.Column>
                <Grid.Column width={8} >
                    <Form.Input label="Phone Number" placeholder="(123) 456-7890" data="contactNo" onChange={onHandleChange}
                        // {...register("contactNo")} 
                        error={simpleValidator.current.message('contactNo', teacherForm.contactNo, 'required')}

                    />
                    {/* <p className="error">{errors.contactNo?.message}</p> */}
                </Grid.Column>
                <Grid.Column width={8} >
                    <Form.Input label="Address" placeholder="Address" data="address" onChange={onHandleChange}
                        // {...register("address")} 
                        error={simpleValidator.current.message('address', teacherForm.address, 'required')}

                    />
                    {/* <p className="error">{errors.address?.message}</p> */}
                </Grid.Column>
                <Grid.Column width={8} >
                    <Form.Input label="Password" placeholder="********" type="password" data="password" onChange={onHandleChange}
                        // {...register("password")} 
                        error={simpleValidator.current.message('password', teacherForm.password, 'required')}

                    />
                    {/* <p className="error">{errors.password?.message}</p> */}
                </Grid.Column>
                <Grid.Column width={8} >
                    <Form.Input label="Confirm Password" placeholder="********" type="password" data="confirmPassword" onChange={onHandleChange}
                        // {...register("confirmPassword")} 
                        error={simpleValidator.current.message('confirmPassword', teacherForm.confirmPassword, 'required')}
                    />
                    {/* <p className="error">{errors.confirmPassword?.message}</p> */}
                </Grid.Column>

                <Grid.Column width={8} textAlign="right">
                    <Button className="primaryBtn" loading={api.isApiLoading}>Sign Up</Button>
                </Grid.Column>

            </Grid>
        </Form>
    );
}

export default TeacherSignup;

