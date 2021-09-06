import React, { useState, useEffect } from "react";
import { Grid, Item, Header, Dimmer, Loader, Input, Table, Icon } from "semantic-ui-react";
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../../src/store/actions/api.actions";
import ConfirmModal from "../../shared/components/organisms/modal/common-confirm-modal/index";
import { Link, commonFunctions } from "../../shared/functional/global-import";
import { storeMyBookData } from "../../store/actions/global.actions";
import { storeBookDetails, storeTags } from "../../store/actions/global.actions";

function MyBookPage(props) {
	const [bookList, setBookList] = useState(null)
	const [values, setValues] = useState({ pageNo: 1, pageSize: 100, searchValue: "" })
	const [confirmModal, setConfirmModal] = useState({ modalStatus: false, selectedId: "", type: "" })

	const [tagFields, setTagFields] = useState([]);
	const [fieldData, setFieldData] = useState([]);
	const [fieldOptions, setFieldOptions] = useState([]);


	const dispatch = useDispatch();
	const auth = useSelector(state => state.auth.userDetail.role)
	//  call the api //
	useEffect(() => {
		getBookList();
	}, [values]);
	//  get api //
	const getBookList = () => {
		dispatch(apiCall({
			urls: ["GETBOOKSLIST"], method: "GET", data: values, onSuccess: (response) => {
				setBookList(response)
			}
		}));
	}
	const onHandleChangeSearch = (e, { value }) => {
		setValues({ ...values, searchValue: value })
	}

	const confirmModalOpen = (id, type) => {
		setConfirmModal({ ...confirmModal, modalStatus: true, selectedId: id, type: type })
	}

	const modalClose = () => {
		setConfirmModal({ ...confirmModal, modalStatus: !confirmModal.modalStatus, selectedId: "" })
	}

	const onHandleDelete = () => {
		dispatch(apiCall({
			urls: ["DELETEBOOKS"], method: "DELETE", data: { id: confirmModal.selectedId }, onSuccess: (response) => {
				modalClose();
				getBookList();
			}, showNotification: true
		}))
	}

	const addBookData = (data) => {
		dispatch(storeMyBookData(data));
	}

	useEffect(() => {
		getTagField();
	}, []);

	const getTagField = () => {
 
		let aa = [];

		dispatch(apiCall({
			urls: ["GETTAGCUSTOMFIELDS"], method: "GET", data: { "PageNo ": 1, "PageSize ": 100 }, onSuccess: (response) => {
				setTagFields(response)
				let fieldName = [];
				response.filter(code => code.dataTypeName === "Int").map((filtercode) => {

					fieldName.push(filtercode.fieldName)
					setFieldData(fieldData.concat(fieldName))

					dispatch(apiCall({
						urls: ["GETTAGCUSTOMFIELDSLIST"], method: "GET", data: { fieldName: filtercode.fieldName }, onSuccess: (response) => {
							const res = response.map((single) => {
								return { value: single.id, text: single.codeName }
							});

							// if (res.length > 0) {
								setFieldOptions(fieldOptions => [...fieldOptions, { [filtercode.fieldName]: res }])
								aa.push({ [filtercode.fieldName]: res })
							// }
						}
					}))
					dispatch(storeTags(aa))
				});
				setFieldData(fieldData.concat(fieldName))
			}
		}))
	}


	const api = useSelector(state => state.api)
	return (
		<>
			{api.isApiLoading && (
				<Dimmer active inverted>
					<Loader />
				</Dimmer>

			)}
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">My Books</Header>
				</Grid.Column>

				<Grid.Column computer={8} tablet={8}>
					<Input fluid icon="search" name="searchValue" data="searchValue" iconPosition="left" placeholder="Search" className="common-search-bar" onChange={onHandleChangeSearch} />
				</Grid.Column>

				<Grid.Column computer={16} tablet={8}>
					{bookList && bookList.length === 0 && <Table.Row><Table.Cell colSpan="5"> <Header as='h5' textAlign="center">No record found</Header> </Table.Cell></Table.Row>}
				</Grid.Column>

				<Grid.Column width={16}>
					<div className="booksResult myBooks">
						{bookList && bookList.map((data, index) => {
							return (
								<Item.Group>
									<Item>
										<Item.Image size='tiny' src={commonFunctions.concatenateImageWithAPIUrl(data.image)}
										/>
										<Item.Content >
											<Item.Header onClick={() => addBookData(data)} as={Link} to={`${auth === "Admin" ? "book-flip" : "book-summary"}`}><span>{data.bookName}</span></Item.Header>
											<Item.Meta><span>{data.author}</span></Item.Meta>
											<Item.Description>
												{data.bookSummary !== null && JSON.parse(data.bookSummary).blocks[0].text}
											</Item.Description>
											<Item.Extra> {auth === "Admin" && <div className="icons"><Icon name="edit" className="primary-color" /> <Icon name="trash alternate" color="red" onClick={() => confirmModalOpen(data.bookId, "delete")} /></div>}</Item.Extra>
										</Item.Content>
									</Item>
								</Item.Group>
							)
						})}
					</div>
				</Grid.Column>
				<ConfirmModal open={confirmModal} onConfirm={onHandleDelete} close={modalClose} message={"Do you want to delete this book ?"} />
			</Grid>
		</>
	);
}
export default MyBookPage;

