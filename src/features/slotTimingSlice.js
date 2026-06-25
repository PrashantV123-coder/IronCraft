import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BASE_URL}/api/slot-time`;

export const fetchSlot = createAsyncThunk(
  "slot/fetchSlot",
  async () => {
    const { data } = await axios.get(API_URL);

    return data.slot;
  }
);

export const saveSlot = createAsyncThunk(
  "slot/saveSlot",
  async (slotData) => {
    const { data } = await axios.post(
      API_URL,
      slotData
    );

    return data.slot;
  }
);

export const deleteSlot = createAsyncThunk(
  "slot/deleteSlot",
  async () => {
    await axios.delete(API_URL);

    return true;
  }
);

const slotTimingSlice = createSlice({
  name: "slot",

  initialState: {
    slotVal: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchSlot.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchSlot.fulfilled, (state, action) => {
        state.loading = false;

        state.slotVal = action.payload
          ? [action.payload]
          : [];
      })

      .addCase(fetchSlot.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(saveSlot.fulfilled, (state, action) => {
        state.slotVal = [action.payload];
      })

      .addCase(deleteSlot.fulfilled, (state) => {
        state.slotVal = [];
      });
  },
});

export default slotTimingSlice.reducer;