import React from "react";
import { Table } from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroll-component";

function TableRow(props) {

    return (
        // <InfiniteScroll
        // dataLength={props.gridData.length}
        // //scrollableTarget={`${"scrollable" + gridName}`}
        // next={props.fetchMoreData()}
        // hasMore={true}
        // >

            <Table.Body>
                {props.gridData.map((aa, index) => {
                    return (
                        <Table.Row>
                            {props.columns.map((singleField, index) => {
                                const fieldValue = singleField.fieldName;
                                return (
                                    <>
                                        <Table.Cell>
                                            {singleField.Cell ? singleField.Cell(aa,props.confirmModalOpen) : aa[fieldValue]}
                                        </Table.Cell>
                                    </>
                                );
                            })}
                        </Table.Row>
                    )
                })}
            </Table.Body>
        // </InfiniteScroll>
    );
}

export default TableRow;

