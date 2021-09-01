import React, { useState, useEffect, useRef, useCallback } from "react";
import { Grid, Button, Header, Image, Dimmer, Loader } from "semantic-ui-react";
import { BookPage1, BookPage2, BookPage3, BookPage4, BookPage5, BookPage6 } from "../../shared/functional/global-image-import";
import HTMLFlipBook from 'react-pageflip';
import { useDispatch, useSelector } from 'react-redux';
import { storeBookDetails } from "../../../src/store/actions/global.actions";
import { apiCall } from "../../store/actions/api.actions";
import { animateScroll } from "react-scroll";

function BookFlipPage(props) {

	const [bookPage, setBookPage] = useState({ PageId: 1136, BookId: 48 })
	const [bookPageData, setBookPageData] = useState([])

	const dispatch = useDispatch();
	const bookData = useSelector(state => state.global.myBookData)
	const auth = useSelector(state => state.auth.userDetail.role)
	const api = useSelector(state => state.api)
	let pageFlip = useRef(null);
	useEffect(() => {
		getBookPageData();
	}, []);

	const getBookPageData = () => {
		dispatch(apiCall({
			urls: ["GETBOOKPAGE"], method: "GET", data: { "PageId": bookData.pageId, "BookId": bookData.bookId }, onSuccess: (response) => {
				setBookPageData(response)
			}
		}))
	}

	// const Page = React.forwardRef((props, ref) => {
	// 	return (
	// 		<div className="demoPage" ref={ref}>
	// 			<Header as="h3">Page {props.number}</Header>
	// 			<h1>Page Header</h1>
	// 			<p>{props.children}</p>
	// 		</div>
	// 	);
	// });

	// const aa = (e) => {
	// 	debugger
	// 	// const lastThirdPage = bookPageData[bookPageData.length - 4].pageId
	// 	// if (lastThirdPage === e.pageId) {

	// 	// 	const pageId = bookPageData[bookPageData.length - 1].pageId + 1;

	// 	// 	dispatch(apiCall({
	// 	// 		urls: ["GETBOOKPAGE"], method: "GET", data: { PageId: pageId, BookId: 38 }, onSuccess: (response) => {
	// 	// 			// setBookPageData(prev => [...bookPageData,...response])
	// 	// 		}
	// 	// 	}))
	// 	// }

	// }

	const onFlip = async (e) => {
		let item = pageFlip?.current?.pageFlip;
		if (item && typeof item == "function") {
			let totalPage = item().getPageCount();
			if (e.data + 2 === totalPage - 3) {
				let lastThirdPage = bookPageData[totalPage - 1].pageId + 1
				dispatch(apiCall({
					urls: ["GETBOOKPAGE"], method: "GET", data: { PageId: lastThirdPage, BookId: bookData.bookId }, onSuccess: (response) => {
						debugger
						let updated = [...bookPageData, ...response];

						setBookPageData(updated)
					}
				}))
			}
			console.log("pageFlip ", item().getPageCount());
		}
	}

	const next = () => {
		let item = pageFlip.current.pageFlip
		console.log("item", item);
		if (pageFlip && typeof item == "function") {
			item().flipNext();
		}
	}

	const prev = () => {
		let item = pageFlip.current.pageFlip
		console.log("item", item);
		if (pageFlip && typeof item == "function") {
			item().flipPrev();
		}
	}

	return (
		<>
			{api.isApiLoading && (
				<Dimmer active inverted>
					<Loader />
				</Dimmer>
			)}

			<div className="bookFlip">
				<Grid>
					<Grid.Column width={16} className="bookFlipOuter">
						<HTMLFlipBook width={550} height={600} size="stretch" minWidth={315} maxWidth={2000} minHeight={400} maxHeight={1533} maxShadowOpacity={0.5} showCover={true} mobileScrollSupport={true}
							useMouseEvents={false} onFlip={onFlip} ref={pageFlip}
						>
							{
								(bookPageData && bookPageData.length > 0) ?
									bookPageData.map((singleData, index) => {
										return (
											<div className="demoPage" key={index}>
												<Header as="h3">Page {singleData.pageNo}</Header>
												<br />
												<p onClick={props.onHandleTagSelected ? () => props.onHandleTagSelected(singleData) : null}>
													{singleData.pageText}
												</p>
											</div>
										)
									}) : null
							}

						</HTMLFlipBook>
					</Grid.Column>

					<Grid.Column width={8} textAlign="left">
						<div >
							<div>
								<Button type="button" className="alternateBtn" onClick={() => prev()}>
									Previous page
								</Button>
								<Button className="primaryBtn" type="button" onClick={() => next()}>
									Next page
								</Button>
							</div>
						</div>
					</Grid.Column>
				</Grid>
			</div>
		</>
	);
}

export default BookFlipPage;

