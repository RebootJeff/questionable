import React from 'react';

import QuestionDetail from './questionDetail';
import QuestionControls from './questionControls';

import masterQuestions from '../questions';
import Utils from '../utils';


const App = React.createClass({

  getInitialState() {
    let questions = Utils.shuffle(masterQuestions);

    return {
      questionIndex: 0,
      questions
    };
  },

  render() {
    let currentQuestion = this.state.questions[this.state.questionIndex];

    return (
      <div className="app">
        <QuestionDetail question={currentQuestion} />
        <QuestionControls onNext={this.changeToNextQuestion} />
      </div>
    );
  },

  changeToNextQuestion() {
    const currentIndex = this.state.questionIndex;
    const array = this.state.questions;

    this.setState({
      questionIndex: Utils.getNextIndexWithRepeat(currentIndex, array)
    });
  }

});


export default App;
