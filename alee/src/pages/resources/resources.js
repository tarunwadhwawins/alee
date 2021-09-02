import React, { useState, useEffect } from "react";
import { Grid, Header, Button, Form, Tab, Icon, Dimmer, Loader } from "semantic-ui-react";
import { DataTable } from "../../../src/shared/components/organisms";
import { GlobalCodeSelect } from "../../shared/components";
import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "../../store/actions/api.actions";
import { commonFunctions } from "../../shared/functional/global-import";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
function ResourcesPage() {
  const [booklist, setBooklist] = useState(null);
  const api = useSelector((state) => state.api);
  const [reload, SetReload] = useState(false);
  const [editData, SetEditData] = useState([]);
  const dispatch = useDispatch();
  const [grade, setGradeList] = useState(null);
  const [chapter, setChapter] = useState({ bookId: 1 });
  const [chapterList, setChapterList] = useState([]);
  const [page, setPage] = useState({ bookId: 1, chapterId: 46 });
  const [pageList, setPageList] = useState([]);
  const initialValues = {
    ResourceId: "",
    GradeId: "",
    BookId: "",
    ChapterId: "",
    PageId: "",
    UploadPdf: "",
    AudioLink: "",
    VideoLink: "",
    ArticleLink: "",
  };
  const [resources, setResources] = useState(initialValues);

  // const bookId=useSelector(state => state.global.myBookData.bookId);

  const onHandleChange = (e, { data, value }) => {

    setResources({ ...resources, [data]: value });
  };

  const fileChange = (e) => {
    setResources({ ...resources, UploadPdf: e.target.files[0] });

  };
  const onHandleEdit = (data) => {
    const { resourceId, gradeId, bookId, chapterId, pageId, link } = data;

    if (data.resourceTypeName === "Audio") {
      setResources({ ...resources, ResourceId: resourceId, GradeId: gradeId, BookId: bookId, ChapterId: chapterId, PageId: pageId, AudioLink: link })
    }
    else if (data.resourceTypeName === "Video") {
      setResources({ ...resources, ResourceId: resourceId, GradeId: gradeId, BookId: bookId, ChapterId: chapterId, PageId: pageId, VideoLink: link })
    }
    else if (data.resourceTypeName === "Article" && data.link.indexOf("pdf") > 0) {
      setResources({
        ...resources, ResourceId: resourceId, GradeId: gradeId, BookId: bookId, ChapterId: chapterId, PageId: pageId, UploadPdf: link,
      })
    }
    else if (data.resourceTypeName === "UploadPdf" && data.link.indexOf("pdf") < 0) {
      debugger;
      setResources({ ...resources, ResourceId: resourceId, GradeId: gradeId, BookId: bookId, ChapterId: chapterId, PageId: pageId, ArticleLink: link })
    }
  }
  useEffect(() => {
    editResouces();
    getBookList();
    getGradeList();
    getChapterList();
    getPageList();

  }, []);

  const editResouces = () => {
    const { ResourceId, GradeId, BookId, ChapterId, PageId, UploadPdf, AudioLink, VideoLink, ArticleLink, } = resources;
    setResources({
      ...resources,
      ResourceId: ResourceId, GradeId: GradeId, BookId: BookId, ChapterId: ChapterId, PageId: PageId,
      UploadPdf: UploadPdf, AudioLink: AudioLink, VideoLink: VideoLink, ArticleLink: ArticleLink
    });
  };

  //  get api //
  const getBookList = () => {
    dispatch(
      apiCall({
        urls: ["GETBOOKSLIST"],
        method: "GET",
        data: booklist,
        onSuccess: (response) => {
          const booklist = response.map((singledata) => {
            return { text: singledata.bookName, value: singledata.bookId };
          });
          setBooklist(booklist);
        },
      })
    );
  };
  //  //  get api //
  const getGradeList = () => {
    dispatch(
      apiCall({
        urls: ["GETGRADESLIST"],
        method: "GET",
        data: grade,
        onSuccess: (response) => {
          const grade = response.map((singledata) => {
            return { text: singledata.gradeName, value: singledata.gradeId };
          });
          setGradeList(grade);
        },
      })
    );
  };
  const getChapterList = () => {
    dispatch(
      apiCall({
        urls: ["GETCHAPTERLIST"],
        method: "GET",
        data: chapter,
        onSuccess: (response) => {
          const chapters = response.map((singledata) => {
            return { text: singledata.chapterName, value: singledata.chapterId };
          });
          setChapterList(chapters);
        },
      })
    );
  };
  const getPageList = () => {
    dispatch(
      apiCall({
        urls: ["GETCHAPTERPAGES"],
        method: "GET",
        data: page,
        onSuccess: (response) => {
          debugger
          const pages = response.map((singledata) => {
            return { text: singledata.pageNo, value: singledata.pageId };
          });
          setPageList(pages);
        },
      })
    );
  };
  /////////////

  // const getchapter = () => {
  //   dispatch(
  //     apiCall({
  //       urls: ["GETCHAPTERLIST"],
  //       method:"GET",
  //       data:{bookId:bookId},
  //       onSuccess: (response) => {
  //         const chapterlist = response.map((singledata) => {
  //           return {text: singledata.chapterName, value: singledata.chapterId };
  //         });
  //         setChapterlist(chapterlist);
  //       },
  //     })
  //   );
  // };

  const GridReload = () => {
    SetReload(!reload);
  };
  const cancelClear = () => {
    setResources(initialValues);
  };


  const checkDisplayIcon = (link) => {
    if (link?.indexOf("www.youtube.com") > -1) {
      return "video";
    }
    else if (link?.indexOf("www.youtube.com") < 0) {
      return "file audio outline";
    }
  }

  const panes = [
    {
      menuItem: "Audio",
      render: () => {
        return (
          <Tab.Pane attached={false} key="Audio">
            <DataTable

              allApi={{
                getApiName: "GETRESOURCESLIST",
                deleteApiName: "DELETERESOURCES",
                toggleApiName: "RESOURCESTOGGLE",
              }} reload={reload}
              searchOption={{ show: true, placeHolder: "Search" }}
              additionalParams={{ resourceTypeId: 18 }}
              messageInModal="audio"
              columns={[
                {
                  headerName: "Grade",
                  fieldName: "gradeName",
                  isSorting: true,
                },
                {
                  headerName: "Book",
                  fieldName: "bookName",
                  isSorting: true,
                },

                {
                  headerName: "Chapter",
                  fieldName: "chapterId",
                  isSorting: true,
                },
                {
                  headerName: "Page",
                  fieldName: "pageId",
                  isSorting: true,
                },
                {
                  headerName: "Audio",
                  fieldName: "link",
                  isSorting: true,
                  Cell: (props) => {
                    return (
                      <a href={(props.link)}
                        target="_blank">
                        <Icon name={checkDisplayIcon(props.link)} className="primary-color" link />
                      </a>
                    )
                  },
                },
                {
                  headerName: "Action",
                  fieldName: "Action",
                  isSorting: false,
                  Cell: (props, confirmModalOpen) => {
                    ;
                    return (
                      <>
                        <Icon title="Edit" name="edit" className="primary-color" link onClick={() => onHandleEdit(props)} />
                        <Icon
                          title="Delete"
                          name="trash alternate"
                          color="red"
                          link
                          onClick={() =>
                            confirmModalOpen(props.resourceLinkId, "delete")
                          }
                        />
                      </>
                    );
                  },
                },
              ]}
            ></DataTable>
          </Tab.Pane>
        );
      },
    },
    {
      menuItem: "Video",
      render: () => {
        return (
          <Tab.Pane attached={false} key="Video">
            <DataTable
              allApi={{
                getApiName: "GETRESOURCESLIST",
                deleteApiName: "DELETERESOURCES",
                toggleApiName: "RESOURCESTOGGLE",
              }} reload={reload}
              searchOption={{ show: true, placeHolder: "Search" }}
              additionalParams={{ resourceTypeId: 19 }}
              messageInModal="video"
              columns={[
                {
                  headerName: "Grade",
                  fieldName: "gradeName",
                  isSorting: true,
                },
                {
                  headerName: "Book",
                  fieldName: "bookName",
                  isSorting: true,
                },

                {
                  headerName: "Chapter",
                  fieldName: "chapterId",
                  isSorting: true,
                },
                {
                  headerName: "Page",
                  fieldName: "pageId",
                  isSorting: true,
                },
                {
                  headerName: "Video",
                  fieldName: "link",
                  isSorting: true,
                  Cell: (props) => {
                    return props.link ? (
                      <a href={(props.link)}
                        target="_blank">
                        <Icon name="video" className="primary-color" link />
                      </a>
                    ) : (
                      "-"
                    );
                  },
                },
                {
                  headerName: "Action",
                  fieldName: "Action",
                  isSorting: false,
                  Cell: (props, confirmModalOpen) => {
                    return (
                      <>
                        <Icon title="Edit" name="edit" className="primary-color" link onClick={() => onHandleEdit(props)} />
                        <Icon
                          title="Delete"
                          name="trash alternate"
                          color="red"
                          link
                          onClick={() =>
                            confirmModalOpen(props.resourceLinkId, "delete")
                          }
                        />
                      </>
                    );
                  },
                },
              ]}
            ></DataTable>
          </Tab.Pane>
        );
      },
    },
    {
      menuItem: "Article",
      render: () => {
        return (
          <Tab.Pane attached={false} key="Article">
            <DataTable
              allApi={{
                getApiName: "GETRESOURCESLIST",
                deleteApiName: "DELETERESOURCES",
                toggleApiName: "RESOURCESTOGGLE",
              }} reload={reload}
              searchOption={{ show: true, placeHolder: "Search" }}
              additionalParams={{ resourceTypeId: 20 }}
              messageInModal="article"
              columns={[
                {
                  headerName: "Grade",
                  fieldName: "gradeName",
                  isSorting: true,
                },
                {
                  headerName: "Book",
                  fieldName: "bookName",
                  isSorting: true,
                },

                {
                  headerName: "Chapter",
                  fieldName: "chapterId",
                  isSorting: true,
                },
                {
                  headerName: "Page",
                  fieldName: "pageId",
                  isSorting: true,
                },
                {
                  headerName: "Article",
                  fieldName: "link",
                  isSorting: true,
                  Cell: (props) => {
                    return props.link?.indexOf("pdf") < 0 ? (
                      <a href={(props.link)}
                        target="_blank">
                        <Icon name={checkDisplayIcon(props.link)} className="primary-color" link />
                      </a>
                    ) : (
                      "-"
                    );
                  },
                },
                {
                  headerName: "Pdf",
                  fieldName: "link",
                  isSorting: true,
                  Cell: (props) => {
                    return props.link?.indexOf("pdf") > 0 ? (
                      <a href={commonFunctions.concatenateImageWithAPIUrl(props.link)}
                        target="_blank">
                        <Icon name="file pdf" className="primary-color" link />
                      </a>
                    ) : (
                      "-"
                    );
                  },
                },
                {
                  headerName: "Action",
                  fieldName: "Action",
                  isSorting: false,
                  Cell: (props, confirmModalOpen) => {
                    return (
                      <>
                        <Icon title="Edit" name="edit" className="primary-color" link onClick={() => onHandleEdit(props)} />
                        <Icon
                          title="Delete"
                          name="trash alternate"
                          color="red"
                          link
                          onClick={() =>
                            confirmModalOpen(props.resourceLinkId, "delete")
                          }
                        />
                      </>
                    );
                  },
                },
              ]}
            ></DataTable>
          </Tab.Pane>
        );
      },
    },
  ];
  const onHandleSubmit = () => {
    const data = { ...resources, };
    data.ChapterId = 1;
    data.PageId = 2;
    var formData = commonFunctions.getFormData(data);
    dispatch(
      apiCall({
        urls: ["ADDUPDATERESOURCES"],
        method: "Post",
        data: formData,
        onSuccess: (response) => {
          GridReload();
          cancelClear();
          setResources(initialValues);
        },
        showNotification: true,
      })
    );
  };
  return (
    <div className="common-shadow resources">
      {api.isApiLoading && (
        <Dimmer active inverted>
          <Loader />
        </Dimmer>

      )}
      <Grid>
        <Grid.Column width={16}>
          <Header as="h3" className="commonHeading">
            Resources
          </Header>
        </Grid.Column>
        <Grid.Column width={16}>
          <Form>
            <Grid>
              <Grid.Column width="4">
                {/* <GlobalCodeSelect
                  label="Grade"
                  placeholder="Grades"
                  categoryType="Grades"
                  onChange={onHandleChange}
                  data="GradeId"
                  value={resources.GradeId}
                /> */}
                <Form.Select
                  label="Grade"
                  placeholder="Grades"
                  options={grade}
                  data="GradeId"
                  value={resources.GradeId}
                  onChange={onHandleChange}
                />
              </Grid.Column>
              <Grid.Column width="4">
                <Form.Select
                  label="Book"
                  placeholder="Select Book"
                  options={booklist}
                  data="BookId"
                  value={resources.BookId}
                  onChange={onHandleChange}
                />
              </Grid.Column>
              <Grid.Column width="4">
                <Form.Select
                  label="Chapter"
                  placeholder="Select Chapter"
                  options={chapterList}
                  data="ChapterId"
                  value={resources.ChapterId}
                  onChange={onHandleChange}
                />
              </Grid.Column>
              <Grid.Column width="4">
                <Form.Select
                  label="Page"
                  placeholder="Select Page"
                  options={pageList}
                  data="PageId"
                  value={resources.PageId}
                  onChange={onHandleChange}
                />
              </Grid.Column>
              <Grid.Column width="8">
                <Form.Input
                  label="Audio"
                  placeholder="Embed URL"
                  value={resources.AudioLink}
                  data="AudioLink"
                  onChange={onHandleChange}
                />
              </Grid.Column>
              <Grid.Column width="8">
                <Form.Input
                  label="Video"
                  placeholder="Embed URL"
                  value={resources.VideoLink}
                  data="VideoLink"
                  onChange={onHandleChange}
                />
              </Grid.Column>
              <Grid.Column width="8">
                <Form.Input
                  label="Article"
                  placeholder="Article"
                  value={resources.ArticleLink}
                  data="ArticleLink"
                  onChange={onHandleChange}
                />
              </Grid.Column>
              <Grid.Column width="8">
                <Form.Input
                  // value={resources.UploadPdf}
                  // data="UploadPdf"
                  type="file"
                  label="Upload Pdf"
                  placeholder="Embed URL"
                  onChange={fileChange}
                />
              </Grid.Column>
              <Grid.Column width="16" textAlign="right">
                <Button className="secondaryBtn" onClick={cancelClear}> Cancel </Button>
                <Button
                  className="primaryBtn"
                  onClick={onHandleSubmit}
                  loading={api.isApiLoading} >{resources.ResourceId > 0 ? "Update" : "Save"}
                </Button>
              </Grid.Column>
              <Grid.Column width={16}>
                <Tab menu={{ text: true }} panes={panes} onTabChange={cancelClear} />
              </Grid.Column>
            </Grid>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default ResourcesPage;
