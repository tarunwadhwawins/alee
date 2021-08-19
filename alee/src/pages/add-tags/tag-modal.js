import React from "react";
import { Grid, Modal, Button, Form, Header } from "semantic-ui-react";

function AddTagModal(props) {

    return (
        <Modal open={props.openModal} onClose={props.closeModal} size="tiny">
            <Modal.Header>Add Tag</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Grid>
                        <Grid.Column width={16} >

                            <Grid>
                                
                                {props.tagFields && props.tagFields.length > 0 && props.tagFields.map((singleField, index) => {
                                    return (
                                        <Form>
                                            {singleField.dataTypeName === "Int" ?
                                                // <>
                                                //     {props.tagFields && props.tagFields.length>0 && props.tagFields.map((singleField, index) => {
                                                //         debugger
                                                //         return (
                                                <Form.Field>
                                                    <Form.Select placeholder={'Select' + singleField.fieldName} label={singleField.fieldName}  />
                                                </Form.Field>
                                                //)
                                                //     })}
                                                // </>

                                                : <Form.Field> <Form.TextArea placeholder={singleField.fieldName} rows="2" label={singleField.fieldName} /></Form.Field>}
                                        </Form>
                                    )
                                })}

                            </Grid>

                        </Grid.Column>
                    </Grid>

                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button className="secondaryBtn">Edit</Button>
                <Button className="primaryBtn" to="my-books">Save</Button>
                <Button className="primaryBtn" onClick={props.closeModal} >Cancel</Button>
            </Modal.Actions>
        </Modal>
    );
}

export default AddTagModal;