import React, { useState, useEffect } from "react";
import { Grid, Header, Dimmer, Loader, Table, Form, Button } from "semantic-ui-react";
import { useDispatch } from 'react-redux';
import { apiCall } from "../../store/actions/api.actions";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
function LessonView() {
    const lessonPlanId = useParams();
    const teacherId = useSelector(state => state.auth.userDetail.teacherId);
    const api = useSelector(state => state.api);
    const [lessonData, setLessonData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        getLessonProfile();
    }, []);
    const getLessonProfile = () => {
        dispatch(
            apiCall({
                urls: ["GETLESSONPLANDATA"],
                method: "GET",
                data: lessonPlanId,
                onSuccess: (response) => {

                    setLessonData(response);
                },
            })
        );
    };
    return (
        <div className="common-shadow profileView">
            {api.isApiLoading && (
                <Dimmer active inverted><Loader /></Dimmer>)}
            <Grid>
                <Grid.Column width={16}>
                    <Header as='h3' className="commonHeading">Lesson Plan Detail</Header>
                </Grid.Column>

                <Grid.Column width={16}>
                    <Table basic className="lessonDetail">
                        {lessonData && lessonData.map((lessonData, index) => {
                            return (
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell disabled>Lesson Plan :</Table.Cell>
                                        <Table.Cell>{lessonData.lessonPlanName}</Table.Cell>
                                        <Table.Cell disabled>Grade :</Table.Cell>
                                        <Table.Cell>{lessonData.grade}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell disabled>Teacher Name :</Table.Cell>
                                        <Table.Cell>{lessonData.teacherName}</Table.Cell>
                                        <Table.Cell disabled>Template Name :</Table.Cell>
                                        <Table.Cell>{lessonData.templateName}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            );
                        })}
                    </Table>
                </Grid.Column>
                <Grid.Column width={16}>
                    <Form>
                        {lessonData && lessonData.map((lessonData, index) => {
                            const templateData = lessonData.templateData ? JSON.parse(lessonData.templateData) : []
                            return (
                                <Grid>
                                    {templateData.map((singleData, index) => {
                                        if (singleData.FieldaDataType === "Header") {
                                            return (
                                                <Grid.Column width={16} key={index}>
                                                    <Header>{singleData.FieldName}</Header>
                                                </Grid.Column>
                                            )
                                        }
                                        if (singleData.FieldaDataType === "Dropdown") {
                                            return (
                                                <Grid.Column width={16} key={index}>
                                                    <Form.Select placeholder={singleData.FieldName} index={singleData.TemplateFieldId} fluid />
                                                </Grid.Column>
                                            )
                                        }
                                        if (singleData.FieldaDataType === "Checkboxes") {
                                            return (
                                                <Grid.Column width={16} key={index}>
                                                    <Form.Checkbox label={singleData.FieldName} className="commonToggle" index={singleData.TemplateFieldId} fluid />
                                                </Grid.Column>
                                            )
                                        }
                                        if (singleData.FieldaDataType === "TextInput") {
                                            return (
                                                <Grid.Column width={16} key={index}>
                                                    <Form.Input placeholder={singleData.FieldName} type="text" index={singleData.TemplateFieldId} fluid />
                                                </Grid.Column>
                                            )
                                        }
                                        if (singleData.FieldDataType === "NumberInput") {
                                            return (
                                                <Grid.Column width={16} key={index}>
                                                    <Form.Input placeholder={singleData.FieldName} type="number" index={singleData.TemplateFieldId} fluid />
                                                </Grid.Column>
                                            )
                                        }
                                        if (singleData.FieldaDataType === "TextArea") {
                                            return (
                                                <Grid.Column width={16} key={index}>
                                                    <Form.TextArea value={singleData.Response} placeholder={singleData.FieldName} index={singleData.TemplateFieldId} rows="2" />
                                                </Grid.Column>
                                            )
                                        }
                                    })}
                                </Grid>
                            );
                        })}
                    </Form>
                </Grid.Column>
                <Grid.Column width={16}>
                    <Header as="h4">Notes</Header>
                    <Table basic>
                        {lessonData && lessonData.map((lessonData, index) => {
                            const notes = lessonData.notes ? JSON.parse(lessonData.notes) : [];
                            return (
                                <Table.Body>
                                    {notes && notes.length > 0 && notes.map((description, index) => {
                                        const studentName = description.Students ? JSON.parse(description.Students) : []
                                        return (
                                            <>
                                                <Table.Row>
                                                    <Table.Cell disabled>
                                                        Description:
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        {description.NoteDescription}
                                                    </Table.Cell>
                                                </Table.Row>
                                                {studentName && studentName.length > 0 && studentName.map((studentData, index) => {
                                                    return (
                                                        <>
                                                            <Table.Row>
                                                                <Table.Cell disabled>
                                                                    Student Name :
                                                                </Table.Cell>
                                                                <Table.Cell>
                                                                    {studentData.StudentName}
                                                                </Table.Cell>
                                                            </Table.Row>
                                                        </>
                                                    );
                                                })}

                                            </>
                                        );
                                    })}
                                </Table.Body>
                            );
                        })}
                    </Table>
                    <Grid.Column width={16}>
                        <Button className="alternateBtn">Dowload As Pdf</Button>
                    </Grid.Column>
                </Grid.Column>

            </Grid>


        </div>
    );
}

export default LessonView;