import React, { useState } from "react";
import styled from "styled-components";
import TabSwitch from "../../components/shared/TabSwitch";
import { Outlet } from "react-router-dom";
import TeamOptions from "../../layout/analytics/team-options/TeamOptions";
import ChartSection from "../../components/analytics/ChartSection";

const tabs = [
	{ index: 0, title: "Efficiency" },
	{ index: 1, title: "Volume" },
	{ index: 2, title: "Costumer Satisfaction" },
	{ index: 3, title: "Backlog" },
];

const Teams = () => {
	const [activeTab, setActiveTab] = useState(0);
	const handleTabSwitch = (index: number) => {
		setActiveTab(index);
	};
	return (
		<Wrap>
			<TabsWrapper>
				<TabSwitch
					tabs={tabs}
					onClick={handleTabSwitch}
					activeTab={activeTab}
					height={6}
				/>
			</TabsWrapper>
			<TeamOptions />
			<ChartSectionWrapper>
				<ChartSection chartLineColor='#F05D23' />
				<ChartSection chartLineColor='#3E68FF' />
				<ChartSection chartLineColor='#FB6491' />
				<ChartSection chartLineColor='#07C9E2' />
			</ChartSectionWrapper>
			{/* <h1> Hello</h1> */}
			{/* <Outlet /> */}
		</Wrap>
	);
};

export default Teams;

const Wrap = styled.div`
	/* background-color: ${(props) => props.theme.colors.lightGreen}; */
	height: calc(100vh - 235px);

`;
const TabsWrapper = styled.div`
	width: 100%;
	height: 6rem;
	border-bottom: 1px solid ${(props) => props.theme.colors.lines};
`;

const ChartSectionWrapper = styled.div`
	height: 100%;
	padding: 0 5rem 0 3.5rem;
	overflow-y: auto;
	::-webkit-scrollbar {
		width: 0;
		background: transparent; /* Optional: just make scrollbar invisible */
	}
`;
