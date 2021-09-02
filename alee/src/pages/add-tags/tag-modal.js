import React from "react";
import { Grid, Button, Form, Header } from "semantic-ui-react";
import { useSelector } from 'react-redux';
import ReactModal from 'react-modal-resizable-draggable';

function AddTagModal(props) {

    const tags = useSelector(state => state.global.tags)

    return (
        <ReactModal
            minWidth={500}
            initWidth={500}
            minHeight={520}
            onRequestClose={props.closeModal}
            isOpen={props.openModal} disableResize={true} >
            <Header as='h3'>Add Tag</Header>

            <Form>
                <Grid>
                    {props.tagFields && props.tagFields.length > 0 && props.tagFields.map((singleField, index) => {

                        const ss = tags.filter(code => code[singleField.fieldName])
                        const aa = singleField.dataTypeName === "Int" && ss[0][singleField.fieldName]

                        return (
                            <Grid.Column width={8}>
                                {singleField.dataTypeName === "Int" ?

                                    <Form.Field>
                                        <Form.Select placeholder={'Select ' + singleField.fieldName} label={singleField.fieldName} options={aa} onChange={props.onHandleTag} index={singleField.customFieldId} />
                                    </Form.Field>

                                    : <Form.Field> <Form.TextArea placeholder={singleField.fieldName} rows="2" label={singleField.fieldName} onChange={props.onHandleTag} index={singleField.customFieldId} /></Form.Field>}
                            </Grid.Column>
                        )
                    })}

                </Grid>
            </Form>
            <Grid>
                <Grid.Column width={16} textAlign="right">
                    <Button className="secondaryBtn">Edit</Button>
                    <Button className="primaryBtn" onClick={props.tagOnContent} >Save</Button>
                    <Button className="primaryBtn" onClick={props.closeModal} >Cancel</Button>
                </Grid.Column>
            </Grid>
        </ReactModal>
    );
}

export default AddTagModal;