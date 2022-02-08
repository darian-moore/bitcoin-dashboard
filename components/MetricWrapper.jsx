const MetricWrapper = ({ children }) => {
    return (
        <section className="flex flex-col p-4 sm:p-8">
            {children}
        </section>
    );
};

export default MetricWrapper;
