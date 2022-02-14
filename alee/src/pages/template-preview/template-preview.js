import React, { useState, useEffect } from "react";
import { Grid, Header, Dimmer, Loader, Table, Form, Button } from "semantic-ui-react";
import { useDispatch } from 'react-redux';
import { apiCall } from "../../store/actions/api.actions";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
function TemplatePreview() {
    const templateId = useParams();
    const api = useSelector(state => state.api);
    const [templatePreview,setTemplatePreview] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        getLessonProfile();
    }, []);
    const getLessonProfile = () => {
        dispatch(
            apiCall({
                urls: ["GETTEMPLATEFIELDSLIST"],
                method: "GET",
                data:templateId,
                onSuccess: (response) => {
                        
                    setTemplatePreview(response);
                },
            })
        );
    };
    return (

        <div>
            {api.isApiLoading && (
                <Dimmer active inverted><Loader /></Dimmer>)}


            <Grid>
                <Grid.Column width={16}>
                    <Header as='h3' className="commonHeading">Template Form</Header>
                </Grid.Column>

                <Grid.Column width={8}>
                    <Form>
                                <Grid>
                                    {templatePreview.map((singleData, index) => {
                                            
                                        if (singleData.fieldDataType === "Header") {
                                            return (
                                                <Grid.Column width={16} key={index}>
                                                    <Header>{singleData.fieldName}</Header>
                                                </Grid.Column>

                                            )
                                        }
                                        if (singleData.fieldDataType === "Dropdown") {
                                            return (
                                                <Grid.Column width={16} key={index}>
                                                    <Form.Select placeholder={singleData.fieldName} 
                                                     index={singleData.templateFieldId} fluid />
                                                </Grid.Column>
                                            )
                                        }
                                        if (singleData.fieldDataType === "Checkboxes") {
                                            return (
                                                <Grid.Column width={16} key={index}>
                                                    <Form.Checkbox label={singleData.fieldName} className="commonToggle" 
                                                     index={singleData.templateFieldId} fluid />
                                                </Grid.Column>
                                            )
                                        }
                                        if (singleData.fieldDataType === "TextInput") {
                                                
                                            return (
                                                <Grid.Column width={16} key={index}>
                                                    <Form.Input placeholder={singleData.fieldName} type="text" index={singleData.templateFieldId} fluid />
                                                </Grid.Column>
                                            )
                                        }
                                        if (singleData.fieldDataType === "NumberInput") {
                                            return (
                                                <Grid.Column width={16} key={index}>
                                                    <Form.Input placeholder={singleData.fieldName} type="number" index={singleData.templateFieldId} fluid />
                                                </Grid.Column>
                                            )
                                        }
                                        if (singleData.fieldDataType === "TextArea") {
                                                            
                                            return (
                                                <Grid.Column width={16} key={index}>
                                                    <Form.TextArea placeholder={singleData.fieldName}
                                                     index={singleData.templateFieldId} rows="2" />
                                                </Grid.Column>
                                            )
                                        }

                                    })}

                                </Grid>
                    
                    </Form>
                </Grid.Column>
            </Grid>


        </div>
    );
}

export default TemplatePreview;