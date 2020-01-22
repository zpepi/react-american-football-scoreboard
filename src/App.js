//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [lionScore, setLionScore] = useState(17);
const [tigerScore, setTigerScore] = useState(21);

  const lionsTouchdown = e => {
    setLionScore(lionScore + 7);
  };
  const tigersTouchdown = e => {
    setTigerScore(tigerScore + 7);
  };
  const lionsFG = e => {
    setLionScore(lionScore + 3);
  };
  const tigersFG = e => {
    setTigerScore(tigerScore + 3);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            <div className="home__score">{lionScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigerScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          
          <button onClick = {lionsTouchdown} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {lionsFG} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {tigersTouchdown} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {tigersFG} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
