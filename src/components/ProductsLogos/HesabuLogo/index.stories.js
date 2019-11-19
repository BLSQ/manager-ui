import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import HesabuLogo from "./index";

const stories = storiesOf("Branding|Logos.Hesabu logo", HesabuLogo);
const storyStyle = {
  width: 200,
};

stories.add("Horizontal colored", () => <HesabuLogo style={storyStyle} />);
stories.add("Horizontal white", () => <HesabuLogo white style={storyStyle} />);
stories.add("Vertical colored", () => (
  <HesabuLogo variant="vertical" style={storyStyle} />
));
stories.add("Vertical white", () => (
  <HesabuLogo white variant="vertical" style={storyStyle} />
));
