import React, { useState, useEffect,useRef } from "react";
import { Grid, Modal, Button, Form, Dimmer, Loader } from "semantic-ui-react";
import { Link } from "../../../../functional/global-import";
import { useSelector, useDispatch } from "react-redux";
import { apiCall } from "../../../../../store/actions/api.actions";
import SimpleReactValidator from 'simple-react-validator';
import { commonFunctions } from "../../../../functional/global-import";
function AddChapter(props) {
	const bookId = useSelector(state => state.global.myBookData.bookId)
	const initialValues = {
		chapterId: null,
		chapterName: "",
		startPageNo: null,
		endPageNo: null,
		chapterSummary: "",
		bookId: bookId,
		actionPerformedBy: "string"
		
	}
	const [chapter, setChapter] = useState(initialValues);
	const api = useSelector((state) => state.api);
	const [, forceUpdate] = useState()
	const simpleValidator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } }))

	const dispatch = useDispatch();
	const onHandleChange = (e, { data, value }) => {
		setChapter({ ...chapter, [data]: value });
	};
	const onHandleSubmit = (e) => {
		const isFormValid = commonFunctions.onHandleFormSubmit(e, simpleValidator, forceUpdate);
		if (isFormValid) {
		dispatch(
			apiCall({
				urls: ["ADDUPDATECHAPTER"],
				method: "Post",
				data: chapter,
				onSuccess: (response) => {
					props.closeModal();
					props.GridReload();
					setChapter(initialValues);
				},
				showNotification: true,
			})
		);
	}
	};
	const closeModal = () => {
		setChapter(initialValues);
		simpleValidator.current.hideMessages();
		props.closeModal();
	}
	const addChapter = () => {
		localStorage.setItem("BookType", "With Chapter");
		setTimeout(() => {
			window.location.reload();
		}, (1000));
	}
	useEffect(() => {
		editChapterlist();
	}, [props.editData]);

	const editChapterlist = () => {
		if (props.editData !== undefined && props.chapterText === undefined) {
			const {
				chapterId,
				chapterName,
				startPageNo,
				endPageNo,
				chapterSummary,
			} = props.editData;
			setChapter({
				...chapter, chapterId: chapterId, chapterName: chapterName, startPageNo: startPageNo,
				endPageNo: endPageNo, chapterSummary: chapterSummary
			});
		}
	};
	return (
		<Modal open={props.openModal} onClose={closeModal} size="small">
			{
				api.isApiLoading && (
					<Dimmer active inverted>
						<Loader />
					</Dimmer>
				)
			}
			<Modal.Header>{chapter.chapterId > 0 ? "Edit Chapter" : "Add Chapter"}</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Grid>
							<Grid.Column width={10}>
								<Form.Input label="Chapter Name"
									data="chapterName"
									value={chapter.chapterName}
									onChange={onHandleChange} 
									error={simpleValidator.current.message('chapterName',chapter.chapterName, 'required')}/>
							</Grid.Column>
							<Grid.Column width={3}>
								<Form.Input label="Page No. (Start)"
									data="startPageNo"
									value={chapter.startPageNo}
									onChange={onHandleChange}
									error={simpleValidator.current.message('startPageNo',chapter.startPageNo, 'required')}
								/>
							</Grid.Column>
							<Grid.Column width={3}>
								<Form.Input label="Page No. (End)"
									data="endPageNo"
									value={chapter.endPageNo}
									onChange={onHandleChange}
									error={simpleValidator.current.message('endPageNo',chapter.endPageNo, 'required')}
								/>
							</Grid.Column>
						</Grid>
					</Form>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button className="secondaryBtn" onClick={closeModal}>Cancel</Button>
				<Button className="primaryBtn" onClick={() => { closeModal(); addChapter(); }}
					onClick={onHandleSubmit} as={Link} to="chapter">{chapter.chapterId > 0 ? "Update" : "Confirm"}</Button>
			</Modal.Actions>
		</Modal>
	);
}

export default AddChapter;