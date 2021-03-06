import React from 'react';
import { Link } from 'react-router';

const NeighborhoodResultItem = ({neighborhood}) => {
  const colString = {
    1: "$",
    2: "$$",
    3: "$$$",
    4: "$$$$"
  };

  let path = `neighborhood/${neighborhood.id}`;

  return (
    <Link to={path}>
      <h4>{neighborhood.name}</h4>
      <h5>Walk Score: {neighborhood.walk_score}</h5>
      <h5>Transit Score: {neighborhood.transit_score}</h5>
      <h5>Cost of Living: {colString[neighborhood.cost_of_living]}</h5>
    </Link>
  );
};

export default NeighborhoodResultItem;
