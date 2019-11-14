import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundSize: "contain",
  },
}));

const ProductLogo = props => {
  const classes = useStyles();
  return <img {...props} className={classes.root} />;
};

ProductLogo.defaultProps = {
  white: false,
  variant: "horizontal",
  alt: "Bluesquare Logo",
};

export default ProductLogo;
