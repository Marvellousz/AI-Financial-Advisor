import React, { useState } from 'react';

const questions = [
  {
    question: 'How much investing experience do you have ?',
    options: ['Very Experienced', 'Somewhat inexperienced', 'Somewhat experienced', 'Experienced', 'Very experienced'],
    answer: 1, // Index of the correct answer in the options array
  },
  // ... add 8 more questions with options and answers
  {
    question: 'In case of your investment goes down 10% after investing, what will you do?',
    options: ['Will exit and will invest in FD', 'Will hold till cost price comes and exit there', 'No worry, invested for long term', 'Average'],
    answer: 2,
  },

  {
    question: 'Your investment pattern.',
    options: ['Low risk, Low return', 'Moderate risk, Moderate return', 'High risk, High return'],
    answer: 2,
  },

  {
    question: 'When making a long-term investment, I plan to keep the money invested for... ?',
    options: ['1-2 years', '3-4 years', '5-6 years', '7-8 years', 'More than 8 years'],
    answer: 2,
  },

  {
    question: 'My current and future income sources (for example, salary, social security, pensions) are...',
    options: ['Very unstable', 'Unstable', 'Somewhat stable', 'Stable', 'Very Stable'],
    answer: 2,
  },

  {
    question: 'During market declines, I tend to sell portions of my riskier assets and invest the money in safer assets.',
    options: ['Strongly agree', 'Agree', 'Somewhat agree', 'Disagree', 'Strongly disagree'],
    answer: 2,
  },

  {
    question: 'I would invest in a mutual fund or ETF (exchanged-traded fund) based solely on a brief conversation with a friend, co-worker, or relative.',
    options: ['Strongly agree', 'Agree', 'Somewhat agree', 'Disagree', 'Strongly disagree'],
    answer: 2,
  },

  {
    question: 'If I owned a stock investment that lost about 24% in three months, I would..',
    options: ['Sell all the remaining investment', 'Sell a portion of the remaining investment', 'Hold onto the investment and sell nothing', 'Buy more of the remaining investment'],
    answer: 2,
  },

  {
    question: 'Generally, I prefer an investment with little or no ups and downs in value, and I am willing to accept the lower returns these investments may make.',
    options: ['Strongly agree', 'Agree', 'Somewhat agree', 'Disagree', 'Strongly disagree'],
    answer: 2,
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleOptionChange = (event) => {
    setSelectedAnswer(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null); // Reset selected answer for next question
  };

  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="quiz-container">
      <h2>Quiz</h2>
      {currentQuestion < questions.length && (
        <form onSubmit={handleSubmit}>
          <p>{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`option-${index}`}
                value={index}
                checked={selectedAnswer === index}
                onChange={handleOptionChange}
              />
              <label htmlFor={`option-${index}`}>{option}</label>
            </div>
          ))}
          <button type="submit">{!isLastQuestion ? 'Next Question' : 'Submit Quiz'}</button>
        </form>
      )}
      {currentQuestion === questions.length && (
        <div>
          <h2>You finished the quiz!</h2>
          <p>Your score: {score} out of {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
