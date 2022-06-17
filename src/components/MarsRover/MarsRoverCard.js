import React from "react";
import styled from "styled-components";

const Card = styled.div`
  max-width: 90%;
  border: solid black 2px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
`;

const StyledImg = styled.img`
  width: 95%;
  height: 60vh;
  @media (max-width: 400px) {
    height: 35vh;
  }
`;

const MarsRoverCard = (props) => {
  return (
    <Card>
      <StyledImg src={props.image} alt={props.imgAlt}></StyledImg>
      <h1>Date on Earth: {props.date}</h1>
      <h1>Sol on mars: {props.sol}</h1>
      <h2>Captured on the {props.camera}</h2>
    </Card>
  );
};

export default MarsRoverCard;
