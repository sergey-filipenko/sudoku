import { useGameTableStyles } from "./GameTable.styles";
import { useEffect, useState } from "react";
import { GameCellType, GameDataType, GameDeskType } from "types/types";
import GameCell from "components/GameCell/GameCell";
import { TABLE_SIZE } from "constants/constants";

type ValidationObjectType = {
  [id: number]: Array<{row: number, cell: number}>
}

type GameTableProps = {
  data: GameDataType;
}

function GameTable(props: GameTableProps) {
  const { data } = props;

  const [tableCells, setTableCells] = useState<GameDeskType>([]);

  useEffect(() => {
    setTableCells(data.map(row => {
      return row.map(cell => {
        return { value: cell, isValid: true, isHold: Number.isInteger(cell) };
      })
    }));
  }, [data]);

  const classes = useGameTableStyles();

  const validateRange = (grid: GameDeskType, startRow: number, startCell: number, endRow: number, endCell: number):void  => {
    const validationObject: ValidationObjectType = {};
    for (let row = startRow; row <= endRow; row++) {
      for (let cell = startCell; cell <= endCell; cell++) {
        let val: GameCellType = grid[row][cell];
        if (val && val.value) {
          if (!validationObject[val.value]) {
            validationObject[val.value] = [];
          }
          validationObject[val.value].push({row, cell});
        }
      }
    }
    Object.values(validationObject).forEach(obj => {
      if (obj.length > 1) {
        obj.forEach(entry => {
          grid[entry.row][entry.cell].isValid = false;
        })
      }
    })
  };

  const handleValueChanged = (newVal: number | null, rowId: number, cellId: number) => {
    setTableCells((cells) => {
      cells[rowId][cellId].value = newVal;
      cells.forEach(row => row.forEach(cell => {cell.isValid = true}))
      for (let rowId = 0; rowId < TABLE_SIZE; rowId++) {
        validateRange(cells, rowId, 0, rowId, TABLE_SIZE - 1);
      }
      for (let cellId = 0; cellId < TABLE_SIZE; cellId ++) {
        validateRange(cells, 0, cellId, TABLE_SIZE - 1, cellId);
      }
      for (let rowId = 0; rowId < TABLE_SIZE - 1; rowId+=3) {
        for (let cellId = 0; cellId < TABLE_SIZE - 1; cellId +=3) {
          validateRange(cells, rowId, cellId, rowId + 2, cellId + 2);
        }
      }
      return Array.from(cells);
    })
  };

  return (
    <div className={classes.tableBlock}>
      {tableCells.map((row, rowKey) =>
        <div key={`row_${rowKey}`}  className={classes.tableRow}>
          {row.map((cell, cellKey) =>
            <GameCell
              key={`row_${rowKey}_cell_${cellKey}`}
              rowKey={rowKey}
              cellKey={cellKey}
              data={cell}
              onValueChanged={handleValueChanged}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default GameTable;
