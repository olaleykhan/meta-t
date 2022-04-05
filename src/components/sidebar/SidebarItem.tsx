import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as Right } from "../../assets/images/arrow-right.svg";
import { ReactComponent as Down } from "../../assets/images/arrow-down.svg";
import { slugMatchUrl } from "./../../utils/routerUtils";

type SubTitle = { url: string; title: string };

interface ComponentProps {
	title?: string;
	Icon?: any;
	// Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined; }>
	subTitles?: SubTitle[];
	slug: string;
}

const SidebarItem: React.FC<ComponentProps> = ({
	title,
	Icon,
	subTitles,
	slug,
}) => {
	const { pathname } = useLocation();
	const [isNavOpen, setIsNavOpen] = React.useState<boolean>(
		slugMatchUrl(pathname, slug)
	);
	const handleToggleNav = () => setIsNavOpen(!isNavOpen);
	return (
		<Wrap>
			<div className='item' onClick={handleToggleNav}>
				<NavLink
					to={slug ? `${slug}` : "/"}
					className={({ isActive }) => (isActive ? "active" : "") + " label"}>
					<Icon />
					<p> {title} </p>
				</NavLink>
				{isNavOpen ? <Down /> : <Right />}
			</div>
			{subTitles &&
				isNavOpen &&
				subTitles.map(({ url, title }) => (
					<Link
						className={({ isActive }) => (isActive ? "active" : "")}
						to={url}
						key={title}>
						{title}
					</Link>
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
			cursor: pointer;
			text-decoration: none;
			color: ${(props) => props.theme.colors.primaryText};
			> svg {
				> path {
					fill: #696d8c;
				}
			}
			> p {
				margin-left: 15px;
				font-size: 1.3rem;
				font-weight: 600;
			}
			&.active {
				> svg {
					> path {
						fill: ${(props) => props.theme.colors.blueText};
					}
				}
				> p {
					color: ${(props) => props.theme.colors.blueText};
				}
			}
		}
	}
`;

const Link = styled(NavLink)`
	display: block;
	/* font-size: 1.4rem; */
	cursor: pointer;
	text-decoration: none;
	color: ${(props) => props.theme.colors.primaryText};
	padding: 2px 2px 5px 15px;
	margin: 6px 0 8px 15px;
	&.active {
		border-left: 1px solid ${(props) => props.theme.colors.lines};
		color: ${(props) => props.theme.colors.dark};
		font-weight: 600;
	}
`;
