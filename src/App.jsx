import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const APIKEY = import.meta.env.APIKEY;
function App() {
  const [list, setList] = useState(null);

  const [count, setCount] = useState(null);
  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/all/coinlist?&api_key" + APIKEY
      );
      const json = await response.json();
      setList(json);
      console.log("json", list);
    };
    fetchAllCoinData().catch(console.error);
  }, []);
  return (
    <div className="wholePage">
      <h1>My Crypto List</h1>
      <ul>
        {list &&
          Object.entries(list.Data).map(([coin]) =>
            list.Data[coin].PlatformType === "blockchain" ? (
              <li key={list.Data[coin].FullName}>
                {list.Data[coin].FullName}{" "}
              </li>
            ) : null
          )}
      </ul>
    </div>
  );
}

export default App;
