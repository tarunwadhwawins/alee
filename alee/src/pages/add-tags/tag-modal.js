import React from "react";
import { Grid, Modal, Button, Form, Header } from "semantic-ui-react";
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../store/actions";


function AddTagModal(props) {

    const tags = useSelector(state => state.global.tags)

    return (
        <Modal open={props.openModal} onClose={props.closeModal} size="tiny">
            <Modal.Header>Add Tag</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Grid>
                        <Grid.Column width={16} >


                            {props.tagFields && props.tagFields.length > 0 && props.tagFields.map((singleField, index) => {

                                const ss = tags.filter(code => code[singleField.fieldName])
                                const aa = singleField.dataTypeName === "Int" && ss[0][singleField.fieldName]

                                return (
                                    <Form>
                                        {singleField.dataTypeName === "Int" ?

                                            <Form.Field>
                                                <Form.Select placeholder={'Select ' + singleField.fieldName} label={singleField.fieldName} options={aa} onChange={props.onHandleTag} index={singleField.customFieldId} />
                                            </Form.Field>

                                            : <Form.Field> <Form.TextArea placeholder={singleField.fieldName} rows="2" label={singleField.fieldName} onChange={props.onHandleTag} index={singleField.customFieldId} /></Form.Field>}
                                    </Form>
                                )
                            })}



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