import React, { useState, useEffect } from "react";
import { Grid, Modal, Button, Form } from "semantic-ui-react";
import { env } from "../../../../functional/global-import"
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../../../../store/actions/api.actions";
import { useHistory } from "react-router-dom";

function AddSubtitle(props) {
	debugger
	const initialValues = { topicId: null, chapterId: 1, topicName: "", startPageNo: null, endPageNo: null }
	const [topic, setTopic] = React.useState(initialValues)
	const dispatch = useDispatch();
	let history = useHistory();

	const onsubmit = () => {
		debugger;
		dispatch(apiCall({
			urls: ["ADDTOPIC"], method: "Post", data: topic, onSuccess: (response) => {
				closeModal();
				setTopic(initialValues);
				history.push(`${env.PUBLIC_URL}/subtitle`);
			}, showNotification: true
		}));
	}
	const onHandleChange = (e, { value, data, checked, type }) => {
		debugger
		setTopic({ ...topic, [data]: value })
	}

	useEffect(() => {
		debugger
		// if (props.editData) {
		// 	setTopic(topic.topicId = props.editData.topicId ? props.editData.topicId : null)
		// }
		editTopiclist();
		return () => console.log("testttttt")
	}, [props.editData]);

	const editTopiclist = () => {
		debugger;
		if (props.editData !== undefined) {
			const { topicId, chapterId, topicName, startPageNo, endPageNo } = props.editData;
			setTopic({
				...topic,
				topicId: topicId,
				chapterId: chapterId,
				topicName: topicName,
				startPageNo: startPageNo,
				endPageNo: endPageNo,
			});
		}
	};

	const addSubTopic = () => {
		localStorage.setItem("BookType", "With Topic Chapter");
		setTimeout(() => {
			window.location.reload();
		}, (1000));
	}
	const closeModal = () => {
		props.closeModal();
		setTopic(initialValues);
	};

	return (
		<Modal open={props.openModal} onClose={props.closeModal} size="small">
			<Modal.Header>Add Topic</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Grid>
							<Grid.Column width={10}>
								<Form.Input label="Topic Name" data="topicName" value={topic.topicName} onChange={onHandleChange} />
							</Grid.Column>
							<Grid.Column width={3}>
								<Form.Input label="Page No. (Start)" types="number" data="startPageNo" value={topic.startPageNo} onChange={onHandleChange} />
							</Grid.Column>
							<Grid.Column width={3}>
								<Form.Input label="Page No. (End)" types="number" data="endPageNo" value={topic.endPageNo} onChange={onHandleChange} />
							</Grid.Column>
						</Grid>
					</Form>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button className="secondaryBtn" onClick={() => closeModal()}>Cancel</Button>
				<Button className="primaryBtn" onClick={onsubmit} to="subtitle">{topic.topicId > 0 ? "Update" : "Confirm"}</Button>
			</Modal.Actions>
		</Modal>
	);
}

export default AddSubtitle;