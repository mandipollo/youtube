import classes from "./mainNavigation.module.css";

import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const MainNavigation = () => {
	// sideBar state
	const toggle = useSelector(state => state.sideBar);

	// path
	const { pathname } = useLocation();
	const isHomePage = pathname === "/";

	// check if its home auto render sidebar and toggle functionality on other pages
	const isVisible = isHomePage || !toggle;

	return (
		<div className={classes.mainNavigation}>
			<div className={classes.header}>
				<Navbar />
			</div>
			<div className={classes.content}>{isVisible && <SideBar />}</div>
		</div>
	);
};

export default MainNavigation;
