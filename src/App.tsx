import React from 'react';
import './app.scss';
import TnC from './components/TnC'
// import Timer from "./components/Timer";
// import Questions from "./components/Questions";

function App() {
  const proceed = () => {

  }
  return (
    <div className="app">
      <TnC proceed={proceed}/>
    </div>
  );
}

export default App;
