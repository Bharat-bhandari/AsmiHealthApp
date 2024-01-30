import React from "react";
import { useState } from "react";
import "./Assessment.css";
import { NavLink } from "react-router-dom";

const Assessment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  var Questionbank = [
    {
      Question:
        "In the last month, how often have you been upset because of something that happened unexpectedly?",
      Answers: [
        { Answer: "Never", isCorrect: true },
        { Answer: "Almost Never", isCorrect: false },
        { Answer: "Sometime", isCorrect: false },
        { Answer: "Rarely", isCorrect: false },
      ],
    },
    {
      Question:
        "In the last month, how often have you felt that you were unable to control the important things in your life?",
      Answers: [
        { Answer: "Never", isCorrect: true },
        { Answer: "Almost Never", isCorrect: false },
        { Answer: "Sometime", isCorrect: false },
        { Answer: "Rarely", isCorrect: false },
      ],
    },
    {
      Question:
        "In the last month, how often have you felt nervous and stressed?",
      Answers: [
        { Answer: "Never", isCorrect: true },
        { Answer: "Almost Never", isCorrect: false },
        { Answer: "Sometime", isCorrect: false },
        { Answer: "Rarely", isCorrect: false },
      ],
    },
    {
      Question:
        "In the last month, how often have you felt confident about your ability to handle your personal problems?",
      Answers: [
        { Answer: "Never", isCorrect: true },
        { Answer: "Almost Never", isCorrect: false },
        { Answer: "Sometime", isCorrect: false },
        { Answer: "Rarely", isCorrect: false },
      ],
    },
    {
      Question:
        "In the last month, how often have you felt that things were going your way?",
      Answers: [
        { Answer: "Never", isCorrect: true },
        { Answer: "Almost Never", isCorrect: false },
        { Answer: "Sometime", isCorrect: false },
        { Answer: "Rarely", isCorrect: false },
      ],
    },
    {
      Question:
        "In the last month, how often have you found that you could not cope with all the things that you had to do?",
      Answers: [
        { Answer: "Never", isCorrect: true },
        { Answer: "Almost Never", isCorrect: false },
        { Answer: "Sometime", isCorrect: false },
        { Answer: "Rarely", isCorrect: false },
      ],
    },
    {
      Question:
        "In the last month, how often have you been able to control irritations in your life?",
      Answers: [
        { Answer: "Never", isCorrect: true },
        { Answer: "Almost Never", isCorrect: false },
        { Answer: "Sometime", isCorrect: false },
        { Answer: "Rarely", isCorrect: false },
      ],
    },
    {
      Question:
        "In the last month, how often have you felt that you were on top of things?",
      Answers: [
        { Answer: "Never", isCorrect: true },
        { Answer: "Almost Never", isCorrect: false },
        { Answer: "Sometime", isCorrect: false },
        { Answer: "Rarely", isCorrect: false },
      ],
    },
    {
      Question:
        "In the last month, how often have you been angered because of things that happened that were outside of your control?",
      Answers: [
        { Answer: "Never", isCorrect: true },
        { Answer: "Almost Never", isCorrect: false },
        { Answer: "Sometime", isCorrect: false },
        { Answer: "Rarely", isCorrect: false },
      ],
    },
    {
      Question:
        "In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?",
      Answers: [
        { Answer: "Never", isCorrect: true },
        { Answer: "Almost Never", isCorrect: false },
        { Answer: "Sometime", isCorrect: false },
        { Answer: "Rarely", isCorrect: false },
      ],
    },
  ];

  //useState Hook
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showqns, setShowqns] = useState(true);
  const [showform, setShowform] = useState(false);

  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbank.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const formhandler = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setShowqns(false);
    setShowform(true);
  };

  const sendMail = async (event) => {
    try {
      const response = await fetch("http://localhost:4000/send-career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      // Reset input fields
    } catch (error) {
      console.error("Error sending mail:", error);
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    <div className="assessmentsec">
      {showqns && (
        <div className="assessmentblock indiblock">
          {showScore ? (
            <div className="score-section">
              <div>
                You have scored {score} out of {Questionbank.length}
              </div>

              <div className="detailblock indiblock">
                <hr />
                <div className="pt-4">
                  Please provide your details to view the result
                </div>
                <NavLink to={"/contact-us"}>
                  <button className="btn assessmentbtn">Go to Form</button>
                </NavLink>
              </div>

              {/* <button className="block btn" type="submit" onClick={formhandler}>
                Submit
              </button> */}
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>{currentQuestion + 1}</span>/{Questionbank.length}
                </div>

                <div className="question-text">
                  {Questionbank[currentQuestion].Question}
                </div>
              </div>

              <div className="answer-section">
                {Questionbank[currentQuestion].Answers.map((answer, i) => (
                  <button
                    key={i}
                    className="btn"
                    onClick={() => handleAnswerResponse(answer.isCorrect)}
                  >
                    {answer.Answer}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Assessment;
