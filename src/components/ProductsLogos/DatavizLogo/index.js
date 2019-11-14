import React from "react";
import { S3_FOLDER } from "../../../utils/constants";
import ProductLogo from "../../ProductLogo";

const DatavizLogo = props => {
  const DatavizHorizontalColored = `${S3_FOLDER}/products-logos/dataviz_horizontal_colored.svg`;
  const DatavizVerticalColored = `${S3_FOLDER}/products-logos/dataviz_vertical_colored.svg`;
  const DatavizHorizontalWhite = `${S3_FOLDER}/products-logos/dataviz_horizontal_white.svg`;
  const DatavizVerticalWhite = `${S3_FOLDER}/products-logos/dataviz_vertical_white.svg`;

  if (!props.white && props.variant == "horizontal") {
    return (
      <ProductLogo
        {...props}
        src={DatavizHorizontalColored}
        alt="Dataviz logo"
      />
    );
  }

  if (props.white && props.variant == "horizontal") {
    return (
      <ProductLogo {...props} src={DatavizHorizontalWhite} alt="Dataviz logo" />
    );
  }

  if (!props.white && props.variant == "vertical") {
    return (
      <ProductLogo {...props} src={DatavizVerticalColored} alt="Dataviz logo" />
    );
  }

  if (props.white && props.variant == "vertical") {
    return (
      <ProductLogo {...props} src={DatavizVerticalWhite} alt="Dataviz logo" />
    );
  }
};

DatavizLogo.defaultProps = {
  white: false,
  variant: "horizontal",
  alt: "Dataviz Logo",
};

export default DatavizLogo;
