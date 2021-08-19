import React, { useState } from "react";
import { Table, Grid, Icon, Header, Button, Image, Popup } from "semantic-ui-react";
import AddChapter from "../../shared/components/organisms/modal/add-chapter/index";
import { BookPage1, BookPage2, BookPage3, BookPage4, BookPage5, BookPage6 } from "../../shared/functional/global-image-import";
import BookFlipPage from "../book-flip/book-flip";

function ChapterEmptyPage() {
	const [chapter, setChapter] = useState(false)

	const openModal = () => {
		setChapter(!chapter)
	}
	
	return (
		<>
			<BookFlipPage />
			<div className="chapterPage">
				<Grid>
					<Grid.Column width={8} verticalAlign="middle">
						<Header className="commonHeading">Animal Farm</Header>
					</Grid.Column>
					<Grid.Column width={8} textAlign="right">
						<Button className="primaryBtn" onClick={openModal}> <Icon name="plus" /> Chapter </Button>
					</Grid.Column>
					<Grid.Column width={16}>
						<Table>
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell width={5}>Chapter</Table.HeaderCell>
									<Table.HeaderCell width={5}>Page No.</Table.HeaderCell>
									<Table.HeaderCell width={3}>Topics</Table.HeaderCell>
									<Table.HeaderCell width={3} textAlign="right">Action</Table.HeaderCell>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								<Table.Row>
									<Table.Cell colSpan="4" textAlign="center">No Topics available</Table.Cell>
								</Table.Row>
							</Table.Body>
						</Table>
					</Grid.Column>
				</Grid>
				<AddChapter openModal={chapter} closeModal={openModal} />
			</div>
		</>
	);
}

export default ChapterEmptyPage;

