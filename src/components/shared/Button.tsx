import React from "react";
import styled from "styled-components";

export const BaseButton = styled.button`
	cursor: pointer;
	border: 1px solid ${(props) => props.theme.colors.lines};
	background-color: transparent;
	outline: none;
	color: ${(props) => props.theme.colors.primaryText};
	padding: 1rem 2rem;
	border-radius: 5px;
`;

export const GreenButton = styled(BaseButton)`
	background-color: ${(props) => props.theme.colors.green};
	color: ${(props) => props.theme.colors.white};
	height: 4.5rem;
	width: 10.5rem;
`;
