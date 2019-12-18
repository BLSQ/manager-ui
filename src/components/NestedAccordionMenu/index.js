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

function Menu({ items, ...rest }) {
  const classes = useStyles();
  const hasIcons = items && items.some(itm => itm.Icon);

  return (
    <List component="div" className={classes.sidebar}>
      {items &&
        items.map((menuItem, index) => (
          <MenuItem
            key={`${menuItem.name}${index}`}
            {...menuItem}
            {...rest}
            hasIconInItems={hasIcons}
          />
        ))}
    </List>
  );
}

export default Menu;
