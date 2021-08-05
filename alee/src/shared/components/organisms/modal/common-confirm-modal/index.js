import React, { useState } from "react";
import { Modal, Button } from "semantic-ui-react";

function ConfirmModal(props) {

    return (
        <Modal
            size="tiny"
            open={props.open}
        >

            <Modal.Content>
                <p>Are you confirm ?</p>
            </Modal.Content>
            <Modal.Actions>
                <Button  onClick={props.close}>
                    No
                </Button>
                <Button  onClick={props.upDateToggle}>
                    Yes
                </Button>
            </Modal.Actions>
        </Modal>
    )
}
export default ConfirmModal;
