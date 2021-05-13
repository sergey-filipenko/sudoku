import React, { useEffect, useState } from "react";
import { Button, TextareaAutosize } from "@material-ui/core";
import { useDataInputStyles } from "./DataInput.styles";
import { GameDataType } from "types/types";

interface DataInputProps {
  onChange: (data:GameDataType) => void;
}
function DataInput({ onChange }: DataInputProps) {
  const classes = useDataInputStyles();
  const [text, setText] = useState<string>();
  const [data, setData] = useState<GameDataType | undefined>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    setData(undefined);
    setError("");
    if (text) {
      setData(undefined);
      const result:GameDataType = text?.split("\n").map((row:string) => {
        let res: Array<number | null> = [];
        for (let i = 1; i <= 9; i++) {
          const symbol = parseInt(row[i]);
          if (Number.isInteger(symbol)) res.push(symbol);
          else if (row[i] === "_") res.push(null);
        }
        if (res.length === 9) {
          return res
        } else {
          setError("Syntax error");
        }
        return [];
      });
      if (result.length === 9) {
        setData(result);
      } else {
        setError("Syntax error");
      }
    }
  }, [text]);

  const sendData = () => {
    if (data) {
      onChange(data);
    }
  }
  const parseText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value) {
      setText(e.target.value);
    }
  }
  return <div className={classes.inputContainer}>
    {error && <div className={classes.errorMsg}>{error}</div>}
    <TextareaAutosize onChange={parseText} rowsMin={9} aria-label="empty textarea" placeholder="Empty" />
    <Button disabled={!data?.length} onClick={sendData} variant="contained" color="primary">
      Set Data
    </Button>
  </div>;
}
export default DataInput;
