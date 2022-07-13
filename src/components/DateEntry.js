import React, { useState } from "react";
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
  const [inputText, setInputText] = useState();

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <StyledHeader>
        <select
          onChange={(evt) => {
            props.setApi(evt.target.value);
          }}
          value={props.api}
        >
          <option value="APOD">Astrology Picture of The Day</option>
          <option value="NeoWs">Near Earth Objects</option>
          <option value="Mars Rover Photos">Mars Rover Photos</option>
          <option value="EPIC">Earth Polychromatic Imaging Camera</option>
        </select>
        <input
          type="date"
          placeholder="YYYY-MM-DD"
          onChange={onChange}
          value={inputText}
        ></input>
        <button
          onClick={() => {
            if (!inputText) {
              alert("Please enter a date first!");
            } else {
              props.setDate(inputText);
            }
          }}
        >
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
            setInputText(
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
