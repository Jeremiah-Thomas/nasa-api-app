import React, { useState } from "react";
import NeoWs from "./components/NeoWs/NeoWs";
import APOD from "./components/APOD/APOD";
import DateEntry from "./components/DateEntry";
import "./App.css";

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
      <div>
        <DateEntry setDate={setQueryDate} api={api} setApi={setApi}></DateEntry>
        <APOD date={queryDate}></APOD>
      </div>
    );
  } else if (api === "NeoWs") {
    return (
      <div className="App">
        <DateEntry setDate={setQueryDate} api={api} setApi={setApi}></DateEntry>
        <NeoWs date={queryDate} />
      </div>
    );
  }
}

export default App;
