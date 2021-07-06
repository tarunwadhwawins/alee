import React, { Component } from 'react';
import  MyBookPage  from './my-books';

class MyBook extends Component {
    render() {
        return (
            <div className="common-shadow">
                <MyBookPage/>
            </div>
        );
    }
}
export default MyBook;