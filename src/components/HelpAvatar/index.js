import React from "react";
import WomenHappy from "./WomenHappy";
import WomenSad from "./WomenSad";
import ManHappy from "./ManHappy";
import ManSad from "./ManSad";

// Original avatar builder library https://avataaars.com

const HelpAvatar = props => {
  const happy = props.variant === "happy";
  const female = props.gender === "female";
  if (happy && female) {
    return <WomenHappy {...props} />;
  }
  if (!happy && female) {
    return <WomenSad {...props} />;
  }
  if (happy && !female) {
    return <ManHappy {...props} />;
  }
  if (!happy && !female) {
    return <ManSad {...props} />;
  }
};

HelpAvatar.defaultProps = {
  gender: "female",
  variant: "happy",
};

export default HelpAvatar;
