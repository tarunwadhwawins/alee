import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form, Grid, Dimmer, Loader } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { apiCall } from "../../../../../store/actions/api.actions";
import { commonFunctions } from "../../../../functional/global-import";
import SimpleReactValidator from 'simple-react-validator';

function AddGrade(props) {
	const initialValues = {
		gradeName: "",
		isActive: true,
		gradeId: 0,
		actionPerformedBy: "string"
	}
	const [grade, setGrade] = useState(initialValues);
	const api = useSelector((state) => state.api);

	const [, forceUpdate] = useState()
	const simpleValidator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } }))

	const dispatch = useDispatch();
	const onHandleChange = (e, { data, value, checked, type }) => {
		setGrade({ ...grade, [data]: value });
		if (type === "checkbox") {
			setGrade({ ...grade, [data]: checked });
		}
	};
	const onHandleSubmit = (e) => {
		    
		const isFormValid = commonFunctions.onHandleFormSubmit(e, simpleValidator, forceUpdate);
		if (isFormValid) {
			dispatch(
				apiCall({
					urls: ["ADDGRADE"],
					method: "Post",
					data: grade,
					onSuccess: (response) => {
						closeModal();
						props.GridReload();
						setGrade(initialValues);
					},
					showNotification: true,
				})
			);
		}
	};
	const closeModal = () => {
		    
		setGrade(initialValues);
		simpleValidator.current.hideMessages();
		props.closeModal();
	}
	useEffect(() => {
		    
		if (props.editGradeToggle) {
			editGradelist();
		}
	}, [props.editGradeToggle]);

	const editGradelist = () => {
		    
		const { gradeId, gradeName, isActive, } = props.editGrade;
		setGrade({ ...grade, gradeId: gradeId, gradeName: gradeName, isActive: isActive, });
	};
	return (
		<Modal open={props.openModal} onClose={props.closeModal} size="tiny" closeOnDimmerClick={false}>
			{
				api.isApiLoading && (
					<Dimmer active inverted>
						<Loader />
					</Dimmer>
				)
			}
			<Modal.Header>{grade.gradeId > 0 ? "Edit Grade" : "Add Grade"}</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Grid>
							<Grid.Column width={8}>
								<div className="addGradeInput">
									<Form.Input label="Grade" data="gradeName" value={grade.gradeName}
										onChange={onHandleChange}
										error={simpleValidator.current.message('gradeName', grade.gradeName, 'required')}
									/>
								</div>
							</Grid.Column>
							<Grid.Column className="status">
								<p>Status</p>
								<div className="statusToggle">
									<span>Inactive</span>
									<Form.Checkbox
										label="Active"
										toggle
										className="commonToggle"
										onChange={onHandleChange}
										data="isActive"
										checked={grade.isActive}
										value={grade.isActive}
									/>
								</div>
							</Grid.Column>
						</Grid>
					</Form>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button className="secondaryBtn" onClick={() => closeModal()}>Cancel</Button>
				<Button className="primaryBtn" onClick={onHandleSubmit}>{grade.gradeId > 0 ? "Update" : "Confirm"}</Button>
			</Modal.Actions>
		</Modal>
	);
}

export default AddGrade;