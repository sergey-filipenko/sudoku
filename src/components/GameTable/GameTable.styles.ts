import { makeStyles } from "@material-ui/core/styles";

const useGameTableStyles = makeStyles(() => ({
  tableBlock: {
    display: "flex",
    width: "300px",
    height: "300px",
    margin: "0px auto",
    flexDirection: "column",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    flex: "1 1 auto",
    height: "11%"
  }
}));

export { useGameTableStyles };
