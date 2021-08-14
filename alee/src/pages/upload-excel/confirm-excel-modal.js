import React from "react";
import { Modal, Button } from "semantic-ui-react";
import { useSelector } from 'react-redux';

function ConfirmModal(props) {
    const api = useSelector(state => state.api)

    const aa = props.selectedRecords === 0 ? "Select minimum one record to add" : "Do you want to add selected " + props.selectedRecords + (props.selectedRecords === 1 ? " record ?" :" records ?")
    const message = props.useOfModal === "save" ? aa : "Do you want to remove this excel sheet ?"

    return (
        <Modal size="tiny" open={props.open}>
            <Modal.Content>
                <p style={{ fontSize: 17 }}> {message} </p>
            </Modal.Content>
            <Modal.Actions>
                <Button className="secondaryBtn" onClick={props.close}>
                    Cancel
                </Button>
                <Button disabled={props.useOfModal === "save" && props.selectedRecords === 0} className="primaryBtn" onClick={props.useOfModal === "save" ? props.onSaveExcel : props.onRemoveExcel} loading={api.isApiLoading} >
                    Confirm
                </Button>
            </Modal.Actions>
        </Modal>
    )
}
export default ConfirmModal;