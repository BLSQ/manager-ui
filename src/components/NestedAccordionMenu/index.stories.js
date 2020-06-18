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
import { Badge } from "@material-ui/core";

const stories = storiesOf("Nested Accordion Menu", NestedAccordionMenu);
function onClick(e, item) { }

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)
  .addDecorator(muiTheme([theme]));
function Link(props) {
  const { to, children, ...rest } = props;
  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
}
const subItems = [
  {
    name: "Sub Journal one",
    Icon: InboxIcon,
    to: "project/6/journal/sub_journal_one",
  },
  {
    name: "Sub Journal two",
    Icon: InboxIcon,
    to: "/sub_journal_one",
  },
];
const nestedItems = [
  {
    name: "Journal",
    Icon: ListIcon,
    items: subItems,
  },
  { name: "Schedulers", Icon: ScheduleIcon, to: "/schedulers" },
  { name: "General", Icon: SettingsIcon, to: "/General" },
  {
    name: "Org. Units",
    Icon: ShuffleIcon,
    to: "/organisationunits",
  },
  { name: "Org. Unit Groups", Icon: ShuffleIcon, to: "/org_unit_groups" },
  { name: "Category Options", Icon: ShuffleIcon, to: "/category_options" },
  { name: "Categories", Icon: ShuffleIcon, to: "/categories" },
  { name: "Category Cobos", Icon: ShuffleIcon, to: "/category_combos" },
  { name: "Data Elements", Icon: ShuffleIcon, to: "/data_elements" },
  {
    name: "Data Element Groups",
    Icon: ShuffleIcon,
    to: "/data_element_groups",
  },
  { name: "Data Sets", to: "/data_sets" },
];

const nestedItemsSecond = [
  { name: "Schedulers", Icon: ScheduleIcon, to: "/schedulers" },
  { name: "General", Icon: SettingsIcon, to: "/General" },
  {
    name: "Org. Units",
    Icon: ShuffleIcon,
    to: "/organisationunits",
  },
  { name: "Org. Unit Groups", Icon: ShuffleIcon, to: "/org_unit_groups" },
  { name: "Category Options", Icon: ShuffleIcon, to: "/category_options" },
  { name: "Categories", Icon: ShuffleIcon, to: "/categories" },
  { name: "Category Cobos", Icon: ShuffleIcon, to: "/category_combos" },
  { name: "Data Elements", Icon: ShuffleIcon, to: "/data_elements" },
  {
    name: "Data Element Groups",
    Icon: ShuffleIcon,
    to: "/data_element_groups",
  },
  { name: "Data Sets", to: "/data_sets" },
];

const nestedItemsSecondWithout = [
  { name: "Schedulers", to: "/schedulers" },
  { name: "General", to: "/General" },
  {
    name: "Org. Units",
    to: "/organisationunits",
  },
  { name: "Org. Unit Groups", to: "/org_unit_groups" },
  { name: "Category Options", to: "/category_options" },
  { name: "Categories", to: "/categories" },
  { name: "Category Cobos", to: "/category_combos" },
  { name: "Data Elements", to: "/data_elements" },
  {
    name: "Data Element Groups",
    to: "/data_element_groups",
  },
  { name: "Data Sets", to: "/data_sets" },
];

const itemsCoreModules = [
  {
    name: "DRC PROJECT",
    Icon: InboxIcon,
    to: "project/6/journal/sub_journal_one",
  },
  {
    name: "SNIS REPLICA to HIVDR II",
    items: nestedItemsSecond,
    Icon: InboxIcon,
  },
];

const itemsCoreModulesWithoutIcons = [
  {
    name: "DRC PROJECT",
    items: nestedItems,
    Icon: InboxIcon,
    to: "project/6/journal/sub_journal_one",
  },
  {
    name: "SNIS REPLICA to HIVDR II",
    items: nestedItemsSecondWithout,
    Icon: InboxIcon,
  },
];

const itemsCoreModulesParentHighlighted = [
  {
    name: "CordaidSIS to HIVDR",
    items: nestedItems,
    Icon: InboxIcon,
  },
  {
    name: "SNIS REPLICA to HIVDR II",
    items: nestedItemsSecond,
    Icon: InboxIcon,
  },
];

const simpleNonNestedItems = [
  {
    name: "CordaidSIS to HIVDR",
    Icon: InboxIcon,
    to: "project/6/journal/sub_journal_one",
  },
  {
    name: "SNIS REPLICA to HIVDR II",
    Icon: InboxIcon,
    to: "project/7",
  },
];

const decoratedNonNestedItems = [
  {
    name: "CordaidSIS to HIVDR",
    Icon: InboxIcon,
    to: "project/6/journal/sub_journal_one",
    decorator: e => <Badge badgeContent="aa">{e}</Badge>
  },
  {
    name: "SNIS REPLICA to HIVDR II",
    Icon: InboxIcon,
    to: "project/7",
    decorator: e => < Badge badgeContent="bb" > {e}</Badge >
  },
];

stories.add("Simple non nested", () => (
  <NestedAccordionMenu
    items={simpleNonNestedItems}
    currentPath="project/6/journal/sub_journal_one"
    link={Link}
  />
));

stories.add("Nested parent as current", () => (
  <NestedAccordionMenu
    items={itemsCoreModulesParentHighlighted}
    currentPath="project/6/journal/sub_journal_one"
    link={Link}
  />
));

stories.add("Nested child as current", () => (
  <NestedAccordionMenu
    items={itemsCoreModules}
    currentPath="project/6/journal/sub_journal_one"
    link={Link}
  />
));

stories.add("Nested child without Icons", () => (
  <NestedAccordionMenu
    items={itemsCoreModulesWithoutIcons}
    currentPath="project/6/journal/sub_journal_one"
    link={Link}
  />
));

stories.add("Decorated menu", () => (
  <NestedAccordionMenu
    items={decoratedNonNestedItems}
    currentPath="project/6/journal/sub_journal_one"
    link={Link}
  />
));
