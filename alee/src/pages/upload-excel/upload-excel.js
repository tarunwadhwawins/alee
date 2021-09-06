import React, { useState, useEffect } from "react";
import { Grid, Header, Form, Button, Table, Dimmer, Loader, Icon } from "semantic-ui-react";
import { apiCall } from "../../store/actions/api.actions";
import { useSelector, useDispatch } from 'react-redux';
import { commonFunctions, Link, env } from "../../shared/functional/global-import";
import { useHistory } from "react-router-dom";
import ConfirmModal from "./confirm-excel-modal";

const initialState = {}
function UploadExcelPage() {
	const [uploadExcel, setUploadExcel] = useState(initialState)
	const [excelHeading, setExcelHeading] = useState([])
	const [excelData, setExcelData] = useState([])
	const [fileName, SetFileName] = useState("")
	const [selectedTeachers, setSelectedTeachers] = useState([]);
	const [modalStatus, setModalStatus] = useState(false);
	const [useOfModal, setUseOfModal] = useState("");
	const [template, setTemplate] = useState("");

	const fileInputRef = React.createRef();
	const dispatch = useDispatch();
	const api = useSelector(state => state.api)
	const schoolId = useSelector(state => state.auth.userDetail.schoolId)
	let history = useHistory();

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
		if (event.target.files.length > 0) {
			SetFileName(event.target.files[0].name)
		}
		setUploadExcel(files)
	}

	const onHandleSubmit = () => {
		     
		let formdata = commonFunctions.getFormData({ file: uploadExcel });
		dispatch(apiCall({
			urls: ["UPLOADEXCEL"], method: "POST", data: formdata, onSuccess: (response) => {
				const headings = Object.keys(JSON.parse(response.responseMessage)[0])
				setExcelHeading(headings)
				setExcelData(JSON.parse(response.responseMessage))

			}, showNotification: false
		}))
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

	const modalOpen = (e) => {
		setUseOfModal(e)
		setModalStatus(!modalStatus)
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
		let formdata = commonFunctions.getFormData({ ids: selectedTeachers, schoolId: schoolId });
		dispatch(apiCall({
			urls: ["ADDTEACHEREXCEL"], method: "POST", data: formdata, onSuccess: (response) => {
				modalOpen();
				history.push(`${env.PUBLIC_URL}/school-manage-teachers`);
			}, showNotification: true
		}))
	}

	const onRemoveExcel = () => {
		setExcelHeading([])
		setExcelData([])
		setSelectedTeachers([])
		modalOpen();
		SetFileName("");
		setUploadExcel(initialState);
	}

	return (
		<Grid>
			<Grid.Column width={8}>
				<Header as="h3" className="commonHeading">Upload Excel</Header>
			</Grid.Column>
			<Grid.Column width={8} textAlign="right">
				<Icon name="file excel" className="primary-color" link /> Excel Template <a href={commonFunctions.concatenateImageWithAPIUrl(template)}>Download</a>
			</Grid.Column>
			{excelData.length === 0 &&
				<> <Grid.Column width={16}>
					<Form >
						<Form.Field>
							<Button
								content="Upload excel file including teacher's name and email address"
								labelPosition="left"
								icon="file"
								fluid
								onClick={() => fileInputRef.current.click()}
							/>
							<input
								ref={fileInputRef}
								type="file"
								hidden
								onChange={onFileChange}
							/>
						</Form.Field>
						<span className="orange-color" to="">{fileName}</span>
					</Form>
				</Grid.Column>

					<Grid.Column width={16} textAlign="right">
						<Button className="primaryBtn" onClick={onHandleSubmit}>Upload</Button>
					</Grid.Column> </>}

			{api.isApiLoading && (
				<Dimmer active inverted>
					<Loader />
				</Dimmer>
			)}
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

			<ConfirmModal open={modalStatus} close={modalOpen} selectedRecords={selectedTeachers.length} onSaveExcel={onSaveExcel} useOfModal={useOfModal} onRemoveExcel={onRemoveExcel} />
		</Grid>
	);
}

export default UploadExcelPage;

