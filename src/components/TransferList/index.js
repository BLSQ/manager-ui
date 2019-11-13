import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import useStyles from "./styles";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { getName } from "../../utils/textHelpers";
import intersectionBy from "lodash/intersectionBy";
import differenceBy from "lodash/differenceBy";

function not(a, b) {
  return differenceBy(a, b, "id");
}

function intersection(a, b) {
  return intersectionBy(a, b, "id");
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

const TransferList = props => {
  const classes = useStyles(props);
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState(props.left);
  const [right, setRight] = React.useState(props.right);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  useEffect(() => {
    setLeft(props.left);
    setRight(props.right);
  }, [props.left, props.right]);

  const handleToggle = item => () => {
    const checkedItem = checked.find(i => i.id === item.id);

    if (!checkedItem) {
      setChecked([...checked, item]);
    } else {
      setChecked([...checked.filter(i => i.id !== item.id)]);
    }
  };

  const isChecked = item => !!checked.find(i => i.id === item.id);

  const numberOfChecked = items => intersection(checked, items).length;

  const handleToggleAll = items => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    const newRight = right.concat(leftChecked);
    setRight(newRight);
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
    props.onChange(newRight);
  };

  const handleCheckedLeft = () => {
    const newRight = not(right, rightChecked);
    setLeft(left.concat(rightChecked));
    setRight(newRight);
    setChecked(not(checked, rightChecked));
    props.onChange(newRight);
  };

  const customList = (title, items) => (
    <Card elevation={0} className={classes.listCard}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{ "aria-label": "all items selected" }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List className={classes.list} dense component="div" role="list">
        {items.map(value => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem
              key={`${value.id}-${getName(value)}`}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={isChecked(value)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={getName(value)} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item className={classes.listContainer}>
        {customList("Choices", left)}
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          size="small"
          className={classes.button}
          onClick={handleCheckedRight}
          disabled={leftChecked.length === 0}
          aria-label="move selected right"
        >
          <ChevronRight />
        </Button>
        <Button
          variant="outlined"
          size="small"
          className={classes.button}
          onClick={handleCheckedLeft}
          disabled={rightChecked.length === 0}
          aria-label="move selected left"
        >
          <ChevronLeft />
        </Button>
      </Grid>
      <Grid item className={classes.listContainer}>
        {customList("Chosen", right)}
      </Grid>
    </Grid>
  );
};

TransferList.defaultProps = {
  left: [],
  right: [],
};

export default TransferList;
