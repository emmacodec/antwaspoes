import React from 'react'
import CryptoItem from './CryptoItem';

import './Coin.css';

const Crypto = (props) => {
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24hrs</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Market cap</p>
            </div>

            {/*mapping through data from API*/}
            {props.crypto.map((crypto) => {
                return (
                    <CryptoItem crypto={crypto} key={crypto.id} />
                )
            })}
        </div>
      
    </div>
  )
}

export default Crypto;
