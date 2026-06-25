import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BASE_URL}/api/orders`;

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const { data } = await axios.get(API_URL);
  return data.orders;
});

export const addOrder = createAsyncThunk(
  "orders/addOrder",
  async (orderData) => {
    const { data } = await axios.post(API_URL, orderData);
    return data.order;
  },
);

export const updateStatus = createAsyncThunk(
  "orders/updateStatus",
  async ({ id, status }) => {
    const { data } = await axios.put(`${API_URL}/${id}`, { status });

    return data.order;
  },
);

export const removeOrder = createAsyncThunk(
  "orders/removeOrder",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  },
);

const orderSlice = createSlice({
  name: "orders",

  initialState: {
    orderData: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orderData = action.payload;
      })

      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addOrder.fulfilled, (state, action) => {
        state.orderData.push(action.payload);
      })

      .addCase(updateStatus.fulfilled, (state, action) => {
        const index = state.orderData.findIndex(
          (item) => item._id === action.payload._id,
        );

        if (index !== -1) {
          state.orderData[index] = action.payload;
        }
      })

      .addCase(removeOrder.fulfilled, (state, action) => {
        state.orderData = state.orderData.filter(
          (item) => item._id !== action.payload,
        );
      });
  },
});

export default orderSlice.reducer;
