import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./Dashboard";
import ApexChart1 from "./components/Donut";
import Donut from "./components/Donut";

const questions = [
  {
    question: "How much investing experience do you have?",
    options: [
      "Very Experienced",
      "Somewhat inexperienced",
      "Somewhat experienced",
      "Experienced",
      "Very experienced",
    ],
  },

  {
    question:
      "In case of your investment goes down 10% after investing, what will you do?",
    options: [
      "Will exit and will invest in FD",
      "Will hold till cost price comes and exit there",
      "No worry, invested for long term",
      "Average",
    ],
  },

  {
    question: "Your investment pattern.",
    options: [
      "Low risk, Low return",
      "Moderate risk, Moderate return",
      "High risk, High return",
    ],
  },

  {
    question:
      "When making a long-term investment, I plan to keep the money invested for... ?",
    options: [
      "1-2 years",
      "3-4 years",
      "5-6 years",
      "7-8 years",
      "More than 8 years",
    ],
  },

  {
    question:
      "My current and future income sources (for example, salary, social security, pensions) are...",
    options: [
      "Very unstable",
      "Unstable",
      "Somewhat stable",
      "Stable",
      "Very Stable",
    ],
  },

  {
    question:
      "During market declines, I tend to sell portions of my riskier assets and invest the money in safer assets.",
    options: [
      "Strongly agree",
      "Agree",
      "Somewhat agree",
      "Disagree",
      "Strongly disagree",
    ],
  },

  {
    question:
      "I would invest in a mutual fund or ETF (exchanged-traded fund) based solely on a brief conversation with a friend, co-worker, or relative.",
    options: [
      "Strongly agree",
      "Agree",
      "Somewhat agree",
      "Disagree",
      "Strongly disagree",
    ],
  },

  {
    question:
      "If I owned a stock investment that lost about 24% in three months, I would..",
    options: [
      "Sell all the remaining investment",
      "Sell a portion of the remaining investment",
      "Hold onto the investment and sell nothing",
      "Buy more of the remaining investment",
    ],
  },

  {
    question:
      "Generally, I prefer an investment with little or no ups and downs in value, and I am willing to accept the lower returns these investments may make.",
    options: [
      "Strongly agree",
      "Agree",
      "Somewhat agree",
      "Disagree",
      "Strongly disagree",
    ],
  },
];

function InvestmentSurveyForm(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  var risk_score = 0;
  var diversity_score = 0;
  var stability_score = 0;

  const getQuestionByIndex = (index) => {
    return questions[index - 1] || null;
  };

  const handleOptionChange = (optionIndex) => {
    setAnswers({ ...answers, [currentQuestion + 1]: optionIndex + 1 });
    console.log("answers:", answers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
    // Form submission logic (e.g., send answers to server)
    console.log("Submitted answers:", answers);
    const calculate = Object.values(answers);
    if (calculate.length === 9) {
      risk_score =
        calculate[0] * 0.15 +
        calculate[1] * 0.1 +
        calculate[2] * 0.3 +
        calculate[4] * 0.15 +
        calculate[5] * 0.12 +
        calculate[6] * 0.05 +
        calculate[7] * 0.08;
      diversity_score =
        calculate[3] * 0.1 +
        calculate[4] * 0.08 +
        calculate[8] * 0.1 +
        2 / risk_score;
      stability_score =
        calculate[0] * 0.1 +
        calculate[1] * 0.1 +
        calculate[5] * 0.2 +
        calculate[6] * 0.15 +
        calculate[7] * 0.15 +
        calculate[4] * 0.4;
      if (
        risk_score !== null &&
        diversity_score !== null &&
        stability_score !== null
      ) {
        const finalCalculation = [risk_score, diversity_score, stability_score];
        props.setCalculate(finalCalculation);
      }
    }
  };

  const renderQuestion = () => {
    const question = getQuestionByIndex(currentQuestion + 1);
    if (!question) return null;

    return (
      <div>
        <Header />
        <div className="container mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-md">
          <div key={question.question}>
            <h3 className="text-xl font-medium mb-4">{question.question}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={option}
                    name="answer"
                    value={index + 1}
                    onChange={() => handleOptionChange(index)}
                    checked={answers[currentQuestion + 1] === index + 1}
                    className="mr-2 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  />
                  <label htmlFor={option} className="text-gray-700">
                    {option}
                  </label>
                </div>
              ))}
              <button
                type="submit"
                disabled={!answers[currentQuestion + 1]}
                className={`px-4 py-2 rounded-md text-white ${
                  !answers[currentQuestion + 1]
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                }`}
              >
                {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
              </button>
            </form>
          </div>
        </div>
        {/* {props.responseData && (<ApexChart1 values={props.responseData} />)} */}
        {currentQuestion === questions.length - 1 && (
          <Donut values={props.responseData}></Donut>
        )}
        ;
      </div>
    );
  };

  return <div>{renderQuestion()}</div>;
}

export default InvestmentSurveyForm;
