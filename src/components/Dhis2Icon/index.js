import React from "react";
import { SvgIcon } from "@material-ui/core";

// Original icon taken from dhis2 identity repo
// https://github.com/dhis2/dhis2-identity/blob/master/web/Icon%20only/Default/dhis2-icon-rgb-positive.svg

const Dhis2Icon = props => {
  return (
    <SvgIcon {...props}>
      <path d="M21.391,8.572l-8.469,-5.493c-0.64,-0.384 -1.441,-0.384 -2.081,0l-8.227,5.333c-0.38,0.219 -0.614,0.625 -0.614,1.063c0,0.428 0.223,0.826 0.588,1.048l8.245,5.625c0.633,0.402 1.443,0.412 2.085,0.025l8.473,-5.492c0.376,-0.217 0.609,-0.619 0.609,-1.054c0,-0.434 -0.233,-0.837 -0.609,-1.054l0,-0.001Zm-9.316,6.291c-0.114,0.049 -0.244,0.047 -0.357,-0.005l-7.883,-5.374l7.858,-5.096c0.122,-0.052 0.261,-0.052 0.383,0l8.073,5.237l-8.074,5.238Z" />
      <path d="M21.391,12.817l-0.883,-0.573l-1.438,0.928l1.078,0.699l-8.078,5.236c-0.114,0.05 -0.244,0.05 -0.357,0l-7.883,-5.374l1.024,-0.663l-1.397,-0.959l-0.843,0.547c-0.38,0.219 -0.614,0.625 -0.614,1.063c0,0.428 0.223,0.826 0.588,1.049l8.245,5.622c0.633,0.403 1.443,0.412 2.085,0.025l8.472,-5.493c0.376,-0.216 0.609,-0.619 0.609,-1.054c0,-0.434 -0.233,-0.837 -0.609,-1.053l0.001,0Z" />
    </SvgIcon>
  );
};

export default Dhis2Icon;