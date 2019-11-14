import React from "react";
import { S3_FOLDER } from "../../../utils/constants";
import ProductLogo from "./../../ProductLogo";

const D2dLogo = props => {
  const D2dVerticalColored = `${S3_FOLDER}/products-logos/d2d_vertical_colored.svg`;
  const D2dHorizontalColored = `${S3_FOLDER}/products-logos/d2d_horizontal_colored.svg`;
  const D2dHorizontalWhite = `${S3_FOLDER}/products-logos/d2d_horizontal_white.svg`;
  const D2dVerticalWhite = `${S3_FOLDER}/products-logos/d2d_vertical_white.svg`;
  if (!props.white && props.variant == "horizontal") {
    return <ProductLogo {...props} src={D2dHorizontalColored} />;
  }

  if (props.white && props.variant == "horizontal") {
    return <ProductLogo {...props} src={D2dHorizontalWhite} />;
  }

  if (!props.white && props.variant == "vertical") {
    return <ProductLogo {...props} src={D2dVerticalColored} />;
  }

  if (props.white && props.variant == "vertical") {
    return <ProductLogo {...props} src={D2dVerticalWhite} />;
  }
};

D2dLogo.defaultProps = {
  white: false,
  variant: "horizontal",
  alt: "D2d Logo",
};

export default D2dLogo;
