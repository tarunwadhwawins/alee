import React,{useState,useEffect} from "react";
import { Grid, Header, Button, Form, Tab, Icon } from "semantic-ui-react";
import { DataTable } from "../../../src/shared/components/organisms";
import { GlobalCodeSelect } from "../../shared/components";
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../store/actions/api.actions";
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
const Book = [
  { key: "Animal Farm", value: "Animal Farm", text: "Animal Farm" },
  { key: "America Dreams", value: "America Dreams", text: "America Dreams" },
  { key: "Old Man & Sea", value: "Old Man & Sea", text: "Old Man & Sea" },
];

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
            }}
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
              },
              {
                headerName: "Action",
                fieldName: "Action",
                isSorting: false,
                Cell: (props, confirmModalOpen) => {
                  return (
                    <>
                      <Icon name="edit" className="primary-color" link />
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
            }}
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
              },
              {
                headerName: "Action",
                fieldName: "Action",
                isSorting: false,
                Cell: (props, confirmModalOpen) => {
                  return (
                    <>
                      <Icon name="edit" className="primary-color" link />
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
            }}
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
                    return props.link?.indexOf('pdf') < 0 ? props.link :'-'
                },
              },
              {
                headerName: "Pdf",
                fieldName: "link",
                isSorting: true,
                Cell: (props) => {
                  return props.link?.indexOf('pdf')  > 0 ?  <a href={props.link} target="_blank"><Icon name="file pdf" className="primary-color" link  /></a> : '-'
                }
              },
              {
                headerName: "Action",
                fieldName: "Action",
                isSorting: false,
                Cell: (props, confirmModalOpen) => {
                  return (
                    <>
                      <Icon name="edit" className="primary-color" link />
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

function ResourcesPage() {
  const [booklist, setBooklist] = useState(null);
  const api = useSelector(state => state.api)
  const [file, setFile] = useState(null)
  const [reload, SetReload] = useState(false);
  const fileInputRef = React.createRef();	
  const fileChange = e => {
  setFile( e.target.files[0] )
  }

  
	const dispatch = useDispatch();
  const initialValues ={
    ResourceId:null,
    GradeId:null,
    BookId:null,
    ChapterId:2,
    PageId:5,
    UploadPdf:null,
    AudioLink:null,
    VideoLink:null,
    ArticleLink:null

  }
  const [resources,setResources] = useState(initialValues);


  const onHandleChange = (e, { data, value }) => {
    debugger;
    setResources({ ...resources, [data]: value });
  };
  useEffect(() => {
    getBookList();
  }, []);
  
  //  get api //
  const getBookList = () => {
    dispatch(apiCall({
      urls: ["GETBOOKSLIST"], method: "GET", data: booklist, onSuccess: (response) => {
        
        const booklist = response.map((singledata)=>{
             return{text:singledata.bookName,value:singledata.bookId}
        })
        
        setBooklist(booklist)
      }
    }));
  }
  const GridReload = () => {
		SetReload(!reload)
	}
  const closeModal = () => {
    closeModal();
    setResources(initialValues);
  };
  const onHandleSubmit = () => {
    
    dispatch(
      apiCall({
        urls: ["ADDUPDATERESOURCES"],
        method: "Post",
        data: resources,
        onSuccess: (response) => {
          
          closeModal();
          GridReload();
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
                  data="gradeId"
                //   value={addStudent.gradeId}
                />
              </Grid.Column>
              <Grid.Column width="4">
                <Form.Select
                  label="Book"
                  placeholder="Select Book"
                  options={booklist}
                  data="bookId"
                  onChange={onHandleChange}
                />
              </Grid.Column>
              <Grid.Column width="4">
                <Form.Select
                  label="Chapter"
                  placeholder="Select Chapter"
                  options={Chapter}
                  data ="ChapterId"
                  onChange={onHandleChange}
                />
              </Grid.Column>
              <Grid.Column width="4">
                <Form.Select
                  label="Page"
                  placeholder="Select Page"
                  options={Page}
                  data="PageId"
                  onChange={onHandleChange}
                />
              </Grid.Column>
              <Grid.Column width="8">
                <Form.Input label="Audio" placeholder="Embed URL" value={resources.AudioLink} data="AudioLink" onChange={onHandleChange}/>
              </Grid.Column>
              <Grid.Column width="8">
                <Form.Input label="Video" placeholder="Embed URL" value={resources.VideoLink} data="VideoLink" onChange={onHandleChange}/>
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
                  label="Upload Pdf"
                  placeholder="Embed URL"
                  value={resources.UploadPdf}
                  data="UploadPdf"
                  action="Upload Pdf"
                  onChange={onHandleChange}
                />
                {/* <Form.Field>
								<Button content="Upload Pdf" onClick={() => fileInputRef.current.click()} />
								<input ref={fileInputRef} type="file" hidden onChange={fileChange}/>
							</Form.Field> */}
               </Grid.Column>
              <Grid.Column width="16" textAlign="right">
                <Button className="secondaryBtn"onClick={() => closeModal()}> Cancel </Button>
                <Button className="primaryBtn"  onClick={onHandleSubmit}
                   loading={api.isApiLoading}>Save</Button>
              </Grid.Column>

              <Grid.Column width={16}>
                <Tab menu={{ text: true }} panes={panes} />
              </Grid.Column>
            </Grid>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default ResourcesPage;
