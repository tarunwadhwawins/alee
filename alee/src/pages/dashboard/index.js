import React from 'react';
import TotalBoxes from "./total-boxes";
import PerformanceMatrix from "./performance-matrix";
import { useSelector } from 'react-redux';
import {  Dimmer, Loader } from "semantic-ui-react";


const DashBoard = () => {
    const api = useSelector(state => state.api)
    return (
        <div className="common-shadow minHeight">
            {api.isApiLoading && (
                        <Dimmer active inverted>
                            <Loader />
                        </Dimmer>
                    )}
            <TotalBoxes/>
            <PerformanceMatrix/>
        </div>
    );
}
export default DashBoard;