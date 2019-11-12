import React, { Fragment } from "react";
import theme from "../../theme";
import { Dhis2Icon } from "../../index";
import { storiesOf } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import { muiTheme } from "storybook-addon-material-ui";

const stories = storiesOf("Dhis2Icon", Dhis2Icon);

stories.addDecorator(jsxDecorator).addDecorator(muiTheme([theme]));

stories.add("Default", () => (
  <Fragment>
    <Dhis2Icon />
    <Dhis2Icon color="primary" />
    <Dhis2Icon color="secondary" />
  </Fragment>
));
