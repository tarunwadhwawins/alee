import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Grid, Dropdown } from "semantic-ui-react";
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../../../../store/actions/api.actions";
import { env, commonFunctions } from "../../../../functional/global-import";
import { useHistory } from "react-router-dom";
import { GlobalCodeSelect } from "../../../../components";
import { isInteger } from "formik";
import { storeGlobalCodes } from "../../../../../store/actions/global.actions";

const type = [
	{ key: 'Standards', value: 'Standards', text: 'Standards' },
	{ key: 'Comprehension Strategies', value: 'Comprehension Strategies', text: 'Comprehension Strategies' },
	{ key: 'Values', value: 'Values', text: 'Values' },
	{ key: 'Literary Elements', value: 'Literary Elements', text: 'Literary Elements' },
]
function AddTagsListing(props) {
	const initialValues = { tagId: null, tagTypeName: "", tagName: "", isActive: true, actionPerformedBy: "Admin" }
	const [taglisting, setTaglisting] = React.useState(initialValues)
	const [globalTag, setGlobalTag] = React.useState([])
	const globalCode = useSelector(state => state.global.codes)

	// let history = useHistory();
	const dispatch = useDispatch();

	const onHandleChange = (e, { value, data, checked, type }) => {
		debugger
		setTaglisting({ ...taglisting, [data]: value })
		if (type === "checkbox") {
			setTaglisting({ ...taglisting, [data]: checked })
		}
		if (type === "tagTypeName" && !isNaN(value)) {
			setTaglisting({ ...taglisting, tagTypeId: value, [data]: e.target.innerText })
		}
	}

	// const onHandleToggle = () => setIsActive(!isActive);
	const onsubmit = () => {
		dispatch(apiCall({
			urls: ["ADDTAG"], method: "Post", data: taglisting, onSuccess: (response) => {
				// history.push(`${env.PUBLIC_URL}`);
				props.closeModal();
				props.GridReload();
				getGlobalCode();
				setTaglisting(initialValues);
			}, showNotification: true
		}));
	}
	const getGlobalCode = () => {
		dispatch(apiCall({
			urls: ["GLOBALCODELIST"], method: "GET", data: { "categoryId": -1 }, onSuccess: (response) => {
				dispatch(storeGlobalCodes(response));
			}, showNotification: false
		}))
	}
	const onUpdate = () => {
		dispatch(apiCall({
			urls: ["UPDATETAG"], method: "PUT", data: taglisting, onSuccess: (response) => {
				// history.push(`${env.PUBLIC_URL}`);
				props.closeModal();
				props.GridReload();
				setTaglisting(initialValues);
			}, showNotification: true
		}))
	}

	useEffect(() => {
		debugger
		const { editData } = props
		if (editData !== undefined && Object.keys(editData).length > 0) {
			editForm();
		}
	}, [props.editData]);




	useEffect(() => {
		debugger
		const globalCodes = globalCode.filter(code => code.categoryName === "TagType").map((filtercode) => {
			return { filtercode: filtercode.codeName, value: filtercode.globalCodeId, text: filtercode.codeName }
		})
		debugger
		setGlobalTag(globalCodes)
	}, [])
	const editForm = () => {
		debugger
		const { modifiedDate, tagId, tagName, tagTypeName, tagTypeId, isActive } = props.editData;
		setTaglisting({ ...taglisting, tagId: tagId, tagName: tagName, tagTypeName: tagTypeName, isActive: isActive, tagTypeId: tagTypeId })
	}

	const closeModal = () => {
		debugger
		props.closeModal();
		setTaglisting(initialValues);
	}

	const onHandleAddition = (e, { value }) => {
		debugger
		// setGlobalTag((prevState) => ({
		// 	globalTag: [{ text: value, value }, ...prevState.globalTag],
		// }))
		setGlobalTag(glbTag => [{ text: value, value }, ...glbTag,])
		// setGlobalTag((...globalTag) => [...globalTag, globalTag = value]);
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
								{/* <GlobalCodeSelect label="Type" placeholder="Select Tag Type" data="tagType" categoryType="TagType" onChange={onHandleChange} onAddItem={onHandleAddition}
								// value={taglisting.tagTypeId} 
								/> */}

								<Form.Dropdown
									label="Type"
									search
									selection
									allowAdditions
									maxLength="50"
									options={globalTag}
									placeholder="Select Type"
									name="tagTypeName"
									data="tagTypeName"
									value={taglisting.tagTypeId}
									type="tagTypeName"
									// error={this.props.error}
									onChange={onHandleChange}
									// defaultValue={this.props.value}
									onAddItem={onHandleAddition}
								/>


								{/* <Form.Dropdown
									className='icon'
									floating
									labeled
									label="Tag Type"
									options={globalTag}
									value={taglisting.tagType}
									onChange={onHandleChange}
									search
									data="tagTypeName"
									type="tagTypeName"
									text='Select Type'
									selection
								/> */}
							</Grid.Column>
							<Grid.Column width={8} className='status'>
								<p>Status</p>
								<div className="statusToggle">
									<span>Inactive</span>
									<Form.Checkbox label="Active" toggle className="commonToggle" data="isActive" value={taglisting.isActive} checked={taglisting.isActive} onChange={onHandleChange} />
								</div>
							</Grid.Column>
						</Grid>
					</Form>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button className="secondaryBtn" onClick={closeModal}>Cancel</Button>
				{taglisting.tagId > 0 ? <Button className="primaryBtn" onClick={onUpdate}>Update</Button> : <Button className="primaryBtn" onClick={onsubmit}>Confirm</Button>}
				{/* <Button className="primaryBtn" onClick={props.closeModal}>Confirm</Button> */}
			</Modal.Actions>
		</Modal>
	);
}

export default AddTagsListing;