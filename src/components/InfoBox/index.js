import React from "react";
import { makeStyles } from "@material-ui/styles";
import Icon from "@material-ui/icons/InfoTwoTone";
import { Typography } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles(theme => ({
  root: {
    background: "#efefef",
    padding: theme.spacing(2),
    paddingLeft: 0,
    borderRadius: theme.spacing(2) / 2,
    marginBottom: theme.spacing(1),
    display: "flex",
  },
  icon: {
    width: 50,
    color: theme.palette.primary.main,
  },
  content: {
    flex: 1,
  },
}));

const InfoBox = props => {
  const classes = useStyles(props);
  return (
    <div className={classNames(classes.root, props.className)}>
      <Icon className={classes.icon} />
      <Typography
        variant="body2"
        component="div"
        color="primary"
        className={classes.content}
      >
        {props.children || props.text}
      </Typography>
    </div>
  );
};

export default InfoBox;
