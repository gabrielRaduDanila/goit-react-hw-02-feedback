import { Component } from 'react';
import FeedbackForm from './feedback-values/FeedbackForm';
import StatisticsRendes from './statistics/StatisticsRendes';

export class App extends Component {
  // constructor() {
  //   super();
  // }
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = value => {
    this.setState({
      [value]: this.state[value] + 1,
    });
    //   prevState => {
    //   // Dacă ne uităm la starea transmisă funcției callback în timpul apelului acesteia,
    //   // vom obține starea curentă la momentul actualizării.
    //   console.log(prevState[value]); // va fi diferit la fiecare iterație

    //   return { [value]: prevState[value] + 1 };
    // });
  };

  render() {
    return (
      <>
        <section className="feedback">
          <SectionTitle title={'Please leave feedback'} />
          <FeedbackForm addFeedback={this.addFeedback} />
        </section>
        <section className="statistics">
          <SectionTitle title={'Statistics'} />
          <StatisticsRendes {...this.state} />
        </section>
      </>
    );
  }
}

const SectionTitle = ({ title }) => {
  return <h2 className="section-title">{title}</h2>;
};
