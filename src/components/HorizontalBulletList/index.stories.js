import React from "react";
import theme from "../../theme";
import { HorizontalBulletList } from "../../index";
import { storiesOf } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import { muiTheme } from "storybook-addon-material-ui";
import { Typography } from "@material-ui/core";

const stories = storiesOf("Horizontal bullet list", HorizontalBulletList);

stories.addDecorator(jsxDecorator).addDecorator(muiTheme([theme]));

stories.add("Default", () => (
  <HorizontalBulletList>
    <Typography component="li" variant="body2">
      Hello
    </Typography>

    <Typography component="li" variant="body2">
      Hello
    </Typography>

    <Typography component="li" variant="body2">
      Hello
    </Typography>

    <Typography component="li" variant="body2">
      Hello
    </Typography>
  </HorizontalBulletList>
));
