"use client";

import { useState, useEffect } from "react";

const sampleQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    correct: 0, // Index of the correct answer
  },
  {
    id: 2,
    question: "Which is the largest planet in our solar system?",
    options: ["Mars", "Earth", "Jupiter", "Saturn"],
    correct: 2,
  },
];

export default function TestPage() {
  const [timeLeft, setTimeLeft] = useState(3600); // One hour in seconds
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [questionData, setQuestionData] = useState(sampleQuestions);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time for display
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Handle option selection
  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
    // Log data (e.g., time spent and selected option) here
    console.log("Selected Option:", index);
  };

  // Navigate to the next question
  const handleQuestionNavigation = (index: number) => {
    setCurrentQuestionIndex(index);
    setSelectedOption(null); // Reset selection
  };

  return (
    <div className="flex h-screen">
      {/* Left: Question and Options */}
      <div className="flex-1 p-5">
        <div className="bg-white p-4 shadow rounded mb-4">
          <h1 className="text-lg font-bold">Question:</h1>
          <p className="text-gray-700">
            {questionData[currentQuestionIndex].question}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {questionData[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`p-3 border rounded text-left ${
                selectedOption === index
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100"
              } hover:bg-blue-100`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Right: Timer and Question Navigation */}
      <div className="w-64 bg-gray-100 p-5 border-l">
        <div className="bg-white p-4 shadow rounded mb-6 text-center">
          <h2 className="text-xl font-bold">Timer</h2>
          <p className="text-2xl font-mono">{formatTime(timeLeft)}</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-bold mb-3">Questions</h3>
          <div className="grid grid-cols-4 gap-2">
            {questionData.map((q, index) => (
              <button
                key={q.id}
                onClick={() => handleQuestionNavigation(index)}
                className={`w-10 h-10 border rounded-full ${
                  currentQuestionIndex === index
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
