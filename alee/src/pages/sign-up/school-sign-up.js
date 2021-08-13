import React, { useState } from "react";
import { Grid, Button, Form } from "semantic-ui-react";
import { env } from "../../shared/functional/global-import";
import { useHistory } from "react-router-dom";
import { apiCall } from "../../../src/store/actions/api.actions";
import { useDispatch, useSelector } from 'react-redux';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup.string().email("Email must be valid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("Confirm password is required"),
  schoolName: yup.string().required("School Name is required"),
  schoolContactNo: yup.string().required("Phone Number is required"),
  schoolAddress: yup.string().required("School Address is required"),
});

function SchoolSignup(props) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  const [schoolForm, setSchoolForm] = useState({ schoolName: "", schoolAddress: "", email: "", schoolContactNo: "", password: "", confirmPassword: "" })
  let history = useHistory();

  const dispatch = useDispatch();
  const api = useSelector(state => state.api)
  const onHandleChange = (e, { value, data }) => {
    setSchoolForm({ ...schoolForm, [data]: value })
  }

  const onSubmit = (values) => {
    values.schoolId = null
    values.userId = "test"
    dispatch(apiCall({
      urls: ["SCHOOLREGISTRATION"], method: "Post", data: values, onSuccess: (response) => {
        history.push(`${env.PUBLIC_URL}`);
      }, showNotification: true
    }));
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Grid.Column width={8}>
            <Form.Input label="Name" placeholder="Name" data="schoolName" onChange={onHandleChange} {...register("schoolName")} />
            <p className="error">{errors.schoolName?.message}</p>
          </Grid.Column>

          <Grid.Column width={8} >
            <Form.Input label="Address" placeholder="Address" data="schoolAddress" onChange={onHandleChange} {...register("schoolAddress")} />
            <p className="error">{errors.schoolAddress?.message}</p>
          </Grid.Column>
          <Grid.Column width={8} >
            <Form.Input label="Email" placeholder="abc@gmail.com" data="email" type="email" name="email" onChange={onHandleChange} {...register("email")} />
            <p className="error">{errors.email?.message}</p>
          </Grid.Column>
          <Grid.Column width={8} >
            <Form.Input label="Phone Number" placeholder="(123) 456-7890" data="schoolContactNo" onChange={onHandleChange} {...register("schoolContactNo")} />
            <p className="error">{errors.schoolContactNo?.message}</p>
          </Grid.Column>
          <Grid.Column width={8} >
            <Form.Input label="Password" placeholder="********" type="password" data="password" onChange={onHandleChange}  {...register("password")} />
            <p className="error">{errors.password?.message}</p>
          </Grid.Column>
          <Grid.Column width={8} >
            <Form.Input label="Confirm Password" placeholder="********" type="password" data="confirmPassword" onChange={onHandleChange} {...register("confirmPassword")} />
            <p className="error">{errors.confirmPassword?.message}</p>
          </Grid.Column>
          <Grid.Column width={6} >
            <Button className="primaryBtn" type="submit" loading={api.isApiLoading}>Sign Up</Button>
          </Grid.Column>
        </Grid>
      </Form>
    </>
  );
}

export default SchoolSignup;


