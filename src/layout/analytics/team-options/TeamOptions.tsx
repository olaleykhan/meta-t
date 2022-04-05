import React from "react";
import styled from "styled-components";
import AnalyticsSearch from "../../../components/analytics/AnalyticsSearch";
import { GreenButton } from "../../../components/shared/Button";
import SelectInput from "../../../components/shared/SelectInput";

const selectOptions = [
	{ label: "All", value: "All" },
	{ label: "Team", value: "Team" },
	{ label: "User", value: "User" },
];

const TeamOptions = () => {
	return (
		<Wrap>
			<H2> Efficiency Analytics </H2>
			<Right>
				{/* <SearchInput placeholder='Search' /> */}
				<div className='search-input-wrapper'>
					<AnalyticsSearch placeholder='Search' />
				</div>
				<SelectInput options={selectOptions} />
				<Line />
				<GreenButton> Export </GreenButton>
			</Right>
		</Wrap>
	);
};

export default TeamOptions;

const Wrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 5rem 0 3.5rem;
	height: 10rem;
`;

const Right = styled.div`
	display: flex;
	align-items: center;
	.search-input-wrapper {
		margin-right: 2rem;
	}
`;
const Line = styled.div`
	width: 2px;
	height: 25px;
	margin: 0 1.5rem;
	background-color: ${(props) => props.theme.colors.lines};
`;

const H2 = styled.h2`
	font-size: 2rem;
	color: ${(props) => props.theme.colors.dark};
	font-weight: 600;
	letter-spacing: -1px;
`;
