import React, { Fragment } from "react";
import theme from "../../theme";
import HelpAvatar from "./index";
import { storiesOf } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import { muiTheme } from "storybook-addon-material-ui";

const stories = storiesOf("Help avatar", HelpAvatar);

stories.addDecorator(jsxDecorator).addDecorator(muiTheme([theme]));

stories
  .add("Happy", () => <HelpAvatar />)
  .add("Sad", () => <HelpAvatar variant="sad" />);
