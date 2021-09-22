import React, { useState, useEffect, useRef } from "react";
import { Grid, Header, Button, Form, Tab, Icon, Dimmer, Loader } from "semantic-ui-react";
import { DataTable } from "../../../src/shared/components/organisms";
import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "../../store/actions/api.actions";
import { commonFunctions, Notifications } from "../../shared/functional/global-import";
import SimpleReactValidator from 'simple-react-validator';
import ConfirmModal from "../../shared/components/organisms/modal/common-confirm-modal/index";

function ResourcesPage() {
  const api = useSelector((state) => state.api);
  const [reload, SetReload] = useState(false);
  // const [editData, SetEditData] = useState([]);
  const dispatch = useDispatch();
  const [chapterList, setChapterList] = useState([]);
  const [pageList, setPageList] = useState([]);
  const [booklist, setBooklist] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [confirmModal, setConfirmModal] = useState({ modalStatus: false, selectedId: "", type: "", isActive: null })

  const initialValues = {
    ResourceId: "",
    GradeId: "",
    BookId: "",
    ChapterId: "",
    PageId: "",
    UploadPdf: null,
    editUploadPdf: "",
    AudioLink: "",
    VideoLink: "",
    ArticleLink: "",
    deletePdfId: "",
    ArticleLinkId: "",
    VideoLinkId: "",
    AudioLinkId: "",
  };
  const [grade, setGradeList] = useState([]);
  const [resources, setResources] = useState(initialValues);
  const [, forceUpdate] = useState()
  const simpleValidator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } }))


  // ==================== Global Code Static ResourceType =====================================
  const globalCode = useSelector(state => state.global.codes)

  let globalCodes = globalCode.filter(code => code.categoryName === "ResourceType").map((filtercode) => {

    return { filtercode: filtercode.codeName, value: filtercode.globalCodeId, text: filtercode.codeName }
  });

  // ==================== Global Code Static ResourceType =====================================


  const confirmModalOpen = (id, type, isActive) => {

    setConfirmModal({ ...confirmModal, modalStatus: true, selectedId: id, type: type, isActive: isActive })
  }

  const modalClose = () => {
    setConfirmModal({ ...confirmModal, modalStatus: !confirmModal.modalStatus, selectedId: "" })
  }
  const fileChange = (e) => {
    debugger
    setResources({ ...resources, UploadPdf: e.target.files[0] });
  };
  const onHandleEdit = (data, edit) => {
    if (edit === "edit") {
      setEditForm(true);
    }
    const { resourceId, gradeId, bookId, chapterId, pageId, link } = data;
    let convertedLink = JSON.parse(link)[0]

    setResources({
      ResourceId: resourceId,
      GradeId: gradeId,
      BookId: bookId,
      ChapterId: chapterId,
      PageId: pageId,
      VideoLink: convertedLink.VideoLink === "null" ? "" : convertedLink.VideoLink,
      AudioLink: convertedLink.AudioLink === "null" ? "" : convertedLink.AudioLink,
      editUploadPdf: convertedLink.PdfLink,
      ArticleLink: convertedLink.ArticleLink === "null" ? "" : convertedLink.ArticleLink,
      AudioLinkId: convertedLink.AudioLinkId,
      VideoLinkId: convertedLink.VideoLinkId,
      ArticleLinkId: convertedLink.ArticleLinkId,
      PdfLinkId: convertedLink.PdfLinkId,
    })
  }

  useEffect(() => {
    getGradeList();
  }, []);

  useEffect(() => {
    if (resources.GradeId) {
      getBookList();
    }
  }, [editForm, resources.GradeId]);

  useEffect(() => {
    if (editForm) {
      getChapterList();
    }
  }, [editForm, resources.BookId]);
  useEffect(() => {

    if (resources.ChapterId) {
      getPageList();
    }
  }, [editForm, resources.ChapterId]);

  // get api //
  const getBookList = (value) => {
    dispatch(
      apiCall({
        urls: ["GETBOOKSLISTBYGRADEID"],
        method: "GET",
        data: { "GradeId": (value === undefined ? resources.GradeId : value) },
        onSuccess: (response) => {
          const bookListed = response.map((singledata) => {
            return { text: singledata.bookName, value: singledata.bookId };
          });
          setBooklist(bookListed);
        }
      })
    );
  };
  //  get api //
  const getGradeList = () => {
    dispatch(
      apiCall({
        urls: ["GETGRADESLIST"],
        method: "GET",
        data: ({ ActiveGrades: true, OrderBy: "GradeName", OrderByDescending: false }),
        onSuccess: (response) => {
          const grade = response.map((singledata) => {
            return {
              text: singledata.gradeName,
              value: singledata.gradeId
            };
          });
          setGradeList(grade);
        },
      })
    );
  };
  const getChapterList = (value) => {
    dispatch(
      apiCall({
        urls: ["GETCHAPTERLIST"],
        method: "GET",
        data: { bookId: (value === undefined ? resources.BookId : value), OrderBy: "PageNo", OrderByDescending: true },
        onSuccess: (response) => {
          const chapters = response.map((singledata) => {
            return {
              text: singledata.chapterName,
              value: singledata.chapterId
            };
          });
          setChapterList(chapters);
        },
      })
    );
  };
  const getPageList = (value) => {
    dispatch(
      apiCall({
        urls: ["GETCHAPTERPAGES"],
        method: "GET",
        data: { ChapterId: (value === undefined ? resources.ChapterId : value) },
        onSuccess: (response) => {

          const pages = response.map((singledata) => {
            return { text: singledata.pageNo, value: singledata.pageId };
          });
          setPageList(pages);
        },
      })
    );
  };
  const onHandleDeletePdf = () => {
    dispatch(apiCall({
      urls: ["DELETEPDFRESOURCES"], method: "DELETE", data: { id: resources.PdfLinkId }, onSuccess: (response) => {
        debugger
        setResources(resources.editUploadPdf === "")
        modalClose();
        GridReload();
      }, showNotification: true
    }))
  }
  const onHandleChange = (e, { data, value }) => {
    if (data.toLowerCase() === "gradeid") {
      getBookList(value);
    }
    else if (data.toLowerCase() === "bookid") {
      getChapterList(value);
    }
    else if (data.toLowerCase() === "chapterid") {
      getPageList(value);
    }
    setResources({ ...resources, [data]: value });
  };
  const GridReload = () => {
    SetReload(!reload);
  };
  const cancelClear = () => {
    setBooklist([])
    setChapterList([])
    setPageList([])
    setResources(initialValues);
  };
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
  const panes = [{
    menuItem: "Audio",
    render: () => {
      return (
        <Tab.Pane attached={false} key="Audio">
          <DataTable allApi={
            {
              getApiName: "GETRESOURCESLIST",
              deleteApiName: "DELETERESOURCES",
              toggleApiName: "RESOURCESTOGGLE",
              OrderBy: "ModifiedDate", OrderByDescending: true,
            }
          }
            reload={reload}
            searchOption={
              {
                show: true,
                placeHolder: "Search"
              }
            }
            additionalParams={
              {
                resourceTypeId: 18
              }

            }

            messageInModal="audio"
            columns={
              [{
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
                fieldName: "chapterName",
                isSorting: true,
              },
              {
                headerName: "Page",
                fieldName: "pageNo",
                isSorting: true,
              },
              {
                headerName: "Audio",
                fieldName: "link",
                isSorting: false,
                Cell: (props) => {

                  return (<a href={(JSON.parse(props.link)[0].AudioLink)} target="_blank">
                    <Icon name={checkDisplayIcon(JSON.parse(props.link)[0].AudioLink)}
                      className="primary-color"
                      link />
                  </a>
                  )
                },
              },
              {
                headerName: "Action",
                fieldName: "Action",
                isSorting: false,
                Cell: (props, confirmModalOpen) => {
                  const deleteAudio = JSON.parse(props.link)[0].AudioLinkId
                  return (
                    <>
                      <Icon title="Edit" name="edit" className="primary-color" link onClick={() => onHandleEdit(props, "edit")} />
                      <Icon title="Delete" name="trash alternate" color="red" link onClick={() => confirmModalOpen(deleteAudio, "delete")} />
                    </>
                  );
                }
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
          <DataTable allApi={
            {
              getApiName: "GETRESOURCESLIST",
              deleteApiName: "DELETERESOURCES",
              toggleApiName: "RESOURCESTOGGLE",
            }
          }
            reload={
              reload
            }
            searchOption={
              {
                show: true,
                placeHolder: "Search"
              }
            }
            additionalParams={
              {
                resourceTypeId: 19
              }
            }
            messageInModal="video"
            columns={
              [{
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
                fieldName: "chapterName",
                isSorting: true,
              },
              {
                headerName: "Page",
                fieldName: "pageNo",
                isSorting: true,
              },
              {
                headerName: "Video",
                fieldName: "link",
                isSorting: false,
                Cell: (props) => {
                  return props.link ? (<a href={((JSON.parse(props.link)[0].VideoLink))}
                    target="_blank">
                    <Icon name="youtube" className="primary-color" link /> </a>) : ("-");
                },
              },
              {
                headerName: "Action",
                fieldName: "Action",
                isSorting: false,
                Cell: (props, confirmModalOpen) => {
                  const deleteVideo = JSON.parse(props.link)[0].VideoLinkId
                  return (<>
                    <Icon title="Edit"
                      name="edit"
                      className="primary-color" link onClick={() => onHandleEdit(props, "edit")}
                    />
                    <Icon title="Delete"
                      name="trash alternate"
                      color="red"
                      link onClick={() => confirmModalOpen(deleteVideo, "delete")}
                    />
                  </>
                  );
                }
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
      return (<Tab.Pane attached={false} key="Article">
        <DataTable allApi={
          {
            getApiName: "GETRESOURCESLIST",
            deleteApiName: "DELETERESOURCES",
            toggleApiName: "RESOURCESTOGGLE",
          }
        }
          reload={reload}
          searchOption={
            {
              show: true,
              placeHolder: "Search"
            }
          }
          additionalParams={
            {
              resourceTypeId: 20
            }
          }
          messageInModal="article"
          columns={
            [{
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
              fieldName: "chapterName",
              isSorting: true,
            },
            {
              headerName: "Page",
              fieldName: "pageNo",
              isSorting: true,
            },
            {
              headerName: "Article",
              fieldName: "link",
              isSorting: false,
              Cell: (props) => {

                const articleData = ((JSON.parse(props.link)[0].ArticleLink) ? JSON.parse(props.link)[0].ArticleLink : null)
                return articleData?.indexOf("www.youtube.com") > 0 ? (<a href={articleData} target="_blank">
                  <Icon name={checkDisplayIcon(articleData)}
                    className="primary-color" link />
                </a>) : ("-");
              }
            },
            {
              headerName: "Pdf",
              fieldName: "link",
              isSorting: false,
              Cell: (props) => {
                const pdfData = ((JSON.parse(props.link)[0].PdfLink) ? JSON.parse(props.link)[0].PdfLink : null)
                return pdfData?.indexOf("pdf") > 0 ? (
                  <a href={commonFunctions.concatenateImageWithAPIUrl(pdfData)}
                    target="_blank">
                    <Icon name={checkDisplayIconPdf(pdfData)} className="primary-color" link />
                  </a>
                ) : ("-");
              },
            },
            {
              headerName: "Action",
              fieldName: "Action",
              isSorting: false,
              Cell: (props, confirmModalOpen) => {
                debugger
                const deleteArticle = JSON.parse(props.link)[0].ArticleLinkId ? JSON.parse(props.link)[0].ArticleLinkId : JSON.parse(props.link)[0].PdfLinkId
                return (
                  <>
                    <Icon title="Edit" name="edit" className="primary-color" link onClick={() => onHandleEdit(props, "edit")} />
                    <Icon title="Delete" name="trash alternate" color="red" link onClick={() => confirmModalOpen(deleteArticle, "delete")} />
                  </>
                );
              },
            },]}>

        </DataTable>
      </Tab.Pane>
      );
    },
  },
  ];
  const onHandleSubmit = (e) => {
    debugger
    const { AudioLink, VideoLink, ArticleLink, UploadPdf } = resources
    const isFormValid = commonFunctions.onHandleFormSubmit(e, simpleValidator, forceUpdate);
    if (isFormValid && (AudioLink !== "" || (VideoLink !== "" && VideoLink !== null) || (ArticleLink !== "" && ArticleLink !== null) || (UploadPdf !== "" && UploadPdf !== undefined))) {
      var formData = commonFunctions.getFormData(resources);
      dispatch(
        apiCall({
          urls: ["ADDUPDATERESOURCES"],
          method: "Post",
          data: formData,
          onSuccess: (response) => {
            GridReload();
            cancelClear();

            setEditForm(false)
            setResources(initialValues);
            simpleValidator.current.hideMessages();
          },
          showNotification: true,
        })
      );
    } else if ((AudioLink === "" || (VideoLink === "" && VideoLink === null) || (ArticleLink === "" && ArticleLink === null) || (UploadPdf === "" && UploadPdf === undefined))) {
      dispatch(Notifications.show({ title: "Error", message: 'Please add atleast one the resourc source.', position: 'br', autoDismiss: 2 }, "error"))
    }
  };
  return (
    <div className="common-shadow resources" >
      {
        api.isApiLoading &&
        (<Dimmer active inverted>
          <Loader />
        </Dimmer>)}
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
                <Form.Select
                  label="Grade"
                  placeholder="Grades"
                  options={grade}
                  data="GradeId"
                  value={resources.GradeId}
                  onChange={onHandleChange}
                  error={simpleValidator.current.message('GradeId', resources.GradeId, 'required')}
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
                  error={simpleValidator.current.message('BookId', resources.BookId, 'required')}
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
                  error={simpleValidator.current.message('ChapterId', resources.ChapterId, 'required')}
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
                  error={simpleValidator.current.message('PageId', resources.PageId, 'required')}
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
                  // ref={this.fileInputRef}
                  type="file"
                  label="Upload Pdf"
                  placeholder="Embed URL"
                  onChange={fileChange}
                  data="UploadPdf"
                />
                {resources.editUploadPdf &&
                  <div>Download Pdf file
                    <a href={commonFunctions.concatenateImageWithAPIUrl(resources.editUploadPdf)}
                      target="_blank" rel="noreferrer">
                      <Icon name={checkDisplayIconPdf(resources.editUploadPdf)} className="primary-color" link />
                    </a>
                    <Icon name="trash" onClick={() => confirmModalOpen(resources.PdfLinkId, "delete")} />
                  </div>}
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
      <ConfirmModal open={confirmModal} onConfirm={onHandleDeletePdf} close={modalClose} message={"Do you want to delete pdf file ?"} />

    </div>
  );
}

export default ResourcesPage;