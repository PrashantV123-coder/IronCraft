import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  slotVal: JSON.parse(localStorage.getItem("slotTime")) || [],
};

export const slotTimingSlice = createSlice({
  name: "slot",
  initialState,
  reducers: {
    setSlot: (state, action) => {
      state.slotVal[0] = (action.payload);

      localStorage.setItem("slotTime", JSON.stringify(state.slotVal));
    },
    getSlot: (state, action) => {
      state.slotVal = JSON.parse(localStorage.getItem("slotTime")) || [];
    },
    removeSlot: (state, action) => {
      state.slotVal = [];

      localStorage.setItem(
        "slotTime",
        JSON.stringify(state.slotVal)
      );
    }
  },
});

export const { setSlot, getSlot, removeSlot } = slotTimingSlice.actions;

export default slotTimingSlice.reducer;
