import React from 'react';

type Props = {
  question: string;
  answers: string[]; // Array of strings
  callback: any;
  userAnswer: any;
  questionNm: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNm,
  totalQuestions,
}) => (
  <div>
    <p className='number'>
      Question: {questionNm} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <div>
          <button disabled={userAnswer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
