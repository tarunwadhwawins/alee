import React , {useState,useEffect} from "react";
import { Grid, Item, Header,Dimmer,Loader} from "semantic-ui-react";
import {Book} from "../../shared/functional/global-image-import";
import { bindActionCreators, connect, actions } from "../../shared/functional/global-import";



function MyBookPage(props) {
	const [bookList ,setBookList] = useState(null)


	const addChapter = () => {
		if (localStorage.getItem("Usertype") === "teacher") {
		  localStorage.setItem("BookType", "With Topic Chapter");
		  setTimeout(() => {
			window.location.reload();
		  }, 1000);
		}
	  };

 
	  //  call the api //
	  useEffect(() => {
		 getBookList();
	}, []);

 //  get api //
	  const getBookList = () => {
		props.actions.apiCall({
			urls: ["GETBOOKSLIST"], method: "GET",onSuccess: (response) => {
				if (response.length > 0) {
					setBookList(response)
				}
			}
		});
	}
    return (
		
			<>
			{props.api.isApiLoading && (
				<Dimmer active inverted>
					<Loader />
				</Dimmer>

			)}
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">My Books</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<div className="booksResult myBooks">
					{bookList && bookList.map((data, index) => {
                  return (
						<Item.Group>
							<Item>

							{/* <Item as={Link} onClick={addChapter} to={`${localStorage.getItem("Usertype") === "admin"? "book-flip":"book-summary"}`}>  */}
							<Item.Image size='tiny' src={Book} />
							<Item.Content >
								<Item.Header><span>{data.bookName}</span></Item.Header>
								{/* <Item.Meta><span>J.K. Rownling</span><span>125 pages</span></Item.Meta> */}
								<Item.Description>
									{data.bookSummary} ?
								</Item.Description>
								{/* <Item.Extra>Other Tags: 6.4, Empathy, Twist { localStorage.getItem("Usertype") === "admin" &&	 <div className="icons"><Icon name="edit" className="primary-color" /> <Icon name="trash alternate" color="red" /></div> }</Item.Extra> */}
							</Item.Content>
							</Item>
						</Item.Group>
						  )
						})}
					</div>
				</Grid.Column>
			
			</Grid>
			</>
    );
}
 const mapStateToProps = state => {
	return {
	  api: state.api,
	  auth: state.auth,
	  global: state.global,
	};
  };
  
  const mapDispatchToProps = (dispatch) => {
	return {
	  actions: {
		apiCall: bindActionCreators(actions.apiCall, dispatch),
		storeGlobalCodes: bindActionCreators(actions.storeGlobalCodes, dispatch),
		loginSuccess: bindActionCreators(actions.loginSuccess, dispatch)
	  }
	};
  };
  export default connect(mapStateToProps, mapDispatchToProps)(MyBookPage);

