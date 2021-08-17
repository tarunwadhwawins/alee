import React, { useState, useEffect } from "react";
import { Grid, Header, Button, Form, Tab, Icon, GridColumn } from "semantic-ui-react";
import { DataTable } from "../../../src/shared/components/organisms";
import { GlobalCodeSelect } from "../../shared/components";
import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "../../store/actions/api.actions";
import { commonFunctions } from "../../shared/functional/global-import";

const Chapter = [
  { key: "Chapter 1", value: "Chapter 1", text: "Chapter 1" },
  { key: "Chapter 2", value: "Chapter 2", text: "Chapter 2" },
  { key: "Chapter 3", value: "Chapter 3", text: "Chapter 3" },
  { key: "Chapter 4", value: "Chapter 4", text: "Chapter 4" },
  { key: "Chapter 5", value: "Chapter 5", text: "Chapter 5" },
  { key: "Chapter 6", value: "Chapter 6", text: "Chapter 6" },
  { key: "Chapter 7", value: "Chapter 7", text: "Chapter 7" },
];
const Page = [
  { key: "Page 1", value: "Page 1", text: "Page 1" },
  { key: "Page 2", value: "Page 2", text: "Page 2" },
  { key: "Page 3", value: "Page 3", text: "Page 3" },
  { key: "Page 4", value: "Page 4", text: "Page 4" },
  { key: "Page 5", value: "Page 5", text: "Page 5" },
  { key: "Page 6", value: "Page 6", text: "Page 6" },
  { key: "Page 7", value: "Page 7", text: "Page 7" },
];
function ResourcesPage() {
  const [booklist, setBooklist] = useState(null);
  const api = useSelector((state) => state.api);
  const [file, setFile] = useState(null);
  const [reload, SetReload] = useState(false);
  const fileInputRef = React.createRef();
  const [editData, SetEditData] = useState([]);

  const dispatch = useDispatch();
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

  const onHandleChange = (e, { data, value }) => {
    setResources({ ...resources, [data]: value });
  };

  const fileChange = (e) => {
    cancelClear();
    setFile(e.target.files[0]);
  };

 
  const onHandleEdit = (data) => {
    debugger
    const { resourceId, gradeId, bookId, chapterId, pageId, resourceTypeName, resourceTypeId, resourceLinkId, link } = data;

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

    else if (data.resourceTypeName === "Article" && data.link.indexOf("pdf") < 0) {
      setResources({ ...resources, ResourceId: resourceId, GradeId: gradeId, BookId: bookId, ChapterId: chapterId, PageId: pageId, ArticleLink: link })
    }
  }

  useEffect(() => {
    editResouces();
    getBookList();
  }, []);

  const editResouces = () => {
    debugger;
    // if (resources !== undefined||resources.length > 0) {
    const { ResourceId, GradeId, BookId, ChapterId, PageId, UploadPdf, AudioLink, VideoLink, ArticleLink, } = resources;
    debugger;
    setResources({
      ...resources,
      ResourceId: ResourceId, GradeId: GradeId, BookId: BookId, ChapterId: ChapterId, PageId: PageId,
      UploadPdf: UploadPdf, AudioLink: AudioLink, VideoLink: VideoLink, ArticleLink: ArticleLink
    });
  };

  //  get api //y
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

  const GridReload = () => {
    SetReload(!reload);
  };
  const cancelClear = () => {
    setResources(initialValues);
  };
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
                  Cell: (props, confirmModalOpen) => {
                    return (
                      <a href={props.link} target="_blank">
                        {props.link === "null" ? "-" : props.link}
                      </a>
                    );
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
                        <Icon name="edit" className="primary-color" link onClick={() => onHandleEdit(props)} />
                        <Icon
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
                  Cell: (props, confirmModalOpen) => {
                    return (
                      <a href={props.link} target="_blank">
                        {props.link === "null" ? "-" : props.link}
                      </a>
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
                        <Icon name="edit" className="primary-color" link onClick={() => onHandleEdit(props)} />
                        <Icon
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
                    return props.link?.indexOf("pdf") < 0 ? props.link : "-";
                  },
                },
                {
                  headerName: "Pdf",
                  fieldName: "link",
                  isSorting: true,
                  Cell: (props) => {
                    return props.link?.indexOf("pdf") > 0 ? (
                      <a
                        href={commonFunctions.concatenateImageWithAPIUrl(
                          props.link
                        )}
                        target="_blank"
                      >
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

                        <Icon name="edit" className="primary-color" link onClick={() => onHandleEdit(props)} />
                        <Icon
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
                <GlobalCodeSelect
                  label="Grade"
                  placeholder="Grades"
                  categoryType="Grades"
                  onChange={onHandleChange}
                  data="GradeId"
                  value={resources.GradeId}
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
                  options={Chapter}
                  data="ChapterId"
                  value={resources.ChapterId}
                  onChange={onHandleChange}
                />
              </Grid.Column>
              <Grid.Column width="4">
                <Form.Select
                  label="Page"
                  placeholder="Select Page"
                  options={Page}
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
                  ref={fileInputRef}
                  type="file"
                  label="Upload Pdf"
                  placeholder="Embed URL"
                  onChange={fileChange}
                // value={resources.UploadPdf}
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
