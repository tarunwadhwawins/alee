import React, { useState } from "react";
import { Link, } from "../../../functional/global-import";
import { Image, Menu, Icon, } from "semantic-ui-react";
import { Logo2, ManageSchoolBlue, ManageSchoolWhite, ManageTeacherBlue, ManageTeacherWhite, AssignTemplateBlue, AssignTemplateWhite, CreateTemplateWhite, CreateTemplateBlue, PaymentManagementBlue, PaymentManagementWhite, StandardsWhite, StandardsBlue, DashboardWhite, DashboardBlue, LessonPlanWhite, LessonPlanBlue, StudentListWhite, StudentListBlue, LessonLibraryWhite, LessonLibraryBlue, LogOutWhite, LogOutBlue, ScanBookWhite, ScanBookBlue, PdfBookWhite, PdfBookBlue, MyBookWhite, MyBookBlue, ResourceWhite, ResourceBlue, SubAdminBlue, SubAdminWhite, SubscriptionBlue, SubscriptionWhite, AddTagListingBlue, AddTagListingWhite ,UserManagementBlue,UserManagementWhite} from "../../../functional/global-image-import";
import { useSelector } from 'react-redux';

function Sidebar(props) {
	const [activeItem, setActiveItem] = useState("closest")
	const [isActive, setIsActive] = useState("")

	const api = useSelector(state => state.auth)

	const handleItemClick = (e, { name }) => setActiveItem(name);
	const handleClick = (chapterName) => setIsActive(chapterName);

	return (
		<div className="Sidebar">
			<div className="logo">
				<Link to="dashboard"><Image src={Logo2} /></Link>
			</div>
			<div className="mainMenu">
				{api.loggedIn === "School" &&
					<Menu text vertical>
						<Menu.Item as={Link} to="upload-excel" name='UploadExcel' active={activeItem === 'UploadExcel'} onClick={handleItemClick}>
							<Image src={DashboardWhite} className="white" />
							<Image src={DashboardBlue} className="blue" />
							<span>Upload Excel</span>
						</Menu.Item>
						<Menu.Item as={Link} to="school-manage-teachers" name='school-manage-teacher' active={activeItem === 'school-manage-teacher'} onClick={handleItemClick}>
							<Image src={ManageSchoolWhite} className="white" />
							<Image src={ManageSchoolBlue} className="blue" />
							<span>Manage Teachers</span>
						</Menu.Item>
						<Menu.Item as={Link} to="subscription-plan" name='subscription-plan' active={activeItem === 'subscription-plan'} onClick={handleItemClick}>
							<Image src={SubscriptionWhite} className="white" />
							<Image src={SubscriptionBlue} className="blue" />
							<span>Subscription</span>
						</Menu.Item>
					</Menu>
				}
				{api.loggedIn === "Teacher" &&
					<Menu text vertical>

						<Menu.Item as={Link} to="dashboard" name='Dashboard' active={activeItem === 'Dashboard'} onClick={handleItemClick}>
							<Image src={DashboardWhite} className="white" />
							<Image src={DashboardBlue} className="blue" />
							<span>Dashboard</span>
						</Menu.Item>

						<Menu.Item as={Link} to="student-list" name='StudentList' active={activeItem === 'StudentList'} onClick={handleItemClick}>
							<Image src={StudentListWhite} className="white" />
							<Image src={StudentListBlue} className="blue" />
							<span>Student List</span>
						</Menu.Item>
						<Menu.Item as={Link} to="lesson-plan" name='Lesson Plan' active={activeItem === 'LessonPlan'} onClick={handleItemClick} >
							<Image src={LessonPlanWhite} className="white" />
							<Image src={LessonPlanBlue} className="blue" />
							<span>Lesson Plan</span>
						</Menu.Item>
						<Menu.Item as={Link} to="search" name='LessonLibrary' active={activeItem === 'LessonLibrary'} onClick={handleItemClick}>
							<Image src={LessonLibraryWhite} className="white" />
							<Image src={LessonLibraryBlue} className="blue" />
							<span>Lesson Library</span>
						</Menu.Item>
						<Menu.Item as={Link} to="my-books" name='mybooks' active={activeItem === 'mybooks'} onClick={handleItemClick}>
							<Image src={MyBookWhite} className="white" />
							<Image src={MyBookBlue} className="blue" />
							<span>My Books</span>
						</Menu.Item>

						<Menu.Item as={Link} to="" name='LogOut' active={activeItem === 'LogOut'} onClick={handleItemClick}>
							<Image src={LogOutWhite} className="white" />
							<Image src={LogOutBlue} className="blue" />
							<span>Log Out</span>
						</Menu.Item>
					</Menu>
				}
				{api.loggedIn === "Admin" && <Menu text vertical>
					<Menu.Item as={Link} to="dashboard" name='Dashboard' active={activeItem === 'Dashboard'} onClick={handleItemClick}>
						<Image src={DashboardWhite} className="white" />
						<Image src={DashboardBlue} className="blue" />
						<span>Dashboard</span>
					</Menu.Item>
					<Menu.Item className="lessonPlan" as={Link} to="user-management" name='user-management' active={activeItem === 'user-management'} onClick={handleItemClick}>
						<Image src={UserManagementWhite} className="white" />
						<Image src={UserManagementBlue} className="blue" />
						<span>User Management</span>
						<Icon name="caret down" onClick={() => handleClick('UserManagement')} />
					</Menu.Item>
					<div className={`lessonPlanMenu  ${isActive === 'UserManagement' ? "show" : ""}`}>
						<Menu.Item as={Link} to="manage-teachers" name='manage-teacher' active={activeItem === 'manage-teacher'} onClick={handleItemClick}>
							<Image src={ManageTeacherWhite} className="white" />
							<Image src={ManageTeacherBlue} className="blue" />
							<span>Manage Teachers</span>
						</Menu.Item>
						<Menu.Item as={Link} to="manage-schools" name='manage-schools' active={activeItem === 'manage-schools'} onClick={handleItemClick}>
							<Image src={ManageSchoolWhite} className="white" />
							<Image src={ManageSchoolBlue} className="blue" />
							<span>Manage Schools</span>
						</Menu.Item>
					</div>
					<Menu.Item as={Link} to="scan-book" name='ScanBook' active={activeItem === 'ScanBook'} onClick={handleItemClick}>
						<Image src={ScanBookWhite} className="white" />
						<Image src={ScanBookBlue} className="blue" />
						<span>Scan Book</span>
					</Menu.Item>
					<Menu.Item as={Link} to="upload-pdf" name='uploadpdf' active={activeItem === 'uploadpdf'} onClick={handleItemClick}>
						<Image src={PdfBookWhite} className="white" />
						<Image src={PdfBookBlue} className="blue" />
						<span>Upload PDF</span>
					</Menu.Item>
					<Menu.Item as={Link} to="my-books" name='mybooks' active={activeItem === 'mybooks'} onClick={handleItemClick}>
						<Image src={MyBookWhite} className="white" />
						<Image src={MyBookBlue} className="blue" />
						<span>My Books (3/4)</span>
					</Menu.Item>
					<Menu.Item as={Link} to="resources" name='resources' active={activeItem === 'resources'} onClick={handleItemClick}>
						<Image src={ResourceWhite} className="white" />
						<Image src={ResourceBlue} className="blue" />
						<span>Resources</span>
					</Menu.Item>
					<Menu.Item as={Link} to="sub-admin" name='sub-admin' active={activeItem === 'sub-admin'} onClick={handleItemClick}>
						<Image src={SubAdminWhite} className="white" />
						<Image src={SubAdminBlue} className="blue" />
						<span>Sub-admin</span>
					</Menu.Item>
					<Menu.Item className="lessonPlan" as={Link} to="subscription" name='subscription' active={activeItem === 'subscription'} onClick={handleItemClick}>
						<Image src={SubscriptionWhite} className="white" />
						<Image src={SubscriptionBlue} className="blue" />
						<span>Subscription</span>
						<Icon name="caret down" onClick={() => handleClick('Subscription')} />
					</Menu.Item>
					<div className={`lessonPlanMenu  ${isActive === 'Subscription' ? "show" : ""}`}>
						<Menu.Item as={Link} to="subscription-manage" name='subscription-manage' active={activeItem === 'subscription-manage'} onClick={handleItemClick}>
							<Image src={StandardsWhite} className="white" />
							<Image src={StandardsBlue} className="blue" />
							<span>Subscription Manage</span>
						</Menu.Item>
					</div>
					<Menu.Item as={Link} to="add-tags-listing" name='add-tags-listing' active={activeItem === 'add-tags-listing'} onClick={handleItemClick}>
						<Image src={AddTagListingWhite} className="white" />
						<Image src={AddTagListingBlue} className="blue" />
						<span>Add Tags Listing</span>
					</Menu.Item>

					<Menu.Item as={Link} to="payment-management" name='payment-management' active={activeItem === 'payment-management'} onClick={handleItemClick}>
						<Image src={PaymentManagementWhite} className="white" />
						<Image src={PaymentManagementBlue} className="blue" />
						<span>Payment Manangement</span>
					</Menu.Item>
					<Menu.Item className="lessonPlan" as={Link} to="create-template" name='create-template' active={activeItem === 'create-template'} onClick={handleItemClick}>
						<Image src={CreateTemplateWhite} className="white" />
						<Image src={CreateTemplateBlue} className="blue" />
						<span>Create Template</span>
						<Icon name="caret down" onClick={() => handleClick('Template')} />
					</Menu.Item>
					<div className={`lessonPlanMenu  ${isActive === 'Template' ? "show" : ""}`}>
						<Menu.Item as={Link} to="assign-template" name='assign-template' active={activeItem === 'assign-template'} onClick={handleItemClick}>
							<Image src={AssignTemplateWhite} className="white" />
							<Image src={AssignTemplateBlue} className="blue" />
							<span>Assign Template</span>
						</Menu.Item>
					</div>
				</Menu>
				}

				{/* No Chapter  */}
				{localStorage.getItem("BookType") === "No Chapter" &&
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
				}


				{/* With Chapter */}

				{localStorage.getItem("BookType") === "With Chapter" &&

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
				}

				{/* Chapter with Topic */}

				{localStorage.getItem("BookType") === "With Topic Chapter" &&
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
				}

			</div>
		</div>
	);
}
export default Sidebar;

