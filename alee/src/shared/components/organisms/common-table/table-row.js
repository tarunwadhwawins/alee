import React from "react";
import { Table, Header } from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroll-component";

function TableRow(props) {
    debugger
    console.log(props.gridData)
    return (
        <>
            <InfiniteScroll
                dataLength={props.gridData.length}
                scrollableTarget={`${"scrollable" + props.gridName}`}
                next={props.fetchMoreData}
                hasMore={props.hasMore}
            >

                <Table.Body id={`${"scrollable" + props.gridName}`} style={props.tableHeight !== undefined ? { maxHeight: props.tableHeight } : { Height: "200px" }}>
                    {props.gridData && props.gridData.length === 0 && <Table.Row><Table.Cell colSpan="5"> <Header as='h5' className="forCommonTable">No record found</Header> </Table.Cell></Table.Row>}
                    {props.gridData.map((aa, index) => {
                        return (
                            <Table.Row key={index}>
                                {props.columns.map((singleField, index) => {
                                    const fieldValue = singleField.fieldName;
                                    return (
                                        <>
                                            <Table.Cell key={index}>
                                                {singleField.Cell ? singleField.Cell(aa, props.confirmModalOpen) : aa[fieldValue]}
                                            </Table.Cell>
                                        </>
                                    );
                                })}
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </InfiniteScroll>
        </>
    );
}

export default TableRow;

