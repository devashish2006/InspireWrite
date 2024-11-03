import  { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
}

const loadingSlice = createSlice({
    name:"loading",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        unSetLoading: (state) => {
            state.loading = false;
        }
    }
});

export const { setLoading, unSetLoading } = loadingSlice.actions;
export default loadingSlice.reducer;