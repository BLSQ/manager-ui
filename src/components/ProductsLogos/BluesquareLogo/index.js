import React from "react";
import { S3_FOLDER } from "../../../utils/constants";
import ProductLogo from "../../ProductLogo";

const BluesquareLogo = props => {
  const BluesquareHorizontalColored = `${S3_FOLDER}/products-logos/bluesquare_horizontal_colored.svg`;
  const BluesquareVerticalColored = `${S3_FOLDER}/products-logos/bluesquare_vertical_colored.svg`;
  const BluesquareHorizontalWhite = `${S3_FOLDER}/products-logos/bluesquare_horizontal_white.svg`;
  const BluesquareVerticalWhite = `${S3_FOLDER}/products-logos/bluesquare_vertical_white.svg`;

  if (!props.white && props.variant == "horizontal") {
    return <ProductLogo {...props} src={BluesquareHorizontalColored} />;
  }

  if (!!props.white && props.variant == "horizontal") {
    return <ProductLogo {...props} src={BluesquareHorizontalWhite} />;
  }

  if (!props.white && props.variant == "vertical") {
    return <ProductLogo {...props} src={BluesquareVerticalColored} />;
  }

  if (!!props.white && props.variant == "vertical") {
    return <ProductLogo {...props} src={BluesquareVerticalWhite} />;
  }

  return <p>aunirs</p>;
};

BluesquareLogo.defaultProps = {
  white: false,
  variant: "horizontal",
  alt: "Bluesquare Logo",
};

export default BluesquareLogo;
