import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSuggestions = createAsyncThunk("hotels/getSuggestions", async function(query) {
    var options = {
        method: 'GET',
        url: 'https://hotels-com-provider.p.rapidapi.com/v1/destinations/search',
        params: {query: query, currency: 'USD', locale: 'en_US'},
        headers: {
          'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
          'x-rapidapi-key': '1dc03287fdmsh284954269a9498ep1d483bjsn608326ad6399'
        }
      };
    const res = await axios.request(options)
    return res.data;
});

export const getHotels = createAsyncThunk("hotels/getHotels", async function(id) {
    var options = {
        method: 'GET',
        url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/search',
        params: {
          checkin_date: '2022-03-26',
          checkout_date: '2022-03-27',
          sort_order: 'STAR_RATING_HIGHEST_FIRST',
          destination_id: id,
          adults_number: '1',
          locale: 'en_US',
          currency: 'USD',
          children_ages: '4,0,15',
          price_min: '10',
          star_rating_ids: '3,4,5',
          accommodation_ids: '20,8,15,5,1',
          price_max: '500',
          page_number: '1',
          theme_ids: '14,27,25',
          amenity_ids: '527,2063',
          guest_rating_min: '4'
        },
        headers: {
          'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
          'x-rapidapi-key': '1dc03287fdmsh284954269a9498ep1d483bjsn608326ad6399'
        }
      };
    const res = await axios.request(options)
    return res.data;
});

const hotelSlice = createSlice({
    name: 'hotels',
    initialState: {
        hotels: [],
        suggestions: [],
        status: ''
    },
    reducers: {},
    extraReducers: {
        [getSuggestions.fulfilled]: (state, action) => {
            state.suggestions = action.payload
            state.status = 'fulfilled' 
        },
        [getHotels.fulfilled]: (state, action) => {
            state.hotels = action.payload
            state.status = 'fulfilled' 
        }
    }
})

export const hotelActions = hotelSlice.actions;
export default hotelSlice.reducer;