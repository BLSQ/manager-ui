import React from "react";
import DatavizHorizontalColored from "../../../assets/products-logos/dataviz_horizontal_colored.svg";
import DatavizVerticalColored from "../../../assets/products-logos/dataviz_vertical_colored.svg";
import DatavizHorizontalWhite from "../../../assets/products-logos/dataviz_horizontal_white.svg";
import DatavizVerticalWhite from "../../../assets/products-logos/dataviz_vertical_white.svg";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundSize: "contain",
  },
}));

const ProductLogo = props => {
  const classes = useStyles();
  if (!props.white && props.variant == "horizontal") {
    return (
      <img
        {...props}
        src={DatavizHorizontalColored}
        alt="Dataviz logo"
        className={classes.root}
      />
    );
  }

  if (props.white && props.variant == "horizontal") {
    return (
      <img
        {...props}
        src={DatavizHorizontalWhite}
        alt="Dataviz logo"
        className={classes.root}
      />
    );
  }

  if (!props.white && props.variant == "vertical") {
    return (
      <img
        {...props}
        src={DatavizVerticalColored}
        alt="Dataviz logo"
        className={classes.root}
      />
    );
  }

  if (props.white && props.variant == "vertical") {
    return (
      <img
        {...props}
        src={DatavizVerticalWhite}
        alt="Dataviz logo"
        className={classes.root}
      />
    );
  }
};

ProductLogo.defaultProps = {
  white: false,
  variant: "horizontal",
};
export default ProductLogo;
