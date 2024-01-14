import { Component } from 'react';
import './quiz.css';

export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.questions = props.questions;
        this.state = {
            qno: 0
        };
    }

    next = () => {
        let qno = this.state.qno + 1;
        if (qno < this.questions.length) {
            this.setState({
                qno: qno,
            });
        }
    };

    previous = () => {
        let qno = this.state.qno - 1;
        if (qno >= 0) {
            this.setState({
                qno: qno,
            });
        }
    };

    quit = () => {
        alert('Are you sure you want to quit ?');
    };

    render() {
        let questions = this.questions;
        let qno = this.state.qno;
        return (
            <div className="quiz-div">
                <h1>Question</h1>
                <p className="quetion-number">{qno + 1} of {questions.length}</p>
                <p className="question">{questions[qno].question}</p>
                <div className="answers">
                    <button className="answer1 answer">{questions[qno].optionA}</button>
                    <button className="answer2 answer">{questions[qno].optionB}</button>
                    <button className="answer3 answer">{questions[qno].optionC}</button>
                    <button className="answer4 answer">{questions[qno].optionD}</button>
                </div>
                <div className="controls">
                    <button className="control previous" onClick={this.previous}>previous</button>
                    <button className="control next" onClick={this.next}>next</button>
                    <button className="control quit" onClick={this.quit}>quit</button>
                </div>
            </div>
        );
    }
}
