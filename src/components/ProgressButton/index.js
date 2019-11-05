import React from "react";
import { LinearProgress, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  progress: {
    marginTop: 0,
    position: "absolute",
    top: 0,
    width: "100%",
  },
  outlined: props => ({
    margin: theme.spacing(2),
    position: "relative",
    paddingTop: props.active ? theme.spacing(1) : 5,
  }),
}));

const ProgressButton = props => {
  const classes = useStyles();
  return (
    <Button
      color="primary"
      variant="outlined"
      className="publish-btn"
      classes={classes}
      component="a"
    >
      {props.active && (
        <LinearProgress
          variant="determinate"
          value={props.progress}
          className={classes.progress}
        />
      )}
      {props.active && props.activeText}
      {!props.active && props.inactiveText}
    </Button>
  );
};

ProgressButton.defaultProps = {
  active: false,
  completed: 0,
  activeText: "Submitting",
  inactiveText: "Submit",
};

export default ProgressButton;
