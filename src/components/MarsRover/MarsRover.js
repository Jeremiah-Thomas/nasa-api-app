import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import MarsRoverCard from "./MarsRoverCard";

const ImgList = styled.div`
    border solid black 2px;
    max-width: 90%;
    max-height: 100vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    gap: 1rem;
`;

const MarsRover = (props) => {
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${props.date}&api_key=${process.env.REACT_APP_NASA_API_KEY}`
      )
      .then((res) => {
        console.log(props.date);
        setData(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoaded(false);
      });
  }, [props.date]);

  return (
    <>
      {!isLoaded && <p>Loading... be sure to enter date before today's date</p>}
      {isLoaded && (
        <ImgList>
          {data.photos.map((photo) => {
            return (
              <MarsRoverCard
                image={photo.img_src}
                camera={photo.camera.full_name}
                sol={photo.sol}
                imgAlt={photo.id}
                date={photo.earth_date}
                key={photo.id}
              />
            );
          })}
        </ImgList>
      )}
    </>
  );
};

export default MarsRover;
