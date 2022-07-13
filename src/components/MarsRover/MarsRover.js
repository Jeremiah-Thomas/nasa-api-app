import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import MarsRoverCard from "./MarsRoverCard";

const ImgList = styled.div`
  max-width: 90%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  gap: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  @media (max-width: 400px) {
    max-width: 100%;
  }
`;

const MarsRover = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${props.date}&api_key=${process.env.REACT_APP_NASA_API_KEY}`
      )
      .then((res) => {
        console.log(props.date);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.date]);
  if (!data) {
    return <p>Loading ...</p>;
  } else if (data.photos.length === 0) {
    return <p>Try a different date</p>;
  } else {
    return (
      <>
        {console.log(data)}
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
      </>
    );
  }
};

export default MarsRover;
