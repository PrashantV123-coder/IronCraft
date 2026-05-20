import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookSlotData: JSON.parse(localStorage.getItem("bookSlot")) || [],
};

export const bookSlotSlice = createSlice({
  name: "bookSlots",
  initialState,
  reducers: {
    setBookSlot: (state, action) => {
      state.bookSlotData.push(action.payload);

      localStorage.setItem("bookSlot", JSON.stringify(state.bookSlotData));
    },

    getBookSlot: (state) => {
      const data = JSON.parse(localStorage.getItem("bookSlot")) || [];

      state.bookSlotData = data;
    },

    updateBookSlotStatus: (state, action) => {
      const { id, status } = action.payload;

      const order = state.bookSlotData.find(
        (item) => item.id === id
      );

      if (order) {
        order.status = status;

        localStorage.setItem(
          "bookSlot",
          JSON.stringify(state.bookSlotData)
        );
      }
    },

    removeBookSlot: (state, action) => {
      state.bookSlotData = state.bookSlotData.filter((item) => item.id !== action.payload);

      localStorage.setItem("bookSlot", JSON.stringify(state.bookSlotData));
    }
  },
});

export const { setBookSlot, getBookSlot, updateBookSlotStatus, removeBookSlot } = bookSlotSlice.actions;

export default bookSlotSlice.reducer;
