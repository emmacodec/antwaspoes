import React from 'react'

import './Coin.css';

const CryptoItem = (props) => {
  return (
    <div className='coin-row'>
        <p>{props.crypto.market_cap_rank}</p>
        <div className='img-symbol'>
            <img src={props.crypto.image} alt='' />
            <p>{props.crypto.symbol.toUpperCase()}</p>
        </div>
      <p>{props.crypto.current_price.toLocaleString()}</p>
      <p>{props.crypto.price_change_percentage_24h.toFixed(2)}%</p>
      <p className='hide-mobile'>${props.crypto.total_volume.toLocaleString()}</p>
      <p className='hide-mobile'>${props.crypto.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CryptoItem;
