import { configureStore } from "@reduxjs/toolkit";
import hotelSlice from "./hotelSlice";

const store = configureStore({
    reducer: hotelSlice
})

export default store;