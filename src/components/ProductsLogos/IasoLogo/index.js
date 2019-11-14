import React from "react";
import { S3_FOLDER } from "../../../utils/constants";
import ProductLogo from "../../ProductLogo";

const IasoLogo = props => {
  const IasoHorizontalColored = `${S3_FOLDER}/products-logos/iaso_horizontal_colored.svg`;
  const IasoVerticalColored = `${S3_FOLDER}/products-logos/iaso_vertical_colored.svg`;
  const IasoHorizontalWhite = `${S3_FOLDER}/products-logos/iaso_horizontal_white.svg`;
  const IasoVerticalWhite = `${S3_FOLDER}/products-logos/iaso_vertical_white.svg`;

  if (!props.white && props.variant == "horizontal") {
    return <ProductLogo {...props} src={IasoHorizontalColored} />;
  }

  if (props.white && props.variant == "horizontal") {
    return <ProductLogo {...props} src={IasoHorizontalWhite} />;
  }

  if (!props.white && props.variant == "vertical") {
    return <ProductLogo {...props} src={IasoVerticalColored} />;
  }

  if (props.white && props.variant == "vertical") {
    return <ProductLogo {...props} src={IasoVerticalWhite} />;
  }
};

IasoLogo.defaultProps = {
  white: false,
  variant: "horizontal",
  alt: "Iaso Logo",
};

export default IasoLogo;
