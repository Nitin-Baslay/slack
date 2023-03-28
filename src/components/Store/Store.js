import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";
import Idslice from "./Idslice";

const Store = configureStore({
  reducer: { slice: Slice, id: Idslice },
});
export default Store;
