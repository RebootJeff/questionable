import React from 'react';


const QuestionDetail = React.createClass({

  render() {
    let question = this.props.question;

    return (
      <div className="question-detail">
        <h3 className="category">{question.category}</h3>
        <p className="question-text">{question.text}</p>
      </div>
    );
  }

});


export default QuestionDetail;
