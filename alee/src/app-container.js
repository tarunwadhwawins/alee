import { withRouter } from 'react-router';
import { Component } from 'react';
import { connect } from "./shared/functional/global-import";
import { browserHistory } from 'react-router';


class AppContainer extends Component {
  constructor(props) {
    super(props);
    browserHistory.listen((location, action) => {
      window.scroll(0, 0);
      debugger;
      if (localStorage.getItem("BookType") !== "") {
        if (location.pathname === "/alee/chapter-empty" ) {
          localStorage.setItem("BookType", "No Chapter");
        }
        else if (location.pathname === "/alee/chapter") {
          localStorage.setItem("BookType", "With Chapter");
        }
        else if (location.pathname === "/alee/subtitle" || location.pathname === "/alee/add-tags" || location.pathname === "book-summary") {
          localStorage.setItem("BookType", "With Topic Chapter");
        }
        else if (location.pathname !== "/alee/chapter-empty" && location.pathname !== "/alee/chapter" && location.pathname !== "/alee/subtitle" && location.pathname !== "/alee/book-summary") {
          localStorage.setItem("BookType", "");
        }
        if (location.pathname === "/alee/lesson-plan-creation" || action !== "PUSH") {
          window.location.reload();
        }
      }
    });
  }

  render() {
    return this.props.children
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer));