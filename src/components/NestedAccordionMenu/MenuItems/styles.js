import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
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
    background: "#bdbcbb",
  },
}));
