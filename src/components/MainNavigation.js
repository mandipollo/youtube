import classes from "./mainNavigation.module.css";

import SideBar from "./SideBar";
import Navbar from "./Navbar";

const MainNavigation = () => {
	return (
		<div className={classes.mainNavigation}>
			<div className={classes.header}>
				<Navbar />
			</div>
			<div className={classes.content}>
				<SideBar />
				<div></div>
			</div>
		</div>
	);
};

export default MainNavigation;
