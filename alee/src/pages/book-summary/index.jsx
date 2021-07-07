import React, { Component } from 'react';
import  BookSummaryPage  from './book-summary';

class BookSummary extends Component {
    render() {
        return (
			<div className="common-shadow">
				<BookSummaryPage/>
			</div>
            
        );
    }
}
export default BookSummary;