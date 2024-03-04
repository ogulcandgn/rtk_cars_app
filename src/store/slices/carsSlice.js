//* nanoid = redux toolkit'de random id olusturmak icin kullanılır
import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    carList: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      //* baslangıcta bos olan carList array'imi dolduruyorum
      state.carList.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      //*remove işlemi
      const updated = state.carList?.filter((item) => {
        return item.id !== action.payload;
      });
      state.carList = updated;
    },
  },
});

export default carsSlice.reducer;
export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
