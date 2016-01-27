import React from 'react';


const QuestionControls = React.createClass({

  render() {
    let changeToNextQuestion = this.props.onNext;

    return (
      <div className="question-controls">
        <button type="button" className="">Help!</button>
        <button type="button" className="" onClick={changeToNextQuestion}>Next</button>
      </div>
    );
  }

});


export default QuestionControls;
