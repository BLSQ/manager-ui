import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import DatavizLogo from "./index";

const stories = storiesOf("Branding|Logos.Dataviz logo", DatavizLogo);
const storyStyle = {
  width: 200,
};

stories.add("Horizontal colored", () => <DatavizLogo style={storyStyle} />);
stories.add("Horizontal white", () => <DatavizLogo white style={storyStyle} />);
stories.add("Vertical colored", () => (
  <DatavizLogo variant="vertical" style={storyStyle} />
));
stories.add("Vertical white", () => (
  <DatavizLogo white variant="vertical" style={storyStyle} />
));
