import React from "react";
import { useGameCellStyles } from "./GameCell.styles";
import { GameCellType } from "types/types";
import { InputBase } from "@material-ui/core";
import cx from "classnames";
import { TABLE_SIZE } from "constants/constants";

type gameCellProps = {
  data: GameCellType;
  onValueChanged: (newVal: number | null, cellId: number, rowId: number) => void;
  rowKey: number;
  cellKey: number
}

function GameCell(props: gameCellProps) {
  const { data, rowKey, cellKey, onValueChanged } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      let val = parseInt(event.target.value) % 10;
      if (val && Number.isInteger(val)) {
        onValueChanged(val, rowKey, cellKey);
      }
    } else {
      onValueChanged(null, rowKey, cellKey);
    }
  };

  const classes = useGameCellStyles();

  const tableCellClassNames = cx({
    [classes.tableCell]: true,
    [classes.borderLeft]: cellKey === 0 || cellKey % 3 === 0,
    [classes.borderRight]: cellKey + 1 === TABLE_SIZE,
    [classes.borderTop]: rowKey === 0 || rowKey % 3 === 0,
    [classes.borderBottom]: rowKey + 1 === TABLE_SIZE,
    [classes.inValid]: !data.isValid,
    [classes.background]: data.isHold,
  });

  const holdValueClassName = cx({
    [classes.opacity]: true,
  });
  return (
    <div className={tableCellClassNames} >

      {data.isHold ? <div className={holdValueClassName}>{data.value}</div> : <InputBase
        onChange={handleChange}
        className={classes.inputElement}
        value={data.value || ''}
      />
      }
    </div>
  );
}

export default GameCell;
