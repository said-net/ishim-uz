import { createSlice } from "@reduxjs/toolkit";

const signinManager = createSlice({
    initialState: {
        open: false
    },
    name: 'signin',
    reducers: {
        setOpenSignin: (state, { payload }) => {
            console.log(payload);
            state.open = payload;
        }
    }
});
export const { setOpenSignin } = signinManager.actions;
export default signinManager.reducer;