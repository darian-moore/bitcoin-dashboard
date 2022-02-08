import MetricWrapper from './MetricWrapper';

const CoinMetricHighLow = ({ low, high }) => {
    return (
        <MetricWrapper>
            <h2 className="text-sm sm:text-base lg-cols:text-lg">24h Low / 24h High</h2>
            <section className='flex space-x-2 text-xl sm:text-2xl sm-cols:text-xl lg-cols:text-3xl'>
                <div className="text-red-500 font-semibold">${low}</div>
                <div className="text-slate-500">/</div>
                <div className="text-green-500 font-semibold">${high}</div>
            </section>
        </MetricWrapper>
    );
};

export default CoinMetricHighLow;