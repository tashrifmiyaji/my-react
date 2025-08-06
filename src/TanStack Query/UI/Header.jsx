// external imports
import { NavLink, useLocation } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	const handleHamMenuToggle = (e) => {
		if (e.target.tagName === "path" || "svg") {
			const newShowMenu = !showMenu;
			setShowMenu(newShowMenu);
		}
	};

	return (
		<header>
			<div className="container">
				<div className="grid navbar-grid">
					<div>
						<NavLink to={"/"}>
							<h1>tanStack/react-query</h1>
						</NavLink>
					</div>
					<nav className={showMenu ? "menu-mobile" : "menu-web"}>
						<ul>
							<li>
								<NavLink to={"/"}>Home</NavLink>
							</li>
							<li>
								<NavLink to={"/trad"}>FetchOld</NavLink>
							</li>
							<li>
								<NavLink to={"/rq"}>FetchRQ</NavLink>
							</li>
							<li>
								<NavLink to={"/infinityScrolling"}>
									Infinity Scrolling
								</NavLink>
							</li>
						</ul>
					</nav>
					<div className="ham-menu">
						<button onClick={(e) => handleHamMenuToggle(e)}>
							<GiHamburgerMenu />
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};
