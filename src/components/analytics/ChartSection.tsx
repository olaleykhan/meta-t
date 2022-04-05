import React from "react";
import styled from "styled-components";
import Chart from "./Chart";
import TimeCard from "./TimeCard";
const myData = [
	{
		id: "teams",
		color: "red",
		data: [
			{
				x: "jan",
				y: 13,
			},
			{
				x: "feb",
				y: 30,
			},
			{
				x: "mar",
				y: 30,
			},
			{
				x: "apr",
				y: 48,
			},
			{
				x: "may",
				y: 18,
			},
			{
				x: "jun",
				y: 30,
			},
			{
				x: "jul",
				y: 42,
			},
			{
				x: "aug",
				y: 31,
			},
		],
	},
];

const ChartSection: React.FC<{ chartLineColor: string }> = ({
	chartLineColor,
}) => {
	return (
		<Wrap>
			<div className='chart'>
				<ChartInfo>
					<div className='left'>
						<p className='label'>
							Average Respose Time <span className='badge'> +4.14%</span>
						</p>
					</div>
					<div className='right'>
						<p>
							<CheckedBox bg={chartLineColor} /> High Priority
						</p>
						<Line />
						<input type='month' />
					</div>
				</ChartInfo>
				<Chart data={myData} lineColor={chartLineColor} />
			</div>
			<div className='time-info'>
				<TimeCard label='Average Response Time' time={90} />
				<TimeCard label='Response Time' time={30} />
			</div>
		</Wrap>
	);
};

export default ChartSection;

const Wrap = styled.div`
	display: flex;
	height: 30rem;
	border: 1px solid ${(props) => props.theme.colors.lines};
	border-radius: 10px;
	.chart {
		flex: 1;
	}

	.time-info {
		width: 23rem;
		min-width: 200px;
		padding: 3rem 2.5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-left: 1px solid ${(props) => props.theme.colors.lines};
	}
`;
const ChartInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	height: 5rem;
	padding: 0 3rem;
	margin-top: 5px;
	.label {
		color: ${(props) => props.theme.colors.dark};
		font-weight: 700;
		font-size: 1.4rem;
		letter-spacing: -0.1rem;
		> .badge {
			color: ${(props) => props.theme.colors.green};
			background-color: ${(props) => props.theme.colors.lightGreen};
			padding: 0.6rem 1rem;
			font-size: 1.2rem;
			margin-left: 1rem;
			border-radius: 4px;
		}
	}

	.right {
		display: flex;
		align-items: center;
		p {
			color: ${(props) => props.theme.colors.dark};
			font-size: 1rem;
			font-weight: 700;
			/* letter-spacing: 1px; */
			/* background: red; */
		}

		input {
			padding: 0.8rem 1rem;
			border-radius: 10px;
			border: 1px solid ${(props) => props.theme.colors.lines};
			outline: none;
			width: 10rem;
		}
	}
`;
const Line = styled.div`
	width: 2px;
	height: 25px;
	margin: 0 1.5rem;
	background-color: ${(props) => props.theme.colors.lines};
`;

const CheckedBox = styled.span<{ bg: string }>`
	display: inline-block;
	width: 10px;
	height: 10px;
	background-color: ${(props) => props.bg};
`;
