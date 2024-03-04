import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/slices/carsSlice";
const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(({ cars: { carList, searchTerm } }) => {
    return carList.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  //*remove car
  const handleCarDelete = (item) => {
    dispatch(removeCar(item.id));
  };

  //*listing cars
  const renderedCars = cars?.map((item) => {
    return (
      <div key={item.id} className="panel">
        <p>
          {item.name} - ${item.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(item)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars} <hr />
    </div>
  );
};

export default CarList;
