import React, { useState } from 'react';

const questions = [
  {
    question: 'How much investing experience do you have?',
    options: ['Very Experienced', 'Somewhat inexperienced', 'Somewhat experienced', 'Experienced', 'Very experienced'],
  },

  {
    question: 'In case of your investment goes down 10% after investing, what will you do?',
    options: ['Will exit and will invest in FD', 'Will hold till cost price comes and exit there', 'No worry, invested for long term', 'Average'],
  },

  {
    question: 'Your investment pattern.',
    options: ['Low risk, Low return', 'Moderate risk, Moderate return', 'High risk, High return'],
  },

  {
    question: 'When making a long-term investment, I plan to keep the money invested for... ?',
    options: ['1-2 years', '3-4 years', '5-6 years', '7-8 years', 'More than 8 years'],
  },

  {
    question: 'My current and future income sources (for example, salary, social security, pensions) are...',
    options: ['Very unstable', 'Unstable', 'Somewhat stable', 'Stable', 'Very Stable'],
  },

  {
    question: 'During market declines, I tend to sell portions of my riskier assets and invest the money in safer assets.',
    options: ['Strongly agree', 'Agree', 'Somewhat agree', 'Disagree', 'Strongly disagree'],
  },

  {
    question: 'I would invest in a mutual fund or ETF (exchanged-traded fund) based solely on a brief conversation with a friend, co-worker, or relative.',
    options: ['Strongly agree', 'Agree', 'Somewhat agree', 'Disagree', 'Strongly disagree'],
  },

  {
    question: 'If I owned a stock investment that lost about 24% in three months, I would..',
    options: ['Sell all the remaining investment', 'Sell a portion of the remaining investment', 'Hold onto the investment and sell nothing', 'Buy more of the remaining investment'],
  },

  {
    question: 'Generally, I prefer an investment with little or no ups and downs in value, and I am willing to accept the lower returns these investments may make.',
    options: ['Strongly agree', 'Agree', 'Somewhat agree', 'Disagree', 'Strongly disagree'],
  }
];


function InvestmentSurveyForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const getQuestionByIndex = (index) => {
    return questions[index - 1] || null; // Handle potential out-of-bounds access
  };

  const handleOptionChange = (optionIndex) => {
    setAnswers({ ...answers, [currentQuestion + 1]: optionIndex + 1 }); // +1 for question indexing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      setCurrentQuestion(currentQuestion + 1);
      return;
    
    
    // Form submission logic (e.g., send answers to server)
    console.log('Submitted answers:', answers);
  };

  const renderQuestion = () => {
    const question = getQuestionByIndex(currentQuestion + 1); // +1 for question indexing
    if (!question) return null; // Handle missing question

    return (
      <div key={question.question}>
        <h3>{question.question}</h3>
        <form onSubmit={handleSubmit}>
          {question.options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={option}
                name="answer"
                value={index + 1} // +1 for option indexing
                onChange={() => handleOptionChange(index)}
                checked={answers[currentQuestion + 1] === index + 1} // +1 for question indexing
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
          <button type="submit" disabled={!answers[currentQuestion + 1]}>
            {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
          </button>
        </form>
      </div>
    );
  };

  return (
    <div>
      {renderQuestion()}
    </div>
  );
}

export default InvestmentSurveyForm;
