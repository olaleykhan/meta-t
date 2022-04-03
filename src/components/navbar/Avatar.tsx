import React from "react";
import styled from "styled-components";
import { ReactComponent as DropdownIcon } from "../../assets/images/dark-dropdown.svg";

// interface ComponentProps {
// 	email: string;
// }
const Avatar: React.FC = () => {
	return (
		<Wrap>
			<AvatarBorder />
			<DropdownIcon />
		</Wrap>
	);
};

export default Avatar;
const Wrap = styled.div`
	display: flex;
	align-items: center;
	padding: 0 2rem;
`;

const AvatarBorder = styled.div`
	width: 3rem;
	height: 3rem;
	border: 1px solid ${(props) => props.theme.colors.blueText};
	border-radius: 50%;
	margin-right: 10px;
`;
