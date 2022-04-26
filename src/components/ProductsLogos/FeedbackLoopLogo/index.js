import React from "react";
import { S3_FOLDER } from "../../../utils/constants";
import ProductLogo from "./../../ProductLogo";

const FeedbackLoopLogo = props => {
  const FeedbackLoopVerticalColored = `${S3_FOLDER}/products-logos/FeedbackLoop_vertical_colored.svg`;
  const FeedbackLoopHorizontalColored = `${S3_FOLDER}/products-logos/FeedbackLoop_horizontal_colored.svg`;
  const FeedbackLoopHorizontalWhite = `${S3_FOLDER}/products-logos/FeedbackLoop_horizontal_white.svg`;
  const FeedbackLoopVerticalWhite = `${S3_FOLDER}/products-logos/FeedbackLoop_vertical_white.svg`;
  if (!props.white && props.variant == "horizontal") {
    return <ProductLogo {...props} src={FeedbackLoopHorizontalColored} />;
  }

  if (props.white && props.variant == "horizontal") {
    return <ProductLogo {...props} src={FeedbackLoopHorizontalWhite} />;
  }

  if (!props.white && props.variant == "vertical") {
    return <ProductLogo {...props} src={FeedbackLoopVerticalColored} />;
  }

  if (props.white && props.variant == "vertical") {
    return <ProductLogo {...props} src={FeedbackLoopVerticalWhite} />;
  }
};

FeedbackLoopLogo.defaultProps = {
  white: false,
  variant: "horizontal",
  alt: "FeedbackLoop Logo",
};

export default FeedbackLoopLogo;
