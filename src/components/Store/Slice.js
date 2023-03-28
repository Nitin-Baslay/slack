import { createSlice } from "@reduxjs/toolkit";
let initialState = { finalData: [] };
const Slice = createSlice({
  name: "Master",
  initialState,
  reducers: {
    roomData(state, action) {
      state.finalData.push(action.payload);
    },
    deleteData(state, action) {
      let clear = state.finalData.filter((ele) => {
        return ele.id != action.payload;
      });
      state.finalData = clear;
    },
    updateData(state, action) {
      state.finalData.map((ele) => {
        if (ele.id == action.payload.editId) {
          ele.name = action.payload.name;
        }
      });
    },
  },
});
export const sliceAction = Slice.actions;
export default Slice.reducer;
