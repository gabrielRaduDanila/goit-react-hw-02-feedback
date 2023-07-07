import { Component } from 'react';
import FeedbackForm from './feedback-values/FeedbackForm';
import StatisticsRendes from './statistics/StatisticsRendes';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = value => {
    this.setState({
      [value]: this.state[value] + 1,
    });
  };

  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    return (
      <>
        <section className="feedback">
          <SectionTitle title={'Please leave feedback'} />
          <FeedbackForm addFeedback={this.addFeedback} />
        </section>
        <section className="statistics">
          {totalFeedback === 0 && (
            <Notification message="There is no feedback" />
          )}
          {totalFeedback !== 0 && <SectionTitle title={'Statistics'} />}
          {totalFeedback !== 0 && (
            <StatisticsRendes
              {...this.state}
              countTotalFeedback={totalFeedback}
            />
          )}
        </section>
      </>
    );
  }
}

const SectionTitle = ({ title }) => {
  return <h2 className="section-title">{title}</h2>;
};

const Notification = ({ message }) => {
  return <h3 className="no-message">{message}</h3>;
};
