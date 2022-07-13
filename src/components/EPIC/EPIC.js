import React, { useState, useEffect } from "react";
import axios from "axios";
import EPICCard from "./EPICCard";

const EPIC = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/EPIC/api/natural/date/${props.date}?api_key=${process.env.REACT_APP_NASA_API_KEY}`
      )
      .then((res) => setData(res.data));
  }, [props.date]);
  return (
    <div>
      <EPICCard data={data} date={props.date} />
    </div>
  );
};

export default EPIC;
