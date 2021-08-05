import React, { useState, useEffect } from "react";
import { Grid, Table, Input } from "semantic-ui-react";
import TableHeader from "./table-header";
import TableRow from "./table-row";
import { Fragment } from "react";
import { useDispatch } from 'react-redux';
import { apiCall } from "../../../../store/actions/api.actions";
import ConfirmModal from "../../../components/organisms/modal/common-confirm-modal/index"

function DataTable(props) {

    const [values, setValues] = useState([])
    const [sorting, setSorting] = useState({ sortOrder: "asc", sortArrow: "sort" })
    const [confirmModal, setConfirmModal] = useState({ modalStatus: false, selectedId: "" })

    const dispatch = useDispatch();

    useEffect(() => {
        getCommonTable();
    }, []);

    // useEffect(() => {
    //     if (props.apiHit) {
    //         getCommonTable();
    //     }
    // }, [props.apiHit]);

    const getCommonTable = () => {
        dispatch(apiCall({
            urls: [props.getApiName], method: "GET", onSuccess: (response) => {
                if (response.length > 0) {
                    setValues(response)
                }
            }
        }))
    }
    const confirmModalOpen = (userId) => {
        setConfirmModal({ ...confirmModal, modalStatus: true, selectedId: userId })
    }

    const modalClose = () => {
        setConfirmModal({ ...confirmModal, modalStatus: !confirmModal.modalStatus, selectedId: "" })
    }

    const upDateToggle = () => {
        dispatch(apiCall({
            urls: [props.toggleApiName], method: "PATCH", data: { userId: confirmModal.selectedId }, onSuccess: (response) => {
                getCommonTable();
                modalClose();
            }, showNotification: true
        }))
    }

    const onHandleSorting = (heading) => {
        let sortOrder = sorting.sortOrder === "asc" ? "desc" : "asc";
        let sortArrow = sorting.sortArrow === "sort up" ? "sort down" : "sort up";
        setSorting({ ...sorting, sortOrder: sortOrder, sortArrow: sortArrow })
    }

    // const fetchMoreData = () => {
    //     const countPageNo = this.state.getGridDataObj.pageNo + 1;
    //     // 20 more records in 1.5 secs  
    //     setTimeout(() => {
    //         this.setState({ getGridDataObj: { ...this.state.getGridDataObj, pageNo: countPageNo } }, () => { this.getGridData() });
    //     }, 500);
    // };


    return (
        <Fragment>
            {props.searchOption && props.searchOption.show &&
                <Grid.Column computer={8} tablet={8}>
                    <Input fluid icon="search" name="searchValue" data="searchValue" iconPosition="left" placeholder={props.searchOption.placeHolder ? props.searchOption.placeHolder : "Search"} className="common-search-bar" />
                </Grid.Column>
            }
            <Grid.Column width={16}>
                <div>
                    <Table singleLine>
                        <TableHeader
                            columns={props.columns}
                            onHandleSorting={onHandleSorting}
                            sortingArrow={sorting.sortArrow}
                            sortColumn={sorting.sortOrder}
                        />
                        <TableRow singleLine
                            columns={props.columns}
                            gridData={values}
                            getCommonTable={getCommonTable}
                            confirmModalOpen={confirmModalOpen}

                        //fetchMoreData={fetchMoreData}
                        />

                    </Table>
                </div>
            </Grid.Column>

            <ConfirmModal open={confirmModal.modalStatus} upDateToggle={upDateToggle} close={modalClose} />

        </Fragment>
    );
}

export default DataTable;


