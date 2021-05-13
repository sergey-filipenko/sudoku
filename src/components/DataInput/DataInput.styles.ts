import { makeStyles } from "@material-ui/core/styles";

const useDataInputStyles = makeStyles(() => ({
  inputContainer: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  errorMsg: {
    color: "red",
  }
}));

export { useDataInputStyles };
