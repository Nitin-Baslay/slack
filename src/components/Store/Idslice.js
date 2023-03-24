import { createSlice } from "@reduxjs/toolkit";
let initialState = { id: "" };

const Idslice = createSlice({
  name: "id",
  initialState,
  reducers: {
    idHandler(state, action) {
      state.id = action.payload;
    },
  },
});
export const IdsliceAction = Idslice.actions;
export default Idslice.reducer;
