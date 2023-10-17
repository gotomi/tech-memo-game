import React from "react";
import { shuffleArray } from "../../util";
import type { GameIcon } from "../../data/icons-data";
import style from "./index.module.css";
import data from "../../data/icons-data";
import Scoreboard from "./Scoreboard";

const NUMBER_OF_PAIRS = 16;

function App() {
  React.useEffect(() => {
    const selectedData = shuffleArray(data).slice(0, NUMBER_OF_PAIRS);

    const preparedData: GameIcon[] = shuffleArray(
      selectedData.concat(selectedData)
    ).map((item) => {
      return { ...item };
    });

    setGameData(preparedData);
  }, []);

  const [gameData, setGameData] = React.useState<GameIcon[]>([]);
  const [clickBlocked, setClickBlocked] = React.useState(false);
  const [attemptsCounter, setattemptsCounter] = React.useState(0);

  async function checkPair() {
    let timeOutPromise;
    const newGameData = [...gameData];
    const marked = newGameData.filter((item) => item.state === "open");
    if (marked.length < 2) return;
    setClickBlocked(true);
    setattemptsCounter(attemptsCounter + 1);
    if (marked[0].icon === marked[1].icon) {
      marked.forEach((item) => {
        item.state = "resolved";
      });

      timeOutPromise = Promise.resolve();
      setClickBlocked(false);
    } else {
      timeOutPromise = new Promise(function (resolve, reject) {
        setTimeout(() => {
          marked.forEach((item) => {
            item.state = "hidden";
            item.marked = false;
          });
          resolve(true);
          setClickBlocked(false);
        }, 700);
      });
    }
    (await timeOutPromise) && setGameData(newGameData);
  }

  function markItem(index: number) {
    const newGameData = [...gameData];

    if (newGameData[index].marked) return;
    newGameData[index].state = "open";
    newGameData[index].marked = true;
    setGameData(newGameData);
  }
  return (
    <>
      <div className={style.wrapper}>
        {gameData.map((item, index) => {
          return (
            <div
              key={index}
              className={`${style.gridItem} ${style[item.state]}`}
              onClick={() => {
                if (clickBlocked) return;
                markItem(index);
                checkPair();
              }}
            >
              <img src={`svg-icons/${item.src}`} alt={item.icon} />
            </div>
          );
        })}
      </div>
      <Scoreboard attemptsCounter={attemptsCounter} gameData={gameData} />
    </>
  );
}

export default App;
