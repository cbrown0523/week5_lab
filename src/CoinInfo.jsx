import React, { useEffect, useState } from "react";
const APIKEY = import.meta.env.APIKEY;

function CoinInfo({ image, name, symbol }) {
  const [price, setPrice] = useState(null);
  useEffect(() => {
    const getCoinPrice = async () => {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=` +
          APIKEY
      );
      const json = await response.json();
      setPrice(json);
      console.log("json", price);
    };
    getCoinPrice().catch(console.error);
  }, [symbol]);
  return (
    <div>
      {price ? (
        <li className="main-list" key={symbol}>
          <img
            className="icons"
            src={`https://www.cryptocompare.com${image}`}
            alt={`Small icon for ${name} crypto coin`}
          />
          {name} <span className="tab"></span> ${price.USD} USD
        </li>
      ) : null}
    </div>
  );
}

export default CoinInfo;
