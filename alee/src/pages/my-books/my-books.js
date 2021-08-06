import React, { useState, useEffect } from "react";
import { Grid, Item, Header, Dimmer, Loader, Input, Table,Icon } from "semantic-ui-react";
import { Book } from "../../shared/functional/global-image-import";
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../../src/store/actions/api.actions";
import ConfirmModal from "../../shared/components/organisms/modal/common-confirm-modal/index";

function MyBookPage(props) {
	const [bookList, setBookList] = useState(null)
	const [values, setValues] = useState({ pageNo: 1, pageSize: 100, searchValue: "" })
	const [confirmModal, setConfirmModal] = useState({ modalStatus: false, selectedId: "",type:""})
	const dispatch = useDispatch();
	const auth = useSelector(state => state.auth)
	//  call the api //
	useEffect(() => {
		getBookList();
	}, [values]);
	//  get api //
	const getBookList = () => {
		dispatch(apiCall({
			urls: ["GETGLOBALCODESLIST"], method: "GET", data: values, onSuccess: (response) => {
				setBookList(response)
			}
		}));
	}
	const onHandleChangeSearch = (e, { value }) => {
		setValues({ ...values, searchValue: value })
	}

	const confirmModalOpen = (id,type) => {
        setConfirmModal({ ...confirmModal, modalStatus: true, selectedId: id,type:type})
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
							debugger
							return (
								<Item.Group>
									<Item>

										{/* <Item as={Link} onClick={addChapter} to={`${localStorage.getItem("Usertype") === "admin"? "book-flip":"book-summary"}`}>  */}
										<Item.Image size='tiny' src={Book} />
										<Item.Content >
											<Item.Header><span>{data.bookName}</span></Item.Header>
											{/* <Item.Meta><span>J.K. Rownling</span><span>125 pages</span></Item.Meta> */}
											<Item.Description>
												{data.bookSummary} ?
											</Item.Description>
											<Item.Extra>Other Tags: 6.4, Empathy, Twist { auth.loggedIn === "Admin" && <div className="icons"><Icon name="edit" className="primary-color" /> <Icon name="trash alternate" color="red" onClick={() => confirmModalOpen(data.bookId,"delete")} /></div> }</Item.Extra>
										</Item.Content>
									</Item>
								</Item.Group>
							)
						})}
					</div>
				</Grid.Column>
				<ConfirmModal open={confirmModal} onConfirm={onHandleDelete} close={modalClose} />
			</Grid>
		</>
	);
}
export default MyBookPage;

