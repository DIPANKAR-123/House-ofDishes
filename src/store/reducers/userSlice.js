import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Set user
    setUser: (state, action) => {
      // Set user session token from payload
      state.userData = action.payload;

    },

    // Logout user
    logoutUser: (state) => {
      state.userData = {};
    },
    // Add other reducers here
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
