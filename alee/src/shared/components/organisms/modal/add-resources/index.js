import React from "react";
import { Modal, Button, Tab, Icon } from "semantic-ui-react";
import { DataTable } from "../../../organisms";
import { commonFunctions} from "../../../../functional/global-import";


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
            searchOption={
              {
                show: true,
                placeHolder: "Search"
              }
            }
            additionalParams={
              {
                resourceTypeId: 18,
                bookId:-1
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
                headerName: "Chapter",
                fieldName: "chapterName",
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
            searchOption={
              {
                show: true,
                placeHolder: "Search"
              }
            }
            additionalParams={
              {
                resourceTypeId: 19,bookId:-1
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
                headerName: "Chapter",
                fieldName: "chapterName",
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
          searchOption={
            {
              show: true,
              placeHolder: "Search"
            }
          }
          additionalParams={
            {
              resourceTypeId: 20,bookId:-1
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
            // {
            //   headerName: "Page",
            //   fieldName: "pageNo",
            //   isSorting: true,
            // },
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

        ]}>

        </DataTable>
      </Tab.Pane>
      );
    },
  },
  ];

function Resources(props) {
    return (
        <Modal open={props.openModal} onClose={props.closeModal} closeOnDimmerClick={false} size="small">
            <Modal.Header>Add Resources</Modal.Header>
            <Modal.Content>
                <Tab menu={{ text: true }} panes={panes}/>
            </Modal.Content>
            <Modal.Actions>
                <Button className="secondaryBtn" onClick={props.closeModal}>Cancel</Button>
                <Button className="primaryBtn">Save</Button>
            </Modal.Actions>
        </Modal>
    );
}

export default Resources;