import { NavLink } from "react-router-dom";

import classes from "./navbar.module.css";

const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<ul className={classes.menu}>
				<li>
					<button style={{ backgroundColor: `transparent`, border: `none` }}>
						<span
							style={{ color: `white`, backgroundColor: `transparent` }}
							className="material-symbols-outlined"
						>
							menu
						</span>
					</button>
				</li>
				<li>
					<NavLink to="/" end />

					<p> YouTube</p>
				</li>
				<li>
					<input placeholder="Search"></input>
				</li>
				<li>
					<button>Light</button>
				</li>
				<li>
					<NavLink />
					<button>Sign in</button>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
