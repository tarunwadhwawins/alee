import React from 'react';
import  AddTagPage  from './add-tags';
import { useParams } from "react-router-dom";


const AddTag = () => {
    const params = useParams()
    console.log("params ", params);
    return (
        <div className="common-shadow">
            <AddTagPage/>
        </div>
        
    );
}
export default AddTag;