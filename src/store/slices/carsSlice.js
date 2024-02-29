//* nanoid = redux toolkit'de random id olusturmak icin kullanılır
import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      //* baslangıcta bos olan cars array'imi dolduruyorum
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
  },
  removeCar(state, action) {
    //*remove işlemi
    const updated = state.cars.filter((item) => {
      return item.id !== action.payload;
    });
    state.cars = updated;
  },
});
