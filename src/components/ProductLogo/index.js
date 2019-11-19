import React from "react";
import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";

const useStyles = makeStyles(() => ({
  root: {
    backgroundSize: "contain",
  },
}));

const ProductLogo = props => {
  const classes = useStyles();
  const { className, ...rest } = props;
  return (
    <img {...rest} className={classNames(classes.root, props.className)} />
  );
};

ProductLogo.defaultProps = {
  white: false,
  variant: "horizontal",
  alt: "Bluesquare Logo",
};

export default ProductLogo;
