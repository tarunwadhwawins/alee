import React, { useState } from "react";
import { Link, } from "../../../functional/global-import";
import { Image, Menu, Icon, } from "semantic-ui-react";
import { Logo2, ManageSchoolBlue, ManageSchoolWhite, ManageTeacherBlue, ManageTeacherWhite, AssignTemplateBlue, AssignTemplateWhite, CreateTemplateWhite, CreateTemplateBlue, PaymentManagementBlue, PaymentManagementWhite, StandardsWhite, StandardsBlue, DashboardWhite, DashboardBlue, LessonPlanWhite, LessonPlanBlue, StudentListWhite, StudentListBlue, LessonLibraryWhite, LessonLibraryBlue, LogOutWhite, LogOutBlue, ScanBookWhite, ScanBookBlue, PdfBookWhite, PdfBookBlue, ResourceWhite, ResourceBlue, SubAdminBlue, SubAdminWhite, SubscriptionBlue, SubscriptionWhite, MyBookWhite, MyBookBlue, AddTagListingBlue, AddTagListingWhite, UserManagementBlue, UserManagementWhite, AddGradeWhite, AddGradeBlue } from "../../../functional/global-image-import";
import { useSelector, useDispatch } from 'react-redux';
import { storeBookDetails } from "../../../../store/actions/global.actions";
import { env } from "../../../functional/global-import";

function Sidebar(props) {
	const [activeItem, setActiveItem] = useState("closest")
	const [isActive, setIsActive] = useState(false)
	const [user, setUser] = useState(false)
	const [subscriptionToggle, setSubscriptionToggle] = useState(false)
	const [templateToggle, setTemplateToggle] = useState(false)

	const api = useSelector(state => state.auth.userDetail.role)
	const bookDetail = useSelector(state => state.global.bookDetail)
	const dispatch = useDispatch();

	const handleItemClick = (e) => {
		dispatch(storeBookDetails(""));
		// setActiveItem(name);
	}
	const handleClick = (chapterName) => {
		     
		setIsActive(!isActive);
	}
	const handleClickUser = () => {
		     
		setUser(!user);
	}
	const handleClickSubscriptionToggle = () => {
		     
		setSubscriptionToggle(!subscriptionToggle);
	}
	const handleClickTemplateToggle = () => {
		     
		setTemplateToggle(!templateToggle);
	}
	return (
		<div className="Sidebar">
			<div className="logo" active={activeItem === 'Dashboard'}>
				<Link to={`${env.PUBLIC_URL}/dashboard`} active={activeItem === 'Dashboard'} onClick={handleItemClick} ><Image src={Logo2} /></Link>
			</div>
			<div className="mainMenu">
				{api === "School" &&
					<Menu text vertical>
						<Menu.Item as={Link} to={`${env.PUBLIC_URL}/upload-excel`} name='UploadExcel' active={activeItem === 'UploadExcel'} onClick={handleItemClick}>
							<Image src={DashboardWhite} className="white" />
							<Image src={DashboardBlue} className="blue" />
							<span>Upload Excel</span>
						</Menu.Item>
						<Menu.Item as={Link} to={`${env.PUBLIC_URL}/school-manage-teachers`} name='school-manage-teacher' active={activeItem === 'school-manage-teacher'} onClick={handleItemClick}>
							<Image src={ManageSchoolWhite} className="white" />
							<Image src={ManageSchoolBlue} className="blue" />
							<span>Manage Teachers</span>
						</Menu.Item>
						<Menu.Item as={Link} to={`${env.PUBLIC_URL}/subscription-plan`} name='subscription-plan' active={activeItem === 'subscription-plan'} onClick={handleItemClick}>
							<Image src={SubscriptionWhite} className="white" />
							<Image src={SubscriptionBlue} className="blue" />
							<span>Subscription</span>
						</Menu.Item>
					</Menu>
				}
				{api === "Teacher" &&
					<Menu text vertical>

						<Menu.Item as={Link} to={`${env.PUBLIC_URL}/dashboard`} name='Dashboard' active={activeItem === 'Dashboard'} onClick={handleItemClick}>
							<Image src={DashboardWhite} className="white" />
							<Image src={DashboardBlue} className="blue" />
							<span>Dashboard</span>
						</Menu.Item>

						<Menu.Item as={Link} to={`${env.PUBLIC_URL}/student-list`} name='StudentList' active={activeItem === 'StudentList'} onClick={handleItemClick}>
							<Image src={StudentListWhite} className="white" />
							<Image src={StudentListBlue} className="blue" />
							<span>Student List</span>
						</Menu.Item>
						<Menu.Item as={Link} to={`${env.PUBLIC_URL}/lesson-plan`} name='Lesson Plan' active={activeItem === 'LessonPlan'} onClick={handleItemClick} >
							<Image src={LessonPlanWhite} className="white" />
							<Image src={LessonPlanBlue} className="blue" />
							<span>Lesson Plan</span>
						</Menu.Item>
						<Menu.Item as={Link} to={`${env.PUBLIC_URL}/lesson-library`} name='LessonLibrary' active={activeItem === 'LessonLibrary'} onClick={handleItemClick}>
							<Image src={LessonLibraryWhite} className="white" />
							<Image src={LessonLibraryBlue} className="blue" />
							<span>Lesson Library</span>
						</Menu.Item>

					</Menu>
				}
				{api === "Admin"
					&& <Menu text vertical>
						<Menu.Item title="Dashboard" as={Link} to={`${env.PUBLIC_URL}/dashboard`} name='Dashboard' active={activeItem === 'Dashboard'} onClick={handleItemClick}>
							<Image src={DashboardWhite} className="white" />
							<Image src={DashboardBlue} className="blue" />
							<span>Dashboard</span>
						</Menu.Item>
						<Menu.Item title="User Management" className="lessonPlan" as={Link} to={`${env.PUBLIC_URL}/user-management`} name='user-management' 
						active={activeItem === 'user-management'}
						 onClick={handleItemClick}>
							<Image src={UserManagementWhite} className="white" />
							<Image src={UserManagementBlue} className="blue" />
							<span>User Management</span>
							<Icon name="caret down" onClick={handleClickUser} />
						</Menu.Item>
						<div className={`lessonPlanMenu  ${user === true ? "show" : ""}`}>
							<Menu.Item title="Manage Teachers" as={Link} to={`${env.PUBLIC_URL}/manage-teachers`} name='manage-teacher' active={activeItem === 'manage-teacher'} onClick={handleItemClick}>
								<Image src={ManageTeacherWhite} className="white" />
								<Image src={ManageTeacherBlue} className="blue" />
								<span>Manage Teachers</span>
							</Menu.Item>
							<Menu.Item title="Manage Schools" as={Link} to={`${env.PUBLIC_URL}/manage-schools`} name='manage-schools' active={activeItem === 'manage-schools'} onClick={handleItemClick}>
								<Image src={ManageSchoolWhite} className="white" />
								<Image src={ManageSchoolBlue} className="blue" />
								<span>Manage Schools</span>
							</Menu.Item>
						</div>
						{/*<Menu.Item title="Scan Book" as={Link} to={`${env.PUBLIC_URL}/scan-book`} name='ScanBook' active={activeItem === 'ScanBook'} onClick={handleItemClick}>
							<Image src={ScanBookWhite} className="white" />
							<Image src={ScanBookBlue} className="blue" />
							<span>Scan Book</span>
						</Menu.Item>*/}
						<Menu.Item title="Upload PDF" as={Link} to={`${env.PUBLIC_URL}/upload-pdf`} name='uploadpdf' active={activeItem === 'uploadpdf'} onClick={handleItemClick}>
							<Image src={PdfBookWhite} className="white" />
							<Image src={PdfBookBlue} className="blue" />
							<span>Upload PDF</span>
						</Menu.Item>
						<Menu.Item title="My Books" as={Link} to={`${env.PUBLIC_URL}/my-books`} name='mybooks' active={activeItem === 'mybooks'} onClick={handleItemClick}>
							<Image src={MyBookWhite} className="white" />
							<Image src={MyBookBlue} className="blue" />
							<span>My Books</span>
						</Menu.Item>
						<Menu.Item title="Resources" as={Link} to={`${env.PUBLIC_URL}/resources`} name='resources' active={activeItem === 'resources'} onClick={handleItemClick}>
							<Image src={ResourceWhite} className="white" />
							<Image src={ResourceBlue} className="blue" />
							<span>Resources</span>
						</Menu.Item>
						<Menu.Item title="Sub-Admin" as={Link} to={`${env.PUBLIC_URL}/sub-admin`} name='sub-admin' active={activeItem === 'sub-admin'} onClick={handleItemClick}>
							<Image src={SubAdminWhite} className="white" />
							<Image src={SubAdminBlue} className="blue" />
							<span>Sub-admin</span>
						</Menu.Item>
						<Menu.Item title="Subscription" className="lessonPlan" as={Link} to={`${env.PUBLIC_URL}/subscription`} name='subscription' active={activeItem === 'subscription'} onClick={handleItemClick}>
							<Image src={SubscriptionWhite} className="white" />
							<Image src={SubscriptionBlue} className="blue" />
							<span>Subscription</span>
							<Icon name="caret down" onClick={handleClickSubscriptionToggle} />
						</Menu.Item>
						<div className={`lessonPlanMenu  ${subscriptionToggle === true ? "show" : ""}`}>
							<Menu.Item title="Subscription Manage" as={Link} to={`${env.PUBLIC_URL}/subscription-manage`} name='subscription-manage' active={activeItem === 'subscription-manage'} onClick={handleItemClick}>
								<Image src={StandardsWhite} className="white" />
								<Image src={StandardsBlue} className="blue" />
								<span>Subscription Manage</span>
							</Menu.Item>
						</div>
						<Menu.Item title="Tags" as={Link} to={`${env.PUBLIC_URL}/add-tags-listing`} name='add-tags-listing' active={activeItem === 'add-tags-listing'} onClick={handleItemClick}>
							<Image src={AddTagListingWhite} className="white" />
							<Image src={AddTagListingBlue} className="blue" />
							<span>Tags </span>
						</Menu.Item>
						<Menu.Item title="Grades" as={Link} to={`${env.PUBLIC_URL}/add-grade`} name='add-grade' active={activeItem === 'add-grade'} onClick={handleItemClick}>
							<Image src={AddGradeWhite} className="white" />
							<Image src={AddGradeBlue} className="blue" />
							<span>Grades</span>
						</Menu.Item>

						<Menu.Item title="Payment Manangement" as={Link} to={`${env.PUBLIC_URL}/payment-management`} name='payment-management' active={activeItem === 'payment-management'} onClick={handleItemClick}>
							<Image src={PaymentManagementWhite} className="white" />
							<Image src={PaymentManagementBlue} className="blue" />
							<span>Payment Manangement</span>
						</Menu.Item>
						<Menu.Item title="Create Template" className="lessonPlan" as={Link} to={`${env.PUBLIC_URL}/create-template`} name='create-template' active={activeItem === 'create-template'} onClick={handleItemClick}>
							<Image src={CreateTemplateWhite} className="white" />
							<Image src={CreateTemplateBlue} className="blue" />
							<span>Create Template</span>
							<Icon name="caret down" onClick={handleClickTemplateToggle} />
						</Menu.Item>
						<div title="Assign Template" className={`lessonPlanMenu  ${templateToggle === true ? "show" : ""}`}>
							<Menu.Item as={Link} to={`${env.PUBLIC_URL}/assign-template`} name='assign-template' active={activeItem === 'assign-template'} onClick={handleItemClick}>
								<Image src={AssignTemplateWhite} className="white" />
								<Image src={AssignTemplateBlue} className="blue" />
								<span>Assign Template</span>
							</Menu.Item>
						</div>
						{/* <Menu.Item as={Link} to={`${env.PUBLIC_URL}/drag`} name='drag' active={activeItem === 'drag'} onClick={handleItemClick}>
							<Image src={PaymentManagementWhite} className="white" />
							<Image src={PaymentManagementBlue} className="blue" />
							<span>Drag And Drop</span>
						</Menu.Item> */}
					</Menu>
				}

				{/* No Chapter  */}
				{/* {bookDetail === "No Chapter" &&
					<Menu text vertical>
						<Menu.Item name='Page1' active={activeItem === 'Page1'} onClick={handleItemClick}>
							<span>Page 1</span>
						</Menu.Item>
						<Menu.Item name='Page2' active={activeItem === 'Page2'} onClick={handleItemClick}>
							<span>Page 2</span>
						</Menu.Item>
						<Menu.Item name='Page3' active={activeItem === 'Page3'} onClick={handleItemClick}>
							<span>Page 3</span>
						</Menu.Item>
						<Menu.Item name='Page4' active={activeItem === 'Page4'} onClick={handleItemClick}>
							<span>Page 4</span>
						</Menu.Item>
						<Menu.Item name='Page5' active={activeItem === 'Page5'} onClick={handleItemClick}>
							<span>Page 5</span>
						</Menu.Item>
						<Menu.Item name='Page6' active={activeItem === 'Page6'} onClick={handleItemClick}>
							<span>Page 6</span>
						</Menu.Item>
						<Menu.Item name='Page7' active={activeItem === 'Page7'} onClick={handleItemClick}>
							<span>Page 7</span>
						</Menu.Item>
						<Menu.Item name='Page8' active={activeItem === 'Page8'} onClick={handleItemClick}>
							<span>Page 8</span>
						</Menu.Item>
						<Menu.Item name='Page9' active={activeItem === 'Page9'} onClick={handleItemClick}>
							<span>Page 9</span>
						</Menu.Item>
						<Menu.Item name='Page10' active={activeItem === 'Page10'} onClick={handleItemClick}>
							<span>Page 10</span>
						</Menu.Item>

					</Menu>
				} */}


				{/* With Chapter */}

				{/* {bookDetail === "With Chapter" &&

					<Menu text vertical>
						<Menu.Item className="lessonPlan" name='ChapterOne' active={activeItem === 'ChapterOne'} onClick={handleItemClick}>
							<span>Chapter One</span>
							<Icon name="caret down" onClick={() => handleClick('chapterone1')} />
						</Menu.Item>
						<div className={`lessonPlanMenu  ${isActive === 'chapterone1' ? "show" : ""}`}>
							<Menu.Item name='Page1' active={activeItem === 'Page1'} onClick={handleItemClick}>
								<span>Page 1</span>
							</Menu.Item>
							<Menu.Item name='Page2' active={activeItem === 'Page2'} onClick={handleItemClick}>
								<span>Page 2</span>
							</Menu.Item>
							<Menu.Item name='Page3' active={activeItem === 'Page3'} onClick={handleItemClick}>
								<span>Page 3</span>
							</Menu.Item>
							<Menu.Item name='Page4' active={activeItem === 'Page4'} onClick={handleItemClick}>
								<span>Page 4</span>
							</Menu.Item>
							<Menu.Item name='Page5' active={activeItem === 'Page5'} onClick={handleItemClick}>
								<span>Page 5</span>
							</Menu.Item>
							<Menu.Item name='Page6' active={activeItem === 'Page6'} onClick={handleItemClick}>
								<span>Page 6</span>
							</Menu.Item>
						</div>
						<Menu.Item className="lessonPlan" name='ChapterTwo' active={activeItem === 'ChapterTwo'} onClick={handleItemClick}>
							<span>Chapter Two</span>
							<Icon name="caret down" onClick={() => handleClick('chaptertwo2')} />
						</Menu.Item>
						<div className={`lessonPlanMenu ${isActive === 'chaptertwo2' ? "show" : ""}`}>
							<Menu.Item name='Page7' active={activeItem === 'Page7'} onClick={handleItemClick}>
								<span>Page 7</span>
							</Menu.Item>
							<Menu.Item name='Page8' active={activeItem === 'Page8'} onClick={handleItemClick}>
								<span>Page 8</span>
							</Menu.Item>
							<Menu.Item name='Page9' active={activeItem === 'Page9'} onClick={handleItemClick}>
								<span>Page 9</span>
							</Menu.Item>
							<Menu.Item name='Page10' active={activeItem === 'Page10'} onClick={handleItemClick}>
								<span>Page 10</span>
							</Menu.Item>
						</div>

					</Menu>
				} */}

				{/* Chapter with Topic */}

				{/* {bookDetail === "With Topic Chapter" &&
					<Menu text vertical>
						<Menu.Item className="lessonPlan" name='Page Summary' active={activeItem === 'Page Summary'} onClick={handleItemClick}>
							<span>Book Summary</span>
							<Icon name="caret down" onClick={() => handleClick('Page Summary')} />
						</Menu.Item>
						<Menu.Item className="lessonPlan chapterMenu" name='ChapterOne1' active={activeItem === 'ChapterOne1'} onClick={handleItemClick}>
							<span>Chapter One</span>
							<Icon name="caret down" onClick={() => handleClick('chapterone11')} />
						</Menu.Item>
						<div className={`lessonPlanMenu  ${isActive === 'chapterone11' ? "show" : ""}`}>

							<Menu.Item className="lessonPlan" name='ChapterSummary' active={activeItem === 'ChapterSummary'} onClick={handleItemClick}>
								<span>Chapter Summary</span>
								<Icon name="caret down" onClick={() => handleClick('ChapterSummary')} />
							</Menu.Item>

							<Menu.Item className="topic" name='Topic1' active={activeItem === 'Topic1'} onClick={handleItemClick}>
								<span>Topic 1</span>
								<Icon name="caret down" onClick={() => handleClick('Topic1')} />
							</Menu.Item>
							<div className="subMenu">
								<Menu.Item name='Page1' active={activeItem === 'Page1'} onClick={handleItemClick}>
									<span>Page 1</span>
								</Menu.Item>
								<Menu.Item name='Page2' active={activeItem === 'Page2'} onClick={handleItemClick}>
									<span>Page 2</span>
								</Menu.Item>
							</div>

							<Menu.Item className="topic" name='Topic1' active={activeItem === 'Topic1'} onClick={handleItemClick}>
								<span>Topic 2</span>
								<Icon name="caret down" onClick={() => handleClick('Topic1')} />
							</Menu.Item>
							<div className="subMenu">
								<Menu.Item name='Page3' active={activeItem === 'Page3'} onClick={handleItemClick}>
									<span>Page 3</span>
								</Menu.Item>
								<Menu.Item name='Page4' active={activeItem === 'Page4'} onClick={handleItemClick}>
									<span>Page 4</span>
								</Menu.Item>
							</div>

							<Menu.Item className="topic" name='Topic1' active={activeItem === 'Topic1'} onClick={handleItemClick}>
								<span>Topic 3</span>
								<Icon name="caret down" onClick={() => handleClick('Topic1')} />
							</Menu.Item>
							<div className="subMenu">
								<Menu.Item name='Page5' active={activeItem === 'Page5'} onClick={handleItemClick}>
									<span>Page 5</span>
								</Menu.Item>
								<Menu.Item name='Page6' active={activeItem === 'Page6'} onClick={handleItemClick}>
									<span>Page 6</span>
								</Menu.Item>
							</div>
						</div>
						<Menu.Item className="lessonPlan chapterMenu" name='ChapterTwo1' active={activeItem === 'ChapterTwo1'} onClick={handleItemClick}>
							<span>Chapter Two</span>
							<Icon name="caret down" onClick={() => handleClick('chaptertwo22')} />
						</Menu.Item>
						<div className={`lessonPlanMenu ${isActive === 'chaptertwo22' ? "show" : ""}`}>

							<Menu.Item className="topic" name='Topic1' active={activeItem === 'Topic1'} onClick={handleItemClick}>
								<span>Topic 1</span>
								<Icon name="caret down" onClick={() => handleClick('Topic1')} />
							</Menu.Item>
							<div className="subMenu">
								<Menu.Item name='Page7' active={activeItem === 'Page7'} onClick={handleItemClick}>
									<span>Page 7</span>
								</Menu.Item>
								<Menu.Item name='Page8' active={activeItem === 'Page8'} onClick={handleItemClick}>
									<span>Page 8</span>
								</Menu.Item>
							</div>

							<Menu.Item className="topic" name='Topic1' active={activeItem === 'Topic1'} onClick={handleItemClick}>
								<span>Topic 2</span>
								<Icon name="caret down" onClick={() => handleClick('Topic1')} />
							</Menu.Item>
							<div className="subMenu">
								<Menu.Item name='Page9' active={activeItem === 'Page9'} onClick={handleItemClick}>
									<span>Page 9</span>
								</Menu.Item>
								<Menu.Item name='Page10' active={activeItem === 'Page10'} onClick={handleItemClick}>
									<span>Page 10</span>
								</Menu.Item>
							</div>
						</div>

					</Menu>
				} */}

			</div>
		</div>
	);
}
export default Sidebar;

