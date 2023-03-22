import React, { useEffect, useState } from "react";
const APIKEY = import.meta.env.APIKEY;

function CoinInfo({ image, name, symbol }) {
  const [price, setPrice] = useState(null);
  useEffect(() => {
    const getCoinPrice = async () => {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/all/coinlist?&api_key" + APIKEY
      );
      const json = await response.json();
      setList(json);
      console.log("json", list);
      getCoinPrice().catch(console.error);
    };
  }, [symbol]);
  return (
    <div>{price ? <li className="mainList" key={symbol}><img src = {"https://www.cryptoCompare.com {image}" <img></img>} className = "icons"</li> : null}</div>
  );
}

export default CoinInfo;
