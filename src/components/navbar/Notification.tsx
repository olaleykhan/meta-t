import React from "react";
import styled from "styled-components";
import { ReactComponent as NotificationIcon } from "../../assets/images/bell-icon.svg";

interface ComponentProps {
	count: number;
}
const Notification: React.FC<ComponentProps> = ({ count }) => {
	return (
		<Wrap>
			<NotificationIcon />
			<Count>{count}</Count>
		</Wrap>
	);
};

export default Notification;
const Wrap = styled.div`
	display: flex;
	align-items: center;
	border-right: 1px solid ${(props) => props.theme.colors.lines};
	padding: 0 2rem;
`;

const Count = styled.div`
	background-color: ${(props) => props.theme.colors.danger};
	color: #fff;
	font-size: 1.2rem;
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 0.4rem;
	text-align: center;
	font-weight: 600;
	margin-left: 5px;
`;
