import React from "react";
import theme from "../../theme";
import { NestedAccordionMenu } from "../../index";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { jsxDecorator } from "storybook-addon-jsx";
import { muiTheme } from "storybook-addon-material-ui";
import ListIcon from "@material-ui/icons/List";
import ScheduleIcon from "@material-ui/icons/Schedule";
import SettingsIcon from "@material-ui/icons/Settings";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import InboxIcon from "@material-ui/icons/Inbox";
import { makeStyles } from "@material-ui/core/styles";

const stories = storiesOf("Nested Accordion Menu", NestedAccordionMenu);
function onClick(e, item) {}

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)
  .addDecorator(muiTheme([theme]));

const subItems = [
  {
    name: "Sub Journal one",
    Icon: InboxIcon,
  },
  {
    name: "Sub Journal two",
    Icon: InboxIcon,
  },
];
const nestedItems = [
  {
    name: "Journal",
    Icon: ListIcon,
    items: subItems,
  },
  { name: "Schedulers", Icon: ScheduleIcon, route: "project/5/schedulers" },
  { name: "General", Icon: SettingsIcon, route: "project/5/schedulers" },
  {
    name: "Org. Units",
    Icon: ShuffleIcon,
    route: "project/5/organisationunits",
  },
  { name: "Org. Unit Groups", Icon: ShuffleIcon, route: "" },
  { name: "Category Options", Icon: ShuffleIcon, route: "" },
  { name: "Categories", Icon: ShuffleIcon, route: "" },
  { name: "Category Cobos", Icon: ShuffleIcon, route: "" },
  { name: "Data Elements", Icon: ShuffleIcon, route: "" },
  { name: "Data Element Groups", Icon: ShuffleIcon, route: "" },
  { name: "Data Sets", route: "" },
];

const itemsCoreModules = [
  {
    name: "CordaidSIS to HIVDR",
    items: nestedItems,
    Icon: InboxIcon,
  },
  {
    name: "SNIS REPLICA to HIVDR",
    items: nestedItems,
    Icon: InboxIcon,
  },
  ,
  {
    name: "DRC PROJECT",
    Icon: InboxIcon,
    route: "project/5/schedulers",
  },
];
// Knobs for React props
stories.add("Default", () => <NestedAccordionMenu items={itemsCoreModules} />);
