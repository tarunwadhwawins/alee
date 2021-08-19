import React, { useState, useEffect } from "react";
import { Grid, Header } from "semantic-ui-react";
import { Link } from "../../shared/functional/global-import";
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../../src/store/actions/api.actions";


function TotalBoxes() {
	const [tileList, setTileList] = useState([])

	const dispatch = useDispatch();

	//  call the api //
	useEffect(() => {
		getAdminDashboard();
	}, []);
	const getAdminDashboard = () => {
		dispatch(apiCall({
			urls: ["GETADMINDASHBOARD"], method: "GET", data: tileList, onSuccess: (response) => {
				setTileList(response)
			}
		}));
	}
	return (
		<Grid columns="equal" className="totalBoxes">
			<Grid.Column width="16">
				<Header as="h3" className="commonHeading">Dashboard</Header>
			</Grid.Column>
			{tileList.map((tile, index) => {
				return (
					<Grid.Column>
						<div className="totalBoxesInnerr">
							<p>{tile.type}</p>
							<Header as="h5">{tile.value}</Header>
						</div>
					</Grid.Column>
				)
			})}
			
		</Grid>
	);
}

export default TotalBoxes;