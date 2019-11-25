import React, { Fragment, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  sidebarItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sidebarItemContent: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  collapse: {
    background: "#f4f1f1",
  },
}));
function MenuItem({ depthStep = 10, depth = 0, expanded, item, ...rest }) {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(true);
  const { route, name, items, Icon } = item;

  function toggleCollapse() {
    setCollapsed(prevValue => !prevValue);
  }

  function onClick(e) {
    if (Array.isArray(items)) {
      toggleCollapse();
    }
    if (onClickProp) {
      onClickProp(e, item);
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

  return (
    <Fragment>
      <ListItem
        className={classes.sidebarItem}
        onClick={onClick}
        button
        dense
        {...rest}
        to={route}
      >
        <div
          style={{ paddingLeft: depth * depthStep }}
          className={classes.sidebarItemContent}
        >
          <ListItemIcon>
            {Icon && <Icon className={classes.sidebarItemIcon} />}
          </ListItemIcon>
          <ListItemText primary={name} />
        </div>
        {expandIcon}
      </ListItem>
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
                    depthStep={depthStep}
                    item={subItem}
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
