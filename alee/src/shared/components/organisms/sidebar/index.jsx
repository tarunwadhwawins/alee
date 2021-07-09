import React, { Component } from "react";
import { Link, } from "../../../functional/global-import";
import { Image, Menu, Icon, } from "semantic-ui-react";
import { Logo2,ManageSchoolBlue, ManageSchoolWhite, ManageTeacherBlue, ManageTeacherWhite, AssignTemplateBlue, AssignTemplateWhite, CreateTemplateWhite, CreateTemplateBlue, PaymentManagementBlue, PaymentManagementWhite, StandardsWhite, StandardsBlue, DashboardWhite, DashboardBlue, LessonPlanWhite, LessonPlanBlue, CurrentLessonWhite, CurrentLessonBlue, PreviousLessonWhite, PreviousLessonBlue, StudentListWhite, StudentListBlue, LessonLibraryWhite, LessonLibraryBlue, SettingWhite, SettingBlue, LogOutWhite, LogOutBlue, ScanBookWhite, ScanBookBlue, PdfBookWhite, PdfBookBlue, MyBookWhite, MyBookBlue, ResourceWhite, ResourceBlue, SubAdminBlue, SubAdminWhite, SubscriptionBlue, SubscriptionWhite,AddTagListingBlue , AddTagListingWhite } from "../../../../shared/functional/global-image-import";



class Sidebar extends Component {
	state = { activeItem: 'closest' }
	state = { isActive: '' };
	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
	handleToggle = () => {
		this.setState({ isActive: !this.state.isActive });
	  };

	  handleClick = (chapterName) => {
		this.setState({ isActive: chapterName });
	  };
	

	  
	 


  render() {
	const { activeItem } = this.state;
	const isActive = this.state.isActive;
    return (
    	<div className="Sidebar">
			<div className="logo">
				<Link to="dashboard"><Image src={Logo2}/></Link>
			</div>
			<div className="mainMenu">
			{!localStorage.getItem("BookType")  && localStorage.getItem("Usertype") === "teacher" && 
				<Menu text vertical>
				
					<Menu.Item  as={Link} to="dashboard"  name='Dashboard' active={activeItem === 'Dashboard'} onClick={this.handleItemClick}>
						<Image src={DashboardWhite} className="white"/>
						<Image src={DashboardBlue} className="blue"/>
						<span>Dashboard</span>
					</Menu.Item>
					{/* <Menu.Item name='Standards' active={activeItem === 'Standards'} onClick={this.handleItemClick}>
						<Image src={StandardsWhite} className="white"/>
						<Image src={StandardsBlue} className="blue"/>
						<span>Standards</span>
					</Menu.Item> */}
					<Menu.Item as={Link} to="student-list" name='StudentList' active={activeItem === 'StudentList'} onClick={this.handleItemClick}>
						<Image src={StudentListWhite} className="white"/>
						<Image src={StudentListBlue} className="blue"/>
						<span>Student List</span>
					</Menu.Item>
					<Menu.Item as={Link} to="lesson-plan" name='Lesson Plan' active={activeItem === 'LessonPlan'}  onClick={this.handleItemClick} >
						<Image src={LessonPlanWhite} className="white"/>
						<Image src={LessonPlanBlue} className="blue"/>
						<span>Lesson Plan</span>
					</Menu.Item>
					<Menu.Item as={Link} to="search" name='LessonLibrary' active={activeItem === 'LessonLibrary'} onClick={this.handleItemClick}>
						<Image src={LessonLibraryWhite} className="white"/>
						<Image src={LessonLibraryBlue} className="blue"/>
						<span>Lesson Library</span>
					</Menu.Item>
					<Menu.Item as={Link} to="my-books" name='mybooks' active={activeItem === 'mybooks'} onClick={this.handleItemClick}>
						<Image src={MyBookWhite} className="white"/>
						<Image src={MyBookBlue} className="blue"/>
						<span>My Books</span>
					</Menu.Item>
					<Menu.Item name='Setting' active={activeItem === 'Setting'}  className="lessonPlan" onClick={this.handleItemClick}>
						<Image src={SettingWhite} className="white"/>
						<Image src={SettingBlue} className="blue"/>
						<span>Setting</span>
						<Icon name="caret down"  onClick={()=>this.handleClick('Setting') }/>
					</Menu.Item>
					<div className={`lessonPlanMenu  ${isActive==='Setting' ? "show" : ""}`}>
						<Menu.Item as={Link} to="subscription-plan" name='subscription-plan' active={activeItem === 'subscription-plan'} onClick={this.handleItemClick}>
							<Image src={SubscriptionWhite} className="white"/>
							<Image src={SubscriptionBlue} className="blue"/>
							<span>Subscription</span>
						</Menu.Item>
					</div>
					<Menu.Item as={Link} to="/alee" name='LogOut' active={activeItem === 'LogOut'} onClick={this.handleItemClick}>
						<Image src={LogOutWhite} className="white"/>
						<Image src={LogOutBlue} className="blue"/>
						<span>Log Out</span>
					</Menu.Item>	
				</Menu>
  				}
				  {!localStorage.getItem("BookType")  &&   localStorage.getItem("Usertype") === "admin" &&  <Menu text vertical>
					<Menu.Item as={Link} to="scan-book" name='ScanBook' active={activeItem === 'ScanBook'} onClick={this.handleItemClick}>
						<Image src={ScanBookWhite} className="white"/>
						<Image src={ScanBookBlue} className="blue"/>
						<span>Scan Book</span>
					</Menu.Item>
					<Menu.Item as={Link} to="upload-pdf" name='uploadpdf' active={activeItem === 'uploadpdf'} onClick={this.handleItemClick}>
						<Image src={PdfBookWhite} className="white"/>
						<Image src={PdfBookBlue} className="blue"/>
						<span>Upload PDF</span>
					</Menu.Item>
					<Menu.Item as={Link} to="my-books" name='mybooks' active={activeItem === 'mybooks'} onClick={this.handleItemClick}>
						<Image src={MyBookWhite} className="white"/>
						<Image src={MyBookBlue} className="blue"/>
						<span>My Books (3/4)</span>
					</Menu.Item>
					<Menu.Item as={Link} to="resources" name='resources' active={activeItem === 'resources'} onClick={this.handleItemClick}>
						<Image src={ResourceWhite} className="white"/>
						<Image src={ResourceBlue} className="blue"/>
						<span>Resources</span>
					</Menu.Item>
					<Menu.Item as={Link} to="sub-admin" name='sub-admin' active={activeItem === 'sub-admin'} onClick={this.handleItemClick}>
						<Image src={SubAdminWhite} className="white"/>
						<Image src={SubAdminBlue} className="blue"/>
						<span>Sub-admin</span>
					</Menu.Item>
					<Menu.Item as={Link} to="subscription" name='subscription' active={activeItem === 'subscription'} onClick={this.handleItemClick}>
						<Image src={SubscriptionWhite} className="white"/>
						<Image src={SubscriptionBlue} className="blue"/>
						<span>Subscription</span>
					</Menu.Item>
					<Menu.Item as={Link} to="add-tags-listing" name='add-tags-listing' active={activeItem === 'add-tags-listing'} onClick={this.handleItemClick}>
						<Image src={AddTagListingWhite} className="white"/>
						<Image src={AddTagListingBlue} className="blue"/>
						<span>Add Tags Listing</span>
					</Menu.Item>
					<Menu.Item as={Link} to="manage-teachers" name='manage-teacher' active={activeItem === 'manage-teacher'} onClick={this.handleItemClick}>
						<Image src={ManageTeacherWhite} className="white"/>
						<Image src={ManageTeacherBlue} className="blue"/>
						<span>Manage Teachers</span>
					</Menu.Item>
					<Menu.Item as={Link} to="manage-schools" name='manage-schools' active={activeItem === 'manage-schools'} onClick={this.handleItemClick}>
						<Image src={ManageSchoolWhite} className="white"/>
						<Image src={ManageSchoolBlue} className="blue"/>
						<span>Manage Schools</span>
					</Menu.Item>
					<Menu.Item as={Link} to="payment-management" name='payment-management' active={activeItem === 'payment-management'} onClick={this.handleItemClick}>
						<Image src={PaymentManagementWhite} className="white"/>
						<Image src={PaymentManagementBlue} className="blue"/>
						<span>Payment Manangement</span>
					</Menu.Item>
					<Menu.Item as={Link} to="create-template" name='create-template' active={activeItem === 'create-template'} onClick={this.handleItemClick}>
						<Image src={CreateTemplateWhite} className="white"/>
						<Image src={CreateTemplateBlue} className="blue"/>
						<span>Create Template</span>
					</Menu.Item>
					<Menu.Item as={Link} to="assign-template" name='assign-template' active={activeItem === 'assign-template'} onClick={this.handleItemClick}>
						<Image src={AssignTemplateWhite} className="white"/>
						<Image src={AssignTemplateBlue} className="blue"/>
						<span>Assign Template</span>
					</Menu.Item>
				  </Menu>
				  }

				  {/* No Chapter  */}
 			{localStorage.getItem("BookType") === "No Chapter" &&  
				<Menu text vertical>
					<Menu.Item  name='Page1' active={activeItem === 'Page1'} onClick={this.handleItemClick}>
						<span>Page 1</span>
					</Menu.Item>
					<Menu.Item  name='Page2' active={activeItem === 'Page2'} onClick={this.handleItemClick}>
						<span>Page 2</span>
					</Menu.Item>
					<Menu.Item  name='Page3' active={activeItem === 'Page3'} onClick={this.handleItemClick}>
						<span>Page 3</span>
					</Menu.Item>
					<Menu.Item  name='Page4' active={activeItem === 'Page4'} onClick={this.handleItemClick}>
						<span>Page 4</span>
					</Menu.Item>
					<Menu.Item  name='Page5' active={activeItem === 'Page5'} onClick={this.handleItemClick}>
						<span>Page 5</span>
					</Menu.Item>
					<Menu.Item  name='Page6' active={activeItem === 'Page6'} onClick={this.handleItemClick}>
						<span>Page 6</span>
					</Menu.Item>
					<Menu.Item  name='Page7' active={activeItem === 'Page7'} onClick={this.handleItemClick}>
						<span>Page 7</span>
					</Menu.Item>
					<Menu.Item  name='Page8' active={activeItem === 'Page8'} onClick={this.handleItemClick}>
						<span>Page 8</span>
					</Menu.Item>
					<Menu.Item  name='Page9' active={activeItem === 'Page9'} onClick={this.handleItemClick}>
						<span>Page 9</span>
					</Menu.Item>
					<Menu.Item  name='Page10' active={activeItem === 'Page10'} onClick={this.handleItemClick}>
						<span>Page 10</span>
					</Menu.Item>

				</Menu>
  }


{/* With Chapter */}

{localStorage.getItem("BookType") === "With Chapter" && 

				   <Menu text vertical>
					<Menu.Item  className="lessonPlan"  name='ChapterOne' active={activeItem === 'ChapterOne'} onClick={this.handleItemClick}>
						<span>Chapter One</span>
						<Icon name="caret down"  onClick={()=>this.handleClick('chapterone1') }/>
					</Menu.Item>
					<div className={`lessonPlanMenu  ${isActive==='chapterone1' ? "show" : ""}`}>
						<Menu.Item  name='Page1' active={activeItem === 'Page1'} onClick={this.handleItemClick}>
							<span>Page 1</span>
						</Menu.Item>
						<Menu.Item  name='Page2' active={activeItem === 'Page2'} onClick={this.handleItemClick}>
							<span>Page 2</span>
						</Menu.Item>
						<Menu.Item  name='Page3' active={activeItem === 'Page3'} onClick={this.handleItemClick}>
							<span>Page 3</span>
						</Menu.Item>
						<Menu.Item  name='Page4' active={activeItem === 'Page4'} onClick={this.handleItemClick}>
							<span>Page 4</span>
						</Menu.Item>
						<Menu.Item  name='Page5' active={activeItem === 'Page5'} onClick={this.handleItemClick}>
							<span>Page 5</span>
						</Menu.Item>
						<Menu.Item  name='Page6' active={activeItem === 'Page6'} onClick={this.handleItemClick}>
							<span>Page 6</span>
						</Menu.Item>
					</div>
					<Menu.Item   className="lessonPlan" name='ChapterTwo' active={activeItem === 'ChapterTwo'} onClick={this.handleItemClick}>
						<span>Chapter Two</span>
						<Icon name="caret down"  onClick={()=>this.handleClick('chaptertwo2') }/>
					</Menu.Item>
					<div className={`lessonPlanMenu ${isActive ==='chaptertwo2' ? "show" : ""}`}>
						<Menu.Item  name='Page7' active={activeItem === 'Page7'} onClick={this.handleItemClick}>
							<span>Page 7</span>
						</Menu.Item>
						<Menu.Item  name='Page8' active={activeItem === 'Page8'} onClick={this.handleItemClick}>
							<span>Page 8</span>
						</Menu.Item>
						<Menu.Item  name='Page9' active={activeItem === 'Page9'} onClick={this.handleItemClick}>
							<span>Page 9</span>
						</Menu.Item>
						<Menu.Item  name='Page10' active={activeItem === 'Page10'} onClick={this.handleItemClick}>
							<span>Page 10</span>
						</Menu.Item>
						</div>
					
				  </Menu>
  }


				  {/* Chapter with Topic */}

				  {localStorage.getItem("BookType") === "With Topic Chapter" && 
				  <Menu text vertical>
					<Menu.Item className="lessonPlan"  name='ChapterOne1' active={activeItem === 'ChapterOne1'} onClick={this.handleItemClick}>
						<span>Chapter One</span>
						<Icon name="caret down"  onClick={()=>this.handleClick('chapterone11') }/>
					</Menu.Item>
					<div className={`lessonPlanMenu  ${isActive==='chapterone11' ? "show" : ""}`}>

						<Menu.Item className="topic"  name='Topic1' active={activeItem === 'Topic1'} onClick={this.handleItemClick}>
							<span>Topic 1</span>
							<Icon name="caret down"  onClick={()=>this.handleClick('Topic1') }/>
						</Menu.Item>
						<div className="subMenu">
						<Menu.Item  name='Page1' active={activeItem === 'Page1'} onClick={this.handleItemClick}>
							<span>Page 1</span>
						</Menu.Item>
						<Menu.Item  name='Page2' active={activeItem === 'Page2'} onClick={this.handleItemClick}>
							<span>Page 2</span>
						</Menu.Item>
						</div>
						
						<Menu.Item className="topic"  name='Topic1' active={activeItem === 'Topic1'} onClick={this.handleItemClick}>
							<span>Topic 2</span>
							<Icon name="caret down"  onClick={()=>this.handleClick('Topic1') }/>
						</Menu.Item>
						<div className="subMenu">
						<Menu.Item  name='Page3' active={activeItem === 'Page3'} onClick={this.handleItemClick}>
							<span>Page 3</span>
						</Menu.Item>
						<Menu.Item  name='Page4' active={activeItem === 'Page4'} onClick={this.handleItemClick}>
							<span>Page 4</span>
						</Menu.Item>
						</div>
						
						<Menu.Item className="topic"  name='Topic1' active={activeItem === 'Topic1'} onClick={this.handleItemClick}>
							<span>Topic 3</span>
							<Icon name="caret down"  onClick={()=>this.handleClick('Topic1') }/>
						</Menu.Item>
						<div className="subMenu">
						<Menu.Item  name='Page5' active={activeItem === 'Page5'} onClick={this.handleItemClick}>
							<span>Page 5</span>
						</Menu.Item>
						<Menu.Item  name='Page6' active={activeItem === 'Page6'} onClick={this.handleItemClick}>
							<span>Page 6</span>
						</Menu.Item>
						</div>
					</div>
					<Menu.Item   className="lessonPlan" name='ChapterTwo1' active={activeItem === 'ChapterTwo1'} onClick={this.handleItemClick}>
						<span>Chapter Two</span>
						<Icon name="caret down"  onClick={()=>this.handleClick('chaptertwo22') }/>
					</Menu.Item>
					<div className={`lessonPlanMenu ${isActive ==='chaptertwo22' ? "show" : ""}`}>

						<Menu.Item className="topic"  name='Topic1' active={activeItem === 'Topic1'} onClick={this.handleItemClick}>
							<span>Topic 1</span>
							<Icon name="caret down"  onClick={()=>this.handleClick('Topic1') }/>
						</Menu.Item>
				  		<div className="subMenu">
							<Menu.Item  name='Page7' active={activeItem === 'Page7'} onClick={this.handleItemClick}>
								<span>Page 7</span>
							</Menu.Item>
							<Menu.Item  name='Page8' active={activeItem === 'Page8'} onClick={this.handleItemClick}>
								<span>Page 8</span>
							</Menu.Item>
							</div>

						<Menu.Item className="topic"  name='Topic1' active={activeItem === 'Topic1'} onClick={this.handleItemClick}>
							<span>Topic 2</span>
							<Icon name="caret down"  onClick={()=>this.handleClick('Topic1') }/>
						</Menu.Item>
						<div className="subMenu">
							<Menu.Item  name='Page9' active={activeItem === 'Page9'} onClick={this.handleItemClick}>
								<span>Page 9</span>
							</Menu.Item>
							<Menu.Item  name='Page10' active={activeItem === 'Page10'} onClick={this.handleItemClick}>
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
}



export default Sidebar;
