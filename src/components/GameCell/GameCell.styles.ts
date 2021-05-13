import { makeStyles } from "@material-ui/core/styles";

const useGameCellStyles = makeStyles(() => ({
  tableCell: {
    display: "flex",
    borderLeft: "1px solid black",
    borderTop: "1px solid black",
    flexDirection: "row",
    flex: "1 1 auto",
    width: "11%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
  },
  borderLeft: {
    borderLeft: "3px solid black",
  },
  borderRight: {
    borderRight: "3px solid black",
  },
  borderTop: {
    borderTop: "3px solid black",
  },
  borderBottom: {
    borderBottom: "3px solid black",
  },
  inputElement: {
    "& input": {
      textAlign: "center",
      fontSize: "16px",
    }
  },
  opacity: {
    opacity: .7,

  },
  background: {
    backgroundColor: "#e4e4e4",
  },
  inValid: {
    color: "red",
    "& input": {
      color: "red",
    }
  }
}));

export { useGameCellStyles };
