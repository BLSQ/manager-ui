import { configure } from "@storybook/react";
import { addDecorator, addParameters } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import { muiTheme } from "storybook-addon-material-ui";
import theme from "../src/theme";

addDecorator(jsxDecorator);
addDecorator(muiTheme([theme]));

configure(
  [
    require.context("../src", true, /\.stories\.mdx$/),
    require.context("../src", true, /\.stories\.js$/),
  ],
  module,
);
