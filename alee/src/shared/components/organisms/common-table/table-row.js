import React from "react";
import { Table, Header } from "semantic-ui-react";
//import useInfiniteScroll from 'react-infinite-scroll-hook';

function TableRow(props) {

    return (

        <Table.Body>
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
    );
}

export default TableRow;

