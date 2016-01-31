import React from 'react';


const QuestionDetail = (props) => {
  let question = props.question;

  return (
    <div className="question-detail">
      <h3 className="category">{question.category}</h3>
      <p className="question-text">{question.text}</p>
    </div>
  );
};


export default QuestionDetail;
