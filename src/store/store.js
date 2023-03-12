import { configureStore } from "@reduxjs/toolkit";
import searchInputReducer from "./searchInputSlice";

const store = configureStore({
	reducer: {
		searchInput: searchInputReducer,
	},
});

export default store;
