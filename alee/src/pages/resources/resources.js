import React from "react";
import { Grid, Header, Button, Form, Tab, Table, Icon } from "semantic-ui-react";
import { Link } from "../../shared/functional/global-import";
import { DataTable } from "../../../src/shared/components/organisms";

const Grade = [
	{ key: 'Grade 1', value: 'Grade 1', text: 'Grade 1' },
	{ key: 'Grade 2', value: 'Grade 2', text: 'Grade 2' },
	{ key: 'Grade 3', value: 'Grade 3', text: 'Grade 3' },
	{ key: 'Grade 4', value: 'Grade 4', text: 'Grade 4' },
	{ key: 'Grade 5', value: 'Grade 5', text: 'Grade 5' },
	{ key: 'Grade 6', value: 'Grade 6', text: 'Grade 6' },
	{ key: 'Grade 7', value: 'Grade 7', text: 'Grade 7' },
]
const Chapter = [
	{ key: 'Chapter 1', value: 'Chapter 1', text: 'Chapter 1' },
	{ key: 'Chapter 2', value: 'Chapter 2', text: 'Chapter 2' },
	{ key: 'Chapter 3', value: 'Chapter 3', text: 'Chapter 3' },
	{ key: 'Chapter 4', value: 'Chapter 4', text: 'Chapter 4' },
	{ key: 'Chapter 5', value: 'Chapter 5', text: 'Chapter 5' },
	{ key: 'Chapter 6', value: 'Chapter 6', text: 'Chapter 6' },
	{ key: 'Chapter 7', value: 'Chapter 7', text: 'Chapter 7' },
]
const Page = [
	{ key: 'Page 1', value: 'Page 1', text: 'Page 1' },
	{ key: 'Page 2', value: 'Page 2', text: 'Page 2' },
	{ key: 'Page 3', value: 'Page 3', text: 'Page 3' },
	{ key: 'Page 4', value: 'Page 4', text: 'Page 4' },
	{ key: 'Page 5', value: 'Page 5', text: 'Page 5' },
	{ key: 'Page 6', value: 'Page 6', text: 'Page 6' },
	{ key: 'Page 7', value: 'Page 7', text: 'Page 7' },
]
const Book = [
	{ key: 'Animal Farm', value: 'Animal Farm', text: 'Animal Farm' },
	{ key: 'America Dreams', value: 'America Dreams', text: 'America Dreams' },
	{ key: 'Old Man & Sea', value: 'Old Man & Sea', text: 'Old Man & Sea' },
]

const panes = [
	{
		menuItem: 'Audio',
		render: () =>
			<Tab.Pane attached={false}>

				<DataTable
					allApi={{ getApiName: "GETRESOURCESLIST", deleteApiName: "", toggleApiName: "" }}
					isSorting={false}
					searchOption={{ show: false, placeHolder: "Search" }}
					columns={[
						{
							headerName: "Grade",
							fieldName: "gradeName",
							isSorting: true,
						},
						{
							headerName: "Book",
							fieldName: "bookName",
							isSorting: true
						},

						{
							headerName: "Chapter",
							fieldName: "chapterId",
							isSorting: true,
						},
						{
							headerName: "Page",
							fieldName: "pageId",
							isSorting: true,
						},
						{
							headerName: "Audio",
							fieldName: "link",
							isSorting: true,
						},
						{
							headerName: "Action",
							fieldName: "Action",
							isSorting: false,
							Cell: (props, confirmModalOpen) => {
								debugger
								return (
									<>
										<Icon name="edit" className="primary-color" link />
										<Icon name="trash alternate" color="red" link onClick={() => confirmModalOpen(props.studentId, "delete")} />
									</>
								);
							},
						},
					]}

				></DataTable>

			</Tab.Pane>,
	},
	{
		menuItem: 'Video',
		render: () => <Tab.Pane attached={false}>

			<DataTable
				allApi={{ getApiName: "GETRESOURCESLIST", deleteApiName: "", toggleApiName: "" }}
				isSorting={false}
				searchOption={{ show: false, placeHolder: "Search" }}
				columns={[
					{
						headerName: "Grade",
						fieldName: "gradeName",
						isSorting: true,
					},
					{
						headerName: "Book",
						fieldName: "bookName",
						isSorting: true
					},

					{
						headerName: "Chapter",
						fieldName: "chapterId",
						isSorting: true,
					},
					{
						headerName: "Page",
						fieldName: "pageId",
						isSorting: true,
					},
					{
						headerName: "Video",
						fieldName: "link",
						isSorting: true,
					},
					{
						headerName: "Action",
						fieldName: "Action",
						isSorting: false,
						Cell: (props, confirmModalOpen) => {
							debugger
							return (
								<>
									<Icon name="edit" className="primary-color" link />
									<Icon name="trash alternate" color="red" link onClick={() => confirmModalOpen(props.studentId, "delete")} />
								</>
							);
						},
					},
				]}

			></DataTable>
		</Tab.Pane>,
	},
	{
		menuItem: 'Article',
		render: () => <Tab.Pane attached={false}>

			<DataTable
				allApi={{ getApiName: "GETRESOURCESLIST", deleteApiName: "", toggleApiName: "" }}
				isSorting={false}
				searchOption={{ show: false, placeHolder: "Search" }}
				columns={[
					{
						headerName: "Grade",
						fieldName: "gradeName",
						isSorting: true,
					},
					{
						headerName: "Book",
						fieldName: "bookName",
						isSorting: true
					},

					{
						headerName: "Chapter",
						fieldName: "chapterId",
						isSorting: true,
					},
					{
						headerName: "Page",
						fieldName: "pageId",
						isSorting: true,
					},
					{
						headerName: "Article",
						fieldName: "link",
						isSorting: true,
					},
					{
						headerName: "Pdf",
						fieldName: "",
						isSorting: true,
					},
					{
						headerName: "Action",
						fieldName: "Action",
						isSorting: false,
						Cell: (props, confirmModalOpen) => {
							debugger
							return (
								<>
									<Icon name="edit" className="primary-color" link />
									<Icon name="trash alternate" color="red" link onClick={() => confirmModalOpen(props.studentId, "delete")} />
								</>
							);
						},
					},
				]}

			></DataTable>

		</Tab.Pane>,
	},
]


function ResourcesPage() {
	const [tag, setTag] = React.useState(null)

	return (
		<div className="common-shadow resources">
			<Grid>
				<Grid.Column width={16}>
					<Header as="h3" className="commonHeading">Resources</Header>
				</Grid.Column>
				<Grid.Column width={16}>
					<Form>
						<Grid>
							<Grid.Column width="4">
								<Form.Select label="Grade" placeholder="Select Grade" options={Grade} />
							</Grid.Column>
							<Grid.Column width="4">
								<Form.Select label="Book" placeholder="Select Book" options={Book} />
							</Grid.Column>
							<Grid.Column width="4">
								<Form.Select label="Chapter" placeholder="Select Chapter" options={Chapter} />
							</Grid.Column>
							<Grid.Column width="4">
								<Form.Select label="Page" placeholder="Select Page" options={Page} />
							</Grid.Column>
							<Grid.Column width="8">
								<Form.Input label="Audio" placeholder="Embed URL" />
							</Grid.Column>
							<Grid.Column width="8">
								<Form.Input label="Video" placeholder="Embed URL" />
							</Grid.Column>
							<Grid.Column width="16">
								<Form.Input label="Article" placeholder="Embed URL" action='Upload Pdf' />
							</Grid.Column>
							<Grid.Column width="16" textAlign="right">
								<Button className="secondaryBtn">Cancel</Button>
								<Button className="primaryBtn">Save</Button>
							</Grid.Column>

							<Grid.Column width={16}>
								<Tab menu={{ text: true }} panes={panes} />
							</Grid.Column>
						</Grid>
					</Form>
				</Grid.Column>
			</Grid>
		</div>
	);
}

export default ResourcesPage;

