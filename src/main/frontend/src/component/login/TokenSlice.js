import { createSlice } from "@reduxjs/toolkit";
export const TokenSlice = createSlice({
    name: 'token',
    initialState: {
        value: '',
    },
    reducers: {
        setToken: (state, action) => {
            state.value = action;
        },
    },
})

export const { setToken } = TokenSlice.actions;
export default TokenSlice.reducer;
