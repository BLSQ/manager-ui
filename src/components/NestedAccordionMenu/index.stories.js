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
    route: "/sub_journal_one",
  },
  {
    name: "Sub Journal two",
    Icon: InboxIcon,
    route: "/sub_journal_one",
  },
];
const nestedItems = [
  {
    name: "Journal",
    Icon: ListIcon,
    items: subItems,
    route: "/journal",
  },
  { name: "Schedulers", Icon: ScheduleIcon, route: "/schedulers" },
  { name: "General", Icon: SettingsIcon, route: "/General" },
  {
    name: "Org. Units",
    Icon: ShuffleIcon,
    route: "/organisationunits",
  },
  { name: "Org. Unit Groups", Icon: ShuffleIcon, route: "/org_unit_groups" },
  { name: "Category Options", Icon: ShuffleIcon, route: "/category_options" },
  { name: "Categories", Icon: ShuffleIcon, route: "/categories" },
  { name: "Category Cobos", Icon: ShuffleIcon, route: "/category_combos" },
  { name: "Data Elements", Icon: ShuffleIcon, route: "/data_elements" },
  {
    name: "Data Element Groups",
    Icon: ShuffleIcon,
    route: "/data_element_groups",
  },
  { name: "Data Sets", route: "/data_sets" },
];

const itemsCoreModules = [
  {
    name: "CordaidSIS to HIVDR",
    items: nestedItems,
    Icon: InboxIcon,
    route: "project/5",
  },
  {
    name: "SNIS REPLICA to HIVDR",
    items: nestedItems,
    Icon: InboxIcon,
    route: "project/6",
  },
  ,
  {
    name: "DRC PROJECT",
    Icon: InboxIcon,
    route: "project/7",
  },
];
// Knobs for React props
stories.add("Default", () => (
  <NestedAccordionMenu
    items={itemsCoreModules}
    currentPath="project/6/journal/sub_journal_one"
  />
));
