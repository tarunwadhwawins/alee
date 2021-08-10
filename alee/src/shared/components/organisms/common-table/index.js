import React, { useState, useEffect } from "react";
import { Grid, Table, Input, Dimmer, Loader } from "semantic-ui-react";
import TableHeader from "./table-header";
import TableRow from "./table-row";
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../../../store/actions/api.actions";
import ConfirmModal from "../../../components/organisms/modal/common-confirm-modal/index";

function DataTable(props) {

    const [values, setValues] = useState([])
    const [gridObjects, setGridObjects] = useState({ pageNo: 1, pageSize: 100, sortArrow: "sort", orderBy: "", searchValue: "", orderByDescending: null, heading: "" })
    const [confirmModal, setConfirmModal] = useState({ modalStatus: false, selectedId: "", type: "", isActive: null })

    const dispatch = useDispatch();
    const api = useSelector(state => state.api)
    useEffect(() => {
        getCommonTable();
    }, [gridObjects,props.reload]);


    const getCommonTable = () => {
        dispatch(apiCall({
            urls: [props.allApi.getApiName], method: "GET", data: { ...gridObjects, ...props.additionalParams }, onSuccess: (response) => {
                setValues(response)
            }
        }))
    }
    const confirmModalOpen = (id, type, isActive) => {
        setConfirmModal({ ...confirmModal, modalStatus: true, selectedId: id, type: type, isActive: isActive })
    }

    const modalClose = () => {
        setConfirmModal({ ...confirmModal, modalStatus: !confirmModal.modalStatus, selectedId: "" })
    }

    const upDateToggle = () => {
        dispatch(apiCall({
            urls: [props.allApi.toggleApiName], method: "PATCH", data: { id: confirmModal.selectedId }, onSuccess: (response) => {
                modalClose();
                getCommonTable();
            }, showNotification: true
        }))
    }

    const onHandleDelete = () => {
        dispatch(apiCall({
            urls: [props.allApi.deleteApiName], method: "DELETE", data: { id: confirmModal.selectedId }, onSuccess: (response) => {
                modalClose();
                getCommonTable();
            }, showNotification: true
        }))
    }

    const onHandleSorting = (heading) => {
        let orderBy = heading.charAt(0).toUpperCase() + heading.slice(1);
        let orderByDescending = gridObjects.orderByDescending === false ? true : false;
        let sortArrow = gridObjects.sortArrow === "sort up" ? "sort down" : "sort up";
        setGridObjects({ ...gridObjects, sortArrow: sortArrow, heading: heading, orderBy: orderBy, orderByDescending: orderByDescending }, s => getCommonTable())
    }

    const onHandleChangeSearch = (e, { value }) => {
        setGridObjects({ ...gridObjects, searchValue: value })
    }

    const modalType = (confirmModal.type === "delete" ? onHandleDelete : upDateToggle)
    const showMessage = props.messageInModal !== undefined ? props.messageInModal : "record"
    const bb = confirmModal.isActive ? "deactivate" : "activate"
    const message = "Do you want to " + (confirmModal.type==="update" ? bb : confirmModal.type )+ " this " + showMessage + " ?"

    return (
        <Grid>
            {props.searchOption && props.searchOption.show &&
                <Grid.Column computer={8} tablet={8}>
                    <Input fluid icon="search" name="searchValue" data="searchValue" iconPosition="left" placeholder={props.searchOption.placeHolder ? props.searchOption.placeHolder : "Search"} className="common-search-bar" onChange={onHandleChangeSearch} />
                </Grid.Column>
            }
            <Grid.Column width={16}>
                <div>
                    {api.isApiLoading && (
                        <Dimmer active inverted>
                            <Loader />
                        </Dimmer>
                    )}
                    <Table singleLine>
                        <TableHeader
                            columns={props.columns}
                            onHandleSorting={onHandleSorting}
                            gridObjects={gridObjects}
                        />
                        <TableRow singleLine
                            columns={props.columns}
                            gridData={values}
                            getCommonTable={getCommonTable}
                            confirmModalOpen={confirmModalOpen}
                        />

                    </Table>
                </div>
            </Grid.Column>

            <ConfirmModal open={confirmModal} onConfirm={modalType} close={modalClose} message={message} />

        </Grid>
    );
}

export default DataTable;


