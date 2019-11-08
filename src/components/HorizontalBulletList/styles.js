import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    paddingLeft: 0,
    listStyleType: "none",
    "& li": {
      display: "inline",
      whiteSpace: "nowrap",
      marginRight: theme.spacing(2),
      color: "rgba(0,0,0,.36)",
    },
    "& li:after": {
      content: '"·"',
      marginLeft: theme.spacing(2),
    },
    "& li:last-child::after": {
      content: "none",
    },
  },
}));
