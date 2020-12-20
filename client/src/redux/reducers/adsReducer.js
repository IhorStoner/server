import { createReducer } from "@reduxjs/toolkit";
import { fetchAds } from '../actions/adsAction';


const initialState = {
  loading: false,
  data: [],
  error: null
};

const adsReducer = createReducer(initialState, {
  [fetchAds.pending]: (state) => {
    state.loading = true;
    state.error = null
  },
  [fetchAds.fulfilled]: (state, action) => {
    state.data = action.payload;
    state.loading = false;
  },
  [fetchAds.rejected]: (state, action) => {
    state.loading = false;
    state.error = action.payload.error;
  }
});


export default adsReducer;