'use client'
import { useState } from 'react';

interface QuestionProps {
  question: string;
  answer: string;
}

const Questions: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const questions: QuestionProps[] = [
    { question: "How does lala work?", answer: "Answer to the first question goes here." },
    { question: "What is a charge back in lala?", answer: "Answer to the second question goes here." },
    { question: "How do I pay now with lala?", answer: "Answer to the third question goes here." },
    { question: "How secure is lala?", answer: "Answer to the fourth question goes here." },
    { question: "Is lala open to transactions?", answer: "Answer to the fifth question goes here." }
  ];

  const toggleAnswer = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="flex items-center w-full justify-center">
      <div className="w-4/5 rounded-lg items-center justify-center mt-40">
        <div className="bg-green-500 rounded-lg text-center p-4">
          <h1 className="lg:text-5xl sm:text-4xl text-3xl font-semibold">Questions</h1>
        </div>
        <style jsx>{`
          .answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-out, padding-left 0.5s ease-out, padding-bottom 0.5s ease-out;
            padding-bottom: 0;
          }

          .answer.open {
            max-height: 1000px;
            padding-bottom: 1rem;
          }
        `}</style>
        <div className="">
          {questions.map((q, index) => (
            <div key={index} className='border-b-2 border-slate-500 p-3'>
              <h2 className="text-xl p-4 cursor-pointer" onClick={() => toggleAnswer(index)}>{q.question}</h2>
              <p className={`answer ${expandedIndex === index ? 'open text-lg pl-3 transition-all' : 'text-lg pl-3'}`}>{q.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Questions;