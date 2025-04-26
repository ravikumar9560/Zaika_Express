import React from "react";

export const RestaurantCard = (props) => {
  return (
    <div className="resCard">
      <img className="resImage" src={props.imageAddress} alt={props.name} />
      <h4>{props.name}</h4>
      <h6>Rating: {props.Rating}</h6>
      <div>Cuisines: {props.cuisines.join(", ")}</div>
      <h5>Location: {props.location}</h5>
    </div>
  );
};
