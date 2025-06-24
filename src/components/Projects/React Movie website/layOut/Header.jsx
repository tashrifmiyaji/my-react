import { NavLink } from "react-router-dom";

export const Header = () => {
	return (
		<>
			<header className="section-navbar">
				<div className="container">
					<div className="navbar-brand">
						<a to="index">
							<p>@Tashrif-miyaji</p>
						</a>
					</div>

					<nav className="navbar">
						<ul>
							<li className="">
								<NavLink to="/" className={""}>
									Home
								</NavLink>
							</li>
							<li className="">
								<NavLink to="/about" className="black">
									about
								</NavLink>
							</li>
							<li className="">
								<NavLink to="movie" className="">
									movies
								</NavLink>
							</li>
							<li className="">
								<NavLink to="contact" className="">
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
