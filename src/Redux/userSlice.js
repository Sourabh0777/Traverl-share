import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  responseData: [],
  error: null,
};

export const fetchData = createAsyncThunk("user/fetchData", async () => {
  try {
    const request = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const response = await request.json();
    return response;
  } catch (error) {
    throw new Error("While Fetching data Error occured");
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = "succedded";
      state.responseData = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function

export default userSlice.reducer;
