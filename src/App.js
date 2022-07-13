import React, { useState } from "react";
import NeoWs from "./components/NeoWs/NeoWs";
import APOD from "./components/APOD/APOD";
import DateEntry from "./components/DateEntry";
import MarsRover from "./components/MarsRover/MarsRover";
import "./App.css";
import EPIC from "./components/EPIC/EPIC";

function App() {
  const today = new Date();
  const [queryDate, setQueryDate] = useState(
    `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(today.getDate()).padStart(2, "0")}`
  );
  const [api, setApi] = useState("APOD");
  if (api === "APOD") {
    return (
      <div className="App">
        <div>
          <DateEntry
            setDate={setQueryDate}
            api={api}
            setApi={setApi}
            date={queryDate}
          />
          <APOD date={queryDate}></APOD>
        </div>
      </div>
    );
  } else if (api === "NeoWs") {
    return (
      <div className="App">
        <DateEntry
          setDate={setQueryDate}
          api={api}
          setApi={setApi}
          date={queryDate}
        />
        <NeoWs date={queryDate} />
      </div>
    );
  } else if (api === "Mars Rover Photos") {
    return (
      <div className="App">
        <DateEntry
          setDate={setQueryDate}
          api={api}
          setApi={setApi}
          date={queryDate}
        />
        <MarsRover date={queryDate} />
      </div>
    );
  } else if (api === "EPIC") {
    return (
      <div className="App">
        <DateEntry
          setDate={setQueryDate}
          api={api}
          setApi={setApi}
          date={queryDate}
        />
        <EPIC date={queryDate} />
      </div>
    );
  }
}

export default App;
