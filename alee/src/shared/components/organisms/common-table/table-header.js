import React from 'react';
import { Table, Icon } from "semantic-ui-react";

function TableHeader(props) {

    return (
        <Table.Header>
            <Table.Row>
                {props.columns.map((singleData, index) => {
                    return (
                        <>
                            <Table.HeaderCell className={singleData.isSorting ? "pointer" : ""} key={index} onClick={() => { singleData.isSorting && props.onHandleSorting(singleData.fieldName) }}>

                                {singleData.headerName}

                                {singleData.isSorting &&
                                    <Icon id={index} name={singleData.fieldName === props.gridObjects.heading ? props.gridObjects.sortArrow : "sort"} className="orange-color" />
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