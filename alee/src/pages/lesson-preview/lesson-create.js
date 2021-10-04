import React, { useState, useEffect } from "react";
import { Grid, Header, Image, Dimmer, Loader, List } from "semantic-ui-react";
import { useDispatch } from 'react-redux';
import { apiCall } from "../../store/actions/api.actions";
import { useSelector } from "react-redux";
import { commonFunctions } from "../../shared/functional/global-import";
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
        debugger
        dispatch(
            apiCall({
                urls: ["GETLESSONPLANDATA"],
                method: "GET",
                data:teacherId,lessonPlanId,
                onSuccess: (response) => {
                     debugger;  
                    setLessonData(response);
                },
            })
        );
    };
    return (

        <div className="common-shadow profileView">
            {api.isApiLoading && (
            <Dimmer active inverted><Loader /></Dimmer>)}
            <div>
                <div>
                    <Header as='h3' className="commonHeading">
                    </Header>
                    <List>
                    </List>
                </div>
            </div>
            <Grid>
                <Grid.Column width={16}>
                </Grid.Column>
                <Grid.Column width={16}>
                </Grid.Column>
                <Grid.Column width={16}>
                </Grid.Column>
            </Grid>


        </div>
    );
}

export default LessonView;