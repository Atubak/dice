import { useState, useEffect } from "react";

const Homepage = () => {
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
  const [val, setVal] = useState(0);

  const activeToggle = () => {
    //toggle active prop for each player
    // if (playerOne.active) {
    //   setPlayerTwo({ ...playerTwo, active: true });
    //   return setPlayerOne({ ...playerOne, active: false });
    // } });
    // setPlayerOne({ ...playerOne, active: !playerOne.active });
    setPlayerTwo({ ...playerTwo, active: !playerTwo.active });
  };

  const die = (e) => {
    //calculate the number of the rolled die
    const num = Math.floor(Math.random() * 6) + 1;
    setVal(num);

    if (e.target.textContent === "p1 die") {
      const newP1 = { ...playerOne, currentNum: val };
      console.log("if active", num);
      setPlayerOne(newP1);
    }

    if (e.target.textContent === "p2 die") {
      const newP2 = { ...playerTwo, currentNum: val };
      setPlayerTwo(newP2);
    }
    //assign the num to the correct player

    // if (playerOne.active) {
    //   const newP1 = { ...playerOne, currentNum: val };
    //   console.log("if active", num);
    //   setPlayerOne(newP1);
    // }
    // if (playerTwo.active) {
    //   const newP2 = { ...playerTwo, currentNum: val };
    //   setPlayerTwo(newP2);
    // }
  };

  const btnHandler = (e) => {
    die(e);
    activeToggle();
  };

  //   useEffect(() => {
  //     const compare = () => {
  //       if (playerOne.currentNum > playerTwo.currentNum) {
  //         return setPlayerOne({ ...playerOne, score: playerOne.score + 1 });
  //       }

  //       if (playerTwo.currentNum > playerOne.currentNum) {
  //         return setPlayerTwo({ ...playerTwo, score: playerTwo.score + 1 });
  //       }
  //     };

  //     compare();
  //   }, [playerOne.currentNum, playerTwo.currentNum]);
  console.log(playerOne);
  console.log(playerTwo);

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
          {/* {playerOne.active ? (
            <button onClick={btnHandler}>p1 die</button>
          ) : null} */}
          <button onClick={btnHandler}>p1 die</button>
        </div>
        <div className="player-2">
          <h3>{playerTwo.name}</h3>
          <p>score: {playerTwo.score}</p>
          <p>wins: {playerTwo.wins}</p>
          <p>losses: {playerTwo.losses}</p>
          <p>current roll: {playerTwo.currentNum}</p>
          <p>active state: {String(playerTwo.active)}</p>

          {/* {playerTwo.active ? (
            <button onClick={btnHandler}>p2 die</button>
          ) : null} */}
          <button onClick={btnHandler}>p2 die</button>
        </div>
      </div>
      <div className="die-result"></div>
    </div>
  );
};

export default Homepage;
