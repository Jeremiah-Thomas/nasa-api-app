import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  max-width: 75%;
  max-height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  border: solid black 2px;
  padding: 1rem;
  text-align: center;
  backdrop-filter: blur(1rem);
  border-radius: 0.5rem;
`;

const StyledImg = styled.img`
  max-width: inherit;
  max-height: inherit;
  margin-left: auto;
  margin-right: auto;
`;

const Copyright = styled.p`
  font-size: 0.5rem;
`;

const Explanation = styled.p`
  line-height: 2rem;
`;

const APODCard = (props) => {
  if (!props.data) {
    return <h1>Loading...</h1>;
  } else if (Object.keys(props.data).length === 0) {
    return <h2>Try a different date</h2>;
  } else {
    return (
      <StyledCard>
        <StyledImg
          src={props.data.hdurl}
          alt="space captured by NASA"
        ></StyledImg>
        <Copyright>Copyright: {props.data.copyright}</Copyright>
        <h3>Date: {props.data.date}</h3>
        <Explanation>{props.data.explanation}</Explanation>
      </StyledCard>
    );
  }
};

export default APODCard;
