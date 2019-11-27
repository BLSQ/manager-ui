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
    paddingLeft: props.depth * 10,
  }),
  collapse: {
    background: "#dcdbdc",
  },
  itemhighlighted: {
    color: "red",
  },
  itemNohighlighted: {
    color: "black",
  },
}));
