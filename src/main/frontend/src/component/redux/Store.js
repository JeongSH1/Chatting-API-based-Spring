import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
    target: 0,
}

const target = createSlice({
    name: 'target',
    initialState,
    reducers: {
        changeTarget(state, target) {
            state.target = target.payload
        },
    },
})

export const { changeTarget } = target.actions;

const Store = configureStore({
    reducer: {
        target: target.reducer,
    },
})
export default Store