import React, { useState, useEffect, useRef, useCallback } from "react";
import { Grid, Button, Header, Dimmer, Loader } from "semantic-ui-react";
import HTMLFlipBook from 'react-pageflip';
import { useDispatch, useSelector } from 'react-redux';
// import { storeBookDetails } from "../../../src/store/actions/global.actions";
import { apiCall } from "../../store/actions/api.actions";
// import { animateScroll } from "react-scroll";
import { useHistory, useParams } from "react-router-dom";
import LessonPlanCreationPage from "../../pages/lesson-plan-creation/lesson-plan-creation";
// import parse from 'html-react-parser';


function BookFlipPage(props) {
	const urlId = useParams()
	let history = useHistory();
	const [bookPageData, setBookPageData] = useState([])
	const [lessonPlanId, setLessonPlanId] = useState(urlId.id)
	if (lessonPlanId && history.location.state === undefined) {
		history.replace({ ...history.location, state: "lessonPlan" })
	}

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
	// 	 
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
							useMouseEvents={false} onFlip={onFlip} ref={pageFlip}>
							{
								(bookPageData && bookPageData.length > 0) ?
									bookPageData.map((singleData, index) => {

										return (
											<div className="demoPage" key={index} onClick={props.onHandleTagSelected ? () => props.onHandleTagSelected(singleData) : null}>
												<Header as="h3">Page {singleData.pageNo}</Header>
												<br />
												<p onClick={props.onHandleTagSelected ? () => props.onHandleTagSelected(singleData) : null}>
													{singleData.pageText}
												</p>
												{/* {parse('<!DOCTYPE html PUBLIC " -//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
													'<html xmlns="http://www.w3.org/1999/xhtml">' +
													'<head>' +
													'<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>' +
													'<title>How To Win Friends and Influence People - PDFDrive.com</title>' +
													'<style>' +
													'.page { background-color:white; position:relative; z-index:0; }' +
													'.vector { position:absolute; z-index:1; }' +
													'.image { position:absolute; z-index:2; }' +
													'.text { position:absolute; z-index:3; opacity:inherit; white-space:nowrap; }' +
													'.annotation { position:absolute; z-index:5; }' +
													'.control { position:absolute; z-index:10; }' +
													'.annotation2 { position:absolute; z-index:7; }' +
													'.dummyimg { vertical-align: top; border: none; }' +
													'</style>' +
													'</head>' +
													'<body style="background-color:#999999;color:#000000;">' +
													'<div align="center">' +
													'' +
													'Produced with ByteScout PDF to HTML SDK v12.1.5.4184 [TRIAL]' +
													'Random \'*demo*\' inserts are limitation.' +
													'<!-- page begin -->' +
													'<div class="page" style="width:1024.0px;height:1325.2px;">' +
													'<div class="annotation" style="cursor:pointer;left:120.5px;top:473.4px;width:58.9px;height:26.8px;" title="kindle:embed:0001?mime=image/jpg" onclick="document.location=\'kindle:embed:0001?mime=image/jpg\';"><img class="dummyimg" width="59" height="27" src="data:image/gif;base64,R0lGODlhAQABAJH/AP///wAAAMDAwAAAACH5BAEAAAIALAAAAAABAAEAQAICVAEAOw==" /></div>' +
													'' +
													'<span style="font-size:34px;font-family:\'Times\';font-weight:bold;">' +
													'<span class="text" style="left:120.5px;top:286.7px;">CONTENTS</span>' +
													'</span>' +
													'<span style="font-size:24px;font-family:\'Times\';">' +
													'<span class="text" style="left:120.5px;top:471.0px;">Cover</span>' +
													'<span class="text" style="left:120.5px;top:498.7px;">About the Author</span>' +
													'<span class="text" style="left:120.5px;top:526.5px;">Also by Dale Carnegie</span>' +
													'<span class="text" style="left:120.5px;top:554.2px;">Title Page</span>' +
													'<span class="text" style="left:120.5px;top:581.9px;">Dedication</span>' +
													'<span class="text" style="left:120.5px;top:609.6px;">Preface to revised edition</span>' +
													'<span class="text" style="left:120.5px;top:637.3px;">How this book was written – and why</span>' +
													'<span class="text" style="left:120.5px;top:665.0px;">Nine suggestions on how to get the most out of this book</span>' +
													'</span>' +
													'<span style="font-size:24px;font-family:\'Times\';font-weight:bold;">' +
													'<span class="text" style="left:120.5px;top:740.9px;">PART ONE: FUNDAMENTAL TECHNIQUES IN HANDLING PEOPLE</span>' +
													'</span>' +
													'<span style="font-size:24px;font-family:\'Times\';">' +
													'<span class="text" style="left:168.7px;top:778.2px;">1 ‘If You Want to Gather Honey, Don’t Kick Over the Beehive’</span>' +
													'<span class="text" style="left:168.7px;top:805.9px;">2 The Big Secret of Dealing with People</span>' +
													'<span class="text" style="left:168.7px;top:833.7px;">3 ‘He Who Can Do This Has the Whole World with Him. He Who Cannot</span>' +
													'<span class="text" style="left:168.7px;top:861.4px;">Walks a Lonely Way’</span>' +
													'</span>' +
													'<span style="font-size:24px;font-family:\'Times\';font-weight:bold;">' +
													'<span class="text" style="left:120.5px;top:937.3px;">PART TWO: SIX WAYS TO MAKE PEOPLE LIKE YOU</span>' +
													'</span>' +
													'<span style="font-size:24px;font-family:\'Times\';">' +
													'<span class="text" style="left:168.7px;top:974.6px;">1 Do This and You’ll Be Welcome Anywhere</span>' +
													'<span class="text" style="left:168.7px;top:1002.3px;">2 A Simple Way to Make a Good First Impression</span>' +
													'<span class="text" style="left:168.7px;top:1030.0px;">3 If You Don’t Do This, You Are Headed for Trouble</span>' +
													'<span class="text" style="left:168.7px;top:1057.7px;">4 An Easy Way to Become a Good Conversationalist</span>' +
													'<span class="text" style="left:168.7px;top:1085.4px;">5 How to Interest People</span>' +
													'<span class="text" style="left:168.7px;top:1113.1px;">6 How to Make People Like You *demo*tly</span>' +
													'</span>' +
													'<div class="vector" style="left:121.0px;top:496.0px;"><img width="765" height="644" src="http://92.204.135.120:8103/Upload/BookImage/BookImage_2021_08_06_06_53_00.jpg"/></div>' +
													'' +
													'</div>' +
													'<!-- page end -->' +
													'<p></p>' +
													'' +
													'Produced with ByteScout PDF to HTML SDK v12.1.5.4184 [TRIAL]' +
													'' +
													'</div>' +
													'</body>' +
													'</html>')} */}
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

				<Grid>
					<Grid.Column width={16}>
						{history.location.state === "lessonPlan" && <LessonPlanCreationPage pageId={bookData.pageId} lessonPlanId={lessonPlanId}/>}
					</Grid.Column>
				</Grid>
			</div>
		</>
	);
}

export default BookFlipPage;

