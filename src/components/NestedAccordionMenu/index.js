import React from "react";
import List from "@material-ui/core/List";
import MenuItem from "./MenuItems";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  sidebar: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));
function Menu({ items, depth, expanded, fontsize }) {
  const classes = useStyles();
  return (
    <List className={classes.sidebar}>
      {items &&
        items.map((menuItem, index) => (
          <MenuItem
            key={`${menuItem.name}${index}`}
            depth={depth}
            expanded={expanded}
            item={menuItem}
          />
        ))}
    </List>
  );
}

export default Menu;
