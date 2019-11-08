import React from "react";
import { Typography } from "@material-ui/core";
import classNames from "classnames";
import Minimize from "@material-ui/icons/Minimize";
import useStyles from "./styles";
import { dasherize } from "../../utils/textHelpers";

const ExpandableBottomSheet = props => {
  const classes = useStyles();
  return (
    <div
      role="dialog"
      id={props.domId}
      aria-labelledby={dasherize(props.title)}
      aria-modal="true"
      className={classNames(classes.root, props.className, {
        [classes.open]: props.open,
      })}
    >
      <div
        className={classes.header}
        onClick={props.open ? props.onClose : props.onOpen}
      >
        <Typography variant="body2" id={dasherize(props.title)}>
          {props.title}
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

ExpandableBottomSheet.defaultProps = {
  open: false,
  domId: "expandable-bottom-sheet",
  title: "Selection info",
};

export default ExpandableBottomSheet;
