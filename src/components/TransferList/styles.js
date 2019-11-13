import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  listContainer: props => ({
    flex: 1,
    ...props.styles.listContainer,
  }),
  listCard: {
    border: "1px solid #ccc",
  },
  list: props => ({
    minWidth: 200,
    width: "100%",
    height: 230,
    backgroundColor: theme.palette.background.paper,
    overflowX: "auto",
    ...props.styles.list,
  }),
  button: {
    margin: theme.spacing(1, 0),
    display: "flex",
    alignItems: "center",
  },
}));
