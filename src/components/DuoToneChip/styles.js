import { makeStyles } from "@material-ui/styles";

const paddingCalculator = props => {
  if (props.size === undefined) {
    if (props.variant === "outlined") {
      return 0;
    }
    return 4;
  }

  return 2;
};

export default makeStyles(() => ({
  avatar: props => ({
    backgroundColor: props.color === undefined ? "#ccc" : props.color,
    marginLeft: `${props.variant === "outlined" ? 4 : 0} !important`,
    opacity: props.variant === "outlined" ? 0.9 : 1,
    padding: paddingCalculator(props),
    borderRadius: "50%",
  }),
}));
