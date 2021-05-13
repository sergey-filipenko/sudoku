import { useGameStyles } from "./Game.styles";
import DataInput from "../DataInput";
import { useState } from "react";
import { GameDataType } from "types/types";
import GameTable from "components/GameTable";

function Game() {

  const classes = useGameStyles();
  const [data, setData] = useState<GameDataType>()
  return (
    <div className={classes.pageOuter} >
      <DataInput onChange={setData} />
      {data && <GameTable data={data} />}
    </div>
  );
}

export default Game;
