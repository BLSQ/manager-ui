import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import BluesquareLogo from "./index";

const stories = storiesOf("Branding|Logos.Dataviz logo", BluesquareLogo);
const storyStyle = {
  width: 200,
};

stories.add("Horizontal colored", () => <BluesquareLogo style={storyStyle} />);
stories.add("Horizontal white", () => (
  <BluesquareLogo white style={storyStyle} />
));
stories.add("Vertical colored", () => (
  <BluesquareLogo variant="vertical" style={storyStyle} />
));
stories.add("Vertical white", () => (
  <BluesquareLogo white variant="vertical" style={storyStyle} />
));
