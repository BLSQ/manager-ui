import React from "react";
import classNames from "classnames";
import useStyles from "./styles";

const HorizontalBulletList = props => {
  const classes = useStyles();
  return (
    <ul className={classNames(classes.root, props.className)}>
      {props.children}
    </ul>
  );
};

HorizontalBulletList.defaultProps = {};

export default HorizontalBulletList;
