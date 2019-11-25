import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import MenuItem from "./MenuItem";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  sidebar: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));
function Menu({ items, depthStep, depth, expanded, fontsize }) {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <List>
        {items &&
          items.map((menuItem, index) => (
            <Fragment key={`${menuItem.name}${index}`}>
              <MenuItem
                depthStep={depthStep}
                depth={depth}
                expanded={expanded}
                item={menuItem}
              />
            </Fragment>
          ))}
      </List>
    </div>
  );
}

export default Menu;
