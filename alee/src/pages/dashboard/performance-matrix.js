import React, { useState, useEffect } from "react";
import { Grid, Header } from "semantic-ui-react";
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../../src/store/actions/api.actions";

function PerformanceMatrix() {
	const [performance, setPerformance] = useState([])

	const dispatch = useDispatch();

	//  call the api //
	useEffect(() => {
		getAdmindashboardPerformance();
	}, []);
	const getAdmindashboardPerformance = () => {
		dispatch(apiCall({
			urls: ["GETADMINDASHBOARDPERFORMANCE"], method: "GET", data: performance, onSuccess: (response) => {
				debugger
				setPerformance(response)
			}
		}));
	}

	return (
		<Grid className="performanceMatrix">
			<Grid.Row>
				<Grid.Column width="16">
					<Header as="h4">Performance Matrix</Header>
				</Grid.Column>
				<Grid.Column width="16">
					<div className="performanceMatrixInner">
						<Grid columns="5">
							{performance && performance.map((per, index) => {
								return (
									<Grid.Column>
										<div className="performanceMatrixInnerBox">
											<Header as="h5">{per.value}</Header>
											<p>{per.type}</p>
										</div>
									</Grid.Column>
								)
							})}
						</Grid>
					</div>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}

export default PerformanceMatrix;