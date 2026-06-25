import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BASE_URL}/api/designs`;

export const fetchDesigns = createAsyncThunk(
  "design/fetchDesigns",
  async () => {
    const { data } = await axios.get(API_URL);
    return data.designs;
  },
);

export const addProduct = createAsyncThunk(
  "design/addProduct",
  async (product) => {
    const { data } = await axios.post(API_URL, product);
    return data.design;
  },
);

export const editProduct = createAsyncThunk(
  "design/editProduct",
  async ({ id, updatedData }) => {
    const { data } = await axios.put(`${API_URL}/${id}`, updatedData);
    return data.design;
  },
);

export const removeProduct = createAsyncThunk(
  "design/removeProduct",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  },
);

const designSlice = createSlice({
  name: "design",
  initialState: {
    designs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchDesigns.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchDesigns.fulfilled, (state, action) => {
        state.loading = false;
        state.designs = action.payload;
      })

      .addCase(fetchDesigns.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addProduct.fulfilled, (state, action) => {
        state.designs.push(action.payload);
      })

      .addCase(editProduct.fulfilled, (state, action) => {
        const index = state.designs.findIndex(
          (item) => item._id === action.payload._id,
        );

        if (index !== -1) {
          state.designs[index] = action.payload;
        }
      })

      .addCase(removeProduct.fulfilled, (state, action) => {
        state.designs = state.designs.filter(
          (item) => item._id !== action.payload,
        );
      });
  },
});

export default designSlice.reducer;
