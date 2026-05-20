import {configureStore} from '@reduxjs/toolkit';
import profileReducer from '../features/profileSlice.js';
import imageReducer from '../features/designSlice.js';
import orderReducer from '../features/orderSlice.js';
import bookSliceReducer from "../features/bookSlotSlice.js";
import slotTimeReducer from "../features/slotTimingSlice.js";

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        design: imageReducer,
        orders: orderReducer,
        bookSlots: bookSliceReducer,
        slot: slotTimeReducer,
    }
});