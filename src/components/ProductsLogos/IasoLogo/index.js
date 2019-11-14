import React from "react";
import IasoHorizontalColored from "../../../assets/products-logos/iaso_horizontal_colored.svg";
import IasoVerticalColored from "../../../assets/products-logos/iaso_vertical_colored.svg";
import IasoHorizontalWhite from "../../../assets/products-logos/iaso_horizontal_white.svg";
import IasoVerticalWhite from "../../../assets/products-logos/iaso_vertical_white.svg";
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
        src={IasoHorizontalColored}
        alt="Iaso logo"
        className={classes.root}
      />
    );
  }

  if (props.white && props.variant == "horizontal") {
    return (
      <img
        {...props}
        src={IasoHorizontalWhite}
        alt="Iaso logo"
        className={classes.root}
      />
    );
  }

  if (!props.white && props.variant == "vertical") {
    return (
      <img
        {...props}
        src={IasoVerticalColored}
        alt="Iaso logo"
        className={classes.root}
      />
    );
  }

  if (props.white && props.variant == "vertical") {
    return (
      <img
        {...props}
        src={IasoVerticalWhite}
        alt="Iaso logo"
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
