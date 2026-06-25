import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  admin: null,
  loading: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    updateUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },

    updateAdmin: (state, action) => {
      // console.log(action.payload);
      state.admin = action.payload;
    },

    getUserProfile: (state, action) => {
      state.user = action.payload;
    },

    getAdminProfile: (state, action) => {
      state.admin = action.payload;
    },

    clearUser: (state) => {
      state.user = null;
      state.loading = false;
    },

    clearAdmin: (state) => {
      state.admin = null;
    },
  },
});

export const {
  setLoading,
  updateUser,
  updateAdmin,
  getUserProfile,
  getAdminProfile,
  clearUser,
  clearAdmin,
} = profileSlice.actions;

export default profileSlice.reducer;