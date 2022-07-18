import { useState, useEffect } from "react";

const Homepage = () => {
  const [dieNumber, setDieNumber] = useState(0);
  const [playerOne, setPlayerOne] = useState({
    name: "Player 1",
    score: 0,
    wins: 0,
    losses: 0,
    active: true,
    currentNum: 0,
  });
  const [playerTwo, setPlayerTwo] = useState({
    name: "Player 2",
    score: 0,
    wins: 0,
    losses: 0,
    active: false,
    currentNum: 0,
  });

  const die = () => {
    //calculate the number of the rolled die
    const num = Math.floor(Math.random() * 6) + 1;

    //assign the num to the correct player
    if (playerOne.active) {
      setPlayerOne.currentNum = num;
    } else {
      setPlayerTwo.currentNum = num;
    }

    //toggle active prop for each player
    if (playerOne.active) {
      setPlayerTwo({ ...playerTwo, active: true });
      setPlayerOne({ ...playerOne, active: false });
    }

    if (playerTwo.active) {
      setPlayerTwo({ ...playerTwo, active: false });
      setPlayerOne({ ...playerOne, active: true });
    }
  };

  useEffect(() => {
    const compare = () => {
      if (playerOne.currentNum > playerTwo.currentNum) {
        return setPlayerOne({ ...playerOne, score: playerOne.score + 1 });
      }

      if (playerTwo.currentNum > playerOne.currentNum) {
        return setPlayerTwo({ ...playerTwo, score: playerTwo.score + 1 });
      }
    };

    compare();
  }, [playerOne.currentNum, playerTwo.currentNum]);

  return (
    <div className="homepage">
      <h1>homepage</h1>
      <div className="players">
        <div className="player-1">
          <h3>{playerOne.name}</h3>
          <p>score: {playerOne.score}</p>
          <p>wins: {playerOne.wins}</p>
          <p>losses: {playerOne.losses}</p>
          {playerOne.active ? <button onClick={die}>p1 die</button> : null}
        </div>
        <div className="player-2">
          <h3>{playerTwo.name}</h3>
          <p>score: {playerTwo.score}</p>
          <p>wins: {playerTwo.wins}</p>
          <p>losses: {playerTwo.losses}</p>
          {playerTwo.active ? <button onClick={die}>p2 die</button> : null}
        </div>
      </div>
      <div className="die-result">
        <h1>{dieNumber}</h1>
      </div>
    </div>
  );
};

export default Homepage;
