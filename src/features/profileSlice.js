import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: {},
    admin: {},
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        getUserProfile: (state) => {
            
            const data = JSON.parse(localStorage.getItem("user"));

            state.user = data;
        },

        getAdminProfile: (state) => {
            
            const data = JSON.parse(localStorage.getItem("admin"));

            state.admin = data;
        },
    }
});

export const {getUserProfile, getAdminProfile} = profileSlice.actions;

export default profileSlice.reducer;