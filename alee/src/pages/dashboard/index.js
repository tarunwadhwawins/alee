import React, { Component } from 'react';
import TotalBoxes from "./total-boxes";
import PerformanceMatrix from "./performance-matrix";



const DashBoard = () => {
    return (
        <div className="common-shadow minHeight">
            <TotalBoxes/>
            <PerformanceMatrix/>
        </div>
    );
}
export default DashBoard;