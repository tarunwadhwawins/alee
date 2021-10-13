import React, { useState, useEffect, useRef } from "react";
import { Icon, Table, Form, Dimmer, Loader } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "../../../../../store/actions/api.actions"

function Video(props) {
    const dispatch = useDispatch();
    const api = useSelector((state) => state.api);
    const initialValues = { resourceTypeId: 19, bookId: -1 }
    const [resources, setResources] = useState(initialValues);
    const [videoList, setVideoList] = useState();
    const [selectedVideo, setSelectedVideo] = useState([]);

    const getVideo = () => {
        dispatch(
            apiCall({
                urls: ["GETRESOURCESLIST"], method: "GET", data: resources,
                onSuccess: (response) => {
                    debugger
                    // const bookListed = response.map((singledata) => {
                    //     return { text: singledata.bookName, value: singledata.bookId };
                    // });
                    setVideoList(response);
                }
            })
        );
    };


    useEffect(() => {
        getVideo();
    }, []);

    const checkDisplayIcon = (link) => {
        if (link?.indexOf("www.youtube.com") > 0) {
            return "youtube";
        }
        if (link?.indexOf("Pdf") > 0) {
            return "file pdf outline";
        }
        else {
            return "linkify"
        }
    }
    const checkDisplayIconPdf = (link) => {
        if (link?.indexOf("Pdf") > 0) {
            return "file pdf outline";
        }
    }
    const selectAll = () => {
        debugger
        if (videoList.length !== selectedVideo.length) {
            // setSelectedAudio(videoList.map(audi => audi.Id))
            setSelectedVideo(videoList.map(data => JSON.parse(data.link)[0].VideoLinkId))
        }
        else {
            setSelectedVideo([])
        }
    }
    const onHandleSelect = (e, { name, checked }) => {
        debugger
        if (checked === true) {
            setSelectedVideo(selectedVideo.concat(name))
        }
        if (checked === false) {
            const st = selectedVideo.filter(audi => audi !== name);
            setSelectedVideo(st)
        }
    }
    useEffect(() => {
        props.getSelectedVideo(selectedVideo)
    }, [selectedVideo]);
    
    return (
        <div>
            {api.isApiLoading && (
                <Dimmer active inverted>
                    <Loader />
                </Dimmer>
            )}
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            <Form.Checkbox onChange={selectAll}
                            // checked={audioList.length !== selectedAudio.length}
                            />
                        </Table.HeaderCell>
                        <Table.HeaderCell>Grade</Table.HeaderCell>
                        <Table.HeaderCell>Chapter</Table.HeaderCell>
                        <Table.HeaderCell>Video</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <>
                        {videoList && videoList.map((audio) => {
                            debugger
                            return (
                                <Table.Row>
                                    <Table.Cell>
                                        <Form.Checkbox onChange={onHandleSelect}
                                            name={JSON.parse(audio.link)[0].VideoLinkId}
                                            value={audio.IsChecked}
                                            checked={selectedVideo.includes(JSON.parse(audio.link)[0].VideoLinkId)}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>{audio.gradeName}</Table.Cell>
                                    <Table.Cell>{audio.chapterName}</Table.Cell>
                                    <Table.Cell>{<a href={(JSON.parse(audio.link)[0].VideoLink)} target="_blank">
                                        <Icon name={checkDisplayIcon(JSON.parse(audio.link)[0].VideoLink)}
                                            className="primary-color"
                                            link />
                                    </a>}</Table.Cell>
                                </Table.Row>)
                        })}
                    </>
                </Table.Body>
            </Table>
        </div>
    );
}

export default Video;