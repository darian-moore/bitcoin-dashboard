import CoinMetric from './CoinMetric';
import CoinMetricHighLow from './CoinMetricHighLow';
import MetricContainer from './MetricContainer';

const CoinMetrics = ({ price_diff, pct_change, high, low, vol }) => {
    return (
        <div className="
                flex flex-col sm-cols:flex-row sm-cols:justify-evenly mx-12 lg-cols:mx-20
                before-sm-cols:flex-borders-bottom sm-cols:flex-borders-right sm-cols:border-b-0 bg-slate-100 rounded-lg drop-shadow-md sm:drop-shadow-xl
            "
        >
            <MetricContainer>
                <CoinMetric title='Price Change' dollarAmount={price_diff} pct_change={pct_change} />
            </MetricContainer>

            <MetricContainer>
                <CoinMetricHighLow low={low} high={high} />
            </MetricContainer>
            
            <MetricContainer>
                <CoinMetric title='Trading Volume' dollarAmount={vol} pct_change={pct_change} />
            </MetricContainer>
            
        </div>
    );
};

export default CoinMetrics;
