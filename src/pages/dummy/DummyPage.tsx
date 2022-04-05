import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const DummyPage: React.FC<{ name?: string }> = ({ name }) => {
	// const param = useParams();
	const location = useLocation();
	return (
		<Wrap>
			{/* DummyPage */}
			{/* <h1> DUmmy page here oo</h1> */}
			<h1>{location.pathname}</h1>
		</Wrap>
	);
};

export default DummyPage;

const Wrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 71px);
`;
