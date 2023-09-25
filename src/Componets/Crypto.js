import React from 'react'
import CryptoItem from './CryptoItem';
import {Link} from 'react-router-dom'

import './Coin.css';
import Coin from '../routes/Coin';

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
                    <Link to={`/Coin/${crypto.id}`} element={<Coin />} key={crypto.id}>
                        <CryptoItem crypto={crypto}  />
                    </Link>
                )
            })}
        </div>
      
    </div>
  )
}

export default Crypto;
