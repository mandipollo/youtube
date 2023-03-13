import { createSlice } from "@reduxjs/toolkit";

const showSideBarSlice = createSlice({
	name: `sideBar`,
	initialState: false,
	reducers: {
		toggleSideBar: state => {
			return !state;
		},
	},
});

export const { toggleSideBar } = showSideBarSlice.actions;

export default showSideBarSlice.reducer;
