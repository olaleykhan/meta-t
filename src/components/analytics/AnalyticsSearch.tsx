import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/images/search-icon.svg";

interface ComponentProps {
	placeholder: string;
}

const AnalyticsSearch: React.FC<ComponentProps> = ({ placeholder }) => {
	return (
		<Wrap>
			<SearchIcon />
			<input type='text' placeholder={placeholder} />
		</Wrap>
	);
};

export default AnalyticsSearch;

const Wrap = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid ${(props) => props.theme.colors.lines};
	border-radius: 10px;
	width: 33rem;
	height: 4.4rem;
	padding: 15px;
	/* background-color: ${(props) => props.theme.colors.grey}; */
	> input {
		flex: 1;
		border: none;
		outline: none;
		margin-left: 1rem;
		color: ${(props) => props.theme.colors.primaryText};
		background-color: transparent;
		::placeholder {
			color: ${(props) => props.theme.colors.placeholderText};
		}
	}
	svg {
		height: 1.5rem;
		/* width: 10rem; */
		path {
		}
	}
`;
