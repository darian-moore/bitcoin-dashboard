import { useState, useEffect }  from 'react';

import {ArrowDownIcon, ArrowUpIcon} from '@heroicons/react/solid';

const PercentChangePill = ({ pct_change }) => {
    const [isPositive, setIsPositive] = useState()

    useEffect(() => {
        if (pct_change > 0) {
            setIsPositive(true)
        } else {
            setIsPositive(false)
        }
    })

    // const pct = pct_change.toString().replace('-', '')

    return (
        <section className={"flex space-x-0.5 items-baseline py-0.5 px-2 rounded-xl " + (isPositive ? 'bg-green-100': 'bg-red-100')}>
            {isPositive ?
                <ArrowUpIcon className='h-3 sm:h-4 text-green-600' />
                :
                <ArrowDownIcon className='h-3 sm:h-4 text-red-600' />
            }
            <p className={'text-sm lg-cols:text-base font-semibold ' + (isPositive ? 'text-green-600' : 'text-red-600 ')}>
                {pct_change}
            </p>
        </section>
    );
};

export default PercentChangePill;
