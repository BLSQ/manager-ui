import React from "react";
import theme from "../../theme";
import { KeyNumberBlock } from "../../index";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { jsxDecorator } from "storybook-addon-jsx";
import { muiTheme } from "storybook-addon-material-ui";

const stories = storiesOf("Key Number Block", KeyNumberBlock);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)
  .addDecorator(muiTheme([theme]));

// Knobs for React props
stories.add("Default", () => (
  <KeyNumberBlock
    text={text("Text", "My Nice kpi")}
    value={number("Number", 100)}
  />
));
