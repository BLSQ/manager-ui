import React from "react";
import { S3_FOLDER } from "../../../utils/constants";
import ProductLogo from "../../ProductLogo";

const HesabuLogo = props => {
  const HesabuHorizontalColored = `${S3_FOLDER}/products-logos/hesabu_horizontal_colored.svg`;
  const HesabuVerticalColored = `${S3_FOLDER}/products-logos/hesabu_vertical_colored.svg`;
  const HesabuHorizontalWhite = `${S3_FOLDER}/products-logos/hesabu_horizontal_white.svg`;
  const HesabuVerticalWhite = `${S3_FOLDER}/products-logos/hesabu_vertical_white.svg`;

  if (!props.white && props.variant == "horizontal") {
    return (
      <ProductLogo {...props} src={HesabuHorizontalColored} alt="Hesabu logo" />
    );
  }

  if (props.white && props.variant == "horizontal") {
    return (
      <ProductLogo {...props} src={HesabuHorizontalWhite} alt="Hesabu logo" />
    );
  }

  if (!props.white && props.variant == "vertical") {
    return (
      <ProductLogo {...props} src={HesabuVerticalColored} alt="Hesabu logo" />
    );
  }

  if (props.white && props.variant == "vertical") {
    return (
      <ProductLogo {...props} src={HesabuVerticalWhite} alt="Hesabu logo" />
    );
  }
};

HesabuLogo.defaultProps = {
  white: false,
  variant: "horizontal",
  alt: "Hesabu Logo",
};

export default HesabuLogo;
