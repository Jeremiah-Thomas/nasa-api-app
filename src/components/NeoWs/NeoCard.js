import React from "react";
import styled from "styled-components";

const StyledNeoCard = styled.div`
  border: solid black 2px;
  margin-left: 1rem;
  margin-right: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const NeoCard = (props) => {
  return (
    <StyledNeoCard>
      <h1>Name: {props.objectName}</h1>
      <h2>Date: {props.date}</h2>
      <p>Potenitially Hazardous: {props.hazardous ? "Yes" : "No"}</p>
      <p>
        Velocity: {props.velocityMiles} mph or {props.velocityKilometers} km/h.
      </p>
      <p>
        Minimum Estimated Diameter: {props.diameterMiles.estimated_diameter_min}{" "}
        miles or {props.diameterKilometers.estimated_diameter_min} kilometers.
      </p>
      <p>
        Maximum Estimated Diameter: {props.diameterMiles.estimated_diameter_max}{" "}
        miles or {props.diameterKilometers.estimated_diameter_max} kilometers.
      </p>
      <p>
        Missed Earth By {props.miles} miles or {props.kilometers} kilometers.
      </p>
    </StyledNeoCard>
  );
};

export default NeoCard;
