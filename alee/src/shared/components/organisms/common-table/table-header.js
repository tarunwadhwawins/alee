import React from 'react';
import { Table, Icon } from "semantic-ui-react";

function TableHeader(props) {

    return (
        <Table.Header>
            <Table.Row>
                {props.columns.map((singleData, index) => {
                    return (
                        <>
                            <Table.HeaderCell key={index} onClick={() => { singleData.isSorting && props.onHandleSorting(singleData.fieldName) }}>

                                {singleData.headerName}

                                {singleData.isSorting &&
                                    <Icon id={index} name={singleData.fieldName === props.sortColumn ? props.sortingArrow : "sort"} className="orange-color" />
                                }
                            </Table.HeaderCell>
                        </>
                    )
                }
                )}
            </Table.Row>
        </Table.Header>
    );

};

export default TableHeader;