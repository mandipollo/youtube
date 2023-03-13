// react router dom
import { NavLink } from "react-router-dom";

// import
import classes from "./navbar.module.css";
// api fetch
import fetchData from "../utilities/fetchData";
// redux state
import { useDispatch, useSelector } from "react-redux";
import { setSearchInput } from "../store/searchInputSlice";

// react
import { useState } from "react";

// navbar with search input that will pass the value to the api
const Navbar = () => {
	// temporary searchInput holder
	const [localInputStorage, setLocalInputStorage] = useState(``);

	// redux searchInput value from search slice
	const searchInput = useSelector(state => state.searchInput);
	const dispatch = useDispatch();

	// dispatch searchinput value to the slice
	const searchHandler = e => {
		setLocalInputStorage(e.target.value);
	};

	// submit the value and refresh the value of input field
	const submitHandler = async e => {
		e.preventDefault();

		await fetchData({ searchInput: localInputStorage });
		dispatch(setSearchInput(localInputStorage));
		setLocalInputStorage(``);
	};

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
					<NavLink to="/" end>
						<button
							className={classes.homeYoutube}
							style={{
								border: `none`,
								backgroundColor: `#1b2430`,
								color: `white`,
							}}
						>
							YOUTUBE
						</button>
					</NavLink>
				</li>

				<li>
					<form className={classes.menuForm} onSubmit={submitHandler}>
						<input
							onChange={searchHandler}
							name="searchInput"
							value={localInputStorage}
							placeholder="Search"
						></input>
						<button type="submit" className={classes.searchBtn}>
							<span className="material-symbols-outlined">search</span>
						</button>
					</form>
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
