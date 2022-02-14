import React, { useState, useEffect, useRef } from "react";
import { Icon, Table, Form, Dimmer, Loader } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "../../../../../store/actions/api.actions"

function Audio(props) {
    const dispatch = useDispatch();
    const api = useSelector((state) => state.api);
    const initialValues = { resourceTypeId: 18, bookId: -1 }
    const [resources, setResources] = useState(initialValues);
    const [audioList, setAudioList] = useState();
    const [selectedAudio, setSelectedAudio] = useState([]);

    const getAudio = () => {
        dispatch(
            apiCall({
                urls: ["GETRESOURCESLIST"], method: "GET", data: resources,
                onSuccess: (response) => {
                          
                    // const bookListed = response.map((singledata) => {
                    //     return { text: singledata.bookName, value: singledata.bookId };
                    // });
                    setAudioList(response);
                }
            })
        );
    };


    useEffect(() => {
        getAudio();
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
              
        if (audioList.length !== selectedAudio.length) {
            // setSelectedAudio(audioList.map(audi => audi.Id))
            setSelectedAudio(audioList.map(data => JSON.parse(data.link)[0].AudioLinkId))
        }
        else {
            setSelectedAudio([])
        }
    }
    const onHandleSelect = (e, { name, checked }) => {
              
        if (checked === true) {
            setSelectedAudio(selectedAudio.concat(name))
        }
        if (checked === false) {
            const st = selectedAudio.filter(audi => audi !== name);
            setSelectedAudio(st)
        }
    }
    useEffect(() => {
        props.getSelectedAudio(selectedAudio)
    }, [selectedAudio]);
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
                        <Table.HeaderCell>Audio</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <>
                        {audioList && audioList.map((audio) => {
                                  
                            return (
                                <Table.Row>
                                    <Table.Cell>
                                        <Form.Checkbox onChange={onHandleSelect}
                                            name={JSON.parse(audio.link)[0].AudioLinkId}
                                            value={audio.IsChecked}
                                            checked={selectedAudio.includes(JSON.parse(audio.link)[0].AudioLinkId)}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>{audio.gradeName}</Table.Cell>
                                    <Table.Cell>{audio.chapterName}</Table.Cell>
                                    <Table.Cell>{<a href={(JSON.parse(audio.link)[0].AudioLink)} target="_blank">
                                        <Icon name={checkDisplayIcon(JSON.parse(audio.link)[0].AudioLink)}
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

export default Audio;