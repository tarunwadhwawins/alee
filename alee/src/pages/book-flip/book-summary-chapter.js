import React, { useState } from "react";
import { Grid, Button } from "semantic-ui-react";
import { Link } from "../../shared/functional/global-import";
import { useDispatch, useSelector } from 'react-redux';
import AddPageSummary from "../../shared/components/organisms/modal/add-page-summary/index";
import InviteTeacher from "../../shared/components/organisms/modal/invite-teacher/index";
import AddTags from "../../shared/components/organisms/modal/add-tags";
import AddChapter from "../../shared/components/organisms/modal/add-chapter/index";

function BookSummaryChapter(props) {

    const [summary, setSummary] = useState(false)
    const [chapter, setChapter] = useState(false)
    const [tag, setTags] = useState(false)
    const [invite, setInvite] = useState(false)
    const auth = useSelector(state => state.auth.userDetail.role)

    const openModalSummary = () => {
        setSummary(!summary)
    }
    const openModalChapter = () => {
        setChapter(!chapter)
    }
    const openModal2 = () => {
        setTags(!tag)
    }
    const openModal3 = () => {
        setInvite(!invite)
    }

    return (
        <>
            <Grid>
                <Grid.Column width={16} textAlign="right">
                    {auth === "Admin" &&
                        <>
                            <Button className="secondaryBtn" onClick={openModalSummary}>Add Book Summray</Button>
                            <Button className="primaryBtn" as={Link} to="chapter-empty">Add Chapter/Topic</Button>
                        </>
                    }
                </Grid.Column>
                {summary && <AddPageSummary openModal={summary} closeModal={openModalSummary} />}
                {/* <AddTags openModal={tag} closeModal={openModal2} />
			<InviteTeacher openModal={invite} closeModal={openModal3} /> */}
            </Grid>
            <AddChapter openModal={chapter} closeModal={openModalChapter} />
        </>
    )
}
export default BookSummaryChapter;