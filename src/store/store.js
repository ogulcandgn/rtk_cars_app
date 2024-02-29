import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./slices/carsSlice";
import formSlice from "./slices/formSlice";

export const store = configureStore({
  reducer: {
    cars: carsSlice,
    form: formSlice,
  },
});
