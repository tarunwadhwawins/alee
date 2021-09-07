import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Grid, Dimmer, Loader } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { apiCall } from "../../../../../store/actions/api.actions";

function AddGrade(props) {
	debugger
	const initialValues = {
		gradeName: "",
		isActive: true,
		gradeId: 0,
		actionPerformedBy: "string"
	}
	const [grade, setGrade] = useState(initialValues);
	const api = useSelector((state) => state.api);

	const dispatch = useDispatch();
	const onHandleChange = (e, { data, value, checked, type }) => {
		setGrade({ ...grade, [data]: value });
		if (type === "checkbox") {
			setGrade({ ...grade, [data]: checked });
		}
	};
	const onHandleSubmit = () => {
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
	};
	const closeModal = () => {
		setGrade(initialValues);
		props.closeModal();
	}
	useEffect(() => {
		debugger
		if (props.editGradeToggle) {
			editGradelist();
		}
	}, [props.editGradeToggle]);

	const editGradelist = () => {
		debugger
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
								<Form.Input label="Grade" data="gradeName" value={grade.gradeName}
									onChange={onHandleChange} />
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