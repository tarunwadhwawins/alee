import React, { useState, useEffect } from "react";
import { Grid, Button, Header } from "semantic-ui-react";
import { Link } from "../../shared/functional/global-import";
import HTMLFlipBook from 'react-pageflip';
import { BookPage1, BookPage2, BookPage3, BookPage4, BookPage5, BookPage6 } from "../../shared/functional/global-image-import";
import { useDispatch, useSelector } from 'react-redux';
import { storeBookDetails, storeTags } from "../../store/actions/global.actions";
import BookFlipPage from '../../../src/pages/book-flip/book-flip';
import AddTagModal from "./tag-modal";
import { apiCall } from "../../store/actions/api.actions";

const tagInitialState = { bookId: 0, chapterId: 0, pageId: 0, tagText: "", bookTagList: [], actionPerformedBy: "" }
function AddTagPage() {
	const [tagStatus, setTagStatus] = useState(false);
	const [tagFields, setTagFields] = useState([]);
	const [fieldData, setFieldData] = useState([]);
	const [tagData, setTagData] = useState(tagInitialState);

	const dispatch = useDispatch();

	const addtag1 = () => {
		dispatch(storeBookDetails(""));
	}

	const openModal = () => {
		setTagStatus(!tagStatus);
	}

	useEffect(() => {
		getTagField();
	}, []);

	// useEffect(() => {
	// 	//getTagFieldList1();
	// 	// getTagFieldList2();
	// 	// getTagFieldList3();
	// 	// getTagFieldList4();
	// }, [fieldData]);


	// const getTagField = () => {
	// 	dispatch(apiCall({
	// 		urls: ["GETTAGCUSTOMFIELDS"], method: "GET", data: { "PageNo ": 1, "PageSize ": 100 }, onSuccess: (response) => {
	// 			settagFields(response)
	// 			let fieldName = [];
	// 			response.filter(code => code.dataTypeName === "Int").map((filtercode) => {
	// 				fieldName.push(filtercode.fieldName)
	// 			});
	// 			setFieldData(fieldData.concat(fieldName))
	// 		}
	// 	}))
	// }

	const getTagField = () => {

		let aa = [];

		dispatch(apiCall({
			urls: ["GETTAGCUSTOMFIELDS"], method: "GET", data: { "PageNo ": 1, "PageSize ": 100 }, onSuccess: (response) => {

				setTagFields(response)
				let fieldName = [];
				response.filter(code => code.dataTypeName === "Int").map((filtercode) => {

					fieldName.push(filtercode.fieldName)
					//setFieldData(fieldData.concat(fieldName))

					// dispatch(apiCall({
					// 	urls: ["GETTAGCUSTOMFIELDSLIST"], method: "GET", data: { fieldName: filtercode.fieldName }, onSuccess: (response) => {
					// 		const res = response.map((single) => {
					// 			return { value: single.id, text: single.codeName }
					// 		});

					// 		if (res.length > 0) {
					// 			setFieldOptions(fieldOptions => [...fieldOptions, { [filtercode.fieldName]: res }])
					// 			aa.push({ [filtercode.fieldName]: res })
					// 		}
					// 	}
					// }))
					// dispatch(storeTags(aa))
				});
				setFieldData(fieldData.concat(fieldName))
			}
		}))
	}


	// const getTagFieldList1 = () => {
	// 	debugger
	// 	fieldData.map((singleField, index) => {
	// 		dispatch(apiCall({
	// 			urls: ["GETTAGCUSTOMFIELDSLIST"], method: "GET", data: { fieldName: singleField }, onSuccess: (response) => {
	// 				const res = response.map((single) => {
	// 					return { value: single.id, text: single.codeName }
	// 				});
	// 				let aa = [];
	// 				if (res.length > 0) {
	// 					setFieldOptions(fieldOptions => [...fieldOptions, { [singleField]: res }])
	// 					debugger
	// 					aa.concat({ [singleField]: res })
	// 					// if (fieldData.length-1 === index) {

	// 					//}
	// 				}
	// 			}
	// 		}))
	// 	})
	// 	dispatch(storeTags(aa))
	// }

	// const getTagFieldList2 = () => {
	// 	dispatch(apiCall({
	// 		urls: ["GETTAGCUSTOMFIELDSLIST"], method: "GET", data: { fieldName: fieldData[1] }, onSuccess: (response) => {
	// 			const res = response.map((single) => {
	// 				return { value: single.id, text: single.codeName }
	// 			});
	// 			if (res.length > 0) {
	// 				setFieldOptions(fieldOptions => [...fieldOptions, { [fieldData[1]]: res }])
	// 			}
	// 		}
	// 	}))
	// }

	// const getTagFieldList3 = () => {
	// 	dispatch(apiCall({
	// 		urls: ["GETTAGCUSTOMFIELDSLIST"], method: "GET", data: { fieldName: fieldData[2] }, onSuccess: (response) => {
	// 			const res = response.map((single) => {
	// 				return { value: single.id, text: single.codeName }
	// 			});
	// 			if (res.length > 0) {
	// 				setFieldOptions(fieldOptions => [...fieldOptions, { [fieldData[2]]: res }])
	// 			}
	// 		}
	// 	}))
	// }

	// const getTagFieldList4 = () => {
	// 	dispatch(apiCall({
	// 		urls: ["GETTAGCUSTOMFIELDSLIST"], method: "GET", data: { fieldName: fieldData[3] }, onSuccess: (response) => {
	// 			const res = response.map((single) => {
	// 				return { value: single.id, text: single.codeName }
	// 			});
	// 			if (res.length > 0) {
	// 				setFieldOptions(fieldOptions => [...fieldOptions, { [fieldData[3]]: res }])

	// 			}
	// 		}
	// 	}))
	// }

	const onHandleTagSelected = (data) => {
		debugger
		const textSelected = window.getSelection().toString();
		if (textSelected !== "") {
			setTagData({ ...tagData, tagText: textSelected, bookId: data.bookId, pageId: data.pageId })
			openModal();
		}
	}

	const onHandleTag = (e, { value, index }) => {
		debugger
		const aa = tagData.bookTagList.concat({ customFieldId: index, response: value })

		setTagData({ ...tagData, bookTagList: aa })

	}

	return (
		// className="addTag"
		<div>
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Add Tags</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<BookFlipPage onHandleTagSelected={onHandleTagSelected} />
				</Grid.Column>
			</Grid>
			{/* <Grid>
				<Grid.Column width={16} verticalAlign="middle" textAlign="right">
					<Button onClick={openModal}>Add Tag</Button>
				</Grid.Column>
			</Grid> */}

			<AddTagModal openModal={tagStatus} tagFields={tagFields} closeModal={openModal} fieldData={fieldData} onHandleTag={onHandleTag} />
		</div>
	);
}

export default AddTagPage;

