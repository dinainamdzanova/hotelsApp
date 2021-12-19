import { createSlice } from "@reduxjs/toolkit";

const hotelSlice = createSlice({
    name: 'hotels',
    initialState: {
        hotels: []
    },
    reducers: {},
    extraReducers: {

    }
})

export const hotelActions = hotelSlice.actions;
export default hotelSlice.reducer;