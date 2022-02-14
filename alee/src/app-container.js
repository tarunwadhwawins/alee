import { withRouter } from 'react-router';
// import { browserHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { storeBookDetails } from "../src/store/actions/global.actions";
import userEvent from '@testing-library/user-event';

function AppContainer(props) {

  const bookDetail = useSelector(state => state.global.bookDetail)
  const location = useLocation();
  const dispatch = useDispatch();
  // browserHistory.listen((location, action) => {
  // window.scroll(0, 0);

  // if (localStorage.getItem("BookType") !== "") {
  //   if (location.pathname === "/chapter-empty" ) {
  //     localStorage.setItem("BookType", "No Chapter");
  //   }
  //   else if (location.pathname === "/chapter") {
  //     localStorage.setItem("BookType", "With Chapter");
  //   }
  //   else if (location.pathname === "/subtitle" || location.pathname === "/add-tags" || location.pathname === "book-summary") {
  //     localStorage.setItem("BookType", "With Topic Chapter");
  //   }
  //   else if (location.pathname !== "/chapter-empty" && location.pathname !== "/chapter" && location.pathname !== "/alee/subtitle" && location.pathname !== "/alee/book-summary") {
  //     localStorage.setItem("BookType", "");
  //   }
  //   if (location.pathname === "/lesson-plan-creation" || action !== "PUSH") {
  //     window.location.reload();
  //   }
  // }

  // if (bookDetail !== "") {
  //   if (location.pathname === "/chapter-empty") {
  //     dispatch(storeBookDetails("No Chapter"));
  //     //localStorage.setItem("BookType", "No Chapter");
  //   }
  //   else if (location.pathname === "/chapter") {
  //     dispatch(storeBookDetails("With Chapter"));
  //     //localStorage.setItem("BookType", "With Chapter");
  //   }
  //   else if (location.pathname === "/subtitle" || location.pathname === "/add-tags" || location.pathname === "book-summary") {
  //     dispatch(storeBookDetails("With Topic Chapter"));
  //    // localStorage.setItem("BookType", "With Topic Chapter");
  //   }
  //   else if (location.pathname !== "/chapter-empty" && location.pathname !== "/chapter" && location.pathname !== "/subtitle" && location.pathname !== "/book-summary") {
  //     dispatch(storeBookDetails(""));
  //     //localStorage.setItem("BookType", "");
  //   }
  //   // if (location.pathname === "/lesson-plan-creation") {
  //   //   window.location.reload();
  //   // }
  // }


  return (
    props.children
  )
}

export default withRouter(AppContainer);