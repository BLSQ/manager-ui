import React from "react";
import theme from "../../theme";
import { DuoToneChip } from "../../index";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { jsxDecorator } from "storybook-addon-jsx";
import { muiTheme } from "storybook-addon-material-ui";
import CloseIcon from "@material-ui/icons/CloseTwoTone";

const stories = storiesOf("Duo Tone Chip", DuoToneChip);

stories
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)
  .addDecorator(muiTheme([theme]));

stories.add("Default", () => (
  <div>
    <DuoToneChip label={text("Text", "Hello")} avatar={<CloseIcon />} />
    <DuoToneChip
      label={text("Text", "Hello")}
      avatar={<CloseIcon />}
      color="primary"
    />
    <DuoToneChip
      label={text("Text", "Hello")}
      avatar={<CloseIcon />}
      color="secondary"
    />
    <DuoToneChip
      variant="outlined"
      label={text("Text", "Hello")}
      avatar={<CloseIcon />}
    />
    <DuoToneChip
      variant="outlined"
      label={text("Text", "Hello")}
      avatar={<CloseIcon />}
      color="primary"
    />
    <DuoToneChip
      variant="outlined"
      label={text("Text", "Hello")}
      avatar={<CloseIcon />}
      color="secondary"
    />
    <DuoToneChip
      size="small"
      label={text("Text", "Hello")}
      avatar={<CloseIcon />}
    />
    <DuoToneChip
      size="small"
      label={text("Text", "Hello")}
      avatar={<CloseIcon />}
      color="primary"
    />
    <DuoToneChip
      size="small"
      label={text("Text", "Hello")}
      avatar={<CloseIcon />}
      color="secondary"
    />
  </div>
));
