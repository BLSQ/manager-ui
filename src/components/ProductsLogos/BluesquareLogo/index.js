import React from "react";
import BluesquareHorizontalColored from "../../../assets/products-logos/bluesquare_horizontal_colored.svg";
import BluesquareVerticalColored from "../../../assets/products-logos/bluesquare_vertical_colored.svg";
import BluesquareHorizontalWhite from "../../../assets/products-logos/bluesquare_horizontal_white.svg";
import BluesquareVerticalWhite from "../../../assets/products-logos/bluesquare_vertical_white.svg";
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
        src={BluesquareHorizontalColored}
        alt="Bluesquare logo"
        className={classes.root}
      />
    );
  }

  if (!!props.white && props.variant == "horizontal") {
    return (
      <img
        {...props}
        src={BluesquareHorizontalWhite}
        alt="Bluesquare logo"
        className={classes.root}
      />
    );
  }

  if (!props.white && props.variant == "vertical") {
    return (
      <img
        {...props}
        src={BluesquareVerticalColored}
        alt="Bluesquare logo"
        className={classes.root}
      />
    );
  }

  if (!!props.white && props.variant == "vertical") {
    return (
      <img
        {...props}
        src={BluesquareVerticalWhite}
        alt="Bluesquare logo"
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
