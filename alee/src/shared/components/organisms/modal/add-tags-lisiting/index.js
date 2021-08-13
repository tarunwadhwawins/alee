import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Grid } from "semantic-ui-react";
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../../../../store/actions/api.actions";
import { env, commonFunctions } from "../../../../functional/global-import";
import { useHistory } from "react-router-dom";
import { GlobalCodeSelect } from "../../../../components";


const type = [
	{ key: 'Standards', value: 'Standards', text: 'Standards' },
	{ key: 'Comprehension Strategies', value: 'Comprehension Strategies', text: 'Comprehension Strategies' },
	{ key: 'Values', value: 'Values', text: 'Values' },
	{ key: 'Literary Elements', value: 'Literary Elements', text: 'Literary Elements' },
]


function AddTagsListing(props) {
	const initialValues = { tagId: null, tagTypeId: "", tagName: "", isActive: true, actionPerformedBy: "Admin" }

	const [taglisting, setTaglisting] = React.useState(initialValues)
	const globalCode = useSelector(state => state.global.codes)

	// let history = useHistory();
	const dispatch = useDispatch();

	const onHandleChange = (e, { value, data, checked, type }) => {
		setTaglisting({ ...taglisting, [data]: value })
		if (type === "checkbox") {
			setTaglisting({ ...taglisting, [data]: checked })
		}
	}

	// const onHandleToggle = () => setIsActive(!isActive);
	const onsubmit = () => {
		dispatch(apiCall({
			urls: ["ADDTAG"], method: "Post", data: taglisting, onSuccess: (response) => {
				// history.push(`${env.PUBLIC_URL}`);
				props.closeModal();
				props.GridReload();
				setTaglisting(initialValues);
			}, showNotification: true
		}));
	}

	useEffect(() => {
		editForm();
	}, [props.editData]);

	const editForm = () => {
		debugger
		if (props.editData !== undefined || props.editData.length > 0) {
			const { modifiedDate, tagId, tagName, tagTypeId, tagType, isActive } = props.editData;
			setTaglisting({ ...taglisting, tagId: tagId, tagName: tagName, tagTypeId: tagTypeId, isActive: isActive })
		}
	}
	const closeModal = () => {
		props.closeModal();
		setTaglisting(initialValues);
	}
	return (
		<Modal open={props.openModal} onClose={props.closeModal} size="tiny">
			<Modal.Header>Add New Tag</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Grid>
							<Grid.Column width={8}>
								<Form.Input label="Tag Name" data="tagName" value={taglisting.tagName} onChange={onHandleChange} />
							</Grid.Column>
							<Grid.Column width={8}>
								<GlobalCodeSelect label="Type" placeholder="Select Tag Type" data="tagTypeId" categoryType="TagType" onChange={onHandleChange} value={taglisting.tagTypeId} />
							</Grid.Column>
							<Grid.Column width={8} className='status'>
								<p>Status</p>
								<div className="statusToggle">
									<span>Inactive</span>
									<Form.Checkbox label="Active" toggle className="commonToggle" data="isActive" value={taglisting.isActive} checked={taglisting.isActive ? true : false} onChange={onHandleChange} />
								</div>
							</Grid.Column>
						</Grid>
					</Form>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button className="secondaryBtn" onClick={closeModal}>Cancel</Button>
				{taglisting.tagId > 0 ? <Button className="primaryBtn" onClick={onsubmit}>Update</Button> : <Button className="primaryBtn" onClick={onsubmit}>Confirm</Button>}
				{/* <Button className="primaryBtn" onClick={props.closeModal}>Confirm</Button> */}
			</Modal.Actions>
		</Modal>
	);
}

export default AddTagsListing;