import React, { FC } from "react";
import styled from "styled-components";
import Navbar from "../layout/navbar/Navbar";
import { links } from "../layout/sidebar/constants";
import { Routes, Route } from "react-router-dom";
import { pages } from "./constants";

import DummyPage from "../pages/dummy/DummyPage";
import Teams from "../pages/analytics/Teams";

const Router: FC = () => (
	<Wrap>
		<Navbar />
		<Routes>
			{pages.map(({ title, path, Component, nestedRoutes }) => (
				<Route key={title} path={path}>
					{nestedRoutes &&
						nestedRoutes.map(({ title, path, Component }) => (
							<Route key={title} path={path} element={<Component />} />
						))}
				</Route>
			))}
		</Routes>
	</Wrap>
);

export default Router;
const Wrap = styled.div`
	flex: 1;
	/* width: 26rem; */
	/* min-width: 200px; */
`;
