import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BASE_URL}/api/book-slots`;

export const fetchBookSlots = createAsyncThunk(
  "bookSlots/fetchBookSlots",
  async () => {
    const { data } = await axios.get(API_URL);
    return data.bookSlots;
  }
);

export const addBookSlot = createAsyncThunk(
  "bookSlots/addBookSlot",
  async (slotData) => {
    const { data } = await axios.post(API_URL, slotData);
    return data.bookSlot;
  }
);

export const updateBookSlotStatus = createAsyncThunk(
  "bookSlots/updateBookSlotStatus",
  async ({ id, status }) => {
    const { data } = await axios.put(
      `${API_URL}/${id}`,
      { status }
    );

    return data.bookSlot;
  }
);

export const removeBookSlot = createAsyncThunk(
  "bookSlots/removeBookSlot",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

const bookSlotSlice = createSlice({
  name: "bookSlots",

  initialState: {
    bookSlotData: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchBookSlots.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchBookSlots.fulfilled, (state, action) => {
        state.loading = false;
        state.bookSlotData = action.payload;
      })

      .addCase(fetchBookSlots.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addBookSlot.fulfilled, (state, action) => {
        state.bookSlotData.push(action.payload);
      })

      .addCase(updateBookSlotStatus.fulfilled, (state, action) => {
        const index = state.bookSlotData.findIndex(
          (item) => item._id === action.payload._id
        );

        if (index !== -1) {
          state.bookSlotData[index] = action.payload;
        }
      })

      .addCase(removeBookSlot.fulfilled, (state, action) => {
        state.bookSlotData = state.bookSlotData.filter(
          (item) => item._id !== action.payload
        );
      });
  },
});

export default bookSlotSlice.reducer;