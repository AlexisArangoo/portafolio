import { configureStore } from "@reduxjs/toolkit";
import onDark from './slices/onDark.slice'

export default configureStore({
    reducer: {
        onDark
    }
})
