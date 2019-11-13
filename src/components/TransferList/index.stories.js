import React from "react";
import theme from "../../theme";
import { DuoToneChip } from "../../index";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { jsxDecorator } from "storybook-addon-jsx";
import { muiTheme } from "storybook-addon-material-ui";
import TransferList from ".";

const stories = storiesOf("Transfer list", DuoToneChip);

stories
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)
  .addDecorator(muiTheme([theme]));

const leftItems = [
  { id: "Dhis2Id-0", displayName: "Item 0" },
  { id: "Dhis2Id-1", displayName: "Item 1" },
  { id: "Dhis2Id-2", displayName: "Item 2" },
  { id: "Dhis2Id-3", displayName: "Item 3" },
  { id: "Dhis2Id-4", displayName: "Item 4" },
];

const rightItems = [
  { id: "Dhis2Id-5", displayName: "Item 5" },
  { id: "Dhis2Id-6", displayName: "Item 6" },
];

stories.add("Default", () => (
  <TransferList
    left={leftItems}
    right={rightItems}
    styles={{ list: { height: 400 } }}
    onChange={e => console.log(e)}
  />
));
