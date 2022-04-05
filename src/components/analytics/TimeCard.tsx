import React from "react";
import styled from "styled-components";
import { minuteFormarter } from "../../utils/timeUtils";

interface ComponentProps {
	label: string;
	time: number;
}
const TimeCard: React.FC<ComponentProps> = ({ label, time }) => {
	return (
		<Wrap>
			<p>{label}</p>
			<p className='value'>{minuteFormarter(time)}</p>
		</Wrap>
	);
};

export default TimeCard;

const Wrap = styled.div`
	display: flex;
	height: 11rem;
	border: 1px solid ${(props) => props.theme.colors.lines};
	background-color: ${(props) => props.theme.colors.grey};
	flex-direction: column;
	justify-content: space-evenly;
	padding: 1.6rem;
	border-radius: 10px;

	p {
		font-size: 1.1rem;
		font-weight: 500;
	}

	.value {
		color: ${(props) => props.theme.colors.dark};
		font-size: 1.4rem;
		font-weight: 600;
	}
`;
