import { createSlice } from "@reduxjs/toolkit";

export interface FrameState {
    value: boolean;
}

const initialState: FrameState = {
    value: false,
};

export const FrameSlice = createSlice({
    name: "Frame",
    initialState,
    reducers: {
        showFrame: (state) => {
            state.value = true;
        },
        hideFrame: (state) => {
            state.value = false;
        }
    }
});

export const { showFrame, hideFrame } = FrameSlice.actions;

export default FrameSlice.reducer;
