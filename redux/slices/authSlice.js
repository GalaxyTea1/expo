import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authAction";

const jwtToken = localStorage.getItem("jwtToken")
    ? localStorage.getItem("jwtToken")
    : null;

const initialState = {
    loading: false,
    user: null,
    jwtToken,
    role: null,
    error: null,
    success: false,
};

// initialize userToken from local storage

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
        // login user
        [userLogin.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.user = payload.email;
            state.jwtToken = payload.jwtToken;
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
    },
});

export default authSlice.reducer;
