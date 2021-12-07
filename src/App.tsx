import React, { useState} from 'react';
import TnC from './components/TnC'
import Timer from "./components/Timer";
import Questions from "./components/Questions";

function App() {
  const [showTerms, setShowTerms] = useState(true)
  const [runningQuiz, setRunningQuiz] = useState(false)
  const [showTimer, setShowTimer] = useState(false)

  const proceedToQuiz = () => {
    if (runningQuiz)
      return
    setRunningQuiz(true)
    setShowTimer(true)
    setTimeout(() => setShowTerms(false), 2500)
  }

  const removeTimer = () => {
    setShowTimer(false)
  }

  return (
    <div className="app">
      {
        showTerms ?
          <TnC proceed={proceedToQuiz}/> :
          <Questions/>
      }
      {showTimer && <Timer remove={removeTimer}/>}
    </div>
  );
}

export default App;
