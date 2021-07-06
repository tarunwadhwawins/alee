import React, { Component } from 'react';
import TotalBoxes from "./total-boxes";
import PerformanceMatrix from "./performance-matrix";
class DashBoard extends Component {

    render() {
        return (
            <div className="common-shadow minHeight">
                <TotalBoxes/>
                <PerformanceMatrix/>
            </div>
        );
    }
}
export default DashBoard;