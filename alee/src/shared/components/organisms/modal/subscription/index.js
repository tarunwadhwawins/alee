import React, { useState, useEffect } from "react";
import { Grid, Modal, Button, Form } from "semantic-ui-react";
import { GlobalCodeSelect } from "../../../../components";
import { useDispatch } from 'react-redux';
import { apiCall } from "../../../../../../src/store/actions/api.actions";
//import { commonValidation } from "../../../organisms/common-validations/index";

const initialValues = { subscriptionPlanId: null, subscriptionPlanName: "", durationTypeId: null, noOfStudents: null, price: null, description: "", isActive: true, actionPerformedBy: "string" }

const AddSubscription = (props) => {
	const [values, setValues] = useState(initialValues)
	// const [errors, setErrors] = useState(false)

	// const av = (a, b, c) => errors && commonValidation.ValidateInfo(a, b, c);

	const dispatch = useDispatch();
	const onHandleChange = (e, { data, value, checked, type }) => {
		setValues({ ...values, [data]: value })
		if (type === "checkbox") {
			setValues({ ...values, [data]: checked })
		}
	}

	const onHandleSubmit = (e) => {
		debugger
		// setErrors(true)
		// const IsValid = commonValidation.checkValidation()
		// console.log("validation ==> " + IsValid)
		// debugger
		// if (Object.keys(IsValid).length === 0) {
			dispatch(apiCall({
				urls: ["POSTSUBSCRIPTION"], method: "POST", data: values, onSuccess: (response) => {
					//setErrors(false)
					props.closeModal();
					props.GridReload();
					setValues(initialValues);
				}, showNotification: true
			}))
		//}
	}

	useEffect(() => {
		editForm();
	}, [props.editData]);

	const editForm = () => {
		if (props.editData.length > 0) {
			const { subscriptionPlanName, durationTypeId, description, price, subscriptionPlanId, noOfStudents, isActive } = props.editData[props.editData.length - 1];
			setValues({ ...values, subscriptionPlanId: subscriptionPlanId, subscriptionPlanName: subscriptionPlanName, durationTypeId: durationTypeId, noOfStudents: noOfStudents, price: price, description: description, isActive: isActive })
		}
	}
	const closeModal = () => {
		props.closeModal();
		setValues(initialValues);
	}

	return (
		<>
			<Modal open={props.openModal} onClose={props.closeModal} size="small" closeOnDimmerClick={false}>
				<Modal.Header>Add Subscription</Modal.Header>
				<Modal.Content scrolling>
					<Modal.Description>
						<Form>
							<Grid columns="2">
								<Grid.Column>
									<Form.Input label="Subscription Plan" onChange={onHandleChange} data="subscriptionPlanName" value={values.subscriptionPlanName} />
									{/* {av("subscriptionPlanName", values.subscriptionPlanName, ["required","min|6"])} */}
								</Grid.Column>
								<Grid.Column>
									<GlobalCodeSelect label="Duration" placeholder="Select Duration" categoryType="SubscriptionDurationType" onChange={onHandleChange} data="durationTypeId" value={values.durationTypeId}
									/>
									{/* {av("durationType", values.durationTypeId, ["required"])} */}

								</Grid.Column>
								<Grid.Column>
									<Form.Input label="No. of Students" onChange={onHandleChange} data="noOfStudents" value={values.noOfStudents} />
									{/* {av("noOfStudents", values.noOfStudents, ["required"])} */}
								</Grid.Column>
								<Grid.Column>
									<Form.Input label="Price" onChange={onHandleChange} data="price" value={values.price} />
									{/* {av("price", values.price, ["required"])} */}
								</Grid.Column>
								<Grid.Column className='status'>
									<p>Status</p>
									<div className="statusToggle">
										<span>Inactive</span>
										<Form.Checkbox label="Active" toggle className="commonToggle" onChange={onHandleChange} data="isActive" value={values.isActive} checked={values.isActive ? true : false} />
									</div>
								</Grid.Column>
								<Grid.Column width={16}>
									<Form.TextArea label="Description" rows="2" onChange={onHandleChange} data="description" value={values.description} />
								</Grid.Column>
							</Grid>
						</Form>
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					<Button className="secondaryBtn" onClick={closeModal}>Cancel</Button>
					<Button className="primaryBtn" onClick={onHandleSubmit}>{values.subscriptionPlanId === null ? "Save" : "Update"}</Button>
				</Modal.Actions>
			</Modal>
		</>
	);
}

export default AddSubscription;