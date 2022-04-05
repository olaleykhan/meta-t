import React from "react";
import styled from "styled-components";

interface ComponentProps {
	tabs: { index: number; title: string }[];
	onClick: (index: number) => void;
	activeTab: number;
	height?: number;
}
const TabSwitch: React.FC<ComponentProps> = ({
	tabs,
	onClick,
	activeTab,
	height,
}) => {
	return (
		<Wrap height={height ? height : 6}>
			{tabs.map(({ title, index }, i) => (
				<div
					className={`tab ${activeTab === index ? "active" : ""}`}
					onClick={() => onClick(index)}
					key={title + index}>
					{title}
				</div>
			))}
		</Wrap>
	);
};

export default TabSwitch;

const Wrap = styled.div<{ height: number }>`
	display: flex;
	height: 6rem;
	align-items: center;
	margin-left: 4rem;
	.tab {
		margin-right: 4rem;
		cursor: pointer;
		line-height: 100%;
		font-size: 1.2rem;
		font-weight: 500;
		padding: calc((6rem - 1.2rem) / 2) 0;
		/* line-height: 2rem; */
		&.active {
			/* background-color: ${(props) => props.theme.colors.lightGreen}; */
			border-bottom: 2px solid ${(props) => props.theme.colors.blueText};
			color: ${(props) => props.theme.colors.dark};
			font-weight: 600;
			padding: calc((6rem - 1.2rem) / 2) 0;
			/* height: 5.8rem; */
			/* line-height: 2rem; */
		}
	}
`;
