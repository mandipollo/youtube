import { configureStore } from "@reduxjs/toolkit";
import searchInputReducer from "./searchInputSlice";
import sideBarReducer from "./showSideBarSlice";

const store = configureStore({
	reducer: {
		searchInput: searchInputReducer,
		sideBar: sideBarReducer,
	},
});

export default store;
