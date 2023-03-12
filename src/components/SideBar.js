import { NavLink } from "react-router-dom";
import classes from "./sideBar.module.css";

// sidebar for different content
const SideBar = () => {
	return (
		<header className={classes.navigation}>
			<ul className={classes.menu}>
				<li>
					<NavLink end to="/" />
					<button>Home</button>
				</li>
				<li>
					<NavLink end to="shorts" />
					<button>Shorts</button>
				</li>
				<li>
					<NavLink end to="subscription" />
					<button>Subscription</button>
				</li>
				<li>
					<NavLink end to="library" />
					<button>Library</button>
				</li>
				<li>
					<NavLink end to="history" />
					<button>History</button>
				</li>
			</ul>
		</header>
	);
};

export default SideBar;
