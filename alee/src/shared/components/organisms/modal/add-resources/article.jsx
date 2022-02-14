import React, { useState, useEffect, useRef } from "react";
import { Icon, Table, Form, Dimmer, Loader } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "../../../../../store/actions/api.actions"

function Article(props) {
    const dispatch = useDispatch();
    const api = useSelector((state) => state.api);
    const initialValues = { resourceTypeId: 20, bookId: -1 }
    const [resources, setResources] = useState(initialValues);
    const [articleList, setArticleList] = useState();
    const [selectedArticle, setSelectedArticle] = useState([]);

    const getVideo = () => {
        dispatch(
            apiCall({
                urls: ["GETRESOURCESLIST"], method: "GET", data: resources,
                onSuccess: (response) => {
                          
                    // const bookListed = response.map((singledata) => {
                    //     return { text: singledata.bookName, value: singledata.bookId };
                    // });
                    setArticleList(response);
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
              
        if (articleList.length !== selectedArticle.length) {
            // setSelectedAudio(articleList.map(audi => audi.Id))
            setSelectedArticle(articleList.map(data => JSON.parse(data.link)[0].ArticleLinkId) || articleList.map(data => JSON.parse(data.link)[0].PdfLinkId))
        }
        else {
            setSelectedArticle([])
        }
    }
    const onHandleSelect = (e, { name, checked }) => {
              
        if (checked === true) {
            setSelectedArticle(selectedArticle.concat(name))
        }
        if (checked === false) {
            const st = selectedArticle.filter(audi => audi !== name);
            setSelectedArticle(st)
        }
    }
    useEffect(() => {
        props.getSelectedArticle(selectedArticle)
        console.log("selected Article", selectedArticle);
    }, [selectedArticle]);
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
                        <Table.HeaderCell>Article</Table.HeaderCell>
                        <Table.HeaderCell>Pdf</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <>
                        {articleList && articleList.map((audio) => {
                                  
                            return (
                                <Table.Row>
                                    <Table.Cell>
                                        <Form.Checkbox onChange={onHandleSelect}
                                            name={JSON.parse(audio.link)[0].ArticleLinkId || JSON.parse(audio.link)[0].PdfLinkId}
                                            value={audio.IsChecked}
                                            checked={selectedArticle.includes(JSON.parse(audio.link)[0].ArticleLinkId) || selectedArticle.includes(JSON.parse(audio.link)[0].PdfLinkId)}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>{audio.gradeName}</Table.Cell>
                                    <Table.Cell>{audio.chapterName}</Table.Cell>
                                    <Table.Cell>{<a href={(JSON.parse(audio.link)[0].ArticleLink)} target="_blank">
                                        <Icon name={checkDisplayIcon(JSON.parse(audio.link)[0].ArticleLink)}
                                            className="primary-color"
                                            link />
                                    </a>}</Table.Cell>
                                    <Table.Cell>{<a href={(JSON.parse(audio.link)[0].PdfLink)} target="_blank">
                                        <Icon name={checkDisplayIcon(JSON.parse(audio.link)[0].PdfLink)}
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

export default Article;