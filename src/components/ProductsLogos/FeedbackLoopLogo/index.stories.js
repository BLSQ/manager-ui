import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import FeedbackLoopLogo from "./index";

const stories = storiesOf("Branding|Logos.FeedbackLoop logo", FeedbackLoopLogo);
const storyStyle = {
  width: 200,
};

stories.add("Horizontal colored", () => <FeedbackLoopLogo style={storyStyle} />);
stories.add("Horizontal white", () => (
  <FeedbackLoopLogo white style={storyStyle} />
));
stories.add("Vertical colored", () => (
  <FeedbackLoopLogo variant="vertical" style={storyStyle} />
));
stories.add("Vertical white", () => (
  <FeedbackLoopLogo white variant="vertical" style={storyStyle} />
));
