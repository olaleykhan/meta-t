import React from "react";
import styled from "styled-components";
import Avatar from "../../components/navbar/Avatar";
import Notification from "../../components/navbar/Notification";
import SearchInput from "../../components/search-input/SearchInput";

const Navbar = () => {
	return (
		<Wrap>
			<div className='search-input-wrapper'>
				<SearchInput placeholder='Ask us any question' />
			</div>
			<InfoContainer>
				<Notification count={3} />
				<Avatar />
			</InfoContainer>
		</Wrap>
	);
};

export default Navbar;

const Wrap = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px;
	border-bottom: 1px solid ${(props) => props.theme.colors.lines};
	> .search-input-wrapper {
		width: 41rem;
		height: 50px;
		margin-left: 3.5rem;
	}
`;

const InfoContainer = styled.div`
	display: flex;
	/* padding: 1rem 0; */
	align-items: center;
	margin-right: 4rem;
	border: 1px solid ${(props) => props.theme.colors.lines};
	border-radius: 10px;
`;
