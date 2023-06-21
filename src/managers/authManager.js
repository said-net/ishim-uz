import { createSlice } from "@reduxjs/toolkit";

const authManager = createSlice({
    initialState: {
        auth: false,
        user: {}
    },
    name: 'auth',
    reducers: {
        setRefreshAuth: state=>{
            state.auth = !state.auth
        },
        setUser: (state, {payload})=>{
            state.user = payload;
        }
    }
});
export const { setRefreshAuth, setUser } = authManager.actions;
export default authManager.reducer;