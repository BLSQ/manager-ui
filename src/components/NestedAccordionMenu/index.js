import React from "react";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "./Menu";

export default function NestedList(props) {
  return <Menu items={props.items} depthStep={10} depth={1} fontsize={25} />;
}
