import { RiAddCircleLine, RiIndeterminateCircleLine } from "@remixicon/react";
import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="flex flex-row gap-x-4">
      <div className="flex flex-col gap-y-2">
        <p className="text-lg font-medium text-neutral-900">{question}</p>
        <p
          className={`text-neutral-600 overflow-hidden transition-max-height duration-150 ease-in-out ${showAnswer ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
        >
          {answer}
        </p>
      </div>
      <div className="flex">
        {showAnswer ? (
          <button className="self-start" onClick={toggleAnswer}>
            <RiIndeterminateCircleLine className="h-6 w-6 text-neutral-400" />
          </button>
        ) : (
          <button className="self-start" onClick={toggleAnswer}>
            <RiAddCircleLine className="h-6 w-6 text-neutral-400" />
          </button>
        )}
      </div>
    </div>
  );
}
