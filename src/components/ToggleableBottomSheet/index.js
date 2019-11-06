import React from "react";
import { Typography } from "@material-ui/core";
import classNames from "classnames";
import Minimize from "@material-ui/icons/Minimize";
import useStyles from "./styles";

const ToggleableBottomSheet = props => {
  const classes = useStyles();
  return (
    <div
      className={classNames(classes.root, props.className, {
        [classes.open]: props.open,
      })}
    >
      <div
        className={classes.header}
        onClick={props.open ? props.onClose : props.onOpen}
      >
        <Typography variant="body2">
          {props.title || "Selection info"}
        </Typography>
        <Minimize
          className={classNames(classes.minimize, {
            [classes.minimizeOpen]: props.open,
          })}
        />
      </div>
      <div className={classes.body}>{props.children}</div>
    </div>
  );
};

ToggleableBottomSheet.defaultProps = {
  open: false,
};

export default ToggleableBottomSheet;
