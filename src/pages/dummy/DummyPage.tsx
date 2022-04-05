import React from "react";
// import { Outlet } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";

const DummyPage: React.FC<{ name?: string }> = ({ name }) => {
	// const param = useParams();
	const location = useLocation();
	return (
		<div>
			{/* DummyPage */}
			{/* <h1> DUmmy page here oo</h1> */}
			<h1>{name} : hj</h1>
			{location.pathname}
		</div>
	);
};

export default DummyPage;
