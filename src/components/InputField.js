import { TextField, withStyles } from "@material-ui/core";

const InputField = withStyles({
  root: (props) => ({
    "& .MuiOutlinedInput-root": {
      borderColor: "#EDECF5",
      padding: "3px 3px",
    },
    "& .MuiFormHelperText-root": {
      textAlign: props.helpertextright ? "right" : "left",
    },
    minHeight: 80,
    fontSize: 13,
    lineHeight: 20 / 13,
    fontWeight: 500,
  }),
})(TextField);
export default InputField;