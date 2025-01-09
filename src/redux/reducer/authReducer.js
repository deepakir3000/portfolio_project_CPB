import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    auth: false,
    data: null,
    loading: false,
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.auth = true;
            state.data = action.payload;
        },
        logout(state) {
            state.auth = false;
            state.data = null;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});



//# ExportIng the original actions from adminSlice
//# ExportIng both reducer and actions
export const { login, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;