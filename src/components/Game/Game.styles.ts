import { makeStyles } from "@material-ui/core/styles";

const useGameStyles = makeStyles(() => ({
  pageOuter: {
    display: "flex",
    width: "1200px",
    margin: "0px auto",
    flexDirection: "column",
  },
  gameArea: {
    display: "flex",
    justifyContent: "space-around"
  },
}));

export { useGameStyles };
