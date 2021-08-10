import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Grid } from "semantic-ui-react";
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../../../../store/actions/api.actions";
import { env, commonFunctions } from "../../../../functional/global-import";
import { useHistory } from "react-router-dom";

const type = [
	{ key: 'Standards', value: 'Standards', text: 'Standards' },
	{ key: 'Comprehension Strategies', value: 'Comprehension Strategies', text: 'Comprehension Strategies' },
	{ key: 'Values', value: 'Values', text: 'Values' },
	{ key: 'Literary Elements', value: 'Literary Elements', text: 'Literary Elements' },
]

function AddTagsListing(props) {
	const [taglisting, setTaglisting] = React.useState({ tagId: "", tagTypeId: 6, tagName: "", isActive: false, actionPerformedBy: "Admin" })

	const [isActive, setIsActive] = React.useState(false)
	const globalCode = useSelector(state => state.global.codes)
	const [standards, setStandards] = React.useState([])

	// let history = useHistory();
	const dispatch = useDispatch();

	const onHandleChange = (e, { value, data }) => {
		debugger
		setTaglisting({ ...taglisting, [data]: value })
	}
	const onHandleToggle = (e, { value, data }) => {
		debugger
		setIsActive({ ...isActive, [data]: value })
	}

	useEffect(() => {
		getTagType();
	}, []);
	const getTagType = () => {
		dispatch(apiCall({
			urls: ["GETTAGLISTBYID"], method: "GET", data: { tagTypeId: (commonFunctions.getGlobalCodeDetails(globalCode, "TagType", "ComprehensionStrategies")).globalCodeId }, onSuccess: (response) => {
				debugger
				const tagList = response.map((singleTag) => {
					return { value: singleTag.tagId, text: singleTag.tagTypeName }
				});
				setTaglisting(tagList)

			}
		}));
	}
	// const onHandleToggle = () => setIsActive(!isActive);
	const onsubmit = () => {
		dispatch(apiCall({
			urls: ["ADDTAG"], method: "Post", data: taglisting, onSuccess: (response) => {
				// history.push(`${env.PUBLIC_URL}`);
			}, showNotification: true
		}));
	}
	return (
		<Modal open={props.openModal} onClose={props.closeModal} size="tiny">
			<Modal.Header>Add New Tag</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Grid>
							<Grid.Column width={8}>
								<Form.Input label="Tag Name" data="tagName" onChange={onHandleChange} />
							</Grid.Column>
							<Grid.Column width={8}>
								<Form.Select label="Type" placeholder="Select Type" data="type" options={type} onChange={onHandleChange} />
							</Grid.Column>
							<Grid.Column width={8} className='status'>
								<p>Status</p>
								<div className="statusToggle">
									<span>Inactive</span>
									<Form.Checkbox label="Active" value={isActive} toggle className="commonToggle" data="isActive" onChange={onHandleToggle} />
								</div>
							</Grid.Column>
						</Grid>
					</Form>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button className="secondaryBtn" onClick={props.closeModal}>Cancel</Button>
				<Button className="primaryBtn" onClick={onsubmit}>Confirm</Button>
				{/* <Button className="primaryBtn" onClick={props.closeModal}>Confirm</Button> */}
			</Modal.Actions>
		</Modal>
	);
}

export default AddTagsListing;