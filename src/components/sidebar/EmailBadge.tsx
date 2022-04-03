import React from "react";
import styled from "styled-components";

interface ComponentProps {
	email: string;
}
const EmailBadge: React.FC<ComponentProps> = ({ email }) => {
	return (
		<Wrap>
			<h3>Metacare</h3>
			<p>{email}</p>
		</Wrap>
	);
};

const Wrap = styled.div`
	/* width: 80%; */
	margin: auto;
	margin-bottom: 0;
	margin-top: 0px;
	height: 60px;
	border: 1px solid ${(props) => props.theme.colors.lines};
	padding: 1rem 4rem;
	border-radius: 5px;
	/* background-color: red; */

	h3 {
		font-size: 1.4rem;
		font-weight: 600;
		line-height: 22px;
	}
	p {
		font-size: 1.2rem;
		font-weight: 500;
	}
`;

export default EmailBadge;
