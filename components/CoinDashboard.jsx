import { useState, useEffect } from 'react';
import axios from 'axios';

import CoinHeader from './CoinHeader';
import CoinMetrics from './CoinMetrics';

const CoinDashboard = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        const endpoint = 'https://data.messari.io/api/v2/assets?limit=1';

        axios.get(endpoint)
        .then(res => {
            const cleanData = transformData(res.data.data[0])
            setData(cleanData)
        })

    }, []);

    const convertNum = (val) => {
        // thousands, millions, billions etc..
        const s = ["", "k", "m", "b", "t"];
  
        // dividing the value by 3.
        let sNum = Math.floor(("" + val).length / 3);
        console.log(sNum)

        // calculating the precised value.
        let sVal = parseFloat((sNum != 0 ? (val / Math.pow(1000, sNum)) : val).toPrecision(2));
        console.log(sVal)
        
        if (sVal % 1 != 0) {
            sVal = sVal.toFixed(2);
        }

        // appending the letter to precised val.
        return sVal + s[sNum];
    }

    const transformData = (rawData) => {
        const marketData = rawData.metrics.market_data
        console.log(marketData)

        const price_usd = marketData.price_usd.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        const pct_change = marketData.percent_change_usd_last_24_hours.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        const high_usd = marketData.ohlcv_last_24_hour.high.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        const low_usd = marketData.ohlcv_last_24_hour.low.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        const vol = convertNum(parseInt(marketData.ohlcv_last_24_hour.volume))

        let price_diff_usd = (marketData.price_usd.toFixed(2) * (marketData.percent_change_usd_last_24_hours.toFixed(2) / 100 )).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        if (!price_diff_usd.includes('-')) {
            price_diff_usd = '+' + price_diff_usd
        }

        return {
            id: rawData.id,
            name: rawData.name,
            symbol: rawData.symbol,
            tagline: rawData.profile.general.overview.tagline,
            price: price_usd,
            price_diff: price_diff_usd,
            price_change_pct_1_day: pct_change,
            high: high_usd,
            low: low_usd,
            volume: vol,
        }
    }

    return (
        <div className='flex flex-col space-y-14 lg-cols:space-y-20'>
            <CoinHeader
                name={data.name} symbol={data.symbol} tagline={data.tagline}
                price={data.price} pct_change={data.price_change_pct_1_day}
            />
            <CoinMetrics
                price_diff={data.price_diff} pct_change={data.price_change_pct_1_day}
                high={data.high} low={data.low} vol={data.volume}
            />
        </div>
    );
};

export default CoinDashboard;
