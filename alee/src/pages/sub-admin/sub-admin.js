import React,{useState}from "react";
import { Grid, Header, Table, Button, Icon,Form} from "semantic-ui-react";
import AddSubAdmin from "../../shared/components/organisms/modal/add-sub-admin/index";
import { DataTable } from "../../../src/shared/components/organisms";
function SubAdminPage() {
	const [subadmin, setSubadmin] = React.useState(false);
	const [editDetail, SeteditDetail] = useState([]);
	const [reload, SetReload] = useState(false);
	const [modalType, setModalType] = useState("ADD");

	const openModal = (modalType) => {
		setSubadmin(!subadmin)
		setModalType(modalType);
	}
	const GridReload = () => {
		SetReload(!reload)
	}
	const onHandleEdit = (data) => {
		SeteditDetail(data)
		openModal("EDIT");
	}
    return (
		<div className="common-shadow">
		<Grid>
			<Grid.Column width={8} verticalAlign="middle">
				<Header as="h3" className="commonHeading">Sub-Admin</Header>
			</Grid.Column>
			<Grid.Column width={8} textAlign="right">
				<Button className="primaryBtn"  onClick={()=>openModal("ADD")}><Icon name="plus"/> Add Sub-Admin</Button>
			</Grid.Column>
			<Grid.Column width={16}>
			<DataTable
					allApi={{ getApiName: "GETSUBADMINLIST", deleteApiName:"DELETESUBADMIN",toggleApiName:"SUBADMINTOGGLE"}} reload={reload}
					searchOption={{ show: true, placeHolder: "Search" }}
					messageInModal= "subAdmin"
					columns={[
						{
							headerName: "Name",
							fieldName: "userName",
							isSorting: true,
						},
						{
							headerName: "Email",
							fieldName: "email",
							isSorting: true
						},
						{
							headerName: "Username",
							fieldName: "email",
							isSorting: true,
						},
						{
							headerName: "Status",
							fieldName: "isActive",
							isSorting: false,
							Cell: (props, confirmModalOpen) => {
								return (
									<Form.Checkbox checked={props.isActive ? true : false} toggle className="commonToggle" onChange={() => confirmModalOpen(props.subAdminId,"update",props.isActive)} />
								);
							},
						},
						{
							headerName: "Action",
							fieldName: "Action",
							isSorting: false,
							Cell: (props, confirmModalOpen) => {
								return (
									<>
										<Icon name="edit" className="primary-color" link 
									     onClick={()=>onHandleEdit(props)}/>
										<Icon name="trash alternate" color="red" link onClick={() => confirmModalOpen(props.subAdminId,"delete")} />
									</>
								);
							},
						},
					]}

				></DataTable>
			</Grid.Column>
		</Grid>
		<AddSubAdmin openModal={subadmin} modalType={modalType} closeModal={openModal} editDetail={editDetail} GridReload={GridReload} />
		</div>
		);
  }
  
  export default SubAdminPage;