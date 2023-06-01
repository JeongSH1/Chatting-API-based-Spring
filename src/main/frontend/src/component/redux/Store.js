import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from "../login/TokenSlice";

export default configureStore({
    reducer: {
        token: tokenReducer,
    },
})