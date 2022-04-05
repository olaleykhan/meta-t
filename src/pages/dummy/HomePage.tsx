import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomePage = () => {
	return (
		<Wrap>
			<h2>
				{" "}
				click to view <Link to='/analytics/teams'>Team Analytics</Link>{" "}
			</h2>
		</Wrap>
	);
};

export default HomePage;
const Wrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 71px);
`;
