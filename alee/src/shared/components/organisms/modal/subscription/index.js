import React, { useState, useEffect, useRef } from "react";
import { Grid, Modal, Button, Form, Input } from "semantic-ui-react";
import { GlobalCodeSelect } from "../../../../components";
import { useDispatch } from 'react-redux';
import { apiCall } from "../../../../../../src/store/actions/api.actions";
//import { commonValidation } from "../../../organisms/common-validations/index";
import SimpleReactValidator from 'simple-react-validator';
import { commonFunctions } from "../../../../functional/global-import";

const initialValues = { subscriptionPlanId: null, subscriptionPlanName: "", durationTypeId: null, noOfStudents: null, price: null, description: "", isActive: true, actionPerformedBy: "string" }

const AddSubscription = (props) => {

	const [values, setValues] = useState(initialValues)
	const [, forceUpdate] = useState()
	const simpleValidator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } }))

	const dispatch = useDispatch();
	const onHandleChange = (e, { data, value, checked, type }) => {
		setValues({ ...values, [data]: value })
		if (type === "checkbox") {
			setValues({ ...values, [data]: checked })
		}
	}
	const onHandleSubmit = (e) => {
		const isFormValid = commonFunctions.onHandleFormSubmit(e, simpleValidator, forceUpdate);
		if (isFormValid) {
			dispatch(apiCall({
				urls: ["POSTSUBSCRIPTION"], method: "POST", data: values, onSuccess: (response) => {
					props.closeModal();
					props.GridReload();
					setValues(initialValues);
				}, showNotification: true
			}))
		}
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
		simpleValidator.current.hideMessages();
		props.closeModal();
		setValues(initialValues);
	}

	return (
		<Modal open={props.openModal} onClose={props.closeModal} size="small" closeOnDimmerClick={false}>
			<Modal.Header>{values.subscriptionPlanId > 0 ? "Edit Subscription" : "Add Subscription"}</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Grid columns="2">
							<Grid.Column>
								<Form.Input label="Subscription Plan" onChange={onHandleChange} data="subscriptionPlanName" value={values.subscriptionPlanName} placeholder="Please enter subscription plan"
									error={simpleValidator.current.message('subscriptionPlanName', values.subscriptionPlanName, 'required')}
								/>
							</Grid.Column>
							<Grid.Column>
								<GlobalCodeSelect label="Duration" placeholder="Select Duration" categoryType="SubscriptionDurationType" onChange={onHandleChange} data="durationTypeId" value={values.durationTypeId}
									error={simpleValidator.current.message('durationType', values.durationTypeId, 'required')}

								/>
							</Grid.Column>
							<Grid.Column>
								<Form.Input label="No. of Students" placeholder="Please enter number of students" onChange={onHandleChange} data="noOfStudents" value={values.noOfStudents}
									error={simpleValidator.current.message('numberOfStudents', values.noOfStudents, 'required')}
								/>
							</Grid.Column>
							<Grid.Column>
								<div className="field">
									<label>Price</label>
									<Input label="Price" label={{ basic: true, content: '$' }} labelPosition='left' placeholder="price" onChange={onHandleChange} data="price" value={values.price}
										error={simpleValidator.current.message('price', values.price, 'required')}
									/>
									{simpleValidator.current.message('price', values.price, 'required')}
								</div>
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
	);
}

export default AddSubscription;