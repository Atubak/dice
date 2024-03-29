import { useState, useEffect } from "react";

const Homepage = () => {
  const [val, setVal] = useState(0);
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

  const btnHandler = () => {
    const num = Math.floor(Math.random() * 6) + 1;
    setVal(num);
  };

  useEffect(() => {
    if (playerOne.active && !playerTwo.active) {
      const newP1 = { ...playerOne, currentNum: val };
      setPlayerOne(newP1);
    }

    if (playerTwo.active && !playerOne.active) {
      const newP2 = { ...playerTwo, currentNum: val };
      setPlayerTwo(newP2);
    }

    setPlayerOne({ ...playerOne, active: !playerOne.active });
    setPlayerTwo({ ...playerTwo, active: !playerTwo.active });
  }, [val]);

  return (
    <div className="homepage">
      <h1>homepage</h1>
      <div className="players">
        <div className="player-1">
          <h3>{playerOne.name}</h3>
          <p>score: {playerOne.score}</p>
          <p>wins: {playerOne.wins}</p>
          <p>losses: {playerOne.losses}</p>
          <p>current roll: {playerOne.currentNum}</p>
          <p>active state: {String(playerOne.active)}</p>
        </div>
        <div className="player-2">
          <h3>{playerTwo.name}</h3>
          <p>losses: {playerTwo.losses}</p>
          <p>current roll: {playerTwo.currentNum}</p>
          <p>active state: {String(playerTwo.active)}</p>
        </div>
      </div>
      <div className="die-result"></div>
      <button onClick={btnHandler}>roll dice!</button>
      <h1>{val}</h1>
    </div>
  );
};

export default Homepage;
