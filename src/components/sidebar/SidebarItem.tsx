import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Right } from "../../assets/images/arrow-right.svg";
import { ReactComponent as Down } from "../../assets/images/arrow-down.svg";

type SubTitle = { url: string; title: string };

interface ComponentProps {
	title?: string;
	Icon?: any;
	// Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined; }>
	subTitles?: SubTitle[];
}
const SidebarItem: React.FC<ComponentProps> = ({ title, Icon, subTitles }) => {
	const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false);
	const handleToggleNav = () => setIsNavOpen(!isNavOpen);
	return (
		<Wrap>
			<div className='item' onClick={handleToggleNav}>
				<div className='label'>
					<Icon />
					<p> {title} </p>
				</div>
				{isNavOpen ? <Down /> : <Right />}
			</div>
			{subTitles &&
				isNavOpen &&
				subTitles.map(({ url, title }) => (
					<NavLink to={url} key={title}>
						{title}
					</NavLink>
				))}
		</Wrap>
	);
};

export default SidebarItem;

const Wrap = styled.div`
	margin: 20px 0;

	> .item {
		display: flex;
		justify-content: space-between;

		padding: 5px 0;
		align-items: center;
		cursor: pointer;
		> .label {
			display: flex;
			> svg {
				> path {
					fill: #696d8c;
				}
			}
			> p {
				margin-left: 15px;
				font-size: 1.4rem;
				font-weight: 500;
			}
		}

		&.active {
			> .label {
				> svg {
					> path {
						fill: red;
					}
				}
			}
		}
	}
`;

const NavLink = styled(Link)`
	display: block;
	/* font-size: 1.4rem; */
	cursor: default;
	text-decoration: none;
	color: ${(props) => props.theme.colors.primaryText};
	padding: 10px 5px 5px 30px;
	border-left: 2px solid ${(props) => props.theme.colors.lines};
`;
