import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchAds = createAsyncThunk('ads/fetchAds', async () => {
  const data = axios.get('http://localhost:5000/api/ads').then(
    res => res.data)
  return data;
});