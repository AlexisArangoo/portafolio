import { createSlice } from '@reduxjs/toolkit';

export const onDarkSlice = createSlice({
    name: 'onDark',
    initialState: false,
    reducers: {
        setOnDarkG: (state, action) => action.payload
    }
})

export const { setOnDarkG } = onDarkSlice.actions;

export default onDarkSlice.reducer;
