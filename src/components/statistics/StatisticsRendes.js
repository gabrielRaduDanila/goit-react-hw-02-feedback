import './StatisticsRendes.css';

const StatisticsRendes = prop => {
  const { good, neutral, bad } = prop;
  return (
    <div>
      <p className="statistic">Good: {good}</p>
      <p className="statistic">Neutral: {neutral}</p>
      <p className="statistic">Bad: {bad}</p>
    </div>
  );
};
export default StatisticsRendes;
