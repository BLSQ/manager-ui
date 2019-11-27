import React, { Fragment, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import useStyles from "./styles";
function MenuItem({ depth = 0, expanded, item, currentPath, ...rest }) {
  const classes = useStyles({ depth: depth });
  const [collapsed, setCollapsed] = useState(true);
  const [highlightcolor, setHighlightcolor] = useState(false);
  const { route, name, items, Icon } = item;
  let highlightclass = "itemNohighlighted";
  function toggleCollapse() {
    setCollapsed(prevValue => !prevValue);
  }

  function onClick(e) {
    if (Array.isArray(items)) {
      toggleCollapse();
    }

    if (currentPath === route) {
      if (!highlightcolor) {
        setHighlightcolor(prevValue => !prevValue);
      }
    } else {
      setHighlightcolor(prevValue => prevValue);
    }
  }

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? (
      <ExpandLessIcon className={classes.sidebarItemExpandArrowAxpanded} />
    ) : (
      <ExpandMoreIcon className={classes.sidebarItemExpandArrow} />
    );
  }
  highlightclass = highlightcolor ? "itemhighlighted" : "itemNohighlighted";
  return (
    <Fragment>
      <div
        className={
          highlightcolor ? classes.itemhighlighted : classes.itemNohighlighted
        }
      >
        <ListItem
          className={classes.sidebarItem}
          onClick={onClick}
          button
          dense
          {...rest}
          to={route}
        >
          <div className={classes.sidebarItemContent}>
            <ListItemIcon>
              {Icon && <Icon className={classes.sidebarItemIcon} />}
            </ListItemIcon>
            <ListItemText primary={name} />
          </div>
          {expandIcon}
        </ListItem>
      </div>
      <Collapse
        className={classes.collapse}
        in={!collapsed}
        timeout="auto"
        unmountOnExit
      >
        {Array.isArray(items) ? (
          <List>
            {items &&
              items.map((subItem, index) => (
                <Fragment key={`${subItem.name}${index}`}>
                  <MenuItem
                    depth={depth + 1}
                    item={subItem}
                    currentPath={currentPath}
                  />
                </Fragment>
              ))}
          </List>
        ) : null}
      </Collapse>
    </Fragment>
  );
}

export default MenuItem;
