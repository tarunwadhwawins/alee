import React from "react";
import { Modal, Button } from "semantic-ui-react";
import { useSelector } from 'react-redux';

function ConfirmModal(props) {
    const api = useSelector(state => state.api)
    return (
        <Modal size="tiny" open={props.open.modalStatus}>
            <Modal.Content>
                <p style={{ fontSize: 17 }}>{props.open.type === "delete" ? "Do you want to delete this record ?" : "Do you want to update this record ?"}</p>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={props.close}>
                    Cancel
                </Button>
                <Button onClick={props.onConfirm} loading={api.isApiLoading} >
                    Confirm
                </Button>
            </Modal.Actions>
        </Modal>
    )
}
export default ConfirmModal;
