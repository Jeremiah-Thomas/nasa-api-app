import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import NeoCard from "./NeoCard";

const NeoCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NeoWs = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    axios(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${props.date}&end_date=${props.date}&api_key=${process.env.REACT_APP_NASA_API_KEY}`
    )
      .then((res) => {
        const result = res.data;
        setData(result);
        setIsLoaded(true);
      })
      .catch((err) => {
        setIsLoaded(false);
        console.log(err);
      });
  }, [props.date]);

  return (
    <>
      {!isLoaded && <p>Loading...</p>}
      {isLoaded && (
        <NeoCardList>
          {data.near_earth_objects[Object.keys(data.near_earth_objects)[0]].map(
            (obj) => {
              return (
                <NeoCard
                  date={obj.close_approach_data["0"].close_approach_date}
                  objectName={obj.name}
                  hazardous={obj.is_potentially_hazardous_asteroid}
                  miles={obj.close_approach_data["0"].miss_distance.miles}
                  kilometers={
                    obj.close_approach_data["0"].miss_distance.kilometers
                  }
                  velocityMiles={
                    obj.close_approach_data["0"].relative_velocity
                      .miles_per_hour
                  }
                  velocityKilometers={
                    obj.close_approach_data["0"].relative_velocity
                      .kilometers_per_hour
                  }
                  diameterKilometers={obj.estimated_diameter.kilometers}
                  diameterMiles={obj.estimated_diameter.miles}
                  key={obj.id}
                />
              );
            }
          )}
        </NeoCardList>
      )}
    </>
  );
};

export default NeoWs;
