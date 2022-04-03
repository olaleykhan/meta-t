import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/images/search-icon.svg";

interface ComponentProps {
	placeholder: string;
}
const SearchInput: React.FC<ComponentProps> = ({ placeholder }) => {
	return (
		<Wrap>
			<input type='text' placeholder={placeholder} />
			<SearchIcon />
		</Wrap>
	);
};

export default SearchInput;

const Wrap = styled.div`
	display: flex;
	align-items: center;
	/* border: 1px solid ${(props) => props.theme.colors.lines}; */
	border-radius: 10px;
	width: 100%;
	height: 100%;
	padding: 15px;
	background-color: ${(props) => props.theme.colors.grey};
	> input {
		flex: 1;
		border: none;
		outline: none;

		color: ${(props) => props.theme.colors.primaryText};
		background-color: transparent;
		::placeholder {
			color: ${(props) => props.theme.colors.placeholderText};
		}
	}
	svg {
		path {
			width: 4rem;
		}
	}
`;
