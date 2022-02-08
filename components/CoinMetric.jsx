import MetricWrapper from './MetricWrapper';
import PercentChangePill from './PercentChangePill';

const CoinMetric = ({ title, dollarAmount, pct_change }) => {
    return (
        <MetricWrapper>
            <h2 className="flex text-sm sm:text-base lg-cols:text-lg">{title}</h2>
            <section className="flex space-x-3 items-baseline">
                <div className="text-xl sm:text-2xl sm-cols:text-xl lg-cols:text-3xl text-violet-700 font-semibold">
                    ${dollarAmount}
                </div>
                <div className="text-slate-500 text-xs sm:text-sm pr-6">24h</div>
                <PercentChangePill pct_change={pct_change}/>
            </section>
        </MetricWrapper>
    );
};

export default CoinMetric;
