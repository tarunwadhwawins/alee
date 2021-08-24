import React,{useState,useEffect} from "react";
import { Grid, Modal, Button, Form,Dimmer,Loader} from "semantic-ui-react";
import {Link} from "../../../../functional/global-import";
import { useSelector, useDispatch } from "react-redux";
import { apiCall } from "../../../../../store/actions/api.actions";
function AddChapter(props) {
	const bookId = useSelector(state => state.global.myBookData.bookId)
	  const initialValues ={
		chapterId: null,
		chapterName:"",
		startPageNo:null,
		endPageNo: null,
		chapterSummary:"",
		bookId:bookId,
		actionPerformedBy:"string"
	  }

 const [chapter, setChapter] = useState(initialValues);
  const api = useSelector((state) => state.api);

  const dispatch = useDispatch();
  const onHandleChange = (e, { data, value}) => {
    setChapter({ ...chapter, [data]: value });
  };
  const onHandleSubmit = () => {
    dispatch(
      apiCall({
        urls: ["ADDUPDATECHAPTER"],
        method: "Post",
        data: chapter,
        onSuccess: (response) => {
		    closeModal();
		   props.GridReload();
          setChapter(initialValues);
        },
        showNotification: true,
      })
    );
  };
  const closeModal =()=>{
    props.closeModal();
    setChapter(initialValues);
  }
const  addChapter = () =>{
	localStorage.setItem("BookType","With Chapter" );
	setTimeout(() => {
		window.location.reload();
		}, (1000));
  }
  useEffect(() => {
	  debugger;
    editChapterlist();
  },[props.editData]);

  const editChapterlist = () => {
    if (props.editData !== undefined) {
		debugger
	const{
		chapterId ,
		chapterName,
		startPageNo,
		endPageNo,
		chapterSummary,
	} = props.editData;
	  setChapter({
        ...chapter,chapterId:chapterId,chapterName:chapterName,startPageNo:startPageNo,
		endPageNo:endPageNo,chapterSummary:chapterSummary
      });
    }
  };
    return (
		<Modal open={props.openModal} onClose={closeModal} size="small">
				{
						api.isApiLoading && (
							<Dimmer active inverted>
								<Loader />
							</Dimmer>
						)
					}
			<Modal.Header>Add Chapter</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Form>
						<Grid>
							<Grid.Column width={10}>
								<Form.Input label="Chapter Name"
								   data="chapterName"
                                   value={chapter.chapterName}
                                   onChange={onHandleChange}/>
							</Grid.Column>
							<Grid.Column width={3}>
								<Form.Input label="Page No. (Start)"
								 data="startPageNo"
								 value={chapter.startPageNo}
								 onChange={onHandleChange}
								 />
							</Grid.Column>
							<Grid.Column width={3}>
								<Form.Input label="Page No. (End)"
								 data="endPageNo"
								 value={chapter.endPageNo}
								 onChange={onHandleChange}
								/>
							</Grid.Column>
						</Grid>
					</Form>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button className="secondaryBtn"  onClick={() => props.closeModal()}>Cancel</Button>
                 <Button className="primaryBtn" onClick={() => { props.closeModal(); addChapter();}}
            onClick={onHandleSubmit} as={Link} to="chapter">{chapter.chapterId > 0 ? "Update":"Confirm"}</Button>
			</Modal.Actions>
		</Modal>
	);
}

export default AddChapter;