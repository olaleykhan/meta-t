import React from "react";
import styled from "styled-components";

interface ComponentProps {
	options: { value: string | number; label: string | number }[];
}
const SelectInput: React.FC<ComponentProps> = ({ options }) => {
	return (
		<Select>
			<option> Filter Options</option>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</Select>
	);
};

export default SelectInput;

const Select = styled.select`
	border: 1px solid ${(props) => props.theme.colors.lines};
	outline: none;
	width: 15rem;
	height: 4.4rem;
	border-radius: 10px;
	font-weight: 600;
	padding: 1rem;
	> option {
	}
`;
