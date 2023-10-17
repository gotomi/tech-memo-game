import type { GameIcon } from "../../data/icons-data";
import style from "./index.module.css";

function Scoreboard({
  gameData,
  attemptsCounter,
}: {
  gameData: GameIcon[];
  attemptsCounter: number;
}) {
  return (
    <div className={style.scoreboard}>
      <ul>
        <li>
          Resolved:{" "}
          {gameData.filter((item) => item.state === "resolved").length / 2}
        </li>
        <li>Attempts: {attemptsCounter}</li>
      </ul>
    </div>
  );
}

export default Scoreboard;
