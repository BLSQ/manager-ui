import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  sidebarItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sidebarItemContent: props => ({
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingLeft: props.depth * theme.spacing(4),
  }),
  collapse: {
    background: "#f7f7f7",
  },
  activeColor: {
    color: theme.palette.primary.main,
  },
  activeBackground: {
    background: "#efefef",
  },
}));
