import React from "react";
import theme from "../../theme";
import { ThemeProvider } from "@material-ui/styles";
import { ProgressButton } from "../../index";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { Typography } from "@material-ui/core";
import { jsxDecorator } from "storybook-addon-jsx";
import { muiTheme } from "storybook-addon-material-ui";

const stories = storiesOf("Progress button", ProgressButton);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)
  .addDecorator(muiTheme([theme]));

// Knobs for React props
stories.add("Default", () => (
  <ProgressButton
    active={boolean("Active", false)}
    progress={number("progress", 0)}
  />
));
