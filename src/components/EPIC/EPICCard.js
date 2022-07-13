import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 25%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  img {
    max-width: 80%;
  }
`;

const EPICCard = (props) => {
  if (!props.data) {
    return <p>Loading ...</p>;
  } else if (props.data.length === 0) {
    return <p>Try a different date after 2015-09-01 and before today</p>;
  } else {
    return (
      <div>
        {props.data.map((data) => {
          return (
            <Card>
              <img
                src={`https://epic.gsfc.nasa.gov/archive/natural/${props.date.slice(
                  0,
                  4
                )}/${props.date.slice(5, 7)}/${props.date.slice(8, 10)}/jpg/${
                  data.image
                }.jpg`}
              />
              <h1>Date: {data.date}</h1>
              <p>{data.caption}</p>
              <p>
                Latitude: {data.centroid_coordinates.lat} Longitude:{" "}
                {data.centroid_coordinates.lon}
              </p>
            </Card>
          );
        })}
      </div>
    );
  }
};

export default EPICCard;
