import React, {useEffect, useState} from 'react';
import questionList from '../utills/questionList'
import './questions.scss'

const ABC = ["A", "B", "C", "D", "E"]

const Questions = () => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [chosenOption, setChosenOption] = useState(-1)
  const [time, setTime] = useState(15 * 60)
  useEffect(() => {
    if (time > 0)
      setTimeout(() => setTime(time - 1), 1000)
    else
      onTimesUp()
  }, [time, setTime])

  const submit = () => {
    console.log("submission requested")
  }

  const onTimesUp = () => {
    console.log("times up")
  }

  const attempt = () => {
    if (questionIndex >= questionList.length - 1)
      return
    setQuestionIndex(questionIndex + 1)
    setChosenOption(-1)
  }

  return (
    <div className="questions">
      <div className="header">
        <div className="timer">
          <span/> {(time / 60 < 10 ? "0" : "") + Math.floor(time / 60)}:{(time % 60 < 10 ? "0" : "") + time % 60}
        </div>
        <button onClick={submit}>Submit &gt;</button>
      </div>
      <div className="question">
        <div className="q-header">
          <div className="index">Question {questionIndex + 1} <span>/{questionList.length}</span></div>
          <span className="icon"/>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{width: `${(questionIndex + 1) / questionList.length * 100}%`}}/>
        </div>
        <div className="body">
          <div className="b-header">
            <div className="index">{(questionIndex + 1)} .</div>
            <div className="mark">Mark for review <span>*</span></div>
          </div>
          <div className="description">{questionList[questionIndex].question}</div>
          {
            questionList[questionIndex].options
              .map((option: string, index: number) => {
                return (
                  <div onClick={() => setChosenOption(index)}
                       className={`option ${index === chosenOption ? "chosen" : ""}`}>
                    {ABC[index]}. &nbsp; {option}
                  </div>
                )
              })
          }
          <div className="footer">
            <button onClick={attempt}>Attempt!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
