import React from "react";
import D2dHorizontalColored from "../../../assets/products-logos/d2d_horizontal_colored.svg";
import D2dVerticalColored from "../../../assets/products-logos/d2d_vertical_colored.svg";
import D2dHorizontalWhite from "../../../assets/products-logos/d2d_horizontal_white.svg";
import D2dVerticalWhite from "../../../assets/products-logos/d2d_vertical_white.svg";
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
        src={D2dHorizontalColored}
        alt="D2d logo"
        className={classes.root}
      />
    );
  }

  if (props.white && props.variant == "horizontal") {
    return (
      <img
        {...props}
        src={D2dHorizontalWhite}
        alt="D2d logo"
        className={classes.root}
      />
    );
  }

  if (!props.white && props.variant == "vertical") {
    return (
      <img
        {...props}
        src={D2dVerticalColored}
        alt="D2d logo"
        className={classes.root}
      />
    );
  }

  if (props.white && props.variant == "vertical") {
    return (
      <img
        {...props}
        src={D2dVerticalWhite}
        alt="D2d logo"
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
