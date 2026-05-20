import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderData: JSON.parse(localStorage.getItem("orders")) || [],
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orderData.push(action.payload);

      localStorage.setItem("orders", JSON.stringify(state.orderData));
    },

    getOrders: (state) => {
      const data = JSON.parse(localStorage.getItem("orders")) || [];

      state.orderData = data;
    },

    updateStatus: (state, action) => {
      const { id, status } = action.payload;

      const order = state.orderData.find(
        (item) => item.id === id
      );

      if (order) {
        order.status = status;

        localStorage.setItem(
          "orders",
          JSON.stringify(state.orderData)
        );
      }
    },

    removeOrder: (state, action) => {
      state.orderData = state.orderData.filter((item) => item.id !== action.payload);

      localStorage.setItem("orders", JSON.stringify(state.orderData));
    }
  },
});

export const { setOrders, getOrders, updateStatus, removeOrder } = orderSlice.actions;

export default orderSlice.reducer;
