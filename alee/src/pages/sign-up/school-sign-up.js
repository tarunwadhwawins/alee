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
import { commonFunctions } from "../../shared/functional/global-import";

function SchoolSignup(props) {

  const [schoolForm, setSchoolForm] = useState({ schoolName: "", schoolAddress: "", email: "", schoolContactNo: "", password: "", confirmPassword: "", schoolId: null, userId: "", actionPerformedBy: "" })
  let history = useHistory();

  const dispatch = useDispatch();
  const api = useSelector(state => state.api)
  const [, forceUpdate] = useState()
  const simpleValidator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } }))

  const onHandleChange = (e, { value, data }) => {
    setSchoolForm({ ...schoolForm, [data]: value })
  }

  const onSubmit = (e) => {
    debugger
    const isFormValid = commonFunctions.onHandleFormSubmit(e, simpleValidator, forceUpdate);
    if (isFormValid) {
      dispatch(apiCall({
        urls: ["SCHOOLREGISTRATION"], method: "Post", data: schoolForm, onSuccess: (response) => {
          history.push(`${env.PUBLIC_URL}`);
        }, showNotification: true
      }));
    }
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Grid>
          <Grid.Column width={8}>
            <Form.Input label="Name" placeholder="Name" data="schoolName" onChange={onHandleChange}
              // {...register("schoolName")}
              error={simpleValidator.current.message('schoolName', schoolForm.schoolName, 'required')}

            />
            {/* <p className="error">{errors.schoolName?.message}</p> */}
          </Grid.Column>

          <Grid.Column width={8} >
            <Form.Input label="Address" placeholder="Address" data="schoolAddress" onChange={onHandleChange}
              // {...register("schoolAddress")}
              error={simpleValidator.current.message('schoolAddress', schoolForm.schoolAddress, 'required')}

            />
            {/* <p className="error">{errors.schoolAddress?.message}</p> */}
          </Grid.Column>
          <Grid.Column width={8} >
            <Form.Input label="Email" placeholder="abc@gmail.com" data="email" type="email" name="email" onChange={onHandleChange}
              // {...register("email")}
              error={simpleValidator.current.message('email', schoolForm.email, 'required|email')}

            />
            {/* <p className="error">{errors.email?.message}</p> */}
          </Grid.Column>
          <Grid.Column width={8} >
            <Form.Input label="Phone Number" placeholder="(123) 456-7890" data="schoolContactNo" onChange={onHandleChange}
              // {...register("schoolContactNo")}
              error={simpleValidator.current.message('schoolContactNo', schoolForm.schoolContactNo, 'required')}

            />
            {/* <p className="error">{errors.schoolContactNo?.message}</p> */}
          </Grid.Column>
          <Grid.Column width={8} >
            <Form.Input label="Password" placeholder="********" type="password" data="password" onChange={onHandleChange}
              // {...register("password")}
              error={simpleValidator.current.message('password', schoolForm.password, 'required|password')}

            />
            {/* <p className="error">{errors.password?.message}</p> */}
          </Grid.Column>
          <Grid.Column width={8} >
            <Form.Input label="Confirm Password" placeholder="********" type="password" data="confirmPassword" onChange={onHandleChange}
              // {...register("confirmPassword")}
              error={simpleValidator.current.message('confirmPassword', schoolForm.confirmPassword, 'required|password')}

            />
            {/* <p className="error">{errors.confirmPassword?.message}</p> */}
          </Grid.Column>
          <Grid.Column width={6} >
            <Button className="primaryBtn" loading={api.isApiLoading}>Sign Up</Button>
          </Grid.Column>
        </Grid>
      </Form>
    </>
  );
}

export default SchoolSignup;


