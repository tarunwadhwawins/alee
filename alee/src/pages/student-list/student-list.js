import React, { useState, useEffect } from "react";
import { Grid, Header, Button, Icon, Form, Dimmer, Loader, Table } from "semantic-ui-react";
import AddStudent from "../../shared/components/organisms/modal/add-student/index";
import { DataTable } from "../../../src/shared/components/organisms";
import { apiCall } from "../../store/actions/api.actions";
import { useSelector, useDispatch } from "react-redux";
import { commonFunctions, Link, env } from "../../shared/functional/global-import";
import ConfirmModal from "../../pages/upload-excel/confirm-excel-modal";

function StudentListPage() {
	const [student, setStudent] = React.useState(false);
	const [reload, SetReload] = useState(false)
	const [editData, SetEditData] = useState([]);
	const [excel, setExcel] = useState(false)
	const [excelHeading, setExcelHeading] = useState([])
	const [excelData, setExcelData] = useState([])
	const [useOfModal, setUseOfModal] = useState("");
	const [modalStatus, setModalStatus] = useState(false);
	const [selectedTeachers, setSelectedTeachers] = useState([]);
	const [template, setTemplate] = useState("");

	const auth = useSelector((state) => state.auth);
	const openModal = () => {
		setStudent(!student)
	}
	const fileInputRef = React.createRef();
	const dispatch = useDispatch();
	const api = useSelector(state => state.api)
	const teacherId = useSelector(state => state.auth.userDetail.teacherId)

	const onHandleEdit = (data) => {
		SetEditData(data)
		openModal();
	}
	const GridReload = () => {
		SetReload(!reload)
	}

	useEffect(() => {
		getExcelTemplate();
	}, []);

	const getExcelTemplate = () => {
		dispatch(apiCall({
			urls: ["GETEXCELTEMPLATE"], method: "GET", onSuccess: (response) => {
				setTemplate(response.responseMessage)
			}, showNotification: false
		}))
	}

	const onFileChange = (event) => {
		const files = event.target.files;
		setExcel(true)
		let formdata = commonFunctions.getFormData({ file: files });
		dispatch(apiCall({
			urls: ["UPLOADEXCEL"], method: "POST", data: formdata, onSuccess: (response) => {
				const headings = Object.keys(JSON.parse(response.responseMessage)[0])
				setExcelHeading(headings)
				setExcelData(JSON.parse(response.responseMessage))
			}, showNotification: false
		}))

	}

	const modalOpen = (e) => {
		setUseOfModal(e)
		setModalStatus(!modalStatus)
	}
	const onHandleSelect = (e, { name, checked }) => {
		if (checked === true) {
			setSelectedTeachers(selectedTeachers.concat(name))
		}
		if (checked === false) {
			const st = selectedTeachers.filter(teacherId => teacherId !== name);
			setSelectedTeachers(st)
		}
	}

	const selectAll = () => {
		if (excelData.length !== selectedTeachers.length) {
			setSelectedTeachers(excelData.map(teacher => teacher.Id))
		}
		else {
			setSelectedTeachers([])
		}
	}
	const onSaveExcel = () => {
		let formdata = commonFunctions.getFormData({ ids: selectedTeachers, teacherId: teacherId });
		dispatch(apiCall({
			urls: ["ADDSTUDENTFORMEXCEL"], method: "POST", data: formdata, onSuccess: (response) => {
				modalOpen();
				setExcel(!excel)
			}, showNotification: true
		}))
	}

	const onRemoveExcel = () => {
		setExcelHeading([])
		setExcelData([])
		setSelectedTeachers([])
		modalOpen();
		setExcel(!excel)
	}

	return (
		<div className="common-shadow">
			{!excel ? <Grid>
				<Grid.Column width={4} verticalAlign="middle">
					<Header as="h3" className="commonHeading">Student list</Header>
				</Grid.Column>
				<Grid.Column width={8} verticalAlign="middle" textAlign="right">
					<Icon name="file excel" className="primary-color" link /> Excel Template <a href={commonFunctions.concatenateImageWithAPIUrl(template)}>Download</a>
				</Grid.Column>

				<Grid.Column width={4} textAlign="right">
					<Button className="primaryBtn" onClick={openModal}><Icon name="plus" /> Add Student</Button>
					<Button className="alternateBtn" onClick={() => fileInputRef.current.click()} ><Icon name="upload" /> Upload Excel</Button>
					<input ref={fileInputRef} type="file" hidden onChange={onFileChange} />
				</Grid.Column>
				<Grid.Column width={16}>

					<DataTable
						allApi={{ getApiName: "GETSTUDENTSLIST", deleteApiName: "DELETESTUDENT", toggleApiName: "STUDENTTOGGLE" }} reload={reload}
						additionalParams={{ teacherId: teacherId }}
						searchOption={{ show: true, placeHolder: "Search" }}
						messageInModal="Student"
						columns={[
							{
								headerName: "Name",
								fieldName: "studentName",
								isSorting: true,
							},
							{
								headerName: "Email",
								fieldName: "email",
								isSorting: true
							},

							{
								headerName: "Grade",
								fieldName: "gradeName",
								isSorting: true,
							},
							{
								headerName: "Status",
								fieldName: "isActive",
								isSorting: false,
								Cell: (props, confirmModalOpen) => {
									return (
										<Form.Checkbox checked={props.isActive ? true : false} toggle className="commonToggle" onChange={() => confirmModalOpen(props.studentId, "update", props.isActive)} />
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
											<Icon name="edit" className="primary-color" link onClick={() => onHandleEdit(props)} />
											<Icon name="trash alternate" color="red" link onClick={() => confirmModalOpen(props.studentId, "delete")} />
										</>
									);
								},
							},
						]}

					></DataTable>

				</Grid.Column>
			</Grid> :
				<Grid>
					{
						api.isApiLoading && (
							<Dimmer active inverted>
								<Loader />
							</Dimmer>
						)
					}
					<Grid.Column width={16}>
						<Header as="h3" className="commonHeading">Upload Excel</Header>
					</Grid.Column>
					<Grid.Column width={16}>
						{excelData.length > 0 && <Table>
							<Table.Header>
								<Table.Row>
									{excelHeading.length > 0 && <Table.HeaderCell>
										<Form.Checkbox onChange={() => selectAll()} checked={selectedTeachers.length === excelData.length} />
									</Table.HeaderCell>}
									{excelHeading.map((singleData, index) => {
										return (
											<>
												{!(index === 0) && <Table.HeaderCell>
													{singleData}
												</Table.HeaderCell>}
											</>
										)
									}
									)}
								</Table.Row>
							</Table.Header>

							<Table.Body>
								{excelData.map((dataExcel, index) => {
									return (
										<Table.Row key={index}>
											{excelData.length > 0 && <Table.Cell>
												<Form.Checkbox onChange={onHandleSelect} name={dataExcel.Id} value={dataExcel.IsChecked} checked={selectedTeachers.includes(dataExcel.Id)} />
											</Table.Cell>}
											{excelHeading.map((singleField, index) => {
												return (
													<>
														{!(index === 0) && <Table.Cell key={index}>
															{dataExcel[singleField]}
														</Table.Cell>}
													</>
												);
											})}
										</Table.Row>
									)
								})}
							</Table.Body>
						</Table>}
					</Grid.Column>

					{excelData.length > 0 && <>
						<Grid.Column width={16} textAlign="right">
							<Button className="primaryBtn" className="secondaryBtn" onClick={() => modalOpen("remove")}> Cancel </Button>
							<Button className="primaryBtn" onClick={() => modalOpen("save")}> Save </Button>
						</Grid.Column> </>}
				</Grid>
			}
			<AddStudent openModal={student} closeModal={openModal} editData={editData} GridReload={GridReload} />
			<ConfirmModal open={modalStatus} close={modalOpen} selectedRecords={selectedTeachers.length} onSaveExcel={onSaveExcel} useOfModal={useOfModal} onRemoveExcel={onRemoveExcel} />
		</div>
	);
}
export default StudentListPage;
