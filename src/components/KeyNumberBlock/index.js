import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    background: "#F5F5F5",
    display: "inline-block",
    borderRadius: 4,
  },
  subtext: {
    color: theme.palette.primary.main,
  },
}));

const KeyNumberBlock = props => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.root, props.className)}>
      <Typography variant="h4">{props.value}</Typography>
      <Typography variant="body2" className={classes.subtext}>
        {props.text}
      </Typography>
    </div>
  );
};

KeyNumberBlock.defaultProps = {
  value: 100,
  text: "My nice kpi",
};

export default KeyNumberBlock;
