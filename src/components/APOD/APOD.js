import React, { useState, useEffect } from "react";
import axios from "axios";
import APODCard from "./APODCard";

const AOPD = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${props.date}`
      )
      .then((res) => {
        const result = res.data;
        setData(result);
      })
      .catch((err) => {
        console.error(err);
        setData({});
      });
  }, [props.date]);

  return (
    <div>
      <APODCard data={data}></APODCard>
    </div>
  );
};

export default AOPD;
