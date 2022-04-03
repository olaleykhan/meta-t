import React, { FC } from "react";
import styled from "styled-components";
import Navbar from "../layout/navbar/Navbar";
import { links } from "../layout/sidebar/constants";
import { Routes, Route } from "react-router-dom";
const Router: FC = () => (
	<Wrap>
		<Navbar />
		<Routes>
			{/* <Route path='invoices' element={}>
				<Route path=':invoiceId' element={} />
				<Route path='sent' element={} />
			</Route> */}
		</Routes>
	</Wrap>
);

export default Router;
const Wrap = styled.div`
	flex: 1;
	/* width: 26rem; */
	/* min-width: 200px; */
`;
