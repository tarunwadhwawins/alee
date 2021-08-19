import React, { useState, useEffect } from "react";
import { Grid, Form, Header, Button, Popup, Image, Modal } from "semantic-ui-react";
import { Link } from "../../shared/functional/global-import";
import HTMLFlipBook from 'react-pageflip';
import { BookPage1, BookPage2, BookPage3, BookPage4, BookPage5, BookPage6 } from "../../shared/functional/global-image-import";
import { useDispatch, useSelector } from 'react-redux';
import { storeBookDetails } from "../../store/actions/global.actions";
import BookFlipPage from '../../../src/pages/book-flip/book-flip';
import AddTagModal from "./tag-modal";
import { apiCall } from "../../store/actions/api.actions";

function AddTagPage() {
	const [tagStatus, setTagStatus] = useState(false)
	const [tagFields, settagFields] = useState([])
	const [fieldData, setFieldData] = useState([]);
	const [fieldOptions, setFieldOptions] = useState([]);

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

	useEffect(() => {
		getTagFieldList1();
		getTagFieldList2();
		getTagFieldList3();
		getTagFieldList4();
	}, [fieldData]);


	const getTagField = () => {
		dispatch(apiCall({
			urls: ["GETTAGCUSTOMFIELDS"], method: "GET", data: { "PageNo ": 1, "PageSize ": 100 }, onSuccess: (response) => {
				settagFields(response)
				let fieldName = [];
				response.filter(code => code.dataTypeName === "Int").map((filtercode) => {
					fieldName.push(filtercode.fieldName)
				});
				setFieldData(fieldData.concat(fieldName))
			}
		}))
	}

	const getTagFieldList1 = () => {
		dispatch(apiCall({
			urls: ["GETTAGCUSTOMFIELDSLIST"], method: "GET", data: { fieldName: fieldData[0] }, onSuccess: (response) => {
				const res = response.map((single) => {
					return { value: single.id, text: single.codeName }
				});
				if (res.length > 0) {
					setFieldOptions(fieldOptions => [...fieldOptions, { [fieldData[0]]: res }])
				}
			}
		}))
	}

	const getTagFieldList2 = () => {
		dispatch(apiCall({
			urls: ["GETTAGCUSTOMFIELDSLIST"], method: "GET", data: { fieldName: fieldData[1] }, onSuccess: (response) => {
				const res = response.map((single) => {
					return { value: single.id, text: single.codeName }
				});
				if (res.length > 0) {
					setFieldOptions(fieldOptions => [...fieldOptions, { [fieldData[1]]: res }])
				}
			}
		}))
	}

	const getTagFieldList3 = () => {
		dispatch(apiCall({
			urls: ["GETTAGCUSTOMFIELDSLIST"], method: "GET", data: { fieldName: fieldData[2] }, onSuccess: (response) => {
				const res = response.map((single) => {
					return { value: single.id, text: single.codeName }
				});
				if (res.length > 0) {
					setFieldOptions(fieldOptions => [...fieldOptions, { [fieldData[2]]: res }])
				}
			}
		}))
	}

	const getTagFieldList4 = () => {
		dispatch(apiCall({
			urls: ["GETTAGCUSTOMFIELDSLIST"], method: "GET", data: { fieldName: fieldData[3] }, onSuccess: (response) => {
				const res = response.map((single) => {
					return { value: single.id, text: single.codeName }
				});
				if (res.length > 0) {
					setFieldOptions(fieldOptions => [...fieldOptions, { [fieldData[3]]: res }])

				}
			}
		}))
	}

	return (
		// className="addTag"
		<div>
			<BookFlipPage />
			<Grid>
				<Grid.Column width={16} verticalAlign="middle" textAlign="right">
					<Button onClick={openModal}>Add Tag</Button>
				</Grid.Column>
			</Grid>

			<AddTagModal openModal={tagStatus} tagFields={tagFields} closeModal={openModal} fieldOptions={fieldOptions} />
		</div>
	);
}

export default AddTagPage;

