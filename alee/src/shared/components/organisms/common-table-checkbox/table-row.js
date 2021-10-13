import React, { useState, useEffect } from "react";
import { Table, Header, Checkbox } from "semantic-ui-react";
// import InfiniteScroll from "react-infinite-scroll-component";


function TableRow(props) {
    const [id, setId] = useState()

    return (
        <>
            {/* <InfiniteScroll
                // dataLength={data.length}
                // scrollableTarget={`${"scrollable" + gridName}`}
                next={props.fetchMoreData}
                hasMore={props.hasMore}
                >
                    
                </InfiniteScroll> */}

            <Table.Body>
                {props.gridData && props.gridData.length === 0 && <Table.Row><Table.Cell colSpan="5"> <Header as='h5' className="forCommonTable">No record found</Header> </Table.Cell></Table.Row>}
                {props.gridData.map((aa, index) => {
                    debugger
                    if (props.resourceType === "audio") {
                        {/* let linkId = JSON.parse(aa.link)[0].AudioLinkId */ }
                        {/* setId(linkId) */ }
                    }

                    return (
                        <Table.Row key={index}>
                            <Table.Cell>
                                {props.resourceType === "audio" && <Checkbox onChange={props.onHandleSelect}
                                    name={JSON.parse(aa.link)[0].AudioLinkId}
                                    // value={props.gridData.IsChecked} 
                                    checked={props.selectedData.includes(JSON.parse(aa.link)[0].AudioLinkId)}
                                />}
                                {props.resourceType === "video" && <Checkbox onChange={props.onHandleSelect}
                                    name={JSON.parse(aa.link)[0].VideoLinkId}
                                    // value={props.gridData.IsChecked} 
                                    checked={props.selectedData.includes(JSON.parse(aa.link)[0].VideoLinkId)}
                                />}
                                {props.resourceType === "article" && <Checkbox onChange={props.onHandleSelect}
                                    name={JSON.parse(aa.link)[0].ArticleLinkId}
                                    // value={props.gridData.IsChecked} 
                                    checked={props.selectedData.includes(JSON.parse(aa.link)[0].ArticleLinkId || JSON.parse(aa.link)[0].PdfLinkId)}
                                />}
                            </Table.Cell>
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

        </>
    );
}

export default TableRow;

