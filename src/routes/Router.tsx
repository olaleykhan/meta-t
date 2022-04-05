import React, { FC } from "react";
import styled from "styled-components";
import Navbar from "../layout/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { pages } from "./constants";
import HomePage from "../pages/dummy/HomePage";

const Router: FC = () => (
	<Wrap>
		<Navbar />
		<Routes>
			<Route path='/' element={<HomePage />} />

			{pages.map(({ title, path, Component, nestedRoutes }) => (
				<Route
					key={title}
					path={path}
					element={nestedRoutes ? undefined : <Component />}>
					<Route index element={<Component />} />
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
