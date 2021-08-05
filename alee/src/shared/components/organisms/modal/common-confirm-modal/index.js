import React from "react";
import { Modal, Button } from "semantic-ui-react";
import { useSelector } from 'react-redux';

function ConfirmModal(props) {
    const api = useSelector(state => state.api)
    return (
        <Modal size="tiny" open={props.open.modalStatus}>
            <Modal.Content>
                <p style={{ fontSize: 17 }}>  {"Do you want to"} {props.open.type} {"this record ?"} </p>
            </Modal.Content>
            <Modal.Actions>
                <Button className="secondaryBtn" onClick={props.close}>
                    Cancel
                </Button>
                <Button className="primaryBtn" onClick={props.onConfirm} loading={api.isApiLoading} >
                    Confirm
                </Button>
            </Modal.Actions>
        </Modal>
    )
}
export default ConfirmModal;
