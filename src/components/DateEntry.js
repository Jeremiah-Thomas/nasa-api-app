import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledH1 = styled.h1`
  text-align: center;
`;

const DateEntry = (props) => {
  //   const [api, setApi] = useState("APOD");
  let inputDate;
  return (
    <>
      <StyledHeader>
        <select
          onChange={(evt) => {
            props.setApi(evt.target.value);
          }}
        >
          <option value="APOD">Astrology Picture of The Day</option>
          <option value="NeoWs">Near Earth Objects</option>
        </select>
        <input
          type="text"
          placeholder="YYYY-MM-DD"
          onChange={(evt) => {
            inputDate = evt.target.value;
          }}
        ></input>
        <button onClick={() => props.setDate(inputDate)}>
          Get Data For That Day
        </button>
        <button
          onClick={() => {
            const today = new Date();
            props.setDate(
              `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
                2,
                "0"
              )}-${String(today.getDate()).padStart(2, "0")}`
            );
          }}
        >
          Back To Today
        </button>
      </StyledHeader>
      <StyledH1>{props.api}</StyledH1>
    </>
  );
};

export default DateEntry;
