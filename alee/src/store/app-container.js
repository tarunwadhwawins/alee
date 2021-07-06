import { withRouter } from 'react-router';
import { Component } from 'react';
import { connect } from "../shared/functional/global-import";


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.props.history.listen((location, action) => {
            window.scroll(0, 0);
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