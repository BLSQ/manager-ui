import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import IasoLogo from "./index";

const stories = storiesOf("Branding|Logos.Iaso logo", IasoLogo);
const storyStyle = {
  width: 200,
};

stories.add("Horizontal colored", () => <IasoLogo style={storyStyle} />);
stories.add("Horizontal white", () => <IasoLogo white style={storyStyle} />);
stories.add("Vertical colored", () => (
  <IasoLogo variant="vertical" style={storyStyle} />
));
stories.add("Vertical white", () => (
  <IasoLogo white variant="vertical" style={storyStyle} />
));
