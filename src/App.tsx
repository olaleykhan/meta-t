import React from "react";
import styled from "styled-components";
import Sidebar from "./layout/sidebar/Sidebar";
import AppRoutes from "./routes/Router";
import { BrowserRouter } from "react-router-dom";

const App = (): JSX.Element => (
	<BrowserRouter>
		<MainWrap>
			<Sidebar />
			<AppRoutes />
		</MainWrap>
	</BrowserRouter>
);

export default App;

const MainWrap = styled.div`
	display: flex;
	flex-direction: row;
	/* background-color:  red; */
	height: 100vh;
	width: 100vw;
	justify-content: space-around; ;
`;
