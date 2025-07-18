import { NavLink } from "react-router-dom";

export const Header = () => {
	const getNavLinkStyle = ({ isActive }) => {
		return {
			color: isActive ? "green" : "black",
		};
	};

	return (
		<>
			<header className="section-navbar">
				<div className="container">
					<div className="navbar-brand">
						<NavLink to="index">
							<p>Tashrif-Miyaji</p>
						</NavLink>
					</div>

					<nav className="navbar">
						<ul>
							<li className="nav-item">
								<NavLink
									to="/"
									className={({ isActive }) =>
										isActive
											? "!text-teal-600"
											: "!text-black"
									}
								>
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/about"
									style={({ isActive }) => {
										return {
											color: isActive ? "red" : "black",
										};
									}}
								>
									about
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="movie"
									className="nav-link"
									style={getNavLinkStyle}
								>
									movies
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="contact" style={getNavLinkStyle}>
									contact
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
};
