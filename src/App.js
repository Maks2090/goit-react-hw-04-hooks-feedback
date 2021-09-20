import { useState } from "react";
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Statistics from './components/Statistics/Statistics'
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";
import PropTypes from 'prop-types';


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const state = { good, neutral, bad };

  const increment = (name) => {
    switch (name) {
      case "good":
        setGood((prevState) => prevState + 1);
        break
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        break;
    }

  };

  const countTotalFeedback = (feedback) => {

    const valuesFeedback = Object.values(feedback)
    const totalFeedback = valuesFeedback.reduce((total, feedback) => {
      return (total += feedback);
    }, 0);
    return totalFeedback;

  }

  const countPositiveFeedbackPercentage = (feedback) => {
    const goodFeedback = feedback.good;
    const valuesFeedback = Object.values(feedback)
    const totalFeedback = valuesFeedback.reduce((total, feedback) => {
      return (total += feedback);
    }, 0);
    return Math.round((goodFeedback / totalFeedback) * 100);
  }
  return (
    <>

      <Section
        title="Please leave feedback"
      >
        < FeedbackOptions
          options={state}
          onLeaveFeedback={increment}
        />

      </Section>




      <Section
        title="Statistics"
      >
        {countTotalFeedback(state) === 0 ? (<Notification message="No feedback given" />) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback(state)}
            positivePercentage={countPositiveFeedbackPercentage(state)}
          />
        )}


      </Section>

    </>


  )
}



App.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
}