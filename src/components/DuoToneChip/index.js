import React from "react";
import useStyles from "./styles";
import { Chip } from "@material-ui/core";

const DuoToneChip = props => {
  return <Chip {...props} classes={useStyles(props)} />;
};

export default DuoToneChip;
