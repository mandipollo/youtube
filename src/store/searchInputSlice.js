import { createSlice } from "@reduxjs/toolkit";

const searchInputSlice = createSlice({
	name: `searchInput`,
	initialState: `blackpink`,
	reducers: {
		setSearchInput: (state, action) => {
			return action.payload;
		},
	},
});

export const { setSearchInput } = searchInputSlice.actions;

export default searchInputSlice.reducer;
