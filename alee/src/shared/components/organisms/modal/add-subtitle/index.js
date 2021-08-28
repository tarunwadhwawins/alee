import React, { useState, useEffect } from "react";
import { Grid, Modal, Button, Form } from "semantic-ui-react";
import { env } from "../../../../functional/global-import"
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../../../../store/actions/api.actions";
import { useHistory } from "react-router-dom";

function AddSubtitle(props) {
	
	const initialValues = { topicId: null, chapterId: null, topicName: "", startPageNo: null, endPageNo: null }
	const [topic, setTopic] = React.useState(initialValues)
	const dispatch = useDispatch();
	let history = useHistory();
	const auth = useSelector(state => state.global.myChapterData)
	console.log("auth", auth)

	const onsubmit = () => {
		if (props.chapterId) {
			setTopic(topic.chapterId = props.chapterId)
		}
		else if (props.topicData) {
			setTopic(topic.chapterId = props.topicData.chapterId)
		}
		dispatch(apiCall({
			urls: ["ADDTOPIC"], method: "Post", data: topic, onSuccess: (response) => {
				closeModal();
				setTopic(initialValues);
				history.push(`${env.PUBLIC_URL}/specific-Chapter/${topic.chapterId}?chapter=${props.topicData.chapterName}`);
			}, showNotification: true
		}));
	}
	const onHandleChange = (e, { value, data, checked, type }) => {
		setTopic({ ...topic, [data]: value })
	}

	useEffect(() => {
		editTopiclist();
	}, [props.editData]);

	const editTopiclist = () => {
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
	const closeModal = () => {
		props.closeModal();
		setTopic(initialValues);
	};

	return (
		<Modal open={props.openModal} onClose={props.closeModal} size="small">
			<Modal.Header>{topic.topicId > 0 ? "Edit Topic" : "Add Topic"}</Modal.Header>
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
				<Button className="primaryBtn" onClick={onsubmit} to="/subtitle">{topic.topicId > 0 ? "Update" : "Confirm"}</Button>
			</Modal.Actions>
		</Modal>
	);
}

export default AddSubtitle;