import React, {useState, useEffect} from "react";
import axios from "axios";
import Crypto from "./Componets/Crypto";
import Navbar from "./Componets/Navbar";
import {Route, Routes} from 'react-router-dom'
import Coin from "./routes/Coin";

function App() {

const [crypto, setCrypto] = useState([]);

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en'

useEffect(() => {
  axios.get(url).then((response) => {
    setCrypto(response.data)
    console.log(response.data[0]);
  }).catch((error) => {
    console.log(error)
  })
},[]);

  return (
    <>
    <Navbar />
     <Routes>
      <Route path="/" element={<Crypto crypto={crypto} />} />
      <Route path="/Coin" element={<Coin />}>
        <Route path=":coinId" element={<Coin />} />
      </Route>
     </Routes>
    </>
  );
}

export default App;
