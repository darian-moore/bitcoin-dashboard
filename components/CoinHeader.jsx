import { useState, useEffect }  from 'react';
import Image from 'next/image';

const CoinHeader = ({ name, symbol, tagline, price, pct_change }) => {
    const [isPositive, setIsPositive] = useState()

    useEffect(() => {
        if (pct_change > 0) {
            setIsPositive(true)
        } else {
            setIsPositive(false)
        }
    })

    return (
        <div className="w-full h-20 sm:h-32 p-4 sm:p-10 flex flex-row bg-slate-100">
    
            <div className='w-24 sm:w-32 h-24 sm:h-32 ml-5 sm:ml-8 mt-1 sm:mt-0 rounded-full'>
                <Image
                    loader={() => 'https://messari.io/asset-images/1e31218a-e44e-4285-820c-8282ee222035/128.png?v=2'}
                    src='bitcoin.png'
                    width={128}
                    height={128}
                />
            </div>

            <div className="flex flex-col ml-4 mt-3">
                <div className="flex items-center space-x-3">
                    <h1 className="text-2xl sm:text-4xl font-bold">{name}</h1>
                    <div className="py-0.5 px-2 text-sm sm:text-base text-violet-700 bg-violet-200 rounded">{symbol}</div>
                    <div className="text-xl sm:text-2xl text-slate-500 font-semibold">${price}</div>
                    <div className={"text-base sm:text-lg font-semibold " + (isPositive ? 'text-green-500' : 'text-red-500')}>
                        ({pct_change}%)
                    </div>
                </div>

                <p className="text-xs sm:text-base text-slate-500 font-semibold">
                    {tagline}
                </p>
            </div>
        </div>
    );
};

export default CoinHeader;
