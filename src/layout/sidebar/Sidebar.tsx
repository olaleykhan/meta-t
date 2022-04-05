import React from "react";
import EmailBadge from "../../components/sidebar/EmailBadge";
import styled from "styled-components";
import SidebarItem from "../../components/sidebar/SidebarItem";
import { links } from "./constants";

const Sidebar = () => (
	<Wrap>
		<EmailBadge email='adeyinka@metacare.app' />

		<LinksWrap>
			{links.map(({ title, Icon, subTitles, slug }) => (
				<SidebarItem
					key={title}
					title={title}
					Icon={Icon}
					subTitles={subTitles}
					slug={slug}
				/>
			))}
		</LinksWrap>
	</Wrap>
);

export default Sidebar;

const Wrap = styled.div`
	/* flex: 1; */
	width: 25rem;
	min-width: 100px;
	padding: 20px 2rem;
	font-size: 1.3rem;
	border-right: 1px solid ${(props) => props.theme.colors.lines};

	/* display: flex; */
	/* background-color: purple; */
`;
const LinksWrap = styled.div`
	padding-right: 2rem;
	margin-top: 20px;
`;
